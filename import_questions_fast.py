#!/usr/bin/env python3
"""Fast concurrent importer for pharmacy exam questions."""
import json
import sqlite3
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

DB_PATH = os.path.join(os.path.dirname(__file__), "data.db")
MANIFEST_URL = "https://raw.githubusercontent.com/lengfeng650-star/medical-exam-question-bank-json/main/metadata/exam_files_manifest.jsonl"
BASE_URL = "https://raw.githubusercontent.com/lengfeng650-star/medical-exam-question-bank-json/main/"

# Optional GitHub proxy
PROXY_PREFIX = os.environ.get("GH_PROXY", "").rstrip("/")

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0"})


def build_url(path):
    url = BASE_URL + path
    if PROXY_PREFIX:
        return PROXY_PREFIX + "/" + url
    return url


def init_questions_table(db):
    db.execute("""
        CREATE TABLE IF NOT EXISTS questions (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            subject    TEXT NOT NULL,
            chapter    TEXT NOT NULL,
            q_index    INTEGER,
            title      TEXT NOT NULL,
            options    TEXT NOT NULL,
            answer     TEXT NOT NULL,
            analysis   TEXT,
            UNIQUE(subject, chapter, q_index)
        )
    """)
    db.execute("CREATE INDEX IF NOT EXISTS idx_questions_subject ON questions(subject)")
    db.commit()


def fetch(url, retries=3):
    for attempt in range(retries):
        try:
            r = SESSION.get(url, timeout=(10, 60))
            r.raise_for_status()
            return r.text
        except Exception as e:
            if attempt == retries - 1:
                raise
            time.sleep(2 ** attempt)


def process_file(file_info):
    url = build_url(file_info["path"])
    try:
        raw = fetch(url)
        data = json.loads(raw)
    except Exception as e:
        return (file_info["title"], 0, str(e))

    questions = data.get("questions", [])
    if not questions:
        return (file_info["title"], 0, "no questions")

    subject = file_info["subject"]
    chapter = data.get("title", file_info["title"])
    rows = []
    for q in questions:
        rows.append((
            subject,
            chapter,
            q.get("index", 0),
            q.get("title", ""),
            json.dumps(q.get("options", []), ensure_ascii=False),
            q.get("answer", ""),
            q.get("analysis", ""),
        ))
    return (file_info["title"], len(rows), rows)


def main():
    print("Fetching manifest...")
    manifest_raw = fetch(MANIFEST_URL)

    files = []
    for line in manifest_raw.strip().split("\n"):
        if not line.strip():
            continue
        try:
            d = json.loads(line)
            subj = d.get("subject", "")
            if subj in ("药学", "中药学"):
                files.append({
                    "id": d["file_id"],
                    "subject": subj,
                    "title": d["title"],
                    "path": d["public_file_path"],
                })
        except:
            continue

    print(f"Found {len(files)} question files")

    db = sqlite3.connect(DB_PATH)
    init_questions_table(db)

    # Check existing chapters to skip
    existing = set()
    try:
        for row in db.execute("SELECT DISTINCT subject, chapter FROM questions"):
            existing.add((row[0], row[1]))
    except:
        pass
    print(f"Already in DB: {len(existing)} chapters")

    todo = [f for f in files if (f["subject"], f.get("title", f["title"])) not in existing]
    print(f"Need to fetch: {len(todo)} files")

    if not todo:
        print("Nothing to import.")
        db.close()
        return

    total_inserted = 0
    total_rows = []

    with ThreadPoolExecutor(max_workers=8) as executor:
        future_to_file = {executor.submit(process_file, f): f for f in todo}
        for future in as_completed(future_to_file):
            f = future_to_file[future]
            try:
                title, count, result = future.result()
                if count > 0:
                    total_rows.extend(result)
                    total_inserted += count
                    print(f"  +{count:3d} {f['subject']} / {title}")
                elif isinstance(result, str):
                    print(f"  SKIP {f['subject']} / {title}: {result}")
                else:
                    print(f"  +0   {f['subject']} / {title}")
            except Exception as e:
                print(f"  ERR  {f['subject']} / {f['title']}: {e}")

    print(f"\nInserting {len(total_rows)} questions into DB...")
    db.executemany(
        "INSERT OR IGNORE INTO questions (subject, chapter, q_index, title, options, answer, analysis) "
        "VALUES (?, ?, ?, ?, ?, ?, ?)",
        total_rows
    )
    db.commit()

    print(f"Done! Total questions in DB:")
    for row in db.execute("SELECT subject, COUNT(*) FROM questions GROUP BY subject"):
        print(f"  {row[0]}: {row[1]}")
    db.close()


if __name__ == "__main__":
    main()

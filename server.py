import json
import sqlite3
import uuid
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory, g

app = Flask(__name__, static_folder=None)
DB_PATH = Path(__file__).parent / "data.db"
STATIC_DIR = Path(__file__).parent / "dist"


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(str(DB_PATH))
        g.db.execute("PRAGMA journal_mode=WAL")
    return g.db


@app.teardown_appcontext
def close_db(exc):
    db = g.pop("db", None)
    if db:
        db.close()


def init_db():
    with sqlite3.connect(str(DB_PATH)) as db:
        db.execute("""
            CREATE TABLE IF NOT EXISTS kv (
                user_id    TEXT NOT NULL,
                key        TEXT NOT NULL,
                value      TEXT,
                updated_at TEXT DEFAULT (datetime('now')),
                PRIMARY KEY (user_id, key)
            )
        """)
        db.commit()


@app.before_request
def ensure_uid():
    uid = request.cookies.get("uid")
    if not uid:
        uid = str(uuid.uuid4())
        g.new_uid = uid
    g.uid = uid


@app.after_request
def set_uid_cookie(response):
    uid = getattr(g, "new_uid", None)
    if uid:
        response.set_cookie(
            "uid", uid,
            max_age=365 * 24 * 3600,
            path="/",
            samesite="Lax",
        )
    return response


@app.route("/api/data", methods=["GET"])
def get_all():
    db = get_db()
    rows = db.execute(
        "SELECT key, value FROM kv WHERE user_id = ?", (g.uid,)
    ).fetchall()
    return jsonify({k: v for k, v in rows})


@app.route("/api/data/<path:key>", methods=["GET"])
def get_one(key):
    db = get_db()
    row = db.execute(
        "SELECT value FROM kv WHERE user_id = ? AND key = ?",
        (g.uid, key),
    ).fetchone()
    if row:
        return row[0], 200, {"Content-Type": "text/plain"}
    return "", 404


@app.route("/api/data/<path:key>", methods=["PUT"])
def put_one(key):
    value = request.get_data(as_text=True)
    db = get_db()
    db.execute(
        "INSERT INTO kv (user_id, key, value, updated_at) "
        "VALUES (?, ?, ?, datetime('now')) "
        "ON CONFLICT(user_id, key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at",
        (g.uid, key, value),
    )
    db.commit()
    return "", 204


@app.route("/api/data/<path:key>", methods=["DELETE"])
def delete_one(key):
    db = get_db()
    db.execute(
        "DELETE FROM kv WHERE user_id = ? AND key = ?", (g.uid, key)
    )
    db.commit()
    return "", 204


# ── Question Bank API ──

@app.route("/api/questions/subjects")
def q_subjects():
    db = get_db()
    rows = db.execute(
        "SELECT subject, COUNT(*) as cnt FROM questions GROUP BY subject ORDER BY cnt DESC"
    ).fetchall()
    return jsonify([{"subject": r[0], "count": r[1]} for r in rows])


@app.route("/api/questions/years")
def q_years():
    db = get_db()
    rows = db.execute(
        "SELECT year, COUNT(*) as cnt FROM questions GROUP BY year ORDER BY year DESC"
    ).fetchall()
    return jsonify([{"year": r[0], "count": r[1]} for r in rows])


@app.route("/api/questions/chapters")
def q_chapters():
    subject = request.args.get("subject", "")
    year = request.args.get("year", "")
    db = get_db()
    where = []
    params = []
    if subject:
        where.append("subject = ?")
        params.append(subject)
    if year:
        where.append("year = ?")
        params.append(int(year))
    clause = (" WHERE " + " AND ".join(where)) if where else ""
    rows = db.execute(
        f"SELECT chapter, COUNT(*) as cnt FROM questions{clause} GROUP BY chapter ORDER BY MIN(q_index)",
        params,
    ).fetchall()
    return jsonify([{"chapter": r[0], "count": r[1]} for r in rows])


@app.route("/api/questions")
def q_list():
    subject = request.args.get("subject", "")
    year = request.args.get("year", "")
    chapter = request.args.get("chapter", "")
    page = max(1, int(request.args.get("page", 1)))
    size = min(50, max(1, int(request.args.get("size", 20))))
    offset = (page - 1) * size

    db = get_db()
    where = []
    params = []
    if subject:
        where.append("subject = ?")
        params.append(subject)
    if year:
        where.append("year = ?")
        params.append(int(year))
    if chapter:
        where.append("chapter = ?")
        params.append(chapter)
    clause = (" WHERE " + " AND ".join(where)) if where else ""

    total = db.execute(f"SELECT COUNT(*) FROM questions{clause}", params).fetchone()[0]
    rows = db.execute(
        f"SELECT id, subject, year, chapter, q_index, title, options, answer, analysis "
        f"FROM questions{clause} ORDER BY year DESC, subject, chapter, q_index LIMIT ? OFFSET ?",
        params + [size, offset],
    ).fetchall()

    items = []
    for r in rows:
        items.append({
            "id": r[0], "subject": r[1], "year": r[2], "chapter": r[3], "index": r[4],
            "title": r[5], "options": json.loads(r[6]), "answer": r[7], "analysis": r[8],
        })
    return jsonify({"total": total, "page": page, "size": size, "items": items})


@app.route("/api/questions/random")
def q_random():
    subject = request.args.get("subject", "")
    year = request.args.get("year", "")
    count = min(50, max(1, int(request.args.get("count", 10))))
    db = get_db()
    where = []
    params = []
    if subject:
        where.append("subject = ?")
        params.append(subject)
    if year:
        where.append("year = ?")
        params.append(int(year))
    where_str = ("WHERE " + " AND ".join(where)) if where else ""
    rows = db.execute(
        f"SELECT id, subject, year, chapter, q_index, title, options, answer, analysis "
        f"FROM questions {where_str} ORDER BY RANDOM() LIMIT ?",
        params + [count],
    ).fetchall()
    items = []
    for r in rows:
        items.append({
            "id": r[0], "subject": r[1], "year": r[2], "chapter": r[3], "index": r[4],
            "title": r[5], "options": json.loads(r[6]), "answer": r[7], "analysis": r[8],
        })
    return jsonify(items)


@app.route("/quiz.html")
def serve_quiz():
    quiz_path = STATIC_DIR / "quiz.html"
    if not quiz_path.exists():
        quiz_path = Path(__file__).parent / "quiz.html"
    return send_from_directory(str(quiz_path.parent), "quiz.html")


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_static(path):
    if not path:
        path = "index.html"
    file_path = STATIC_DIR / path
    if not file_path.exists():
        path = "index.html"
    return send_from_directory(str(STATIC_DIR), path)


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=6042)

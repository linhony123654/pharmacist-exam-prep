#!/usr/bin/env python3
"""Import browser localStorage backup into SQLite kv table."""
import json
import sqlite3
import sys
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), "data.db")


def init_kv_table(db):
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


def import_backup(filepath, user_id="localuser"):
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    db = sqlite3.connect(DB_PATH)
    init_kv_table(db)

    count = 0
    for key, value in data.items():
        # Skip empty or non-string values
        if value is None:
            continue
        if not isinstance(value, str):
            value = json.dumps(value, ensure_ascii=False)
        db.execute(
            "INSERT INTO kv (user_id, key, value, updated_at) "
            "VALUES (?, ?, ?, datetime('now')) "
            "ON CONFLICT(user_id, key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at",
            (user_id, key, value),
        )
        count += 1

    db.commit()
    db.close()
    print(f"Imported {count} keys for user '{user_id}'")


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 import_localstorage.py <backup.json> [user_id]")
        print("")
        print("To export from browser console:")
        print("""
const data = {};
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
}
const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'pharmacist-backup-' + new Date().toISOString().slice(0,10) + '.json';
a.click();
""")
        sys.exit(1)

    filepath = sys.argv[1]
    user_id = sys.argv[2] if len(sys.argv) > 2 else "localuser"
    import_backup(filepath, user_id)


if __name__ == "__main__":
    main()

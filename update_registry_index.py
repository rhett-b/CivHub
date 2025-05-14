import os
import json
from datetime import datetime

PROTOCOLS_DIR = "./protocols"
OUTPUT_FILE = "registry_index.json"

def extract_metadata(filepath):
    with open(filepath, "r") as f:
        data = json.load(f)

    return {
        "protocol_id": data.get("protocol_id"),
        "title": data.get("title"),
        "summary": data.get("summary"),
        "category": data.get("category", []),
        "last_updated": data.get("last_updated", ""),
        "file_path": filepath
    }

def main():
    index = []
    for filename in os.listdir(PROTOCOLS_DIR):
        if filename.endswith(".json"):
            filepath = os.path.join(PROTOCOLS_DIR, filename)
            try:
                metadata = extract_metadata(filepath)
                index.append(metadata)
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    with open(OUTPUT_FILE, "w") as f:
        json.dump(index, f, indent=2)
    print(f"✔ registry_index.json updated with {len(index)} entries.")

if __name__ == "__main__":
    main()
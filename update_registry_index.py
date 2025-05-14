import os
import json
from datetime import datetime
from jsonschema import validate, ValidationError

PROTOCOLS_DIR = "./protocols"
SCHEMA_FILE = "./schemas/civic_protocol_v1.schema.json"
OUTPUT_FILE = "registry_index.json"

def load_schema():
    with open(SCHEMA_FILE, "r") as f:
        return json.load(f)

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
    schema = load_schema()
    index = []
    errors = []

    for filename in os.listdir(PROTOCOLS_DIR):
        if filename.endswith(".json"):
            filepath = os.path.join(PROTOCOLS_DIR, filename)
            try:
                with open(filepath, "r") as f:
                    data = json.load(f)
                    validate(instance=data, schema=schema)
                index.append(extract_metadata(filepath))
            except ValidationError as ve:
                errors.append(f"❌ {filename}: {ve.message}")
            except Exception as e:
                errors.append(f"❌ {filename}: {e}")

    if errors:
        print("\n".join(errors))
        print(f"\n❌ Registry update failed: {len(errors)} invalid file(s).")
        exit(1)

    with open(OUTPUT_FILE, "w") as f:
        json.dump(index, f, indent=2)

    print(f"✔ registry_index.json updated with {len(index)} entries.")

if __name__ == "__main__":
    main()

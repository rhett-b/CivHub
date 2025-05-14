import os
import json

PROTOCOLS_DIR = "./protocols"
DEFAULT_VERSION = "v1"

updated = 0

for filename in os.listdir(PROTOCOLS_DIR):
    if filename.endswith(".json"):
        filepath = os.path.join(PROTOCOLS_DIR, filename)

        try:
            with open(filepath, "r") as f:
                data = json.load(f)

            if "schema_version" not in data:
                data["schema_version"] = DEFAULT_VERSION
                with open(filepath, "w") as f:
                    json.dump(data, f, indent=2)
                print(f"✅ Added schema_version to: {filename}")
                updated += 1
            else:
                print(f"ℹ️ Already has schema_version: {filename}")

        except Exception as e:
            print(f"❌ Error updating {filename}: {e}")

print(f"\n🏁 Done. {updated} file(s) updated.")

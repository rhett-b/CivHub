from flask import Flask, jsonify, request
import json
import os
from generate_receipt import generate_receipt

app = Flask(__name__)

DATA_DIR = "./data"
CATALOG_PATH = os.path.join(DATA_DIR, "policy_catalog.json")
RECEIPTS_DIR = os.path.join(DATA_DIR, "receipts")
os.makedirs(RECEIPTS_DIR, exist_ok=True)

# Load the catalog once at start
with open(CATALOG_PATH, "r", encoding="utf-8") as f:
    policy_catalog = json.load(f)

# Route: Get the full catalog
@app.route("/api/catalog", methods=[GET])
def get_catalog():
    return jsonify(policy_catalog)

# Route: Generate or return an existing receipt
@app.route("/api/receipt/<policy_id>", methods=["GET"])
def get_or_generate_receipt(policy_id):
    policy = next((p for p in policy_catalog if p["policy_id"] == policy_id), None)
    if not policy:
        return jsonify({"error": "Policy not found."}), 404

    filename = policy.get("receipt_file")
    receipt_path = os.path.join(RECEIPTS_DIR, filename) if filename else None

    if policy["available"] and os.path.exists(receipt_path):
        with open(receipt_path, "r", encoding="utf-8") as f:
            return jsonify(json.load(f))

    # Otherwise, generate a new placeholder receipt
    receipt = generate_receipt(
        policy_name=policy["policy_name"],
        summary="This is a placeholder summary until real data is scraped.",
        location=policy["location"],
        category=policy["category"],
        year=2025,
        method_notes="This receipt was generated without source data, using placeholder content for CivHub demonstration.",
        disclosures=["This receipt has no underlying dataset yet."],
        sources=["https://example.com/policy-source"]
    )

    filename = f"{policy_id}.json"
    filepath = os.path.join(RECEIPTS_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(receipt, f, indent=2)

    policy["available"] = True
    policy["receipt_file"] = filename

    with open(CATALOG_PATH, "w", encoding="utf-8") as f:
        json.dump(policy_catalog, f, indent=2)

    return jsonify(receipt)

if __name__ == "__main__":
    app.run(debug=True)

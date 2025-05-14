# 🧠 Civic Protocol Registry

**CivHub’s Civic Protocol Registry** is a public, open-source reference library of civic processes—designed to make governance legible, modular, and remixable.

This is a reference implementation for open civic infrastructure: each protocol is structured in a machine-readable JSON format, with clear metadata, steps, and deployment logic that can be forked, iterated, or embedded by communities, developers, and institutions.

---

## ✨ What is a Civic Protocol?

A civic protocol is a repeatable process for democratic decision-making, participation, or administration. Examples include:

- Participatory budgeting
- Quadratic voting
- Community testimony workflows
- Public assembly procedures
- Allocation formulas
- Moderation logic for civic platforms

---

## 📁 Repo Structure

/civic-protocol-registry <br>
- /schemas ← # JSON schema for validating protocol structure <br>
    -- civic_protocol_v1.schema.json <br>
- /protocols ← # Individual civic protocol files <br>
    -- participatory_budgeting_simple_v1.json <br>
        --- … <br>
- /docs ← # Overview, contribution guides, etc. <br>
    -- README.md <br>
        --- registry_index.json ← # List of protocols + summary metadata

---

## 🔄 How to Contribute

1. Fork the repo
2. Duplicate and edit a JSON protocol file in `/protocols`
3. Ensure it follows the [`civic_protocol_v1.schema.json`](../schemas/civic_protocol_v1.schema.json)
4. Submit a pull request

You can also propose new protocol categories or features by opening an [Issue](https://github.com/YOUR_REPO/issues).

---

## 🧪 Why This Matters

We believe governance should be:
- **Legible**: People should be able to see and understand how decisions happen
- **Participatory**: Civic processes should be open to contribution and critique
- **Forkable**: Communities should be able to remix and improve their systems
- **Trustable**: Civic tools should be auditable and transparent by design

The Civic Protocol Registry is part of CivHub’s broader mission to prototype post-industrial, protocol-based governance.

---

## 🛠️ License

All protocols submitted here are released under **CC BY-SA 4.0** unless otherwise noted.

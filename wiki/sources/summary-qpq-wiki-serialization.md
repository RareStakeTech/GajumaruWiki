---
type: source
title: "Serialization (QPQ Public Wiki)"
slug: summary-qpq-wiki-serialization
source_file: raw/articles/qpq-wiki-serialization.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Chain objects encoded as binary via RLP, then optionally to text via API Encoding
  - Object pattern — [Tag, Version | Fields]
  - id() type — <<IdTag:8, PubKey:32/bytes>>
  - Tag assignments confirmed — account(1), name(2), commitment(3), contract(5), channel(6), associate_chain(7), native_token(8), entry(9)
  - Document was incomplete as of 2025-03-23
related: []
confidence: medium
---

# Serialization (QPQ Public Wiki)

Technical reference for binary serialization of Gajumaru chain objects. Marked incomplete as of 2025-03-23. Confirms object tag table (tags 10–200 covering TXs, blocks, channels, state structures).

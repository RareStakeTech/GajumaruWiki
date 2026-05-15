---
type: source
title: "API Encoding (QPQ Public Wiki)"
slug: summary-qpq-wiki-api-encoding
source_file: raw/articles/qpq-wiki-api-encoding.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - API strings follow pattern xy_ABCD — two-letter prefix indicates type and encoding (Base64 or Base58)
  - Account public keys — ak_ prefix, Base58 encoding
  - Compound data (transactions, blocks) — RLP-encoded within payload
  - Object ID tags confirmed — associate_chain=7, channel=6, contract=5, native_token=8
  - Representation problem — same data exists in multiple forms; significant developer friction
related: []
confidence: high
---

# API Encoding (QPQ Public Wiki)

Technical reference for Gajumaru's human-readable data encoding layer. Confirms object type tags including `associate_chain` (7) and `native_token` (8).

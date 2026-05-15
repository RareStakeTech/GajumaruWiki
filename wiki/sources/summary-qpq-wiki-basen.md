---
type: source
title: "BaseN — Base64 vs Base58 (QPQ Public Wiki)"
slug: summary-qpq-wiki-basen
source_file: raw/articles/qpq-wiki-basen.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Base64 — treats binary as stream of bytes; efficient general-purpose encoding
  - Base58 — treats binary as a very long integer; inefficient; excludes ambiguous chars (0,O,I,l)
  - Base58 used only for short manually-entered data (wallet addresses)
  - Leading zero bytes in Base58 mapped to leading dollar-1 characters
  - Complete Erlang implementations provided for both
related: []
confidence: high
---

# BaseN — Base64 vs Base58 (QPQ Public Wiki)

Technical reference explaining the two binary-to-text encoding schemes used in Gajumaru's API layer. Base64 for general data; Base58 for wallet addresses and short manually-entered values.

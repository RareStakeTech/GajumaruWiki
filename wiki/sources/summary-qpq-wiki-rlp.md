---
type: source
title: "RLP — Recursive-Length Prefix (QPQ Public Wiki)"
slug: summary-qpq-wiki-rlp
source_file: raw/articles/qpq-wiki-rlp.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - RLP = Ethereum Recursive-Length Prefix; serializes arbitrary-depth nested lists as bytestrings
  - First-byte prefix encodes type and length; 5 ranges cover singles/shorts/longs/lists
  - Gajumaru deviation from Ethereum RLP — single-byte values treated as binaries not integers (Erlang simplification)
  - Implementations in Erlang (vrlp.erl) and TypeScript (rlp.ts)
related: [[sophia-fate]]
confidence: high
---

# RLP — Recursive-Length Prefix (QPQ Public Wiki)

Technical reference for Gajumaru's binary serialization codec, authored by [[peter]] (Peter Harpending). RLP is used to encode chain objects before API Encoding.

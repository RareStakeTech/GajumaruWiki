---
type: source
title: "GRIDS: Gajumaru Remote Instruction Dispatch System (QPQ Public Wiki)"
slug: summary-qpq-wiki-grids
source_file: raw/articles/qpq-wiki-grids.md
author: "Craig Everett"
date_published: 2025-01-17
date_ingested: 2026-05-15
key_claims:
  - GRIDS = Gajumaru Remote Instruction Dispatch System — authored by Craig Everett
  - URL schema grids://[host]/[version]/[instruction]/[path](?a=amount&p=payload)
  - Three instruction types — spend (s), transfer (t), dead-drop (d)
  - Dead-drop enables First-Party SSO without server-side private data
  - Separation of signature context from app context is the core security principle
  - Network ID in URLs prevents replay attacks across networks
  - Version 5 "For Implementation" — created 2025-01-17, last modified 2026-05-13
related: [[grids]], [[gajumaru-product-suite]], [[craig]]
confidence: high
---

# GRIDS: Gajumaru Remote Instruction Dispatch System (QPQ Public Wiki)

Primary technical specification for [[grids]], authored by [[craig]] (Craig Everett). Version 5 "For Implementation," created 2025-01-17, last modified 2026-05-13.

This is the most authoritative source on GRIDS mechanics — a formal protocol spec, not a conceptual overview.

## What GRIDS Defines

Three methods for encoding actions in the Gajumaru ecosystem:
1. **Spend transactions** — URL encodes a spend; host = specific endpoint node
2. **Transfer transactions** — URL encodes a transfer; host = network, client resolves endpoint
3. **Dead-drop signatures** — server queues unsigned signing requests; client wallet retrieves, signs, returns

## URL Schema

```
grids://[host]/[version]/[instruction]/[path](?a=[amount]&p=[payload])
```

Example spend:
```
grids://groot.mainnet/1/s/ak_srFAGY9Dq6p8LVoPSQ8o86s6EFAqWsXHKLDvpzPFcZ8txtR6U?a=25000000000000000000&p=20250117-0001
```

## Dead-Drop Flow

1. Client: GET `https://foo.com/path`
2. Server: responds with unsigned JSON (includes randomized payload, type, public_id)
3. Client wallet: user approves → wallet signs → client POSTs JSON with `"signature"` field
4. Server: verifies signature against public_id

**SSO application:** Randomized + timestamped payloads create challenge-response authentication. No credential database needed — server holds only the public key to verify against.

## Security Principle

> "Separation of signature and app execution context is needed to prevent compromise and private key theft."

Applications must NOT integrate signing into their own execution environment. GRIDS enforces this structurally.

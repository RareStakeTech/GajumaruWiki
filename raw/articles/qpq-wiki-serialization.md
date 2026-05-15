---
type: web-article
title: "Serialization"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Serialization
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
note: "Incomplete as of 2025-03-23"
---

## Serializations Reference

Chain objects are encoded into binary using RLP according to templates documented here. Binary representations may be further encoded into plain text using API Encoding.

**Note**: As of March 23, 2025, this document is incomplete.

Objects with multiple fields follow: `[Tag, Version | Fields]`

**The `id()` type**:
```
<<IdTag:8, PubKey:32/bytes>>
```

Tags: account (1), name (2), commitment (3), contract (5), channel (6), associate_chain (7), native_token (8), entry (9).

Serializers defined as ADT interfaces: `Type:serialize(This)`.

The page includes a comprehensive table mapping tags 10-200 to object types including transactions (spend_tx, contract_create_tx), channels, names, blocks, and state structures.

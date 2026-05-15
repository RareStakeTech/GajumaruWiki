---
type: web-article
title: "API Encoding"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/API-Encoding
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## API Encoding (`xy_ABCD` strings)

API strings follow the pattern `xy_ABCD` where:
- The two-letter prefix (cb, th, ak, etc.) indicates data type and encoding scheme (Base64 or Base58)
- Fixed-length, manually-input data (public keys) = Base58
- Other data = Base64
- Encoded portion includes check bytes derived from SHA256 hashing

Account public keys use `ak_` prefix and Base58 encoding.

Compound data (transactions, blocks) are RLP-encoded within the binary payload: `[Tag, Version | Fields]`.

Known types include: key_block_hash, transaction, account_pubkey, signature, and ~30 other identifiers.

**Representation Problem**: The same data exists in multiple representations throughout the codebase with no consistent convention about which to use. Author notes significant friction for average-level developers (humorously suggests "beekeeping" as alternative).

## Object ID Tags

| Tag | Type |
|-----|------|
| 1 | account |
| 2 | name |
| 3 | commitment |
| 5 | contract |
| 6 | channel |
| 7 | associate_chain |
| 8 | native_token |
| 9 | entry |

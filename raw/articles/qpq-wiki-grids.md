---
type: web-article
title: "GRIDS: Gajumaru Remote Instruction Dispatch System v1"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/GRIDS
author: "Craig Everett"
date_created: 2025-01-17
date_modified: 2026-05-13
version: 5
status: "For Implementation"
date_downloaded: 2026-05-15
---

## GRIDS: Gajumaru Remote Instruction Dispatch System v1

**Document Details:**
- Created: 2025-01-17
- Last Modified: 2026-05-13
- Author: Craig Everett
- Version: 5 (For Implementation)

## Overview

GRIDS defines methods for encoding three basic actions within the Gajumaru ecosystem:

1. Encoding "spend" transactions in URLs where the host indicates a specific endpoint node
2. Encoding "transfer" transactions where the host indicates a network but leaves endpoint resolution to the client
3. Performing digital "dead drop" signatures by queuing signature requests on servers

## The Problem

Applications often integrate wallet features directly into their execution environments — such as games with on-chain tokens or browser-based wallet plugins — creating security vulnerabilities. "Separation of signature and app execution context is needed" to prevent compromise and private key theft.

## The Schema

The basic structure follows:

```
[grid(s)]://[host]/[version]/[instruction]/[path](?a=[amount]&p=[payload])
```

**Components:**
- **Schema**: `grids` (HTTPS) or `grid` (HTTP)
- **Host**: Interpreted by instruction type (network ID for spend, node location for transfer, service location for dead-drop)
- **Version**: Protocol version number
- **Instruction**: `s` (spend), `t` (transfer), or `d` (dead-drop)
- **Path**: Address for spends/transfers; HTTP path for dead-drops
- **Query parameters**: `a=[amount]` in pucks, `p=[payload]` URL-encoded

## SpendTX Structure

SpendTX transactions require:
- Sender ID
- Recipient ID
- Amount
- Gas price, gas limit, TTL, nonce
- Optional payload

External requirement: network ID (prevents replay attacks across networks).

### Example

```
grids://groot.mainnet/1/s/ak_srFAGY9Dq6p8LVoPSQ8o86s6EFAqWsXHKLDvpzPFcZ8txtR6U?a=25000000000000000000&p=20250117-0001
```

## Dead-Drops

Dead-drops enable flexible message signing by converting GRIDS URLs to HTTP/HTTPS:

```
grids://foo.com/1/d/path  → https://foo.com/path
grid://foo.com/1/d/path   → http://foo.com/path
```

Process:
1. Client makes GET request
2. Server responds with JSON containing unsigned data
3. Client signs and POSTs updated JSON back

### GET Response Format

```json
{
  "grids": 1,
  "chain": "gajumaru",
  "network_id": "groot.mainnet",
  "type": "tx",
  "public_id": "ak_2SLsxkPavd1oDwUgCyZkMoQJJvMkUWymg1BEK7egx5rVU8xanV",
  "payload": "Any data here"
}
```

**Type values:** `"message"`, `"binary"`, `"tx"`, or `"ack"`
- `public_id` can be an account ID or `false` (client chooses key)

### POST Response Format

Client updates with signature:

```json
{
  "grids": 1,
  "chain": "gajumaru",
  "network_id": "groot.mainnet",
  "type": "tx",
  "public_id": "ak_2SLsxkPavd1oDwUgCyZkMoQJJvMkUWymg1BEK7egx5rVU8xanV",
  "payload": "Any data here",
  "signature": "XiuCkEOHINkQN83QUxmIAfmiiRN2XflktnNMtdZDzgW0TQK/YQaurQjfL3R5eoXJvCuUZRgPpKfCvtsXbphDCQ=="
}
```

"Signing of randomized and timestamped messages can be used to implement First-Party Single Sign-On schemes without server-side private data requirements."

---
type: source
title: "The Gajumaru in Space (gajumaru.io, Apr 2026)"
slug: summary-blog-in-space
source_file: web:https://gajumaru.io/2026/04/15/the-gajumaru-in-space/
author: "Craig Everett"
date_published: 2026-04-15
date_ingested: 2026-05-15
key_claims:
  - Gajumaru's Associate Chain architecture handles cislunar latency without code modification
  - Moon: 380,000km → ~1.3 second one-way light delay, ~5 second round-trip
  - Solana depends on 300ms round-trip times — incompatible with space operations
  - Cislunar Associate Chain: extend microblock time from 3s to 10s, increase gas limit to 60M/block
  - Identical code deploys from testnet to cislunar chain without modification
  - Currency remains fungible: "a Gaju is a Gaju anywhere within the entire system"
  - Craig Everett confirmed as article author (byline: "Craig Everett | Published April 15, 2026")
related: [[associate-chains]], [[groot]], [[bitcoin-ng]], [[craig]]
confidence: high
---

# Summary: The Gajumaru in Space

Article authored by Craig Everett exploring how Gajumaru's Associate Chain architecture extends to cislunar space operations. Published April 15, 2026. Last modified April 22, 2026. **Author byline confirms Craig Everett as article author — useful for confirming writing voice in other undated/unsigned pieces.**

---

## The Latency Problem

The Moon is 380,000km away. This creates:
- ~1.3 second one-way light delay
- ~5 second round-trip

**Comparison:** Solana's protocol depends on **300ms round-trip** between nodes — making it physically incompatible with space-based operations.

## Gajumaru's Solution: Configurable Associate Chains

Standard terrestrial Groot configuration:
- Keyblock interval: **~2 minutes**
- Microblock interval: **~3 seconds**

Proposed cislunar Associate Chain configuration:
- Microblock time: **10 seconds**
- Gas limit: **60 million per block** (to maintain throughput)

These are parameter changes, not architectural changes. **The same code runs on testnet and cislunar chains without modification.**

## Key Properties

- Currency remains **globally fungible**: a Gaju on a cislunar chain is the same Gaju everywhere
- No fragmentation across environments
- No "magical, isolated" space-specific solutions required
- The modular AC structure handles topological constraints (regulatory, physical, temporal) using the same architecture

## Significance

This article:
1. Confirms Craig Everett's authorship role in QPQ's public communications
2. Demonstrates the Associate Chain architecture's scope beyond financial use cases
3. Shows PoW-based Gajumaru is viable in environments where PoS networks (requiring tight synchronisation) cannot function

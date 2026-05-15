---
type: source
title: "State Channels (QPQ Public Wiki)"
slug: summary-qpq-wiki-state-channels
source_file: raw/articles/qpq-wiki-state-channels.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - State Channels = 1-to-1 sessions anchored on-chain; advancement of Aeternity State Channels
  - Supports co-signed coin transfers, deposits/withdrawals, smart contract calls, plain messages
  - Single-channel benchmarks (M4 MacBook) — 40 contract calls/sec, 500+ transfers/sec, 3000+ messages/sec
  - 50-channel scaling — 1900 contract calls/sec, 3500 transfers/sec, 30400 messages/sec
  - Tested to 10,000 concurrent channels with stable throughput
  - State Channel Markets — hub-and-spoke model; ~15ms round-trip; immediate settlement; no mandatory fees
  - Cross-AC fund transfers via State Channel Markets using on-chain bulk collateral balancing
  - Gajumaru witnessing finality makes channels immediately usable on opening (no confirmation wait)
  - Internal transactions private — only closing state appears on-chain
  - End-to-end demos scheduled Spring/Summer 2026 (post-MainNet, pending funding)
related: [[state-channels]], [[associate-chains]], [[groot]], [[sophia-fate]]
confidence: high
---

# State Channels (QPQ Public Wiki)

Full technical description of Gajumaru State Channels, authored by [[peter]] (Peter Harpending). This is the primary source for State Channel mechanics, performance, and use cases.

See concept page: [[state-channels]]

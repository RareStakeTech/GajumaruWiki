---
type: source
title: "Gajumaru State Channels (gajumaru.io, Apr 2026)"
slug: summary-blog-gajumaru-state-channels
source_file: web:https://gajumaru.io/2026/04/12/gajumaru-state-channels/
author: "QPQ AG / Gajumaru Blockchain"
date_published: 2026-04-12
date_ingested: 2026-05-15
key_claims:
  - Single channel: 40 contract calls/sec, 500+ coin transfers/sec, 3,000+ plain messages/sec
  - 50 concurrent channels: 1,900 contract calls/sec, 3,500 coin transfers/sec, 30,400 messages/sec
  - Processing overhead for token transfers is less than 1ms per side
  - Each node handles ~1,000 concurrent channels; scaling is linear with deployed nodes
  - Channels remain open indefinitely; parties can disconnect and reconnect
  - State can be checkpointed to chain; final balance distributed on closure
  - Previous Aeternity state channel merchant demos (CoinFabrik, 2019)
  - End-to-end demos planned for spring/early summer 2026 post-mainnet
related: [[state-channels]], [[sophia-fate]], [[gajumaru-product-suite]]
confidence: high
---

# Summary: Gajumaru State Channels

Published April 12, 2026. Official gajumaru.io blog post describing State Channel capabilities, performance benchmarks, execution models, and use cases.

---

## What State Channels Enable

1-to-1 messaging sessions anchored on-chain. Support:
- Co-signed token transfers
- Deposit and withdraw token functionality
- Smart contract loading and calling
- Plain message transmission

Channels remain open indefinitely; participants can disconnect and reconnect while resuming sessions. State can be checkpointed to chain at any time. All state changes require co-signatures (immediate settlement). Dispute resolution available when parties disagree on closing state, with third-party monitoring support.

## Performance Metrics

**Single Channel:**
- 40 contract calls/second
- 500+ coin transfers/second
- 3,000+ plain messages/second
- Processing overhead: **< 1 ms per side** for token transfers

**50 Concurrent Channels:**
- 1,900 contract calls/second (47.5× improvement)
- 3,500 coin transfers/second (6.5× improvement)
- 30,400 plain messages/second (11.5× improvement)

**Node Capacity:** Each node handles ~1,000 concurrent channels. **Scaling is linear with deployed nodes.**

## Execution Models

**Peer-to-Peer:** Two users open via `ChannelCreateTx`. Enables transaction aggregation, instant finality, in-band messaging, and transaction privacy.

**Client-to-Server:** Servers listen on ports and service multiple client channels simultaneously. Applicable to: scooter rentals, casinos, retail card programs.

## Transaction Fees

No mandatory fee for transactions within a State Channel. Services may implement custom fees. Minimal overhead enables negligible or zero charges.

## Use Cases

- Instant payments (Swish / Venmo equivalent)
- Loyalty card programs
- Restaurant tabs with QR code ordering
- Micro-paywalls
- Pay-as-you-go AI interactions
- Media streaming with top-up prompts
- Social media monetary tipping

## Historical Context

Previous State Channel merchant implementations on Aeternity (2019) included demos by CoinFabrik. Gajumaru inherits and extends this lineage.

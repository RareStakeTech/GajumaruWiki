---
type: concept
title: "State Channels"
aliases: [state-channel, state-channels, channel, off-chain]
sources: [[summary-qpq-wiki-state-channels]]
related: [[groot]], [[associate-chains]], [[gajumaru-architecture]], [[sophia-fate]], [[grids]], [[aeternity]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: developer-ecosystem
cluster_role: member
---

# State Channels

State Channels are Gajumaru's off-chain transaction layer — 1-to-1 sessions anchored on-chain that enable instant, fee-free transactions without touching the chain for each operation. Built on Aeternity State Channels (existing, proven implementation) and extended by QPQ.

## What They Are

A State Channel is a persistent, encrypted session between two parties established via an on-chain `ChannelCreateTx`. Once open, the parties can exchange:
- **Co-signed coin transfers**
- **Deposits and withdrawals**
- **Smart contract calls** (loaded and executed within the channel)
- **Plain messages**

All state changes require **co-signatures** — both parties must sign every transition, enabling **immediate settlement** without mining delay. Channels remain open indefinitely; participants disconnect and reconnect at will.

## On-Chain Anchoring

Key events that touch the chain:
- `ChannelCreateTx` — opens the channel
- Periodic **checkpoints** — optional state snapshots to chain
- `ChannelCloseMutualTx` — mutual agreed closure; final balances distributed to on-chain accounts
- **Dispute resolution** — protocol logic handles unilateral close attempts; parties monitor chain for suspicious closings

With Gajumaru's witnessing-based finality, the opening transaction becomes usable **immediately upon being seen on-chain** — no confirmation wait required (Gajumaru improvement over Aeternity practice).

## Performance Benchmarks (M4 MacBook)

| Operation | Single Channel | 50 Channels | Scaling Factor |
|-----------|---------------|-------------|----------------|
| Contract calls/sec | 40 | 1,900 | 47.5× |
| Coin transfers/sec | 500+ | 3,500 | 6.5× |
| Plain messages/sec | 3,000+ | 30,400 | 11.5× |

Tested to **10,000 concurrent channels** with stable throughput. Each node handles ≥1,000 concurrent channels via JSON-RPC. Channels scale linearly with nodes as long as they avoid chain transactions.

**Fees:** No mandatory transaction fees for State Channel interactions.

## State Channel Markets

A higher-level pattern enabling multi-party coordination:

- A **Market Provider** operates a hub
- Merchants and customers connect via channels to the Market Provider
- **Atomic customer-to-merchant payments** across channels
- ~**15ms round-trip** (plus network delay); immediate settlement
- Small service fee (not required by protocol; defined by the market)

### Cross-AC Fund Transfers

State Channel Markets can bridge **Associate Chains**: the Market Provider uses on-chain mechanisms for bulk collateral balancing while off-chain channels handle high-frequency transfers. This enables immediate fund movement between Associate Chains without requiring each transfer to touch the chain.

## Privacy

Internal channel transactions **remain hidden** — only the closing state appears on-chain. This is a significant privacy property relative to public on-chain transactions where all activity is visible.

## Use Cases

| Category | Examples |
|----------|---------|
| Payments | Instant Swish/Venmo-style payments at events; transport |
| Commerce | Open tabs at restaurants/bars (QR scan, owner prevents walkout via unilateral close) |
| Loyalty | Coffee shop cards; reloadable credits |
| Content | Micro-paywalls; pay-as-you-go AI bots; media streaming |
| Social | Monetary tips instead of costless "likes" |

## Implementation Status

- Basic design support since **2019** (CoinFabrik merchant demo)
- End-to-end demos scheduled **Spring/Summer 2026** (post-MainNet, pending funding)
- Native multi-currency support for Associate Chains: planned

## Source
[[summary-qpq-wiki-state-channels]]

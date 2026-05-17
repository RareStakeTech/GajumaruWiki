---
type: synthesis
title: "Lightning Network vs Gajumaru State Channels"
sources: [[summary-video-bitcoin-proof-of-concept]], [[summary-blog-lightning-network-failed]], [[summary-blog-gajumaru-state-channels]], [[summary-blog-whale-subsidy-a2p]], [[summary-qpq-wiki-state-channels]], [[summary-nazgul-bitcoin]], [[summary-unwhitepaper]]
related: [[state-channels]], [[groot]], [[bitcoin-ng]], [[gajumaru-product-suite]]
filed_from_query: false
date: 2026-05-16
---

# Lightning Network vs Gajumaru State Channels

A structural comparison of two off-chain payment channel approaches. QPQ's analysis is direct: Lightning is an architectural patch on a broken base layer; Gajumaru State Channels are a native feature of a correctly-designed one.

## Summary Verdict

| Dimension | Lightning Network | Gajumaru State Channels |
|-----------|------------------|------------------------|
| Base layer TPS | ~3-5 TPS (Bitcoin) | >300 TPS (Groot) |
| Channel top-up | ❌ Cannot top up open channel | ✅ Supported |
| On-chain operations to rebalance | ❌ Required — swamps Bitcoin | ✅ None required |
| Multi-hop routing | ❌ Complex; non-custodial beyond normal users | ✅ No multi-hop needed (market hub model) |
| Gini index of liquidity | 0.97 (near-monopoly distribution) | Not applicable |
| Base layer knows channels exist | ❌ Bitcoin unaware of Lightning | ✅ Groot natively understands state channels |
| Channel cost for coffee | ❌ On-chain fees > purchase value | ✅ Sub-second; near-zero fee |
| Custodial risk | ❌ Custodial Lightning = trust node operator | ✅ Non-custodial; keys stay with user |
| Launch year | 2018 | 2024 (Groot genesis) |
| Current TPS (network total) | ~3 TPS (despite years of investment) | 500,000+ transfers/sec (per single node, 1000 channels) |

---

## The Fundamental Architectural Difference

Lightning is a **layer 2 workaround** for Bitcoin's block-size/throughput limitation. Bitcoin's base layer processes ~3-5 TPS with 10-minute block times. Lightning routes payments through a network of funded channels to avoid on-chain settlement — but every time a channel needs to be opened, closed, or rebalanced, it requires Bitcoin on-chain operations. The layer 2 depends on a broken layer 1.

Gajumaru State Channels are a **native feature** of a layer 1 that was designed to support them. Groot's >300 TPS at 3-second microblocks means the base layer is already fast enough for coffee payments without any layer 2. State Channels are reserved for genuinely sub-second, high-frequency use cases — mass transit, AI inference billing, machine-to-machine micropayments — where even 3 seconds is too slow.

> "If Lightning was everything its happiest proponents make it out to be, the question isn't when is it going to take off — it's why hasn't it already?" — Craig Everett, 2026

Source: [[summary-video-bitcoin-proof-of-concept]]

---

## Lightning's Structural Failures

### 1. The Glass Cannon Problem
Lightning requires liquidity to be pre-committed in channels. If you want to send £100, a channel must hold at least £100 on your side. Channels cannot be topped up — if you run out, you must close and reopen with two full Bitcoin on-chain transactions. At Bitcoin's throughput ceiling, channel rebalancing at scale would swamp the entire Bitcoin network.

QPQ calls this the "glass cannon" problem: Lightning nodes look powerful but are structurally fragile under load.

### 2. The "Dangerous Just"
"Just use Lightning" is QPQ's candidate for the most misleading simplification in Bitcoin. It hides:
- Multi-hop routing complexity (non-custodial Lightning requires active channel management beyond ordinary users)
- Liquidity rebalancing requirements
- The custodial fallback (custodial Lightning wallets = trust the node operator, no regulatory oversight = "just use the bank")

### 3. Payment Success Rate by Amount (Lightning)

| Payment Amount | Success Rate |
|---------------|-------------|
| $0.05 | 99% |
| $10 | 90% |
| $200 | 50% |
| $1,000 | 25% |
| $10,000 | 5% |

Source: Abedesselam et al. paper cited in [[summary-blog-lightning-network-failed]]

Lightning demos are always micropayments. This is "for a good reason" — it barely works above coffee price.

### 4. Gini Index 0.97
Lightning's liquidity distribution has a Gini coefficient of 0.97 — near-absolute monopoly. A handful of large nodes control routing. This makes fair-price micropayments structurally impossible; the dominant nodes can extract routing fees across the network.

### 5. The BOLT Protocol Is the Name, Not the Architecture
Lightning uses the BOLT protocol specification. Gajumaru borrowed BOLT's *names* (ChannelCreateTx, ChannelCloseMutualTx, etc.) as a naming template — recognising that Bitcoin had at least established useful vocabulary. It did not borrow the on-chain limitations that make Lightning fragile.

The key difference: **Bitcoin's base layer has no native knowledge of Lightning.** Groot's base layer natively understands state channels — opening a channel is a first-class Groot transaction type, not a hack layered on top.

---

## Gajumaru State Channel Advantages

### Native Base Layer Integration
When a state channel is opened on Gajumaru, Groot knows about it. Groot's witnessing-based finality means the channel opening transaction becomes usable *immediately* on confirmation — no additional wait. On Bitcoin, Lightning funding transactions must wait for confirmations before the channel is safe to use.

### Channel Top-Up
Gajumaru state channels support deposits into an open channel. No close-and-reopen cycle. This eliminates the glass cannon failure mode.

### Scale Benchmarks (M2 MacBook)
- Single channel: 500+ coin transfers/sec
- 50 concurrent channels: 3,500 coin transfers/sec
- 10,000 concurrent channels: stable linear throughput
- Processing overhead per transfer: < 1ms per side

One node handling 1,000 channels → 500,000 token transfers/second. SUICA (Tokyo Metro rush hour) peaks at ~300 TPS. A single Gajumaru node exceeds this by **1,667×**.

### The Bar Tab Model
Open once (one on-chain transaction — credit card presented), transact freely, close once (one on-chain transaction — bill settled). Unlimited off-chain transactions with only two on-chain operations per session, regardless of how many transfers occur.

### GRIDS Integration
State channel signing integrates with [[grids]] — the same wallet-based signing infrastructure used for authentication. A single keypair can sign channel operations, transaction authorisations, and authentication challenges. No separate channel management UI.

---

## When Lightning Would Need to Work

For Lightning to function at the scale QPQ targets, Bitcoin would need to:
1. Process channel opens and closes at internet payment scale → requires 100,000+ TPS
2. Allow channel top-ups without on-chain operations
3. Solve the routing monopoly created by its current Gini 0.97 liquidity distribution

Bitcoin cannot do any of these without large architectural changes — changes that the Bitcoin community has been structurally unable to adopt since "the definition got locked" at the pizza-purchasing moment (see [[bitcoin-ng]] for the FOMO economics analysis).

---

## QPQ's One-Line Summary

> "Lightning is a dirty hack. State channels on a correctly-designed base layer are not."

Source: [[summary-video-bitcoin-proof-of-concept]], [[summary-blog-lightning-network-failed]]

---

*See also: [[state-channels]] (full technical reference), [[groot]] (base layer that enables this), [[bitcoin-ng]] (why Bitcoin couldn't adopt the right architecture).*

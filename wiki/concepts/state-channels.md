---
type: concept
title: "State Channels"
aliases: [state-channel, state-channels, channel, off-chain]
sources: [[summary-qpq-wiki-state-channels]], [[summary-unwhitepaper]], [[summary-blog-gajumaru-state-channels]], [[summary-blog-whale-subsidy-a2p]], [[summary-blog-a2a-state-channels]], [[summary-quantum-ai-machine-economy]], [[summary-video-bitcoin-proof-of-concept]]
related: [[groot]], [[associate-chains]], [[gajumaru-architecture]], [[sophia-fate]], [[grids]], [[aeternity]]
created: 2026-05-15
updated: 2026-05-16
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

## Performance Benchmarks (M2 MacBook — baseline benchmark)

| Operation | Single Channel | 50 Channels | Scaling Factor |
|-----------|---------------|-------------|----------------|
| Contract calls/sec | 40 | 1,900 | 47.5× |
| Coin transfers/sec | 500+ | 3,500 | 6.5× |
| Plain messages/sec | 3,000+ | 30,400 | 11.5× |

Processing overhead per coin transfer: **< 1 millisecond** per side. Tested to **10,000 concurrent channels** (20,000 endpoints) with stable throughput. One node handles ≥1,000 concurrent channels; throughput scales linearly with additional nodes until CPU saturation.

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

## A2P (Agent-to-Provider) State Channels

A key application pattern is **A2P (Agent-to-Provider)** channels — continuous settlement between autonomous agents or users and service providers. This solves the **"whale subsidy" problem**: current payment processors impose ~$0.30 + 3% minimum costs, making micropayments economically impossible. Subscription SaaS forces providers to hope a few heavy users ("whales") cross-subsidise many light users.

A2P state channels enable **"Pay-as-you-Flow"** pricing: sub-cent charges per unit (token, frame, CPU cycle), settled in real-time, with immediate liquidity for providers. Replaces subscription SaaS with utility billing for AI inference, media streaming, and the emerging machine economy.

Also **A2A (Agent-to-Agent)** channels for peer-to-peer machine payments without human intervention.

## Use Cases

| Category | Examples |
|----------|---------|
| Payments | Instant Swish/Venmo-style payments at events; transport |
| Commerce | Open tabs at restaurants/bars (QR scan, owner prevents walkout via unilateral close) |
| Loyalty | Coffee shop cards; reloadable credits |
| Content | Micro-paywalls; pay-as-you-go AI inference; media streaming (per-frame billing) |
| Social | Monetary tips instead of costless "likes" |
| Machine Economy | A2P: agent pays provider per computation; A2A: autonomous agent-to-agent settlements |

## Implementation Status

- Basic design support since **2019** (CoinFabrik merchant demo)
- End-to-end demos scheduled **Spring/Summer 2026** (post-MainNet, pending funding)
- Native multi-currency support for Associate Chains: planned

## Scale Comparisons (Un-White Paper)

The Un-White Paper provides two concrete benchmarks to contextualise State Channel throughput:

### SUICA (Tokyo Metro)
The SUICA contactless payment card peaks at **< 300 TPS** across the Tokyo Metro at rush hour. A **single Gajumaru node** running 1,000 concurrent channels achieves **500,000 token transfers per second** — **1,667× SUICA's peak**. SUICA requires purpose-built infrastructure; Gajumaru channels run on commodity hardware.

### WhatsApp (Messaging Infrastructure)
A **Mac Mini M4** running Erlang/OTP handles approximately **2.5 billion messages per day**. WhatsApp processes **~100 billion messages per day** using global data centre infrastructure — also built on Erlang (the same foundation as Gajumaru). The implication: Gajumaru's plain-message throughput (3,000+/sec/channel) is not theoretical — it rests on a runtime that demonstrably handles internet-scale messaging loads.

Source: [[summary-unwhitepaper]], [[summary-blog-gajumaru-state-channels]]

## The Bar Tab Metaphor

> "Opening a tab at a bar."

A State Channel is opened once (one on-chain transaction — like presenting a credit card), used for unlimited interactions (orders during the evening — no fee per round), and closed once (one on-chain transaction — like settling the bill). Regardless of how many rounds are bought, only two on-chain transactions occur. The metaphor captures: low setup cost, unlimited off-chain activity, single settlement.

## Machine Economy

State channels are the payment rail for the autonomous machine economy:

- **Autonomous vehicles** need to pay for road usage, parking, and charging without human intervention — and cannot wait for on-chain settlement at a toll booth
- **AI agents commissioning inference** pay per token generated (A2P pattern) — no subscription, no prepay, exact billing
- **Machines don't have passports**: machines have no nationality, no banking relationship, no ability to hold fiat currency accounts. Gajumaru State Channels are the first infrastructure that lets machines transact autonomously without human intermediation

Source: [[summary-unwhitepaper]], [[summary-blog-a2a-state-channels]]

## Why Lightning Network Is a Dirty Hack (Gajumaru's Contrast)

From [[summary-video-bitcoin-proof-of-concept]], the team's technical analysis of Lightning:

**The "dangerous just":** "Just use Lightning" is cited as the most misleading simplification in Bitcoin — hiding explosive complexity.

| Problem | Detail |
|---------|--------|
| No top-up | Cannot add funds to an open Lightning channel — must close and reopen (two full Bitcoin on-chain transactions) |
| Routing complexity | Multi-hop routing requires managing liquidity across many channels; non-custodial use is beyond normal users |
| Glass cannon | Liquidity is static; rebalancing requires on-chain operations that would swamp Bitcoin immediately |
| Intermediation | Custodial Lightning = trust the node operator without regulatory oversight = "just use the bank" |
| Scale | Currently ~3 TPS total despite years of investment and all of Bitcoin's network effect |

Lightning launched in 2018. Craig: "If Lightning was everything its happiest proponents make it out to be, the question isn't when is it going to take off — it's why hasn't it already?"

**The BOLT protocol connection:** Gajumaru's state channel implementation copied the *names* of Lightning's BOLT protocol operations as a template — but did not copy the on-chain limitations that make Lightning a dirty hack. The chain is natively aware of state channels (unlike Bitcoin, which has no knowledge of Lightning).

**Key design difference:** Gajumaru's base layer (300 TPS, 3-second microblock) is fast enough for coffee payments without any layer 2. State channels are reserved for genuinely high-frequency, sub-second use cases (e.g., per-station mass transit systems) — not as a workaround for a slow base chain.

**The Tokyo/London subway example:**
- Tokyo subway at peak: ~300 TPS → allocating the entire Gajumaru base chain still doesn't meet the sub-second response requirement
- Solution: a dedicated localized state channel for each transit system, with sub-second finality
- The London subway runs ~100 TPS — its own channel, isolated from Tokyo's

Multi-party state channels were considered and rejected: even 2-party channels have enough edge cases; multi-party state channels are far harder, especially dispute resolution. Associate Chains serve the conceptual function of "ideal multi-party state channels" at the infrastructure level.

## Delegated Signing and Agent Provisioning

State channels have a GRIDS-integrated signing model for agentic use:

**Proxy key pair:** When opening a channel, the owner can install a delegated key pair. The chain recognizes this proxy key as authorized for channel signing.

**Two operational modes:**
- **Manual (default):** every channel signing step pauses for GajuDesk/GajuMobile approval. The user must scan a QR code or approve in-app for each step. Suitable for human-in-the-loop commerce.
- **Automatic:** delegated key pair installed; channel signs automatically. Suitable for agentic AI loops. Can mix both modes — some steps require approval, others auto-sign.

> "By default it doesn't automatically sign anything. You have to install the delegated key pair in order for it to do it at all."

**Agent provisioning (Greg's M4 Mac example):**
1. Fund agent with 100 Gaju (limited amount from main keys on separate device)
2. Agent sets up state channel independently with a service provider
3. Agent transacts at speed (micropayments per computation/frame/token)
4. When funds run low, agent requests top-up — owner approves on phone
5. Main keys never expose to the agent's execution context

> "If your agent goes haywire and blows all the money on something silly... you've limited your risk. You don't have to give the agent the keys to your kingdom."

**The micropayment problem solved:** Current systems cannot refund payments below ~$20 because transaction fees exceed the value. State channels eliminate this: open, use however much you use, tear down — exact net settlement at close with no per-interaction fee.

QPQ may offer a **cloud-hosted state channel service** — making QPQ a party in channels, allowing channels to be hosted off-device without owning the full endpoint hardware.

Source: [[summary-quantum-ai-machine-economy]]

## Sources
[[summary-qpq-wiki-state-channels]], [[summary-unwhitepaper]], [[summary-blog-gajumaru-state-channels]], [[summary-blog-whale-subsidy-a2p]], [[summary-blog-a2a-state-channels]], [[summary-quantum-ai-machine-economy]]

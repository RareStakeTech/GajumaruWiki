---
type: concept
title: "Groot (Resource Layer)"
aliases: [groot, resource-layer]
sources: [[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-the-gajumaru-an-actual-working-blockchain]]
related: [[gajumaru-architecture]], [[associate-chains]], [[gaju-token]], [[protected-mining]], [[cuckoo-cycle]], [[tea-trilemma]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# Groot (Resource Layer)

Groot is the governance-free, proof-of-work resource layer of the Gajumaru blockchain. It is the "R" in the [[ripa-model]] and underpins all [[associate-chains]].

No operator. No one can say no. Algorithmic consensus only. The "high seas" of the global digital economy.

## Status
Operational since **22 October 2024**. As of end 2025: 300,000+ generations produced. Absolute finality: **3–4 minutes** (2 keyblocks at 2-minute intervals).

## Consensus Architecture

**Bitcoin-NG** (Eyal et al., 2016, USENIX NSDI): Decouples leader election from transaction serialisation. Keyblocks (~every 2 min) elect leaders; microblocks (~every 3 sec) carry transactions. Absolute finality = no transaction older than 2 keyblocks can be ejected.

**[[Cuckoo-cycle]]** (Tromp, 2014/2019): Memory-bound, graph-theoretic proof-of-work. No ASIC arms race — mining remains decentralised. Suitable for 87.5-year [[gaju-token]] distribution.

## Performance Specifications

| Metric | Value |
|--------|-------|
| Throughput | >300 transactions per second |
| Commercial settlement | 2–3 seconds (next microblock) |
| Absolute finality | 3–4 minutes (2 keyblocks) |
| Efficiency vs Bitcoin | **1,846,200×** more transactionally efficient |
| Security vs Bitcoin | At least 8.23× greater in commercial utilisation |

> [!contradiction]
> **Efficiency figure conflict:**
> - [[summary-qpq-2025-review]] (Jan 2026): 553,800× more efficient than Bitcoin
> - [[summary-unwhitepaper]] (Mar 2026): 1,846,200× more efficient than Bitcoin
>
> The Un-White Paper is more recent and more technically authoritative. **Current working figure: 1,846,200×.** The Year in Review figure may reflect an earlier calculation or different measurement basis. Both sources are from QPQ — not an external contradiction, but the numbers differ by ~3.3×. Pending clarification.

## Transparency Model
Groot is a public ledger — all transactions visible. This is the price of trustlessness (no hidden cargoes; full exposure). Regulatory compliance sits at Associate Chain boundaries, not on Groot itself. Analogous to TCP/IP not regulating content.

## Relation to Token
[[gaju-token]] first drawdowns occurred 16 October 2025. Token symbol: 7XGaju.

## Explorer
GajuExplorer: `groot.mainnet.gajumaru.io`

## Finality Cooperation with Associate Chains

[[associate-chains]] cooperate to improve finality on Groot. Craig (attributing to Dimitar) references this explicitly but defers detail to a later video. Current sources do not describe the mechanism.

> [!open_question]
> Mechanism for Associate Chain → Groot finality cooperation not yet documented. See [[summary-the-gajumaru-an-actual-working-blockchain]].

## Sources
[[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-the-gajumaru-an-actual-working-blockchain]]

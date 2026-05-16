---
type: concept
title: "Bitcoin-NG"
aliases: [bitcoin-ng, bitcoin-ng-protocol, ng, next-generation-bitcoin]
sources: [[summary-gajumaru-new-blockchain-demo-1]], [[summary-qpq-wiki-gajumaru]], [[summary-qpq-wiki-finality]], [[summary-unwhitepaper]]
related: [[groot]], [[gajumaru-architecture]], [[cuckoo-cycle]], [[tea-trilemma]], [[craig]], [[ulf]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# Bitcoin-NG

Bitcoin-NG ("Next Generation") is the consensus protocol used by [[groot]], Gajumaru's resource layer. It was designed by Eyal et al. (2016, USENIX NSDI) to solve Bitcoin's fundamental throughput bottleneck by separating two concerns that standard Bitcoin bundles together: **leader election** and **transaction serialization**.

## The Core Insight

In standard Bitcoin, the same block does two things:
1. Proves that someone did computational work (leader election via PoW)
2. Carries all the transactions for that time period

This coupling means the entire system must wait for a new PoW winner before any transactions can be written — causing the ~10-minute delays and ~3–5 TPS ceiling.

Craig's assessment:
> "The design principle of Bitcoin-NG where proof of work [leader election] is separated from ledger updates and inclusion — that's a very clean, very natural separation of concerns. It should have been obvious years ago. Nobody picked up on that."

Source: [[summary-gajumaru-new-blockchain-demo-1]]

## How It Works

### Two Block Types

| Block type | Purpose | Interval | Contents |
|------------|---------|----------|---------|
| **Keyblock** | Leader election | ~2 minutes | Proof-of-work only — no transactions |
| **Microblock** | Transaction processing | ~3 seconds | Transactions signed by the current leader |

A **keyblock** plus all its **microblocks** constitutes a **generation** — the fundamental epoch unit of Groot's ledger.

### Leader Lifecycle

1. A miner solves the [[cuckoo-cycle]] PoW puzzle (calibrated to ~2–3 minutes per keyblock)
2. The winner becomes the **leader** — their word is accepted as agreed truth by all nodes
3. The leader immediately begins producing microblocks every ~3 seconds, packing them with transactions
4. When the next keyblock is solved, a new leader is elected; leadership transfers

**Immediately on winning**: if the chain is idle and a transaction arrives, it can be included in the next microblock within seconds — no PoW wait needed.

### Finality

Two consecutive keyblocks constitute **absolute finality**: no transaction older than 2 keyblocks can be ejected from the chain. This gives Groot:

- **2–3 second commercial settlement** (inclusion in next microblock)
- **3–4 minute absolute finality** (two keyblocks)

Compared to Bitcoin's ~1-hour practical threshold (6 blocks at 10-minute intervals), this is a dramatic improvement — achieved without sacrificing PoW trustlessness.

## Performance on Groot

| Metric | Standard Bitcoin | Groot (Bitcoin-NG) |
|--------|-----------------|---------------------|
| TPS | ~3–5 | >300 |
| Settlement | ~10 minutes | 2–3 seconds |
| Absolute finality | ~1 hour | 3–4 minutes |
| Leader mechanism | PoW per block | PoW for keyblock only |

Source: [[summary-gajumaru-new-blockchain-demo-1]] (Ulf's live explanation), [[summary-qpq-wiki-finality]]

## The Witness Layer

[[groot]] adds a **witness mechanism** on top of Bitcoin-NG: stakeholders witness keyblocks for accelerated fork protection. Critically, witnessed keyblocks are **content-free** — they carry no transactions — so witnesses commit only to the leader election result, not to transaction content.

This protects witnesses from inadvertently endorsing questionable transactions while still contributing to fork resolution. Source: [[summary-qpq-wiki-gajumaru]]

## Academic Basis

> Eyal, I., Gencer, A. E., Sirer, E. G., & van Renesse, R. (2016). *Bitcoin-NG: A Scalable Blockchain Protocol*. USENIX NSDI '16.

A peer-reviewed protocol, not a QPQ invention — Gajumaru implements it. QPQ's contribution is combining Bitcoin-NG with [[cuckoo-cycle]] PoW and the [[associate-chains]] architecture to create a production-grade system.

## Significance in QPQ's Analysis

Bitcoin-NG is part of QPQ's argument that the blockchain industry produced proof-of-concepts that were never cleaned into production products:

> "Bitcoin only barely proves it can work. Ethereum proves blockchain can be used as a state machine. Neither was cleaned up."

Bitcoin-NG was sitting in the academic literature for years before QPQ built production infrastructure on it. Craig explicitly notes "nobody picked up on that" as a design insight that was hiding in plain sight.

## QPQ Wiki TODO

The QPQ Public Wiki's own Home page lists "Bitcoin-NG primer" as an article still needed — meaning even QPQ hasn't yet published a dedicated public explainer for this protocol. Source: [[summary-qpq-wiki-home]]

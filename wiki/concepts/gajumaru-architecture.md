---
type: concept
title: "Gajumaru Architecture"
aliases: [gajumaru-stack, gajumaru-system]
sources: [[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-qpq-wiki-sophia]], [[summary-qpq-wiki-smart-contracts]]
related: [[groot]], [[associate-chains]], [[ripa-model]], [[gaju-token]], [[qpq-ag]], [[tea-trilemma]], [[cuckoo-cycle]], [[craig]], [[dimitar]], [[peter]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: hub
---

# Gajumaru Architecture

Gajumaru is a layered blockchain system built by [[qpq-ag]]. The design principle is **partition, not compromise**: rather than reconciling contradictory requirements in a single layer, each layer does exactly one thing.

## The Core Test

> "Does this allow us to trust the message rather than the messenger, securely at scale?"

Every legitimate blockchain application flows from this. QPQ claims Gajumaru is the only system that passes it after $120B+ of industry investment.

## Core Layers

### Resource Layer — [[groot]]
Governance-free proof-of-work layer. Operational since 22 October 2024. Consensus: Bitcoin-NG + [[cuckoo-cycle]]. >300 TPS; commercial settlement 2–3 sec; absolute finality 3–4 min. Efficiency: 1,846,200× more efficient than Bitcoin. No operator. No one can say no.

### Infrastructure Layer — [[associate-chains]]
Sovereign, governed blockchains connecting natively to Groot. No bridges. Each created, designed, and governed independently. Master/sub-chain hierarchy supports banking consortia, sovereign nations, stablecoin networks. First deployment: [[ltin]] (Liechtenstein, Q2–Q4 2026).

### Platform & Application Layers
[[sophia-fate]]: Sophia smart contract language + FATE VM (from Aeternity, extended by QPQ). Sophia was designed by contributors including Erlang co-inventor Robert Virding and QuickCheck co-inventor John Hughes — built to resolve Solidity's irreparable inadequacies. FATE = immutability-first functional VM with smaller footprints and enhanced correctness. FINMA compliant. Permissionless post-MainNet. Products: [[gajumaru-product-suite]].

## The TEA Framework

Gajumaru resolves the [[tea-trilemma]] through architectural partition:
- **Groot = Trustlessness.** No operator; algorithmic consensus; no one can say no.
- **Associate Chains = Efficiency + Accountability.** Governed by identifiable operators under legal jurisdiction with dispute resolution.

Neither layer compromises. This is why QPQ rejects Buterin's blockchain trilemma — the trilemma is the consequence of trying to solve contradictory requirements in a single system.

## Technical Foundations
- Bitcoin-NG (Eyal et al., 2016)
- Cuckoo Cycle PoW (Tromp, 2014/2019)
- Sophia language + FATE VM (Aeternity, extended)
- GPL3 open source; defensive patents (Red Hat model)
- Zero external dependencies

## The Naming Origin

Lead architect [[craig]], working on the scalability problem in Okinawa (southern Japan), needed a name for the tree-structure design (root mint + independent chains). He saw a *gajimaru* tree outside his office window. The *gajimaru* means **"the walking tree"**: it starts with a single trunk, then drops runners that become independent trunks — eventually indistinguishable from the original.

> "It grows first from a single bowl but pretty quickly it starts dropping these support roots and they wind up becoming trunks of their own — which is similar to the structure that we actually want."

Craig chose it as a working name expecting to change it: "nothing better came up, so it stuck." Sources: [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]].

## MainNet Status
Launched April 6/7 2026 at 23:59:00 Zulu.

## In this cluster

| Page | Role | Description |
|------|------|-------------|
| [[gajumaru-architecture]] | hub | Full stack overview (this page) |
| [[groot]] | member | Resource layer — Bitcoin-NG + Cuckoo Cycle, 1,846,200× Bitcoin efficiency |
| [[associate-chains]] | member | Multi-chain architecture, no bridges, master/sub-chain hierarchy |
| [[ripa-model]] | member | Two-path model: RPA (direct/trustless) vs RIPA (via governed infrastructure) |
| [[tea-trilemma]] | member | TEA framework: Trustlessness / Efficiency / Accountability |
| [[cuckoo-cycle]] | member | Memory-bound PoW — no ASIC arms race |
| [[craig]] | entity | Lead architect — designed tree structure, named the project |
| [[dimitar]] | entity | Implementation engineer — Associate Chain interplay |
| [[peter]] | entity | Communicator — non-technical rubber duck for explainer videos |

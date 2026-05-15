---
type: concept
title: "Associate Chains"
aliases: [associate-chain, multi-chain, interoperability]
sources: [[summary-qpq-2025-review]], [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]]
related: [[gajumaru-architecture]], [[groot]], [[ripa-model]], [[ltin]], [[craig]], [[dimitar]], [[peter]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# Associate Chains

Associate Chains are independent blockchains that connect natively to Gajumaru's [[groot]] resource layer. They form the "Infrastructure" layer in the [[ripa-model]].

## Key Properties
- **Independent**: Each Associate Chain can be created, designed, and governed independently of QPQ AG and of each other.
- **Native interoperability**: All Associate Chains interoperate with each other and with Groot natively.
- **No bridges**: Inter-chain communication requires no bridging protocols or third-party trust dependencies.
- **Permissionless**: Any party can create an Associate Chain after MainNet launch.

## Technical Implementation (Dimitar)

Each Associate Chain has:
- Its own **independent database**
- Its own **independent CPU space** (transaction throughput isolation)
- Its own **block size** — configurable per chain
- Its own **consensus** — PoW, PoS, Proof of Authority, or any suitable model
- Freedom to **enable new functionalities** as needed by the business case

**Transaction isolation:** If one Associate Chain carries very high transaction volume (e.g., a viral application), that load is completely isolated — it cannot congest other Associate Chains or affect their throughput or fees. This directly solves the Ethereum problem where viral products lock up the entire network.

## Account Universality and Cross-Chain Transfers (Craig)

- **A Gaju account is valid on every chain** — demanded by the ecosystem design
- Each Associate Chain treats the Groot mint like a local bank treats a central bank
- Launching an Associate Chain requires "checking out" Gajus from the mint to the new chain
- Gajus are transferable between associate chains and between user accounts cross-chain

## Two Paths to an Associate Chain

1. **Performance path:** Start on Groot (unregulated space) → if successful, spawn an Associate Chain to own your transaction throughput
2. **Compliance path:** Move to an Associate Chain, add KYC/custom consensus for local jurisdiction → Gajus treated as foreign currency not under regulatory control

## Real-World Use Case: Central Bank Consultation

A central bank consulted by QPQ confirmed needing different chain configurations for different transaction types:
- **High-speed chain** — retail payments (coffee purchases)
- **High-security chain** — interbank settlements, end-of-day settlements

This validates the multi-chain design against real institutional requirements.

## Deployment Status
Architecture validated by [[ltin]] selection before MainNet. Full Associate Chain capability delivered at **MainNet (April 6/7 2026)**.

## First Associate Chain
[[ltin]] — Liechtenstein Trust Integrity Network — is the first sovereign Associate Chain deployment, planned for Q2/Q3/Q4 2026.

## Significance
The no-bridge, native interoperability design distinguishes Gajumaru from most multi-chain ecosystems (e.g., Cosmos IBC, Polkadot bridges, Ethereum L2s), where bridges represent systemic risk and trust assumptions.

## Associate Chains Cooperate to Improve Mint Finality

Craig (attributing to Dimitar): "The associate chains will also cooperate to improve the finality as we call it on the mint."

The mechanism is not yet documented — Craig defers detail to a later video. This suggests Associate Chains play an active security role for [[groot]], not merely consuming the mint as passive clients.

> [!open_question]
> How exactly do Associate Chains cooperate to improve Groot finality? Source promises more detail in a follow-up video. See [[summary-the-gajumaru-an-actual-working-blockchain]].

## Competitive Chain Spawning (Market Discipline)

If an Associate Chain gets overloaded or fails to serve its use case, users can spawn a competing chain. Because Gajus are cross-chain transferable and no chain-specific currency lock-in exists, resources flow to the better chain naturally. This embeds market discipline structurally in the architecture — no single Associate Chain can become an inescapable monopoly.

## Sources
[[summary-qpq-2025-review]], [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]]

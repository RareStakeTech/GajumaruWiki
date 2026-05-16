---
type: concept
title: "GajuDEX"
aliases: [gajudex, dex, gajumaru-dex, decentralised-exchange]
sources: [[summary-unwhitepaper]], [[summary-qpq-2025-review]], [[summary-blog-summer-of-gajumaru]]
related: [[gajumaru-product-suite]], [[sophia-fate]], [[groot]], [[associate-chains]], [[gaju-token]], [[qpq-ag]]
created: 2026-05-16
updated: 2026-05-16
confidence: high
cluster: developer-ecosystem
cluster_role: member
---

# GajuDEX

GajuDEX is the Gajumaru decentralised exchange — an AMM (Automated Market Maker) combined with a CLOB (Central Limit Order Book) with stop-loss support. QPQ claims it is the first DEX to pass FINMA's substance-over-form test for genuine decentralisation.

## Design Properties

| Property | GajuDEX |
|----------|---------|
| Contract mutability | **Immutable post-deployment** — no upgrades possible |
| Admin keys | **None** |
| Governance tokens | **None** — no protocol-change voting |
| Order matching | **On-chain** — no off-chain relayers |
| Custody | **Non-custodial at all stages** |
| Source code | **Open-source smart contracts** |
| KYC (Groot deployment) | **No KYC required** |
| Liquidity provision | **Permissionless** |
| Operator censorship | **Not possible** — no control position |
| Regulatory compliance | Varies by deployment |

## Two Deployments

**Deployment 1 — Groot (fully permissionless):**
- AMM + CLOB with stop losses
- No admin keys, no governance tokens
- Anyone participates, anywhere, no KYC
- Immutable contracts post-deployment

**Deployment 2 — KPoS Associate Chain (regulated institutional):**
- Known Proof of Stake consensus
- On-chain KYC required
- Gaju staking
- Designed for regulated institutional participants
- Still passes FINMA substance-over-form test

## DINO Scoring Framework

The Un-White Paper includes a detailed analysis of the "DINO problem" (Decentralised In Name Only) using a 10-criterion scoring framework (4 points each, 40 total):

1. Immutable contracts post-deployment
2. No admin keys or upgrade proxies
3. No governance token for protocol changes
4. On-chain order matching (not off-chain relayers)
5. Non-custodial at all stages
6. Open-source smart contracts
7. No KYC required on the base layer
8. Permissionless liquidity provision
9. No operator censorship capability
10. Regulatory framework compliance

**GajuDEX score: 39/40** — one point deducted on the KYC criterion because the KPoS deployment requires on-chain KYC by design (not a deficiency — the two deployments serve different regulatory contexts).

**All major DEXs examined scored 20 or below** despite claiming decentralisation.

## Regulatory Convergence

Three independent regulatory frameworks converge on the same test:

| Framework | Test |
|-----------|------|
| FINMA (Switzerland) | Substance over form — who controls the system? |
| MiCA Recital 22 (EU) | Is the service provider fully decentralised? |
| MAS identifiable-operator test (Singapore) | Can a single entity be identified as controlling the system? |

GajuDEX passes all three: no entity holds a control position. QPQ explicitly describes it as **the first DEX to pass the FINMA substance-over-form test for genuine decentralisation**.

> "The sequencer is not a detail. It is the thing. If one entity decides which transactions are processed and in what order, that entity controls the exchange."

## Technical Implementation

- Written in **Sophia** smart contract language
- Runs on the **FATE VM**
- Designed to be FINMA-compliant
- AMM portion handles liquidity pools with automated pricing
- CLOB portion handles limit orders and stop losses
- Both on-chain — no off-chain relayers that could be censored

## PHYDEX (Planned Extension)

The Un-White Paper describes a planned **PHYDEX (Physical and Derivative Exchange)** as an extension of GajuDEX for physical commodity markets:

- Standardised FOB/CFR/CIF contract templates
- Oracle-based quality and price verification
- Physical delivery confirmed via third-party attestation
- Designed for agricultural and raw material markets currently excluded from financial infrastructure

## Status

Planned for Q2 2026 launch (per Year in Review); part of the **Summer of Gajumaru** product rollout announced post-MainNet.

## Sources
[[summary-unwhitepaper]], [[summary-qpq-2025-review]], [[summary-blog-summer-of-gajumaru]]

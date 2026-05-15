---
type: source
title: "Gajumaru (QPQ Public Wiki)"
slug: summary-qpq-wiki-gajumaru
source_file: raw/articles/qpq-wiki-gajumaru.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Gajumaru = hierarchical ledger system — Groot (mint/registrar) + Associate Chains (child ledgers)
  - Bitcoin-NG — keyblocks (PoW) + microblocks (transactions); keyblock + microblocks = "generation"
  - Witness mechanism — stakeholder witnesses for accelerated finality; keyblocks are content-free
  - Finality within 2–4 minutes; Associate Chains may use any consensus mechanism
  - Three object categories — Universal (PLAs), Non-transferable (contracts/channels), Transferable (currency)
  - All on-ledger data has TTL; storage cost scales with height duration required
  - Contract visibility modes — Visible (source in tx) vs Incognito (source omitted)
  - Garbage collection at governance-determined heights — epochs; transition = "ledger closeout"
related: [[groot]], [[associate-chains]], [[gajumaru-architecture]], [[cuckoo-cycle]], [[gaju-token]]
confidence: high
---

# Gajumaru (QPQ Public Wiki)

Official QPQ description of Gajumaru's architecture and on-chain mechanics, authored by [[peter]] (Peter Harpending).

## Structure

Gajumaru is a **hierarchical ledger system**:

- **Groot ("groot")**: Distributed blockchain using proof-of-work consensus. Serves as the system-wide currency mint and registrar. The only component required to maintain trustless consensus and mint currency.
- **Associate Chains (ACs)**: Child ledgers registered with Groot. May have their own subordinate ACs. Can be public or private, using any blockchain platform or non-blockchain infrastructure — provided they comply with inter-chain protocols for fund transfers.

## Consensus and Finality

[[groot]] implements **Bitcoin-NG**:
- **Keyblocks** — contain proof-of-work; elect the leader
- **Microblocks** — carry transactions; produced by the current leader
- **Generation** = a keyblock plus all its microblocks

**Witness mechanism**: Stakeholders witness keyblocks for accelerated finality. This acts as fork protection, not the primary consensus basis. Critically, **keyblocks being witnessed are content-free** — witnesses commit to the election result, not to transaction content, protecting witnesses from inadvertently endorsing questionable content.

Finality: typically **2–4 minutes**.

Associate Chains may implement any consensus mechanism — PoS, permissioned, or smart contract-based — provided they maintain height concepts and comply with Gajumaru protocols.

## On-Chain Object Categories

| Category | Examples |
|----------|---------|
| **Universal Objects** | Plain Old Accounts (PLAs) — implicitly created, transferable |
| **Non-transferable Objects** | Contracts, state channels, generalised accounts, subordinate ledgers |
| **Transferable Objects** | Currency (Gajus or AC-defined coins) |

## Data TTL

All on-ledger data carries a **Time-to-Live (TTL)** value. Storage costs multiply by height duration required. With ~3-minute generation intervals, one-year storage requires TTL = current height + 175,200.

TTL can be extended via TTL transactions. Subordinate ledgers may implement arbitrary storage rules (including infinite TTL). State channel objects have infinite TTL within the channel context.

## Contract Source Visibility

Two deployment modes:
- **Visible** — source code included in the deployment transaction; callers can verify behaviour
- **Incognito** — source code omitted; behavior is opaque to callers

## Garbage Collection and Epochs

At **governance-determined heights**, data snapshots create new genesis blocks. The span between genesis blocks = an **epoch**. The transition = a **ledger closeout**.

Node types:
| Mode | Behaviour |
|------|-----------|
| Garbage-collected nodes | Clear expired and non-current data |
| Archive nodes | Retain historical data |
| Full archive nodes | Complete ledger history across all epochs |
| Partial archive nodes | Current + some past epochs only |

All nodes preserve current epoch transaction logs, enabling reconstruction of garbage-collected states.

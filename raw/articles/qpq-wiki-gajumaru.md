---
type: web-article
title: "Gajumaru"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Gajumaru
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## The Gajumaru

The term "Gajumaru" originates from southern Japan, meaning "the walking tree"—a tree that expands its branch and root systems continuously, potentially forming an entire forest from a single organism with interconnected trunks. This metaphor inspired the architectural design addressing distributed ledger technology challenges.

## Structure

Gajumaru consists of a hierarchical ledger system with:

- **Gajumaru Root ("groot")**: A distributed blockchain using proof-of-work consensus, serving as the system-wide currency mint and registrar
- **Associate Chains (ACs)**: Child ledgers that can be registered with groot and may have their own subordinate ACs

The root chain is the only component required to maintain trustless consensus and mint currency. Associate chains connect permissionlessly to parent chains but may operate as public or private systems using any blockchain platform or non-blockchain infrastructure, provided they comply with inter-chain protocols for fund transfers.

## Consensus and Finality

Gajumaru Root implements Bitcoin-NG consensus, splitting blocks into keyblocks (containing proof-of-work) and microblocks (containing transactions). A keyblock plus its microblocks constitute a "generation."

The system employs a witness mechanism among stakeholders for accelerated finality, functioning as fork protection rather than sole consensus basis. Transactions achieve finality typically within 2-4 minutes. Importantly, "keyblocks being witnessed are content-free, carrying no transactions," protecting witnesses from endorsing questionable content.

Associate chains may implement any consensus mechanism—proof-of-stake, permissioned schemes, or smart contract-based models—provided they maintain height concepts and comply with Gajumaru protocols.

## On-Chain Data

Three object categories exist:

**Universal Objects:**
- Plain Old Accounts (PLAs)—implicitly created and transferable

**Non-transferable Objects:**
- Contracts, state channels, generalized accounts, subordinate ledgers

**Transferable Objects:**
- Currency (Gajus or AC-defined coins)

## Data Time-to-Live (TTL)

All on-ledger data expires according to TTL values. Storage costs multiply by height duration required. With average three-minute intervals between generations, one-year storage requires TTL of current height plus 175,200.

TTL can be extended via TTL transactions. Subordinate ledgers may implement arbitrary storage rules, including infinite TTL. State channel objects have infinite TTL within channel context.

## Contract Source Visibility

Two deployment modes exist:

1. **Visible**: Source code included in deployment transaction
2. **Incognito**: Source code omitted from deployment

This enables callers to verify contract behavior and wallets to provide transaction details before user signature.

## Garbage Collection

At governance-determined heights, data snapshots create new genesis blocks. The span between genesis blocks constitutes an "epoch"; the transition is a "ledger closeout."

Nodes operate in garbage-collected or archive modes:
- **Garbage collected nodes** clear expired and non-current data
- **Archive nodes** retain historical data
- **Full archive nodes** maintain complete ledger history across all epochs
- **Partial archive nodes** retain current and some past epochs only

All nodes preserve current epoch transaction logs, enabling reconstruction of garbage-collected states.

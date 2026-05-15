---
type: source
title: "Mint / The Mint Function, Blockchain Inflation, and Currency Debasement (QPQ Public Wiki)"
slug: summary-qpq-wiki-mint
source_file: raw/articles/qpq-wiki-mint.md
author: "Peter Harpending (last edited 2026-03-17)"
date_published: 2026-03-17
date_ingested: 2026-05-15
key_claims:
  - Bitcoin design — cryptography makes artificial monetary inflation impossible
  - Permanent traceability of money ownership back to origin via distributed public ledger
  - Predetermined monetary expansion — early miners rewarded with more new coins; later miners rewarded more by fees
  - This is the structural model Gajumaru follows (early mining = more new Gaju; later = fee-based)
related: [[gaju-token]], [[protected-mining]], [[groot]], [[cuckoo-cycle]]
confidence: high
---

# Mint / The Mint Function, Blockchain Inflation, and Currency Debasement (QPQ Public Wiki)

QPQ's explanation of the mint function and its role in blockchain currency design, authored by [[peter]] (Peter Harpending, last edited 2026-03-17).

## Bitcoin's Original Design

Nakamoto designed Bitcoin with two key properties:
1. **Cryptographic inflation prevention** — impossible to artificially inflate the supply
2. **Permanent traceability** — all ownership transfers traceable back to origin via the distributed ledger

## Predetermined Monetary Expansion

Nakamoto's expansion model:
- **Early miners** → more new coins (to get coins into circulation early)
- **Later miners** → more valuable transaction fees as coin minting slows

This structure was designed to incentivise early participation while transitioning the network toward fee-based sustainability.

## Gajumaru's Application

Gajumaru follows this same structural model: the [[protected-mining]] window (early phase) provides more Gaju per solve; as the supply matures over 87.5 years, fee revenue grows in importance. The [[cuckoo-cycle]] PoW is designed for the full 87.5-year distribution horizon without ASIC concentration.

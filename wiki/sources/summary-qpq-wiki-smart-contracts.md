---
type: source
title: "Smart Contracts (QPQ Public Wiki)"
slug: summary-qpq-wiki-smart-contracts
source_file: raw/articles/qpq-wiki-smart-contracts.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Smart contracts = arbitrary accounting rules executed on demand; "magic cell in spreadsheet" analogy
  - Ethereum Solidity + EVM has "spreadsheet issues" — unexpected data impacts, surprising quirks
  - Gajumaru uses Sophia (pre-execution verification, avoids Solidity corner cases) + FATE VM
  - FATE VM = Fast Aeternity Transaction Engine
  - Contract execution triggered by "contract call transaction" messages
  - Atomic execution — all changes occur together or not at all
  - Enables all nodes to reach consensus on history and current state
related: [[gajumaru-product-suite]], [[gajumaru-architecture]], [[associate-chains]], [[groot]]
confidence: high
---

# Smart Contracts (QPQ Public Wiki)

QPQ's explanation of smart contracts and Gajumaru's approach, authored by [[peter]] (Peter Harpending).

## What Smart Contracts Are

DLTs operate on computer systems → arbitrary accounting rules can be executed on demand. Analogy: a "magic cell" in a spreadsheet that contains code triggered by conditions.

Every smart contract system requires:
1. A **language** to define the contract
2. A **runtime engine** to execute it

## Ethereum's Approach: Solidity + EVM

Solidity + Ethereum Virtual Machine (EVM). Problem: "spreadsheet issues" — unexpected data interactions and surprising outcomes from system quirks. This maps to the broader QPQ critique of Solidity as having irreparable inadequacies (see [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]).

## Gajumaru's Approach: Sophia + FATE VM

Two dedicated innovations:
- **Sophia language**: Pre-execution verification; specifically designed to avoid Solidity's corner cases
- **FATE VM** (Fast Aeternity Transaction Engine): Gajumaru's smart contract runtime

## How Contract Execution Works

1. A **"contract call transaction"** message is sent to the blockchain
2. The network leader processes the transaction data
3. Ledger state is updated according to the contract's programmed functions
4. All changes are performed **atomically** — either all modifications occur or none do

This atomicity guarantee, combined with consensus on event sequence, allows all nodes to agree on chain history and current state.

---
type: web-article
title: "Smart Contracts"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Smart-Contracts
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Smart Contracts

DLTs operate on computer systems, allowing arbitrary accounting rules to be executed on demand. Like a "magic cell" in a spreadsheet with code waiting behind it.

For execution, systems require a defined language and runtime engine. Ethereum uses Solidity language with the Ethereum Virtual Machine (EVM). However, these technologies have limitations similar to spreadsheet issues — unexpected data impacts and surprising outcomes from system quirks.

The Gajumaru blockchain addresses these problems through two innovations: the Sophia language, which undergoes pre-execution verification and avoids Solidity's corner cases, and FATE VM (Fast Aeternity Transaction Engine).

Smart contracts execute when "contract call transaction" messages reach the blockchain. The network leader processes transaction data, updates ledger state according to programmed functions, and performs changes atomically — all modifications either occur together or not at all.

The mechanism combines smart contract capabilities with consensus mechanisms focused on agreement about event sequences and their state impacts. This allows all nodes to reach consensus about the chain's history and current state.

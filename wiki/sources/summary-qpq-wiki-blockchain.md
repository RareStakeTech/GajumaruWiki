---
type: source
title: "Blockchain (QPQ Public Wiki)"
slug: summary-qpq-wiki-blockchain
source_file: raw/articles/qpq-wiki-blockchain.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Blockchain = linked list of data entries where each block includes hash of previous block
  - Cryptographic chaining makes retroactive alteration detectable by all participants
  - Any change to past data propagates through all subsequent hashes — visible to observers
  - Most blockchains use tree structures but linked-list model is the core mental model
  - Blockchain enforces sequence — cannot add to an old block without rewriting everything after
related: [[groot]], [[gajumaru-architecture]]
confidence: high
---

# Blockchain (QPQ Public Wiki)

QPQ's foundational definition of blockchain, authored by [[peter]] (Peter Harpending).

A blockchain is a linked list of data entries ("blocks"). Each block includes a hash of the previous block's contents, making the chain tamper-evident: any retroactive change propagates through all subsequent hashes, alerting all observers.

The key property: blockchain **enforces sequence**. You cannot insert into a past block without rewriting everything that follows — and with many parties holding copies, unauthorized edits are obvious.

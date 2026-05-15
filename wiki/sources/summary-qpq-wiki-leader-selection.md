---
type: source
title: "Leader Selection (QPQ Public Wiki)"
slug: summary-qpq-wiki-leader-selection
source_file: raw/articles/qpq-wiki-leader-selection.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Leader selection = who gets to write the next ledger update; reduces consensus problem
  - Two approaches — election (voting/PoS) vs competition (puzzle/PoW)
  - Election requires trust — known identity and valuable stake at risk
  - Competition (PoW) = costly signal without needing known identities
  - Cost of compromising system should exceed value to be gained
  - Sequence is the foundational constraint that forces leader selection
related: [[groot]], [[tea-trilemma]], [[cuckoo-cycle]], [[associate-chains]]
confidence: high
---

# Leader Selection (QPQ Public Wiki)

QPQ's explanation of leader selection — the core mechanism by which blockchains achieve consensus, authored by [[peter]] (Peter Harpending).

## The Problem

Distributed ledgers require enforcing sequence. Parallel updates break correctness. Therefore: only one node should write at a time — the "leader." Leader selection = deciding which node that is, in a way all nodes can agree on.

## Two Approaches

### 1. Election (Hold a Vote)

Requires:
- **Known identity**: participants must not be anonymous — gaming the system is too easy otherwise
- **Costly stake**: participants must visibly place something valuable at risk as a signal of good faith

This is the PoS model. It works only if participants are trusted, which requires knowing who they are.

### 2. Competition (Hold a Puzzle)

Does not require:
- Known identity
- Faith in participants

The act of solving a difficult puzzle **is itself a costly signal**. Anyone solving the puzzle has already paid the cost — no identity needed. The competitive dynamic self-calibrates: the cost of compromising the system rises with the number of participants, until in the ideal case it exceeds the value to be gained.

This is the PoW model — used by [[groot]] via [[cuckoo-cycle]].

## Significance for Gajumaru

This framing underpins [[tea-trilemma]]:
- PoW = trustless (anonymous + costly) = suitable for a mint
- PoS = requires trust (known + staked) = suitable for governed infrastructure

Gajumaru uses PoW on Groot (the mint) and permits any consensus on Associate Chains (where parties can be identified). This is not arbitrary — it directly follows from the leader selection analysis.

---
type: source
title: "Consensus (QPQ Public Wiki)"
slug: summary-qpq-wiki-consensus
source_file: raw/articles/qpq-wiki-consensus.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Consensus = agreement on a common view of state; no wall-clock time — relative sequence substitutes
  - Sequence is the foundational primitive; consensus reduces to leader selection
  - Groot uses PoW for leader selection; leader's word accepted as truth until replaced
  - PoW special property — participants need not be known or trusted (trustless = anonymous)
  - Trustless and anonymous required for a mint to function properly
  - PoS "nothing at stake" problem — stake without external value provides no real deterrent
  - PoS requires known/trusted actors to avoid attacks; conflicts with open/trustless operation
related: [[groot]], [[tea-trilemma]], [[cuckoo-cycle]], [[gaju-token]]
confidence: high
---

# Consensus (QPQ Public Wiki)

QPQ's explanation of consensus in distributed systems and its implications for Gajumaru, authored by [[peter]] (Peter Harpending).

## What is Consensus?

In distributed systems, **consensus** = finding agreement on a common view of state at a given time.

The problem reduces to **sequence**: there is no absolute wall-clock time in distributed systems, but relative sequence can be established concretely. Sequence becomes the basis for all notions of "time" in a DLT.

## Leader Selection as Consensus

Once sequence matters, consensus becomes the problem of **who gets to write the next entry**. A single leader can be selected; whatever that leader says is accepted by all nodes as agreed truth until replaced. This reframes "consensus" as "leader selection."

## Gajumaru's Approach: PoW

Groot uses **Proof of Work** for leader selection. PoW has a special property among all leader-selection mechanisms:

> **Participants need not be known, nor do they need to be trusted.**

Trustless and anonymous are synonymous in this context. This is a *requirement* for a mint to function properly — any mint that requires knowing its participants can be captured or gatekept.

## Proof of Stake: Structural Weaknesses

PoS differs radically from PoW:

- **Requires known/trusted actors**: PoS systems are vulnerable to various attacks unless actors are known and trusted to some degree.
- **"Nothing at stake" problem**: If the collateral put at stake is not externally valuable (i.e., independent of the staking system), then sacrificing it carries no real cost. A malicious actor can attack freely if the stake was never worth anything outside the system.

## The Research Landscape

The distributed systems consensus field catalogues tradeoffs across multiple axes:

| Axis | Options |
|------|---------|
| Identity | Identified vs anonymous |
| Trust | Trusted vs trustless |
| Intent | Malicious vs benign |
| Access | Closed vs open |

Different contexts require different mechanisms. No single consensus approach is universally optimal.

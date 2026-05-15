---
type: source
title: "Blockchain Trilemma (QPQ Public Wiki)"
slug: summary-qpq-wiki-blockchain-trilemma
source_file: raw/articles/qpq-wiki-blockchain-trilemma.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Blockchain trilemma — a ledger system can be secure, distributed, or scalable; pick two
  - Engineering trilemma — cheap, fast, or correct; pick two (the framing analogy)
  - CAP theorem — consistency, availability, partition tolerance; pick two
  - Algorand favours security over availability — drops partition tolerance (network stops on split)
  - Gajumaru solves the blockchain trilemma via its architecture and approach to consensus
  - Instant finality claims require scrutiny in the face of network splits (CAP/partition tolerance)
related: [[tea-trilemma]], [[gajumaru-architecture]], [[groot]], [[associate-chains]]
confidence: high
---

# Blockchain Trilemma (QPQ Public Wiki)

QPQ's analysis of the blockchain trilemma and its connection to the CAP theorem in distributed systems, authored by [[peter]] (Peter Harpending).

## Three Analogous Trilemmas

| Domain | Trilemma |
|--------|---------|
| Engineering | Cheap, fast, or correct — pick two |
| Distributed systems (CAP) | Consistency, availability, or partition tolerance — pick two |
| Ledger systems (Blockchain) | Secure, distributed, or scalable — pick two |

## The CAP Theorem

**C** — Consistency: all nodes give the same response to a query  
**A** — Availability: the system is highly responsive  
**P** — Partition tolerance: if the network splits, both parts behave correctly

The laws of physics conspire such that any system can achieve at most two simultaneously. The designer's task is choosing which quality to sacrifice in a given context.

## CAP Applied to DLTs

Since DLTs are distributed systems, CAP applies directly.

**Algorand**: Favours security over availability. During a sufficiently large network split, the Algorand network simply stops — it drops **P** (partition tolerance). This means any claim of "instant finality" must be interrogated: can the system guarantee finality during a network partition?

## Gajumaru's Approach

> "The Gajumaru solves the blockchain trilemma in a novel way that is related to both its architecture and its approach to consensus."

The mechanism is described more fully in [[gajumaru-architecture]] and [[groot]] — the TEA trilemma framework and the RIPA model together address what the blockchain trilemma describes.

## Significance

QPQ frames the blockchain trilemma not as a permanent constraint but as a problem of *system design*. When a system separates concerns appropriately (trustless resource layer + governed infrastructure layer), the trilemma dissolves into tractable design choices rather than an inescapable three-way trade-off.

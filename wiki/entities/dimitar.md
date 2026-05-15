---
type: entity
entity_type: person
title: "Dimitar (Implementation Engineer)"
aliases: [dimitar, dim]
sources: [[summary-why-the-gajumaru-and-how-it-works]], [[summary-gaju-mining-journey-update]]
related: [[associate-chains]], [[gajumaru-architecture]], [[craig]], [[ulf]], [[qpq-ag]]
created: 2026-05-15
updated: 2026-05-15
cluster: core-protocol
contradictions: []
open_questions:
  - Full name not given in source — first name only
  - Formal title within QPQ AG unknown
---

# Dimitar (Implementation Engineer)

Dimitar is an implementation engineer at QPQ AG, working specifically on the Associate Chain interplay — how chains communicate, share economy, and maintain transaction isolation.

## Role

Dimitar explains the practical implementation of Associate Chains: transaction throughput isolation, consensus flexibility, independent databases, and cross-chain Gaju transfers. He is referred to as "Dim" by colleagues.

## Key Contributions (from source)

- Articulates the Associate Chain transaction isolation model — each chain owns its CPU space and throughput, so one chain's traffic cannot congest another
- Explains consensus flexibility: PoW, PoS, PoA, or any model suitable for the business case
- Describes per-chain block size and custom functionality settings

## Personal Notes

Dimitar had a new baby arrive during the intense November 2024 – August 2025 development period. Gregory Chew notes: "He took no lessons from me on prioritizing time with the baby, although he probably handled it better than I did."

## Known To

- [[craig]] — lead architect; Craig defers Associate Chain implementation details to Dimitar
- [[ulf]] — blockchain infrastructure colleague; same core technical team
- [[gregory-chew]] — CEO, QPQ AG (references "Dimmitar" in team update)

## Sources
[[summary-why-the-gajumaru-and-how-it-works]]

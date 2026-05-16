---
type: entity
entity_type: person
title: "Craig Everett (Chief Product Officer)"
aliases: [craig, craig-everett]
sources: [[summary-why-the-gajumaru-and-how-it-works]], [[summary-gajumaru-new-blockchain-demo-1]], [[summary-qpq-wiki-grids]], [[summary-qpq-wiki-mempool]]
related: [[gajumaru-architecture]], [[associate-chains]], [[groot]], [[qpq-ag]], [[dimitar]], [[ulf]], [[grids]]
created: 2026-05-15
updated: 2026-05-15
cluster: core-protocol
contradictions: []
open_questions:
  - Is "Chief Product Officer" his current title, or has it evolved since March 2024?
---

# Craig Everett (Chief Product Officer)

**Craig Everett** is the Chief Product Officer (CPO) of [[qpq-ag]] and the lead architect of the Gajumaru blockchain. He is based in **Okinawa, Japan**, where he both developed the system's tree-structure scalability model and coined the project's name.

## Role

Craig designed the core Gajumaru architecture: the partition-to-tree-structure scalability model, the PoW mint as trust anchor, and the Associate Chain framework. He speaks with authority on the rationale behind every major architectural decision.

## The Naming Story

While working through the scalability problem (a tree structure of a root mint + independent chains), Craig looked outside his office window in Okinawa and saw a *gajimaru* tree:

> "It grows first from a single bowl but pretty quickly it starts dropping these support roots and they wind up becoming trunks of their own — which is similar to the structure that we actually want."

He chose "Gajimaru" as a working name because it was "a crazy name, easy to search for later." It stuck.

## Known To

- [[gregory-chew]] (CEO, QPQ AG) — appears together in QPQ content
- [[dimitar]] — implementation engineer Craig works closely with

## Product Philosophy

Craig's framing from Demo 1 (March 2024):
> "From QPQ's perspective it would have been great if there was already an awesome blockchain out there but there aren't any. So we had to solve that problem first."

> "QPQ yes is operating a blockchain. The business models though are concrete business models. The blockchain itself is not the business model."

Bitcoin-NG insight: "The design principle of Bitcoin-NG where proof of work [leader election] is separated from ledger updates and inclusion — that's a very clean, very natural separation of concerns. It should have been obvious years ago. Nobody picked up on that."

## GRIDS Authorship

Craig is the author of the **[[grids]]** technical specification (Gajumaru Remote Instruction Dispatch System, v5). Created 2025-01-17, last modified 2026-05-13, status "For Implementation." He also edited the Mempool page on the QPQ Public Wiki (2026-02-06, UTC+9 — confirming Japan timezone). This places Craig as the primary technical author of GRIDS, not just a design visionary.

## ZX / zxq9

The Gajumaru node stack requires **ZX**, a project management tool hosted at `zxq9.com/projects/zomp/`. The handle `zxq9` is associated with Craig Everett in the Erlang community — suggesting ZX is Craig's own tooling, not a third-party dependency. Unconfirmed in available QPQ sources.

> [!open_question]
> Is `zxq9.com` Craig Everett's domain? If confirmed, ZX is Craig's original project management tool used to run Gajumaru nodes — extending his authorship beyond GRIDS into the node infrastructure layer. Source: [[summary-qpq-wiki-install-erlang-and-zx]]

## Sources
[[summary-why-the-gajumaru-and-how-it-works]], [[summary-gajumaru-new-blockchain-demo-1]], [[summary-qpq-wiki-grids]], [[summary-qpq-wiki-install-erlang-and-zx]]

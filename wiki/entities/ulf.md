---
type: entity
entity_type: person
title: "Ulf Wiger (Chief Technology Officer)"
aliases: [ulf, ulf-wiger, uwiger]
sources: [[summary-gaju-mining-journey-update]], [[summary-gajumaru-new-blockchain-demo-1]]
related: [[craig]], [[dimitar]], [[gregory-chew]], [[qpq-ag]], [[groot]], [[protected-mining]], [[aeternity]]
created: 2026-05-15
updated: 2026-05-15
cluster: core-protocol
contradictions: []
open_questions:
  - Formal title within QPQ AG not confirmed in public sources
---

# Ulf Wiger (Chief Technology Officer)

**Ulf Wiger** (git handle: `uwiger`) is the Chief Technology Officer (CTO) of QPQ AG, responsible for the hive mining system and core Erlang/OTP infrastructure. His identity was previously listed as unknown; confirmed via commit authorship across multiple QPQ AG repositories.

## Identity Confirmation

Ulf Wiger (`uwiger`) appears as primary contributor and reviewer in:
- `gmserialization` — most recent commit April 17, 2026
- `gmconfig` — most recent pull request merges
- `enoise` — primary contributor
- `gmhive_client` — merged PR #20 (November 19, 2025)

Combined with the "Erlanger since 1992" characterisation from [[summary-gajumaru-new-blockchain-demo-1]], this matches Ulf Wiger's career precisely: he joined Ericsson's OTP team in the early 1990s and is one of the most prominent figures in the global Erlang community.

> [!note]
> This resolves the open question in prior versions of this page. Confidence: high.

## Background

Ulf Wiger has been programming in **Erlang** since **1992** — one of the earliest Erlang practitioners, predating Erlang's public release (1998). He **purchased the first commercial Erlang license in 1993**. He is deeply associated with Erlang/OTP at Ericsson, created foundational open-source Erlang projects, and worked on the Aeternity blockchain project, which shares Gajumaru's core Erlang/OTP lineage.

Gregory Chew (Demo 1, March 2024):
> "One of the leading lights in the Erlang world. He's been an Erlanger since 1992 and for that reason was vital to making all of these pieces work."

## Role at QPQ AG

Three distinct contributions identified:

### 1. Erlang/OTP Core Infrastructure

Gajumaru runs on Erlang/OTP, inherited from [[aeternity]]'s codebase. Ulf's expertise across:
- **enoise** — Erlang implementation of the Noise protocol (DH448 + Blake2s) for encrypted P2P node communication
- **gmconfig** — JSON-Schema-based configuration management for the Gajumaru node
- **gmserialization** — Serialization helpers (static + dynamic RLP-based) for Gajumaru data formats
- **gmhive_client** — Hive mining client; port 17888; connects to `gajumining.com` via public key

### 2. Hive Mining Concept and Implementation

Designed and built the entire SaaS hive mining infrastructure from scratch:

> "Ulf has had lots of fun with the task of: 'Hey, we're going to do this hive mining concept. Just poop out a whole hive mining concept and make everything work with dividend-writing contracts that tie it all together on the blockchain.'"

The hive mining system was a global first — no reference implementations existed. Ulf built it without a "Reddit forum you could go to."

### 3. Blockchain Scalability

"Ulf has been doing the work to make sure that the blockchain itself, the hive miners and so on can actually handle this" — ensuring infrastructure can scale from 300 miners toward the millions targeted.

## Known To

- [[craig]] — lead architect; works alongside on core protocol
- [[dimitar]] — implementation engineer; same core technical team
- [[gregory-chew]] — CEO; introduced Ulf at Demo 1 as "one of the leading lights in the Erlang world"

## Sources
[[summary-gaju-mining-journey-update]], [[summary-gajumaru-new-blockchain-demo-1]]

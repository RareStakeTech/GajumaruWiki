---
type: source
title: "Gajumaru - New Blockchain - Demo 1 (YouTube, March 2024)"
slug: summary-gajumaru-new-blockchain-demo-1
source_file: raw/transcripts/gajumaru-new-blockchain-demo-1.md
author: "Gregory Chew (likely host), Craig Everett (CPO), Dimitar (demo), Ulf (Bitcoin-NG explanation)"
date_published: 2024-03-01
date_ingested: 2026-05-15
key_claims:
  - Craig Everett is the full name of the lead architect; his title is Chief Product Officer (CPO)
  - Ulf is an Erlang expert since 1992 — vital to making all the pieces work
  - "300 TPS, 2-3 second confirmation" — faster than Visa; demonstrated live
  - QPQ's business model is products built ON blockchain — not the blockchain itself
  - Bitcoin and Ethereum are proof-of-concepts that never became MVPs; "industry replete with proof of concepts"
  - The closing speaker (likely Gregory Chew) has been working on a new economic system for 22 years; explored DAGs in 2017
  - Dimitar sent 42 Gajus to Craig with message "happy birthday" — live demo of on-chain messaging
  - Bitcoin-NG separates proof of work (leader election) from transaction processing (microblocks)
  - Sophia smart contract language designed to fix known Solidity security flaws
  - Next demo announced: market operations (QuidProQuo)
related: [[gajumaru-architecture]], [[groot]], [[craig]], [[dimitar]], [[ulf]], [[gregory-chew]], [[qpq-ag]], [[gaju-token]]
confidence: high
---

# Summary: Gajumaru - New Blockchain - Demo 1 (March 2024)

**Earliest video in the series.** Live product demo showing the Gajumaru blockchain running in real time. Teams introductions with **full names and titles**. Closing remarks from the likely founder (Gregory Chew) framing the 22-year vision. Confidence: **high** — live demo of a working system, primary sources speaking.

---

## Team Introductions (First Ever on Camera)

The host (likely [[gregory-chew]]) introduces the team by name:

| Person | Introduction |
|--------|-------------|
| **Ulf** [surname unclear in subtitles] | "One of the leading lights in the Erlang world. He's been an Erlanger since 1992 and for that reason was vital to making all of these pieces work." |
| **Craig Everett** | "Chief product officer. Working in distributive computing and computing systems for a very long time delivering real world products and real world solutions." |
| **Dimitar** | "A crypto OG who has been in this space since the beginning developing solutions working on cryptographic principles and consensus algorithms." |

**Key revelation:** Craig's full name is **Craig Everett**, title is **Chief Product Officer (CPO)**.

---

## Live Demo — Dimitar

Dimitar demonstrates the chain live:
1. Opens wallet; shows balance
2. Sends **42 Gaju** to Craig's address
3. Types message: "happy birthday"
4. Clicks Send → transaction appears on GajuExplorer within seconds
5. Transaction shows: "happy birthday" + 42 Gajumarus — confirming on-chain messaging

This is the earliest recorded live demonstration of the Gajumaru blockchain.

---

## Bitcoin-NG Explanation — Ulf

Ulf explains the Bitcoin-NG protocol clearly:

**Standard Bitcoin:** Miners compete to solve a 10-minute puzzle → winner produces one block → ~3-5 TPS, up to 10-minute response times. Fee bribery to get included faster.

**Bitcoin-NG (Gajumaru):** Miner solves a puzzle (calibrated to ~3 minutes) → becomes **leader** → produces microblocks packed with transactions every 2-3 seconds until next leader is elected. Result: **up to 300 TPS, 2-3 second response times**.

> "Immediately if the chain is idle and a transaction pops up."

---

## Craig's Product Framing

Craig positions Bitcoin and Ethereum as **proof of concepts** that were never cleaned up into production-grade products:
- Bitcoin: proves PoW-based digital currency is possible. But "only barely proves it can work."
- Ethereum: proves blockchain can be used as a state machine. But EVM pitfalls mean "you can't prove anything about a contract on Ethereum."

QPQ's position:
> "QPQ yes is operating a blockchain. The business models though are concrete business models. The blockchain itself is not the business model."

The motivation: QPQ had businesses to build on blockchain → couldn't find a working blockchain → had to build one first.

Craig's key design insight: Bitcoin-NG's separation of proof-of-work (leader election) from transaction processing (microblocks) is "a very clean, very natural separation of concerns. It should have been obvious years ago. Nobody picked up on that."

---

## Closing — Likely Gregory Chew (22-year vision)

> "I've been working at this for 22 years now. The idea of how to build a new economic system that everybody can participate in."

Timeline of the closing speaker's journey:
- ~2002: began working on new economic system concept
- 2017: "started this again" — explored directed acyclic graphs (DAGs) as potential solution
- DAGs "ended up becoming EVM-driven systems with all the same flaws"
- Eventually: met Craig, Ulf, Dimitar and built Gajumaru

> "I've never released a white paper to talk about how somebody can give me money so that I can build something that may or may not work... I've taken that hard road because I think the integrity of this is important."

Closing announcement: "The next demo will be looking at how we can enable market operations" — the QuidProQuo marketplace demo was planned from the start.

---

## Notes on Erlang

Ulf being an Erlanger since 1992 is significant: Gajumaru inherits from Aeternity, which is built on Erlang/OTP. Ulf's deep Erlang expertise was "vital to making all of these pieces work." This explains why Gajumaru runs on Erlang/OTP — it's not accidental, it's Ulf's domain.

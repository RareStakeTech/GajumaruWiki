---
type: source
title: "The Internet of Economics — The Gajumaru & QPQ Un-White Paper (Updated 260331)"
slug: summary-unwhitepaper
source_file: raw/articles/gajumaru-un-white-paper.md
author: "QPQ AG"
date_published: 2026-03-31
date_ingested: 2026-05-15
key_claims:
  - Groot uses Bitcoin-NG consensus and Cuckoo Cycle proof-of-work
  - Groot is 1846200x more transactionally efficient than Bitcoin (updated from 553800x)
  - Over 300 TPS; commercial settlement 2-3 seconds; absolute finality 3-4 minutes
  - QPQ proposes TEA trilemma (Trustlessness/Efficiency/Accountability) replacing Buterin's blockchain trilemma
  - RIPA has two traversal paths: RPA (trustless, direct) and RIPA (via governed infrastructure)
  - All code GPL3 open source; defensive patents filed on Red Hat model
  - Built on Bitcoin-NG, Cuckoo Cycle, and Aeternity's Sophia/FATE VM
  - Core test for any blockchain: "trust the message not the messenger, securely at scale"
  - Bitcoin is Newcomen — Gajumaru is the Watt engine that scales the proof
  - Garden of Eden problem: monetising base layer requires governance, making it infrastructure not resource
related: [[groot]], [[gajumaru-architecture]], [[ripa-model]], [[gaju-token]], [[associate-chains]], [[tea-trilemma]], [[cuckoo-cycle]], [[qpq-ag]]
confidence: high
---

# Summary: The Gajumaru & QPQ Un-White Paper

178-page document. Updated 31 March 2026. Extracted via Tesseract OCR — minor OCR artefacts may exist in the raw source.

---

## Executive Summary (as stated)

**The Problem:** The global economy is fractured, fragmented, disconnected. The architecture rewards controlling bottlenecks over creating value. Blockchain promised to change this but replicated the same pattern: $120B+ VC produced more fragmentation and a global unlicensed gambling industry.

**What We Built:** The Gajumaru is "the world's first digital economic resource layer: an actual blockchain that actually works, minting real money that really works." Groot has been operational since 22 October 2024.

**The Core Test:** "Does this allow us to trust the message rather than the messenger, securely at scale?" Every legitimate blockchain application flows from this. The Gajumaru passes it; $120B+ of investment failed to.

---

## The Problem: Global Financial Infrastructure Failures

The Un-White Paper quantifies the scope of the problem in Part One:

- **1.3 billion unbanked adults** globally — for them, exclusion is not frustration, it is structural
- **1 billion people lack official identification** — 26% of the unbanked cannot open an account without government-issued ID
- **$5.7 trillion SME financing gap** — exists "not because capital is scarce, but because the infrastructure to move it is broken"
- **Correspondent banking down 39%** since 2013 — the very pathways for international transfers are contracting
- **Card network fee extraction**: 2–3% of every transaction value — extracted as rent from captive participants
- **Correspondent bank hops**: "$100 transfer becomes $80 received"
- **SWIFT geopolitical control**: "SWIFT, a Belgian cooperative, controls international payment messaging and serves American foreign policy interests, as Russia, Iran, Venezuela and others discovered when excluded from the system"
- **Bills of lading digitisation alone** could save $6.5 billion annually in direct costs
- **Bitcoin practical costs**: 3.25 TPS; $50–100 in fees during congestion; settlement from 1 hour to days for high-value transactions; "you cannot buy a coffee with Bitcoin; you cannot pay salaries"

**Payment network power framing** (quoted in Mining Journey Update as "Craig says this very well in the longer form video"):
> "The issue is not about making things illegal. It is about making them impossible."

Steam has now entered its TOS that games falling out of favour with Mastercard/Visa are not allowed on the market. Michael Nolles (of his "ex-platform") was debanked by Stripe with no stated reason — "apparently he was debanked but it's very unclear why." QPQ frames this as the failure mode of controlled payment infrastructure.

## Part One: First Principles

### The RIPA Model — Two Paths

**RIPA characteristic table (from document):**

| Characteristic | Resource (Groot) | Infrastructure (Associate Chains) |
|---|---|---|
| Governance | None | Yes — by design |
| Operator | None | Yes — entity or consortium |
| Rules | Algorithmic consensus only | Customised to jurisdiction/purpose |
| Efficiency | Lower (trustless has costs) | Higher (trust enables efficiency) |
| Control | No one can say no | Operators can say no |
| Accountability | Not required (no one to hold accountable) | Essential — whoever can say no must be accountable |
| Analogy | High seas, outer space, internet | Coastal waters, ports, intranet |

**Path 1 — RPA (Resource → Platform → Application):** Skip infrastructure. Operate directly on Groot. Trustless, permissionless, public ledger. No consumer protection. No dispute resolution. Available to anyone, anywhere. Costs: inefficiency vs trusted infrastructure, full transparency, no recourse for lost keys/wrong address.

**Path 2 — RIPA (Resource → Infrastructure → Platform → Application):** Use governed Associate Chains. Faster, cheaper, regulated, consumer protections, familiar UX. Costs: operators can say no, freeze assets, change rules. The Associate Chain connected to Groot is different: participants have a real exit. This disciplines operator behaviour.

**Why both paths must exist:** RPA disciplines RIPA (operators who know participants can leave must remain fair). RIPA disciplines RPA (ensures trustlessness is a choice, not a sentence imposed by absence of alternatives).

### TEA Trilemma
QPQ rejects Buterin's trilemma (decentralisation/security/scalability — "not a law, it's what happens when you solve contradictory requirements in a single system"). Proposes TEA: **Trustlessness, Efficiency, Accountability**. Anonymous proof-of-stake fails all three: must trust validator set not to collude, cannot identify/sue/replace operators. See [[tea-trilemma]].

### The Garden of Eden Problem
Every blockchain faced the temptation to monetise the base layer. Monetisation requires control. Control requires governance. Therefore monetised base layer = infrastructure, not resource. Permanent. Once governance is introduced, it cannot be removed. This is why $120B+ VC produced nothing useful: the capital was deployed by entities who wanted to extract, and resource layers serve everyone (i.e. no monopoly). QPQ holds no special position in Groot's consensus. Cannot change rules, freeze assets, or exclude participants.

### Bitcoin is Newcomen
Newcomen's 1712 atmospheric engine proved steam could do mechanical work, but was too inefficient to deploy at scale. Watt's separate condenser (1769) made it deployable. Bitcoin = Newcomen: proof of concept, genuinely necessary, insufficient to scale. Gajumaru = the Watt engine.

### Economic Emancipation
Three Restorations: **Money** (finite, holdable, undebaseable, transferable without permission), **Assets** (direct ownership via keys, no intermediary can revoke), **Data** (GRIDS protocol: merchants receive payment confirmation, not identity). Economic emancipation = not the absence of governance, but the presence of genuine choice.

---

## Part Two: The Architecture

### Groot — Consensus Mechanisms

**Bitcoin-NG** (Eyal et al., 2016, USENIX NSDI): Decouples leader election from transaction serialisation. Microblocks every 3 seconds carry transactions; keyblocks every 2 minutes elect leaders and confirm finality.

**Cuckoo Cycle** (Tromp, 2014/2019): Memory-bound, graph-theoretic PoW. Enables decentralised mining without ASIC arms race. See [[cuckoo-cycle]].

**Performance specifications:**
- >300 transactions per second
- Commercial settlement: 2–3 seconds (next microblock)
- Absolute finality: 3–4 minutes (2 keyblocks)
- Efficiency: 1,846,200× more transactionally efficient than Bitcoin
- Security: at least 8.23× greater security in commercial utilisation

**Settlement mechanics:** "Absolute finality" = no transaction older than 2 keyblocks can be ejected. Graceful degradation if network partitions.

**Settlement by value (examples from document):**
- $5 coffee: microblock confirmation (2–3 sec) sufficient
- $5,000 holiday package: one keyblock
- $50,000 car: absolute finality (2 keyblocks, 3–4 min)
- $500,000 house: absolute finality with additional time buffer

### Gaju Token — Sound Money
Symbol: **7XGaju** (noted in document). Fixed supply 1 trillion over 87.5 years, then no more, ever. Commodity money properties: finite, holdable, not subject to debasement, transferable without permission. QPQ positions it as restoring "sound money" — functioning non-debaseable currency as reference point.

**Mining: Cuckoo Cycle** ensures no ASIC dominance. Mining distribution designed for 87.5-year long-term sustainability.

**Transit currency:** Groot is designed as a neutral transit currency between regulated systems — not requiring everyone to use it, but providing a reference point and exit.

### Technical Foundations (peer-reviewed)
- **Bitcoin-NG**: Eyal et al., 2016 — implemented by QPQ
- **Cuckoo Cycle**: Tromp, 2014/2019 — implemented by QPQ
- **Sophia + FATE VM**: From Aeternity's technical spec (Aeternity Dev Team, 2020). Aeternity built a smart contract language/VM; QPQ built on this foundation and added commercial-scale features. FINMA compliant.
- **GPL3**: All code open source, including GajuDesk and GajuMobile (to be open-sourced)
- **Patents**: Filed, pending, published. Licensed defensively — Red Hat model. Protect freedom to operate for ecosystem.

### Security: Zero Dependencies
QPQ's philosophy: zero external dependencies. MetaMask runs on 212,620 NPM packages — QPQ cites September 2025 NPM supply chain attack (packages with 2B+ combined weekly downloads compromised) as validation. GajuDesk has zero dependencies, original codebase.

**GRIDS** (Air-Gapped Signing): Security hierarchy — Level 1: Secure Enclave (operational), Level 2: GRIDS hardware wallet (next phase), Level 3: Full QPQ hardware stack (planned). GRIDS sends payment confirmation only — merchants never receive user identity.

### GajuDEX
AMM + CLOB with stop losses. Immutable post-deployment. No admin keys. Sophia language (FINMA compliant). First DEX to pass FINMA substance-over-form test for genuine decentralisation. Two deployments: on Groot and on known Proof-of-Stake Associate Chain.

---

## Part Three: Real World Economy

### Associate Chain Architecture
Master/sub-chain hierarchy. Banking consortium example: Master Associate Chain (shared standards) → sub-chains per institution (private internal operations) → Master connects to Groot (neutral settlement). Solves the consortium governance problem by removing it from the base layer.

Stablecoin example: global Master Chain with national sub-chains for local regulation compliance.

### GL1 — Global Layer 1 (Singapore MAS Consortium)

The Un-White Paper explicitly names the **Global Layer 1 (GL1)** initiative — a consortium led by the **Monetary Authority of Singapore** — as the institutional validation case for Gajumaru's Master Associate Chain design:

**GL1 Participants:** Standard Chartered, Citi, JPMorgan, MUFG, BNY, Societe Generale-FORGE, Euroclear

> "This consortium operates a Master Associate Chain. This is their GL1."

**Why previous consortia failed:** "Previous attempts at this, including R3's Corda and the Regulated Liability Network, failed because the governance question proved unanswerable." Gajumaru's answer: the governance question is unanswerable for a base layer, so Groot provides a governance-free foundation below all institutional infrastructure.

**The institutional advantage inversion:** "The institutions best positioned to thrive are, ironically, the very institutions that today profit from the system the Gajumaru changes. They have the expertise, the regulatory standing, the client relationships, and the institutional knowledge. What they lack is the connective tissue that lets them deploy those assets globally without surrendering sovereignty to a competitor's platform or a consortium they do not control. The resource layer provides that connective tissue."

### IP & Licensing
GPL3 open source — built-in patent peace provision. "Defensive, not offensive." Freedom to build for all participants.

---

## Part Four: Why Everyone Else Failed

### TEA Analysis of Industry Failures
**Four Patterns of Failure:**
1. Performance claims that defy physics (theoretical max ≠ settled throughput; consensus votes counted as user transactions; failure rates concealed)
2. AI-generated obfuscation
3. Centralisation hidden behind language (DAO governance tokens, foundation delegation)
4. Foundations — the "Garden of Eden" capture: subsidy trap, vesting asymmetry, governance capture through delegation

### Specific Projects Analysed
- **Ethereum/Buterin**: 4–6 entities control 51–62% of stake; Buterin stated "The person deciding the new EF leadership team is me"; former employees described "cosplaying community governance"
- **Solana**: 70% of validators cannot survive without Foundation delegation
- **DFINITY**: 48.5% to foundation/insiders, 1.5% to "community"
- **Arbitrum, Base**: Layer 2 centralisation — censorship problem
- **ZKSync**: Soundness failure; bot army manipulation
- **Lightning Network**: Routing wall, centralisation engine, custodial trap
- **Layer 2s generally**: Not a response to scaling — a roadmap. "What Layer 2s actually are": centralised infrastructure wearing a decentralised label

### Layer 2 Fallacy
Ethereum's October 2020 pivot to Layer 2 preserved: (a) ETH value, (b) developer ecosystem, (c) VC investment, (d) foundation power. What it gave up: actual decentralisation. February 2026: public admission of limits. The scaling crisis was real; the solution was to offload it to infrastructure that cannot pass the TEA test.

---

## Key Quotes

> "The purpose of blockchain is to be able to trust the message rather than the messenger, securely, at scale."

> "We are not anti-governance. We are anti-monopoly-on-governance."

> "Economic emancipation is not the absence of governance. It is the presence of choice."

> "Bitcoin is Newcomen. Not a failure. A proof — genuine, necessary, and insufficient to reach what it demonstrated was possible. The Gajumaru is the engine that can."

> "The window is closing. Network effects lock in early movers. First to critical mass wins."

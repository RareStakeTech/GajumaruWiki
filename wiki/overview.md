---
type: overview
title: "Gajumaru Blockchain — Central Wiki Overview"
created: 2026-05-15
updated: 2026-05-16
confidence: high
---

# Gajumaru Blockchain — Overview

Gajumaru is a Swiss-built blockchain ecosystem developed by [[qpq-ag]] (CEO: [[gregory-chew]]). It launched its public MainNet on **April 26, 2026** (technical launch April 6/7). The native token is [[gaju-token]] (1 trillion fixed supply over 87.5 years), in active circulation since October 16, 2025.

**Current wiki coverage (as of 2026-05-16):** 61 sources audited (46 raw + 15 web-fetched) ✅ — 100% coverage. 20 concept pages. 45 video transcripts processed.

---

## What Is Gajumaru?

Gajumaru is a layered blockchain platform built around the [[ripa-model]] (Resource, Infrastructure, Platform, Application). Its base layer, [[groot]], has been operational since **October 22, 2024** and is **1,846,200× more efficient** than Bitcoin by transaction (up to 9,231,000× at upper Cuckoo Cycle bound). [[Associate-chains]] allow sovereign and independent blockchains to connect natively to Groot with no bridges.

**Architectural thesis:** Bitcoin proved the concept; Ethereum proved programmability; neither was ever evolved past proof-of-concept stage. Gajumaru is the production-grade implementation of the Bitcoin whitepaper's original stated purpose — "a peer-to-peer electronic cash system."

The first sovereign deployment is [[ltin]] (Liechtenstein Trust Integrity Network), a national digital economy blockchain for Liechtenstein operating under EU MiCAR, with Telecom Liechtenstein as majority owner and QPQ as technical partner. **LTIN not yet launched** as of 2026-05-16; Q3/Q4 2026 target.

QPQ generated CHF 1M+ in SaaS mining revenue with zero marketing budget, demonstrating organic product-market fit pre-MainNet.

---

## Cluster Map

### Core Protocol
- Hub: [[gajumaru-architecture]]
- [[groot]] — Base resource layer; Bitcoin-NG consensus; 1,846,200× Bitcoin efficiency; genesis 22 Oct 2024
- [[associate-chains]] — Native multi-chain interoperability; no bridges; 260-jurisdiction scaling (144M× TPS theoretical); GL1 context
- [[bitcoin-ng]] — Consensus protocol used by Groot; separates leader election from transaction serialisation
- [[cuckoo-cycle]] — Memory-bound PoW; enables commodity hardware mining; 87.5-year distribution design
- [[ripa-model]] — Four-layer stack model (Resource / Infrastructure / Platform / Application)
- [[tea-trilemma]] — QPQ's analytical framework replacing Buterin's trilemma (TEA = Trustlessness + Efficiency + Accountability)
- [[sophia-fate]] — Smart contract language (Sophia) and VM (FATE); ISC-licensed from Aeternity; formal verification support
- [[aeternity]] — Sister project; source of Sophia/FATE; Ulf Wiger co-authored Erlang/OTP implementation
- [[qpq-software-stack]] — Erlang/OTP foundation; GajuNode; wire protocol
- Entity: [[ltin]] — First sovereign Associate Chain (Liechtenstein; Q3/Q4 2026)

### Tokenomics & Economics
- Hub: [[gaju-token]] — 1 trillion supply, 87.5-year Fibonacci distribution, 1 puck = 10⁻¹⁸ Gaju
- [[protected-mining]] — Mining window ends ~March 2027; G20-economy-on-chain goal; "juice" = block rewards
- [[hive-mining]] — SaaS mining model; dividend-writing smart contracts; Ulf Wiger's design
- [[price-signal-economy]] — Micropayment price signals; puck economy; bot farm destruction; Milton Friedman
- [[monetary-philosophy]] — Austrian economics; real money theory; gold metastability; JP Morgan 1912; Graeber counter-reference; IMF critique

### Developer Ecosystem & Products
- Hub: [[gajumaru-product-suite]] — GajuDesk, GajuMobile, GajuMine, GajuDEX, GajuMarket, GajuPay, GajuAuth, GajuPort, GajuVault, GajuMall, GajuSafe, Da Vinci Protocol
- [[grids]] — Gajumaru Remote Instruction Dispatch and Serialisation; passwordless auth; three hardware stages
- [[state-channels]] — On-chain BOLT-named channels; A2P/A2A/social feed; Lightning comparison; machine economy
- [[internet-of-economics]] — Two-internet thesis; three restorations; machine economy; statists/corporists frame
- [[quantum-resistance]] — ML-DSA-44/65/87; Erlang/OTP 28.1; 10-20yr threat timeline; Ulf Wiger authored
- [[gajudex]] — DEX for Gaju liquidity; Q2 2026
- Entity: [[qpq-ag]] — Builder; CHF 1M+ revenue; QPQ Capital AG (SRO, regulated services); QPQ IaaS AG (Einsiedeln)

### Team Entities
- [[gregory-chew]] — CEO; 24-year project; HSBC 2002 demo; DC/Liechtenstein stage appearances; Graeber counter-reference
- [[craig]] — CPO (Craig Everett); zxq9; Okinawa, Japan; Erlang/OTP veteran; GajuDesk co-author
- [[ulf]] — CTO (Ulf Wiger); uwiger; Swedish; first commercial Erlang license 1993; quantum-resistance blog author
- [[dimitar]] — CDO (Dimitar Ivanov); blockchain implementation; AC → Groot finality (Dimitar's area)
- [[peter]] — Research Lead (Peter Harpending); PoW theory blog; GajuDesk co-author

---

## QPQ's Core Argument in One Paragraph

Bitcoin proved that a cryptographic puzzle can serve as a physics-equivalent constraint on money supply — identical in function to gold's stellar-nucleosynthesis origin. But Bitcoin's proof-of-concept block structure (bundling leader election and transaction inclusion in one unit) was frozen at the moment the protocol gained monetary value. Every attempt to fix this since (Lightning, Runes, Ordinals, Bitcoin OS) is a dirty hack. Gajumaru implements the correct architecture from the start: Bitcoin-NG's separation of consensus from transaction processing, Cuckoo Cycle's memory-bound PoW for broad participation, Associate Chains for compliant innovation without requiring whole-network governance, and GRIDS for a passwordless transactional internet layer. The result is Bitcoin made 1,846,200× more efficient — with the composability to serve every regulatory, national, and industrial environment simultaneously.

---

## Key Open Questions (as of 2026-05-16)

| Question | Status | Notes |
|----------|--------|-------|
| AC → Groot finality cooperation | ❓ Unknown | Dimitar's area; promised in a later video |
| Protected mining end date | ⚠️ Conflicted | March 29 vs 30 vs 31, 2027 — three sources |
| LTIN launch | ⏳ Not yet | Q3/Q4 2026 target; confirmed by qpq.swiss + gajumining.com |
| Live miner count & Gaju price | ❓ Inaccessible | GajuExplore TLS cert error; no public dashboard |
| Un-White Paper Technical Paper | 📥 Not ingested | Exists; not yet in raw/ |
| QPQ Overview/One-Pager PDFs | 📥 Blocked | Image-based; user OCR required |
| Groot efficiency contradiction | ⚠️ Open | 553,800× (Year in Review) vs 1,846,200× (Un-White Paper) |
| QPQ IaaS AG vs QPQ AG | ❓ Unknown | Einsiedeln vs Zug — exact functional division unknown |
| Santosh | ❓ Unknown | Last name, role unknown |
| Shane Preater | ❓ Unknown | Community contributor? QPQ employee? |

---

## Resolved Since Bootstrap

| Fact | Resolution |
|------|-----------|
| Groot genesis date | October 22, 2024 |
| First Gaju circulation | October 16, 2025 |
| MainNet public launch | April 26, 2026 (15yr anniversary of Satoshi's last message) |
| Efficiency figure | 1,846,200× (working figure; Un-White Paper authoritative) |
| Consensus protocol | Bitcoin-NG + Cuckoo Cycle + Witness layer |
| Team identities | Craig Everett (CPO/zxq9), Ulf Wiger (CTO/uwiger), Dimitar Ivanov (CDO), Peter Harpending (Research), Benno Raeber (CLO), Jeff Thomson (Product Research), Jarvis Carroll (R&D), Cecille de Jesus (Comms), Adam Percy (Community) |
| Greg's 24-year vision | Traces to 2002 HSBC GPRS/2G demo |
| Liechtenstein claim | "Trusted by the sovereign state of Liechtenstein" — public on gajumining.com |
| Quantum approach | ML-DSA-44/65/87; Erlang/OTP 28.1 (Sept 2025); 10-20yr threat horizon |
| Mythos AI | April 7, 2026; Claude Mythos / Project Glasswing; OpenBSD 27-yr RCE |
| NPM supply chain attack | September 2025; 18 packages; 2B weekly downloads |

---

## Revision History

| Date | Change |
|------|--------|
| 2026-05-15 | Initial placeholder created at vault bootstrap |
| 2026-05-15 | First ingest: QPQ 2025 Year in Review. Full overview populated. |
| 2026-05-16 | Major update: 61 sources complete; full cluster map; open questions table; resolved facts table; QPQ core argument synthesis; team roster |

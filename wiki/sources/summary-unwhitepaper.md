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
  - GajuDEX scores 39/40 on genuine-decentralisation framework; all major DEXs score 20 or below (DINO problem)
  - Gaju minting follows Fibonacci-derived curve over 87.5 years — smooth decline, no halving events; Period 1 reward 1,554,161 Gaju per keyblock
  - Burned Gajus returned to unmined pool, not destroyed — preserves total supply integrity
  - Layer 2 blob arithmetic is mathematically impossible: EIP-4844 provides 1,179,648 bytes/block shared across all L2s; 1,000 TPS requires 4,260,000 bytes/block
  - Bitcoin security budget crisis: transaction fees cover only ~0.6% of annual block subsidy revenue; Lightning generates ~$137,000/year in routing revenue
  - OtterSec (March 3, 2026) found Fiat-Shamir transcript binding vulnerability in 6 production zkVMs including Jolt, Nexus, Cairo-M
  - GPL3 Section 11 patent peace: any contributor who initiates patent litigation loses their GPL3 licence immediately
  - Swiss DLT Act 2021 makes tokenised shares legally equivalent instruments; Liechtenstein TVTG earliest comprehensive DLT law
  - PHYDEX planned: physical commodity exchange with oracle-based quality/price verification and standardised FOB/CFR/CIF contracts
  - Data TTL keeps Groot chain permanently below 10 GB; full node requires only a Mac Mini
  - State channels extend base layer: 500+ token transfers/second per channel, 3,000+ plain messages/second; one Mac Mini handles 1,000 concurrent channels
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

---

## GajuDEX — Genuine Decentralisation

The Un-White Paper devotes a full chapter to the **DINO problem** ("Decentralised In Name Only") and GajuDEX's position against it.

**The DINO scoring framework** (10 criteria, max 4 points each = 40 total):
1. Immutable contracts post-deployment
2. No admin keys or upgrade proxies
3. No governance token for protocol changes
4. On-chain order matching (not off-chain relayers)
5. Non-custodial at all stages
6. Open-source smart contracts
7. No KYC required on the base layer
8. Permissionless liquidity provision
9. No operator censorship capability
10. Regulatory framework compliance

**Results:** GajuDEX scores **39/40** (one point deducted on the KYC criterion because the KPoS deployment requires on-chain KYC — by design, not by deficiency). Every major DEX examined scored **20 or below**, despite all claiming decentralisation.

**Two deployments:**
- **Groot deployment:** Fully permissionless. AMM + CLOB with stop losses. Immutable contracts post-deployment. No admin keys, no governance tokens. Anyone participates, anywhere, no KYC.
- **KPoS Associate Chain deployment:** Known Proof-of-Stake. On-chain KYC, Gaju staking. Designed for regulated institutional participants. FINMA substance-over-form test passed: regulators agree this is genuinely decentralised infrastructure, not a labelled product.

**Regulatory convergence:** Three independent regulatory frameworks (FINMA, MiCA Recital 22, MAS identifiable-operator test) all reduce to the same question: "Who is in control?" GajuDEX gives no one a control position. The document states GajuDEX is "the first DEX to pass the FINMA substance-over-form test for genuine decentralisation."

> "The sequencer is not a detail. It is the thing. If one entity decides which transactions are processed and in what order, that entity controls the exchange."

See [[gajumaru-product-suite]].

---

## Fibonacci Mining Curve and Tokenomics

**Total supply:** 1 trillion Gajus over 87.5 years. After that, no more — ever.

**Minting schedule:** QPQ rejected Bitcoin's abrupt halving model. The reward schedule follows a declining ratio derived from the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...), creating a smooth reduction in block rewards. Period 1 reward = **1,554,161 Gajus per keyblock**.

The practical effect: miners in adjacent periods experience gradual transitions rather than sudden 50% drops. This preserves mining economics and long-term network sustainability.

**Burned Gajus:** When a transaction expires unclaimed, its Gajus are not destroyed — they are returned to the unmined pool. This maintains the integrity of the total supply and supports long-term mining sustainability across the full 87.5-year schedule.

**Transit currency role:** Groot is designed as a neutral transit currency between regulated systems. It does not require everyone to hold Gajus; it provides a reference point and a genuine exit option. An institutional bank running an Associate Chain settles cross-chain debts through Groot without requiring its customers to use Gaju directly.

**Sound money properties:** Finite, holdable, not subject to debasement, transferable without permission. QPQ explicitly invokes commodity money theory, positioning Gaju as the "reference point" that disciplines all Associate Chain stablecoins and tokenised assets.

See [[gaju-token]], [[cuckoo-cycle]].

---

## Witnessing Protocol and State Channels

**Witnessing protocol (patented):** Designated witnesses attest to **content-free keyblocks**, confirming chain structure without approving transaction content. This provides commerce-grade settlement certainty within seconds while maintaining clean liability separation — witnesses confirm "a valid block was produced" not "these transactions are approved." Critical design point: because keyblocks carry no transactions, witnesses cannot be accused of censorship or endorsement.

**Data TTL (Time-To-Live):** All on-chain data carries an expiration date. Storage is paid proportional to duration. When TTL expires, data is pruned. Result: the chain stays permanently below 10 GB regardless of age or volume. A full Groot node runs on a Mac Mini.

**State channels:** Bilateral co-signed off-chain settlement that resolves to the base layer on close. Capacity:
- 500+ token transfers per second per channel
- 3,000+ plain messages per second per channel
- One Mac Mini services 1,000+ concurrent channels; capacity scales linearly with nodes

**Generalised Accounts:** Any Gajumaru account can be upgraded from single-signature to custom smart-contract-based authentication — enabling multi-signature, spending limits, corporate delegation structures, quantum-resistant signing, and any authentication logic expressible in Sophia.

**Graceful degradation:** If the network partitions, the protocol degrades gracefully rather than halting. No global shutdown mechanism.

See [[groot]], [[gajumaru-architecture]].

---

## Bridge Elimination — Native Cross-Chain Transfers

The Un-White Paper documents the bridge exploit record as a structural indictment of any architecture that requires bridges:

| Bridge exploit | Loss |
|---|---|
| Ronin (Axie Infinity) | $624M |
| BNB Chain bridge | $568M |
| Wormhole | $320M |
| Nomad | $190M |
| Harmony Horizon | $100M |

**QPQ's response:** The Gajumaru eliminates bridges entirely. Associate Chains have **native awareness** of Groot at the protocol level — cross-chain value transfers are handled by the protocol itself, not a third-party relay. There is no trusted intermediary whose key can be stolen. The document states: "Every bridge is a honeypot. We do not build honeypots."

This native awareness also means Gaju accounts are valid on every Associate Chain and Gajus are transferable cross-chain without wrapping or bridging — a structural property, not a product feature.

See [[associate-chains]], [[gajumaru-architecture]].

---

## Real-World Economic Applications (Part Three)

The Un-White Paper details eight categories of real-world application, each tied to a specific market failure the current infrastructure cannot solve:

**1. Insurance risk pools:** Smart contract pools where premiums accumulate and claims trigger automatically on oracle-verified conditions. No insurer intermediary required. Crop insurance example: a farmer in a region with no insurer can pool with 10,000 others; oracle confirms drought; contracts pay out without claims processing.

**2. Property and mortgage:** Tokenised land registry on Associate Chains with national legal recognition (Swiss DLT Act 2021 as model). Mortgage smart contracts that release title on final payment without conveyancer. Cross-border property purchase without correspondent bank chains.

**3. Unserved markets:** The SME financing gap ($5.7T) and the 1.3B unbanked are not failures of capital availability — they are failures of infrastructure reach. Gajumaru's Associate Chain architecture allows local financial institutions to deploy infrastructure that connects to global capital markets via Groot without surrendering local regulatory compliance.

**4. Tokenised shares and pre-IPO equity:** The Swiss DLT Act 2021 makes tokenised shares legally equivalent instruments. Liechtenstein's TVTG (Token and Trusted Technology Service Provider Act) is cited as the earliest comprehensive DLT legal framework. Pre-IPO equity traded on regulated Associate Chains with on-chain KYC eliminates the subscription agent layer.

**5. IP and royalty streams (AI training data):** The document cites Anthropic CEO Dario Amodei's warning (footnote 43) that AI could eliminate 50% of entry-level white-collar jobs within five years. Against this backdrop, QPQ argues that creators need automated royalty infrastructure. Smart contracts that pay creators every time their training data is used, with no collecting society intermediary.

**6. Human capital monetisation:** Skills and credentials on-chain. Employer-verified attestations that cannot be removed by a deplatforming event. Micro-lending against demonstrated earning history rather than credit score.

**7. PHYDEX (Physical and Derivative Exchange):** Planned extension for commodity markets. Standardised FOB/CFR/CIF contract templates. Oracle-based quality and price verification. Physical commodity delivery confirmed via third-party attestation. Designed for agricultural and raw material markets currently excluded from financial infrastructure.

**8. Bills of lading digitisation:** McKinsey analysis cited: full adoption of electronic bills of lading saves $6.5B annually in direct costs, unlocks up to $40B in additional global trade volume.

See [[associate-chains]], [[ripa-model]].

---

## GPL3 and Patent Strategy

**Licence choice:** GPL3 (GNU General Public License v3), not a permissive licence (MIT, Apache). The distinction is deliberate:
- Permissive licences allow proprietary forks — a competitor can take the code, close the source, and extract rent
- GPL3 copyleft requires that all modifications be shared under the same licence — forking the code means contributing back
- **Section 11 patent peace:** Any contributor who initiates patent litigation against any GPL3 participant loses their GPL3 licence immediately. This makes the entire codebase a patent-hostile zone for aggressors.

**Defensive patent filing:** QPQ has filed patents on its novel contributions (witnessing protocol, specific Groot mechanisms). These are licensed on the Red Hat model: free to all participants who do not assert patents against the ecosystem. The purpose is not revenue extraction but "protecting the freedom to operate" — ensuring no third party can patent-troll Gajumaru's unique mechanisms.

**Open source scope:** All production code is GPL3. GajuDesk and GajuMobile are committed to open-sourcing. The Groot node software is already public.

> "Defensive, not offensive. The patents exist so that no one else can use them offensively against us or our ecosystem."

See [[qpq-ag]], [[gajumaru-product-suite]].

---

## Regulatory Framework Analysis

The Un-White Paper treats regulatory compliance not as a box to tick but as a design requirement:

**FINMA (Switzerland):** Applies "substance over form" and "same risks, same rules." The label attached to a product does not determine regulation — the activity does. GajuDEX was explicitly designed to pass FINMA's substance-over-form test. QPQ AG is registered in Zug, Switzerland; QPQ Capital AG is VQF-affiliated for regulated financial services.

**MiCA (EU — Markets in Crypto-Assets):** Fully in force as of 2026. Requires sustainability disclosures, white paper standards, consumer protections. The document notes Gajumaru's energy efficiency (Cuckoo Cycle, ASIC-resistant, memory-bound) makes MiCA sustainability compliance "straightforward" in contrast to SHA-256 Bitcoin mining.

**MAS (Monetary Authority of Singapore):** The identifiable-operator test — if a single entity can be identified as controlling a system, it is regulated infrastructure. GajuDEX passes by having no such entity. The GL1 consortium (Standard Chartered, Citi, JPMorgan et al.) is explicitly positioned as a Master Associate Chain under MAS oversight.

**Liechtenstein TVTG:** Cited as the earliest comprehensive DLT legal framework globally. LTIN (Liechtenstein National Token Initiative) selected Gajumaru for national digital economy infrastructure.

**Swiss DLT Act 2021:** Tokenised shares as legally equivalent instruments. Enables tokenised pre-IPO equity and land registry on Gajumaru-based Associate Chains with full legal force under Swiss law.

**OFAC note (as critique):** The document observes that on Ethereum, validators complying with OFAC sanctions at times processed over 70% of blocks — meaning the US Treasury effectively controlled transaction inclusion on a "decentralised" network. This is presented as the definitive proof that proof-of-stake systems cannot be resource layers.

---

## Layer 2 Critique — The Mathematics

The Un-White Paper's treatment of Layer 2 scaling is among its most detailed technical chapters.

**Blob arithmetic (EIP-4844 / EIP-7691):**
- Maximum blob space per Ethereum block: **1,179,648 bytes** (shared across ALL Layer 2s simultaneously)
- Minimum data required to settle 1,000 TPS honestly on-chain: **4,260,000 bytes per block**
- Ratio: the blob space available is less than 28% of what 1,000 TPS requires
- At the TPS figures claimed by major L2s (Arbitrum: 40,000; Base: 2,000–3,571; zkSync: 20,000+), the arithmetic becomes physically impossible by orders of magnitude

**Observed vs claimed TPS (from L2Beat data cited in document):**

| Layer 2 | Claimed TPS | Observed settled TPS |
|---|---|---|
| Arbitrum | 40,000 | 10–30 |
| Base | 2,000–3,571 | 30–150 |
| zkSync | 20,000+ | 12–16 |

**ZK prover time constraint:** ZK rollup proofs form a sequential chain — each proof must complete before the next begins. At 2,000 TPS the document calculates a 21× prover time inflation factor; at 10,000 TPS the factor is 105×. Backlogs compound without bound under sustained load because queue growth rate exceeds proof generation rate.

**The October 2020 pivot:** Ethereum's shift to a "rollup-centric roadmap" simultaneously preserved four aligned commercial interests: ETH token value, developer ecosystem, VC investment, and Foundation power. The document argues this alignment — not engineering necessity — drove the pivot. "The scaling crisis was real; the solution was to offload it to infrastructure that cannot pass the TEA test."

**Sequencer centralisation:** In every Layer 2 examined, a single sequencer decides transaction ordering. The document notes that renaming a sequencer a "coordinator" (as some projects have done) does not change its function. Arbitrum's sequencer generated $21.6M in revenue in a measured period; Base generated $30M+ profit in 2024 — both from a position of zero accountability.

See [[tea-trilemma]].

---

## Specific Project Forensics

**Ethereum:**
- 4–6 entities (Lido, Coinbase, Figment, Kiln, Binance) control 52–62% of staked ETH (Rated Network data)
- Flashbots controls MEV extraction infrastructure; OFAC compliance enforced at block level
- Vitalik Buterin stated on X (January 21, 2025): "The person deciding the new EF leadership team is me"
- Former Foundation employees described governance as "cosplaying community governance" (The Guardian, February 2026)
- Paul Brody (EY / Enterprise Ethereum Alliance) described the community as "a lot like pretty normal shareholders"

**Solana:**
- 70%+ of validators cannot survive without Foundation delegation
- 57% of validators would fail profitability test without delegation subsidy
- Transaction failure rates concealed in TPS claims; the document cites 75% failure rates during congestion events

**DFINITY (ICP):**
- 48.5% of token supply allocated to foundation and insiders at launch
- 1.5% to "community"
- ICP crashed 95% within weeks of launch (CryptoBriefing, June 2021)

**Arbitrum:** $21.6M sequencer revenue from a single operator with no accountability to users

**Base (Coinbase):** $30M+ profit in 2024 from sequencer position; described as "rent from infrastructure they do not own"

**ZKSync:**
- Airdrop controversy: Sybil manipulation totalling $6.9M identified
- OtterSec (March 3, 2026) identified Fiat-Shamir transcript binding vulnerability in 6 production zkVMs: Jolt, Nexus, Cairo-M, Ceno, Expander, Binius64. Soundness failure — proofs could be accepted for invalid state transitions.

**Canton Network (Digital Asset):** Vocabulary evolution tracked as evidence of strategic repositioning:
- 2020: "ledger"
- later: "chain"
- July 2024: "public chain"
- March 2025: "blockchain"
- June 2025: "permissionless blockchain" ($135M raise)

The document frames this as the industry's pattern of adopting blockchain vocabulary only once it proved commercially necessary, not as a principled architectural decision.

**Lightning Network:**
- Empirical routing ceiling: **$89** — transfers above this amount cannot route reliably
- Gini coefficient of node capacity: **0.97** (near-perfect wealth concentration)
- Routing revenue: approximately $137,000/year across the entire network
- CVEs: replacement cycling attack and flood-and-loot documented; routing incentivises centralisation because hub nodes earn more
- "Lightning does not scale Bitcoin. It creates a custodial banking layer on top of Bitcoin and calls it trustless."

---

## Bitcoin Security Budget Crisis

The document presents a detailed analysis of Bitcoin's long-term security model:

**Current state (2026 figures from document):**
- Annual block subsidy: ~$11.66B (164,250 BTC at then-market prices)
- Annual transaction fee revenue: ~$71M (~1,000 BTC)
- Fee ratio: **~0.6%** of subsidy revenue

**The structural problem:** Bitcoin's security depends on miners remaining economically incentivised to secure the network. As the subsidy halves every four years and approaches zero (c. 2140), fee revenue must replace it. The document's arithmetic shows fee revenue is currently orders of magnitude too low to maintain equivalent security. At 3.25 TPS with average fees during non-congestion periods, the gap cannot close mathematically within the current architecture.

**Lightning as the proposed fix — and why it fails:** Lightning routes approximately 3 TPS and generates ~$137,000/year in routing revenue. This is not a fee revenue substitute for block subsidies. Additionally, Lightning transactions do not pay on-chain fees during operation (only on channel open/close), so Lightning growth does not increase miner revenue proportionally.

**The mempool evidence:** Bitcoin's mempool is persistently nearly empty outside congestion events. An empty mempool indicates the network is not being used for actual transactions — holders are speculating on price rather than spending the currency. This matches Satoshi's stated intent (peer-to-peer electronic cash) but not observed behaviour. The document notes Bitcoin stopped being considered a currency in 2016 when "store of value" became the dominant framing.

See [[groot]], [[cuckoo-cycle]].

---

## Vocabulary of Unaccountable Power

One of the document's most distinctive analytical sections is its **systematic deconstruction of crypto terminology** as a mechanism for concealing accountability failures.

**The pattern:** When a project encounters a regulatory, governance, or technical problem that its architecture cannot solve, it introduces new vocabulary to bridge the gap between what it has and what it claims.

**Examples documented:**
- "Decentralised" applied to systems with single sequencers, identified foundations, and admin keys
- "Community governance" applied to token voting where insiders hold veto-weight positions
- "Layer 2" applied to systems that are, by the document's analysis, Layer 1-dependent centralised infrastructure
- "Coordinator" as a rename for "sequencer" (same function, less politically charged label)
- Canton Network's "permissionless blockchain" (2025) for infrastructure that in 2020 was a "ledger"

**Tony Benn's five questions** (cited in full from Hansard, HC Deb 21 May 1990):
> "What power have you got? Where did you get it from? In whose interests do you exercise it? To whom are you accountable? How can we get rid of you?"

The document proposes these five questions as the universal test for any blockchain governance claim. Most projects cannot answer questions 3–5 without revealing that the answer is "insiders / no one / you can't."

**C.A.R. Hoare (1980 Turing Award Lecture):** Cited as the foundational principle for Sophia and FATE VM design:
> "There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."

**Harold Pinter's The Birthday Party:** Used as an analogy for anonymous proof-of-stake — menace is present from the start of the play, but the audience does not see it until it is too late. The validators who can collude are present from genesis; users do not recognise the threat until it materialises.

---

## Security Philosophy — Zero Dependencies

The Un-White Paper's security chapter is built around a single principle: **every dependency is an attack surface**.

**MetaMask comparison:** MetaMask (the dominant Ethereum wallet) depends on 212,620 NPM packages. QPQ cites the September 2025 NPM supply chain attack (Check Point Research, "The Great NPM Heist") in which 18 widely used JavaScript packages were compromised — including debug (357M weekly downloads), chalk (300M weekly downloads), and ansi-styles (371M weekly downloads). The Shai-Hulud worm spread autonomously across the NPM ecosystem.

**GajuDesk:** Zero external dependencies. Original codebase. The security model is that no supply chain attack vector exists because there is no supply chain to attack.

**GRIDS security hierarchy:**
- Level 1 (operational): Secure Enclave in GajuDesk/GajuMobile — private keys never leave hardware security boundary
- Level 2 (next phase): GRIDS dedicated hardware wallet — air-gapped, QR-code instruction/response protocol
- Level 3 (planned): Full QPQ hardware stack

**Privacy by architecture:** GRIDS sends payment confirmation to merchants — not user identity. Merchants receive proof that payment occurred; they never receive the payer's keys, address history, or personal data. This is cited as satisfying GDPR without requiring a privacy policy, because no personal data is transmitted.

**Formal verification:** Sophia smart contracts support formal verification — mathematical proof that a contract behaves exactly as intended under all possible conditions. For institutional adoption (insurance, property, equity), formal verification is described as non-optional: "a bug is not an inconvenience but a catastrophe."

See [[grids]], [[gajumaru-product-suite]], [[sophia-fate]].

---

## Efficiency Calculation — The Four Steps

The 1,846,200× figure is derived from four compounding architectural improvements over Bitcoin:

**Step 1: Bitcoin-NG Decoupling (92.31×)**
Groot amortises 300+ TPS over a 120-second keyblock cycle = 36,000+ transactions per 10-minute Bitcoin equivalent (300 × 120). Bitcoin: ~3.25 TPS × 600 seconds = 1,950 transactions. Ratio: 36,000 / 1,950 = **92.31×**

**Step 2: Settlement Latency (200×)**
Bitcoin settlement: 1 block = 600 seconds. Gajumaru: 1 microblock = ~3 seconds. Ratio: 600 / 3 = **200×**. Running total: 92.31 × 200 = **18,462×**

**Step 3: Compressed Settlement Security (10×)**
Groot's witnessing protocol limits attack windows to 4 minutes (2 keyblocks). Bitcoin's probabilistic model means an attacker with 51% hashrate is guaranteed success over hours/days. Compressed settlement reduces required network hashrate by **10×**. Running total: 18,462 × 10 = **184,620×**

**Step 4: Cuckoo Cycle Memory-Latency Bound (10×–50×)**
Memory-bound PoW requires 10–50× fewer CPU instructions per solution at equivalent security vs Bitcoin's SHA-256. Conservative end (10×): **1,846,200×**. Upper end (50×): **9,231,000×**.

**Minting efficiency (different calculation):** Only Steps 3 and 4 affect minting (not throughput). Mining efficiency base = 100×. On top of this, the Fibonacci curve produces 5 keyblocks × 1,554,161 Gajus = 7,770,805 Gajus per 10 minutes vs Bitcoin's 3.125 BTC post-April 2024 halving. Output ratio: ~2,486,658×. Compounded: 2,486,658 × 100 = **approximately 249 million times more efficient per coin minted** than Bitcoin during Period 1.

**Human-scale meaning:**
- A Gaju miner runs on a laptop with 8 GB RAM at ~60–100 watts (equivalent to an incandescent light bulb)
- A Bitcoin miner requires ~3,500 watts per ASIC unit (industrial cooling required)
- One Gajumaru transaction: **~0.0024 kWh** — less energy than running a household lightbulb for three minutes
- Bitcoin: **~1,335 kWh** per transaction
- Simple spend on Groot: **0.0000169 Gaju** (at $1/Gaju = $0.0000169 — less than two thousandths of a cent)
- Sending €500 Berlin → Nairobi: less than two thousandths of a cent vs €40–80 in correspondent banking fees
- Full network capacity: **30 million transactions per day**

See [[groot]], [[cuckoo-cycle]], [[bitcoin-ng]].

---

## Protocol Architecture Features

**Naming System (AENS):** Human-readable names replace 64-character cryptographic hashes (e.g., "greg.chain"). Names are **native first-class protocol objects** — not smart contracts. Short names (≤12 characters) distributed via first-price auction with 5% minimum bid increments to discourage squatting. Long names register instantly. Fully decentralised — no DNS-equivalent control group.

**Paying-For-Others:** Eliminates the onboarding barrier that kills adoption on most chains ("go buy ETH before you can use our app"). A third party (game provider, merchant, employer) can wrap a user's transaction in a paying-for transaction covering gas and fees. The user signs with their own keys; the sponsor pays. The user **does not need to hold any Gajus** — they may not even know they have a blockchain account. Applicable to any transaction type except the paying-for transaction itself.

**Contract Cloning:** A smart contract deployed once can be **cloned cheaply by reference**. Subsequent deployments carry only the lightweight cost of referencing the original code. Ethereum contract deployment routinely costs hundreds to thousands of dollars; Gajumaru makes on-chain business models commercially practical.

**Contract Visibility Modes:** Two deployment modes — "visible" (source code published on-chain with deployment; permanently researchable even if off-chain source is lost; wallets can display for informed consent) and "incognito" (source omitted). Library code deployed visibly is permanently researchable from within the chain. A contract clone inherits its parent's visibility setting.

**One Puck:** The base unit of the Gaju = 10⁻¹⁸ Gaju. The minimum possible fee within a state channel, if any, is one puck.

**FATE VM Security Design:**
- **Type safety:** Every operation is typed; type violations revert all state changes; type confusion cannot be weaponised
- **Overflow prevention:** Unbounded integer arithmetic; integer overflow exploits (costing billions in Ethereum ecosystem) are structurally impossible
- **Memory isolation:** Instruction memory divided into functions/blocks with controlled jump destinations; buffer overflow and reentrancy attacks impossible
- **Data/control flow separation:** Running contracts cannot modify their own code; self-modifying contract attacks impossible
- **Test/prod fidelity:** Code tested on FATE runs on FATE — no simulation divergence; eliminates entire class of bugs where contracts behave correctly in testing and fail in production

**Sophia = Greek word for wisdom.** (Named etymology confirmed in glossary.)

**First-Class Protocol Objects:** State channels, naming system, and smart contracts are native to the Gajumaru protocol — not bolted on via smart contracts as on Ethereum. Native operations: cheaper (no contract deployment overhead), faster (protocol handles directly), and protocol-verified.

**Self Single Sign-On (SSSO):** GRIDS enables "first-party single sign-on" — the document calls this **SSSO** (triple-S) to distinguish from traditional SSO (Google, Apple, Microsoft). Traditional SSO trades convenience for surveillance; SSSO provides the same experience with zero credential sharing. The website never holds the data; GDPR compliance for the authentication layer is automatic; if the site is breached, there is nothing to steal.

---

## Associate Chain Scaling and Currency Architecture

**No architectural ceiling:** Unlike Polkadot (100 cores, 101st parachain displaces existing), Cosmos (fragment economically), or Ethereum L2s (all share 1,125,000 bytes blob space per block), Gajumaru has **no protocol limit on Associate Chains**. Each AC adds throughput independently. Practical constraint: each requires an operator, governance model, and purpose.

**Scale implication:** 260 national jurisdictions × 1,846,200 = **approximately 144 million times more efficient than Bitcoin** at the base layer. This accounts only for national jurisdictions — the true count at maturity will be substantially higher.

**Currency architecture — no constraints:** Associate Chain native currencies can be **anything expressible in a smart contract or native transaction type**. CBDC, narrow-banking token, commodity-pegged stablecoin, pre-IPO equity token, anything. The market disciplines every AC currency immediately via its exchange rate against the fixed-supply Gaju reference.

**Every model, one network:** A CBDC in Riyadh, a dollar stablecoin in New York, a trade finance token in Singapore, and the Gaju itself all run on sovereign Associate Chains, settle through the same governance-free resource layer, and are disciplined by the same mathematical transparency.

---

## Human Economy — Financial Infrastructure Statistics

The Un-White Paper's opening section quantifies the problem the system addresses:

**Remittances:** $685 billion sent globally in 2024. Average cost of sending $200 = **6.4%** (more than twice the UN SDG target of 3%). Sub-Saharan Africa: **7.9%**, rising to nearly **9% in Q1 2025**. Banks: **12.7%** on average. At 6.4% on $685B, over **$40 billion extracted annually** from the world's poorest workers.

**Card payment fees:** 1.5–3.5% per transaction for small businesses. On thin margins, the difference between viability and closure. Not negotiable because the infrastructure is a monopoly.

**SWIFT wires Berlin → Nairobi:** €500 payment: sending bank charges €25–50; intermediary banks deduct $10–30 per hop; receiving bank charges further; FX markup 1–3%. Total: €40–80 typical, arriving 3–5 business days later. On Gajumaru: fraction of a cent, settles in seconds.

**Financial exclusion:** 1.3 billion unbanked adults globally; 1 billion lack official ID (26% of unbanked can't open accounts without government-issued ID); $5.7 trillion SME financing gap; correspondent banking down 39% since 2013.

---

## El Salvador Case Study

El Salvador illustrates both the need and the failure of first-generation blockchain as a monetary solution:

**Context:** In 2001, adopted US dollar (lost monetary sovereignty to Federal Reserve; cannot set interest rates; 24% of GDP in remittances; 70% of population unbanked).

**Bitcoin as legal tender (September 2021):** Aimed at financial inclusion and cheaper remittances. Results:
- Bitcoin volatility made it unusable for a population on narrow margins
- Chivo wallet suffered hacking, identity theft, repeated technical failures
- By 2024: **92% of Salvadorans did not use Bitcoin for transactions**; only **1.3% of remittances via crypto**
- NBER found adoption concentrated among the already banked, educated, young — the opposite of intended beneficiaries
- January 2025: **rescinded Bitcoin's legal tender status** under IMF pressure as condition for **$1.4 billion loan**

**QPQ's analysis:** El Salvador did not fail because the idea was wrong — it failed because Bitcoin cannot do what the idea required. A Salvadoran Associate Chain running the Gaju as its currency would:
- Settle remittances in seconds at thousandths of a cent via atomic swaps
- Use Paying-For-Others so the remittance provider covers gas costs (recipient loses nothing to fees)
- Require no bank account, no exchange account
- Operate under Salvadoran regulation, on Salvadoran terms
- Give every citizen an exit to Groot directly if the Associate Chain becomes extractive — "real accountability of the State to the Nation"

---

## Economic Emancipation — Political Context

The Un-White Paper grounds economic emancipation arguments in specific recent events:

**Canada (2022):** Emergency powers invoked against protest participants. Over 200 bank accounts frozen worth approximately **$7.8 million**; insurance policies suspended. Both Federal Court and Federal Court of Appeal (January 2026) ruled the invocation unreasonable and unconstitutional — "troubling in the extreme" and "egregious." The document's point: by then, the message had been delivered. *"Your money is yours until someone with authority decides it is not."*

**UK:** Coutts closed Nigel Farage's accounts because his political views were "not compatible" with the bank's values. Seven further banks refused service. Nearly **half a million accounts forcibly closed in the UK in a single year**. No emergency powers required — the banking system decided unilaterally who belonged.

**China's digital yuan:** Fully programmable and trackable. By mid-2019: **26.82 million air tickets** and **5.96 million high-speed rail tickets** denied to individuals labelled "untrustworthy" by the social credit system. Designed to replace cash in circulation; gives PBoC unprecedented control over economic activity of 1.4 billion people.

**European digital euro:** ECB building on same centralised architecture. Legislation expected 2026, issuance targeted 2029. ECB language: "preserving monetary sovereignty," "strategic autonomy," "reducing reliance on non-European payment systems" — "Read carefully. Whose sovereignty? Whose autonomy? Not yours."

**The Trajectory:** Goldman Sachs estimates 6–7% of American workforce displaced by AI adoption; Anthropic CEO warns 50% of entry-level white-collar jobs could disappear within five years (footnote 43). Growing dependency on state support → increased taxation of shrinking productive base → currency debasement → increased control → increased dependency. "The authoritarian slide does not require authoritarian intent. It requires only that no alternative exists."

---

## Machine Economy

The Un-White Paper argues the transition from digitised to digitalised infrastructure is not merely desirable but **unavoidable** due to the machine economy:

**The Gap:** Current infrastructure designed for humans transacting with humans at human pace:
- Card networks require human identity
- Bank accounts require human account holders
- Settlement in days is meaningless to agents operating in milliseconds
- Fees of 2–3% with minimums of $0.15–$0.30 make high-frequency micro-transactions economically absurd
- *"Machines do not have passports"* — compliance frameworks assume a human being with name, address, and government-issued ID

**Examples of machine-to-machine commerce:**
- Autonomous vehicles paying tolls, charging stations, parking
- Smart buildings procuring energy, maintenance, supplies
- Industrial systems settling micro-contracts for compute, bandwidth, data, API access
- AI agent commissioning inference: specification → price → deposit → streaming results → per-batch payments → completion (ratio ~4 messages to every token transfer)

**Volume projection:** Not thousands of transactions per day. *"Billions per day, then billions per hour."*

**Existing demonstration:** GajuMarket already shows the architecture — products as smart contract instances, counterparties negotiate terms through the platform, platform automates the smart contract build, both parties verify before signing. *"The negotiation is human; the contract construction, execution, and settlement are automated."*

**State Channel as machine-economy substrate:** The only infrastructure that satisfies the requirements: transaction costs approaching zero, no identity requirements at the resource layer, programmable conditions (smart contracts), settlement in seconds. *"These are not features that can be added to existing infrastructure. They are properties of a different foundation."*

State channel capacity at scale: **Tokyo Metro SUICA** (one of the world's highest-throughput payment networks) peaks at fewer than **300 TPS**. A single Gajumaru node running 1,000 concurrent state channels: **500,000+ TPS** — **1,667× greater than SUICA's peak**. For plain messages, a single Mac Mini M4 handles approximately **2.5 billion messages/day**. WhatsApp (3 billion users across 180 countries) processes approximately **100 billion messages/day across its entire global infrastructure**. Both Gajumaru and WhatsApp use **Erlang**.

---

## ADI Chain — UAE National Infrastructure Case Study

**What it is:** ADI Chain is national blockchain infrastructure sold to the UAE, built on the ZKSync Atlas and Airbender stacks — technology created by Matter Labs.

**The documented failures:**
1. **TPS claim impossible:** ADI's original documentation claimed 10,000 TPS. At 10,000 TPS, ZK prover time inflation (105× documented by QPQ) means the sequential proof chain cannot clear incoming transactions — the backlog compounds without limit. Additionally, 10,000 TPS requires a minimum of **12,600,000 bytes per Ethereum block** vs the **1,179,648 bytes maximum** available across all L2s — approximately **11× Ethereum's entire blob capacity simultaneously**. The claim is physically impossible at two distinct points.
2. **Claim removed:** The 10,000 TPS figure was removed from ADI's documentation and replaced with non-specific language. QPQ believes its original technical review, circulated internally, was subsequently **leaked to ADI** — the documentation was scrubbed within approximately eight days of the review's circulation.
3. **Proof costs embedded in every transaction:** ADI's native token compensates prover nodes for "how many RISC-V cycles it takes to prove a given computation." Every UAE citizen transaction carries proof generation costs embedded in the token model.
4. **Sequencer censorship:** All censorship vulnerabilities of ZK rollup sequencers apply without exception.
5. **Soundness failure:** OtterSec's findings (March 3, 2026) on Fiat-Shamir transcript binding vulnerabilities apply to the ZKSync stack on which ADI is built.

**QPQ's framing:** *"The people who bought it trusted the people who built it. The trust was misplaced and the misplacement was deliberate."* Matter Labs knew precisely what the architecture could and could not do while claiming 15,000 TPS on their own website. What was claimed is archived. What was possible is arithmetic.

---

## Regulatory Context — US and UK

In addition to FINMA/MiCA/MAS/TVTG/Swiss DLT Act, the document covers:

**US GENIUS Act** (signed July 2025): First comprehensive federal stablecoin framework.

**US CLARITY Act** (passed the House, July 2025): Proposes to divide digital asset oversight between CFTC and SEC based on **decentralisation criteria**. The Gajumaru's Groot is architected to be genuinely decentralised under this test.

**UK Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2025** (laid before Parliament December 2025): Comprehensive regime covering trading platforms, custody, stablecoins, staking, and market abuse. Full enforcement from **October 2027**.

**Regulatory convergence:** All three jurisdictions converging on the same principle — crypto-asset activities should meet the same standards as traditional financial services. QPQ's position: Gajumaru passes every test. *"Bitcoin fails the energy test. Proof-of-stake systems pass the energy test but fail the trustlessness test. The Gajumaru is the only system that passes both."*

---

## Token Economics — Key Specifications

From the Gaju token specification table in the document:

| Specification | Value |
|---|---|
| Total Supply | 1 trillion Gajus (fixed) |
| Distribution Period | 87.5 years (Fibonacci curve) |
| Protected Mining Target | 30 March 2027 |
| Protected Mining Outer Boundary | 30 September 2027 |
| MainNet Full Launch | 26 April 2026 |
| Stabilisation Treasury | **125 billion Gajus** reserved to smooth early adoption |
| Debasement | Impossible (no government can print more) |

**MainNet date significance:** April 26, 2026 is **"14 years to the day from Satoshi's last email"** — the date is deliberate.

**Stabilisation Treasury:** 125 billion Gajus are reserved specifically to smooth early adoption volatility. This is separate from the mined supply and is available for market interventions if needed during the adoption phase.

See [[gaju-token]], [[protected-mining]].

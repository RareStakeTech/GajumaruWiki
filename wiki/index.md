---
type: overview
title: "Gajumaru Wiki"
created: 2026-05-15
updated: 2026-05-15
confidence: high
---

<div class="home-hero">
  <p class="home-kicker">Gajumaru Blockchain Research Wiki</p>
  <h1>Gajumaru research, mapped.</h1>
  <p class="home-deck">A structured knowledge base for Groot, Associate Chains, GRIDS, tokenomics, QPQ AG, and the primary sources behind each claim.</p>
  <div class="home-actions">
    <a href="./overview">Read the Overview</a>
    <a href="./concepts/gajumaru-architecture">Explore Architecture</a>
    <a href="./sources">Browse Sources</a>
  </div>
</div>

<div class="home-metrics">
  <div><strong>43</strong><span>source summaries</span></div>
  <div><strong>15</strong><span>concept pages</span></div>
  <div><strong>12</strong><span>entity pages</span></div>
  <div><strong>5+</strong><span>research clusters</span></div>
</div>

## Start Here

<div class="home-grid">
  <a class="home-card" href="./overview">
    <span>Orientation</span>
    <strong>Overview</strong>
    <p>The high-level map of Gajumaru, QPQ AG, LTIN, Groot, Associate Chains, and the current open questions.</p>
  </a>
  <a class="home-card" href="./concepts/gajumaru-architecture">
    <span>Core Protocol</span>
    <strong>Gajumaru Architecture</strong>
    <p>The central hub for Groot, Associate Chains, RIPA, TEA, Cuckoo Cycle, and protocol claims.</p>
  </a>
  <a class="home-card" href="./concepts/gajumaru-product-suite">
    <span>Applications</span>
    <strong>Product Suite</strong>
    <p>GajuDesk, GajuMobile, GajuDEX, QuidProQuo, GajuPay, GajuSafe, Da Vinci Protocol, and related tools.</p>
  </a>
  <a class="home-card" href="./concepts/grids">
    <span>Identity & Signing</span>
    <strong>GRIDS</strong>
    <p>The universal remote instruction and signing system for login, authentication, and transaction dispatch.</p>
  </a>
</div>

## Research Clusters

<div class="cluster-list">
  <section>
    <h3>Core Protocol</h3>
    <p>Base-layer architecture, Groot, Associate Chains, finality, consensus, and protocol-level tradeoffs.</p>
    <p>[[gajumaru-architecture]] � [[groot]] � [[associate-chains]] � [[ripa-model]] � [[tea-trilemma]]</p>
  </section>
  <section>
    <h3>Tokenomics & Economics</h3>
    <p>Gaju supply, protected mining, monetary theory, incentives, inflation, and market structure.</p>
    <p>[[gaju-token]] � [[protected-mining]] � [[summary-qpq-wiki-money]] � [[summary-qpq-wiki-monetary-mechanics]]</p>
  </section>
  <section>
    <h3>Developer Ecosystem</h3>
    <p>GRIDS, smart contracts, Sophia, FATE VM, product surfaces, and application infrastructure.</p>
    <p>[[gajumaru-product-suite]] � [[grids]] � [[sophia-fate]] � [[qpq-ag]]</p>
  </section>
  <section>
    <h3>People & Organizations</h3>
    <p>QPQ AG, LTIN, Gregory Chew, Craig Everett, Dimitar, Ulf, Peter, and the project timeline.</p>
    <p>[[qpq-ag]] � [[ltin]] � [[gregory-chew]] � [[craig]] � [[dimitar]]</p>
  </section>
</div>

## Master Catalog

This section remains the operational catalog for wiki maintenance and ingest workflows.

### Overview Pages

- [[overview]] - High-level synthesis of the Gajumaru ecosystem

### Clusters

#### Core Protocol
*Concepts and entities related to the Gajumaru base protocol, consensus, and architecture.*

##### Concept Pages
- [[gajumaru-architecture]] *(hub)* - Full stack overview: Groot + Associate Chains + RIPA + TEA
- [[groot]] - Resource layer; Bitcoin-NG + Cuckoo Cycle; 1,846,200x Bitcoin efficiency; >300 TPS; 3-4 min finality
- [[associate-chains]] - Multi-chain architecture; native interoperability; no bridges; master/sub-chain hierarchy
- [[ripa-model]] - Two-path model: RPA (trustless direct) vs RIPA (via governed infrastructure)
- [[tea-trilemma]] - QPQ's analytical framework: Trustlessness / Efficiency / Accountability
- [[cuckoo-cycle]] - Memory-bound PoW algorithm; no ASIC arms race
- [[bitcoin-ng]] - Bitcoin-NG consensus: keyblock leader election + microblock transaction processing

##### Entity Pages
- [[ltin]] - Liechtenstein Trust Integrity Network; first sovereign Associate Chain
- [[craig]] - Craig Everett, CPO; designed tree-structure scalability; named the project (Okinawa)
- [[dimitar]] - Implementation engineer; Associate Chain interplay; backend
- [[ulf]] - Blockchain infrastructure; hive mining concept; dividend-writing contracts
- [[peter]] - Communicator; non-technical rubber duck for QPQ explainer video series

#### Tokenomics & Economics
*Token design, economic models, incentive structures.*

##### Concept Pages
- [[gaju-token]] *(hub)* - Native token; 1 trillion fixed supply over 87.5 years; in circulation Oct 2025
- [[protected-mining]] - Mining window ending March 29 2027; flywheel thesis
- [[hive-mining]] - SaaS mining model; dividend-writing smart contracts; Ulf Wiger's design; gmhive_client port 17888

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Governance
*On-chain governance mechanisms, proposals, voting.*

##### Concept Pages
<!-- Add concept pages here on ingest -->

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Developer Ecosystem
*SDKs, tooling, smart contracts, developer experience.*

##### Concept Pages
- [[gajumaru-product-suite]] *(hub)* - Full application catalogue: GajuDEX, GajuMarket/QuidProQuo, GajuPay, GajuSafe, Da Vinci Protocol, and more
- [[grids]] - Universal secure login/authentication; URL schema; dead-drop SSO; authored by Craig Everett
- [[sophia-fate]] *(hub)* - Sophia language + FATE VM; pre-execution verification; immutability-first; Virding/Hughes contributors
- [[state-channels]] - Off-chain sessions; 500+ transfers/sec; State Channel Markets; cross-AC fund transfers; demos Spring/Summer 2026

##### Concept Pages
- [[qpq-software-stack]] - 26 public repos; ZX build system; enoise P2P; Sophia v7.4.0; port 17888

##### Entity Pages
- [[qpq-ag]] - Swiss company building Gajumaru; CHF 1M+ revenue; QPQ Capital AG (SRO)
- [[gregory-chew]] - CEO; law/commodities/investment banking background; Africa cooperatives
- [[ulf]] - CTO (Ulf Wiger); first commercial Erlang license 1993
- [[craig]] - CPO (Craig Everett); cybersecurity; Okinawa; ZX tool author (zxq9)
- [[dimitar]] - CDO (Dimitar Ivanov); blockchain implementation specialist
- [[peter]] - Research Lead & Lead Cryptographic Developer (Peter Harpending); mathematician
- [[benno-raeber]] - CLO (Benno Raeber); Chief Legal Officer
- [[jarvis-carroll]] - R&D (Jarvis Carroll)
- [[jeff-thomson]] - Product Research (Jeff Thomson)
- [[aeternity]] - Upstream blockchain; source of Sophia, FATE VM, and State Channels
- [[adam-percy]] - Community champion; house builder; first wave miner; community leader

#### Infrastructure & Operations
*Nodes, validators, networking, deployment.*

##### Concept Pages
<!-- Add concept pages here on ingest -->

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Foundations
*First-principles concepts: monetary theory, distributed systems, consensus mechanics.*

##### Concept Pages
<!-- Add concept pages here on ingest: e.g. leader-selection, finality, proof-of-work, money -->

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Monetary Mechanics
*Inflation, deflation, mint function, coins vs tokens, currency debasement.*

##### Concept Pages
<!-- Add concept pages here on ingest -->

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Smart Contracts
*Sophia language, FATE VM, contract design, deployment modes.*

##### Concept Pages
- [[sophia-fate]] *(hub)* - Sophia language + FATE VM; pre-execution verification; immutability-first; Virding/Hughes contributors

##### Entity Pages
<!-- Add entity pages here on ingest -->

#### Technical Reference
*CAP theorem, blockchain trilemma, consensus research, protocol specs.*

##### Concept Pages
<!-- Add concept pages here on ingest: e.g. cap-theorem, blockchain-trilemma -->

##### Entity Pages
<!-- Add entity pages here on ingest -->
## Source Summaries

| Slug | Title | Date Ingested | Cluster |
|------|-------|---------------|---------|
| [[summary-qpq-2025-review]] | Gajumaru: 2025 Year in Review & 2026 Prospectives | 2026-05-15 | multi-cluster |
| [[summary-unwhitepaper]] | The Internet of Economics — Gajumaru & QPQ Un-White Paper | 2026-05-15 | multi-cluster |
| [[summary-gaju-mining-video]] | Gaju Mining, Pioneering the Human Economy (YouTube) | 2026-05-15 | tokenomics-economics |
| [[summary-why-the-gajumaru-and-how-it-works]] | Why the Gajumaru and How it Works (YouTube) | 2026-05-15 | core-protocol |
| [[summary-the-gajumaru-an-actual-working-blockchain]] | The Gajumaru — an actual, working blockchain (YouTube) | 2026-05-15 | core-protocol |
| [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]] | World's First Genuine Blockchain Marketplace, QuidProQuo (YouTube) | 2026-05-15 | developer-ecosystem |
| [[summary-gaju-firsts-gajumaru-blockchain]] | Gaju Firsts, Gajumaru Blockchain (YouTube) | 2026-05-15 | multi-cluster |
| [[summary-gaju-mining-journey-update]] | Gaju Mining Journey Update (YouTube) | 2026-05-15 | multi-cluster |
| [[summary-gajumaru-new-blockchain-demo-1]] | Gajumaru - New Blockchain - Demo 1 (YouTube, Mar 2024) | 2026-05-15 | core-protocol |
| [[summary-qpq-wiki-blockchain-primer]] | Blockchain Primer (QPQ Public Wiki) | 2026-05-15 | foundations |
| [[summary-qpq-wiki-gajumaru]] | Gajumaru (QPQ Public Wiki) | 2026-05-15 | multi-cluster |
| [[summary-qpq-wiki-blockchain-trilemma]] | Blockchain Trilemma (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-consensus]] | Consensus (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-mining]] | Mining (QPQ Public Wiki) | 2026-05-15 | core-protocol |
| [[summary-qpq-wiki-proof-of-work]] | Proof of Work (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-leader-selection]] | Leader Selection (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-finality]] | Finality (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-smart-contracts]] | Smart Contracts (QPQ Public Wiki) | 2026-05-15 | smart-contracts |
| [[summary-qpq-wiki-sophia]] | Sophia / FATE VM (QPQ Public Wiki) | 2026-05-15 | smart-contracts |
| [[summary-qpq-wiki-dlts]] | DLTs (QPQ Public Wiki) | 2026-05-15 | foundations |
| [[summary-qpq-wiki-blockchain]] | Blockchain (QPQ Public Wiki) | 2026-05-15 | foundations |
| [[summary-qpq-wiki-transaction]] | Transaction (QPQ Public Wiki) | 2026-05-15 | foundations |
| [[summary-qpq-wiki-mempool]] | Mempool (QPQ Public Wiki) | 2026-05-15 | foundations |
| [[summary-qpq-wiki-monetary-mechanics]] | Monetary Mechanics (QPQ Public Wiki) | 2026-05-15 | monetary-mechanics |
| [[summary-qpq-wiki-money]] | Money / The Nature of Money (QPQ Public Wiki) | 2026-05-15 | monetary-mechanics |
| [[summary-qpq-wiki-grids]] | GRIDS Technical Spec v5 (QPQ Public Wiki) | 2026-05-15 | developer-ecosystem |
| [[summary-qpq-wiki-home]] | Home (QPQ Public Wiki) | 2026-05-15 | meta |
| [[summary-qpq-wiki-state-channels]] | State Channels (QPQ Public Wiki) | 2026-05-15 | developer-ecosystem |
| [[summary-qpq-wiki-flation]] | Flation / Inflation, Deflation, Coins, Tokens, Prices (QPQ Public Wiki) | 2026-05-15 | monetary-mechanics |
| [[summary-qpq-wiki-mint]] | Mint / The Mint Function (QPQ Public Wiki) | 2026-05-15 | monetary-mechanics |
| [[summary-qpq-wiki-sophia-faq]] | Sophia FAQ (QPQ Public Wiki) | 2026-05-15 | smart-contracts |
| [[summary-qpq-wiki-rlp]] | RLP — Recursive-Length Prefix (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-basen]] | BaseN — Base64 vs Base58 (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-api-encoding]] | API Encoding (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-serialization]] | Serialization (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-testnet-node-setup]] | Testnet Node Setup (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-install-erlang-and-zx]] | Install Erlang and ZX (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-qpq-wiki-vim-setup]] | Vim Setup (QPQ Public Wiki) | 2026-05-15 | technical-reference |
| [[summary-blog-quantum-resistance]] | Quantum Resistance on Gajumaru Blockchain (gajumaru.io) | 2026-05-15 | core-protocol |
| [[summary-blog-mythos-grids]] | The Architectural Answer to AI Security Vulnerabilities: GRIDS (qpq.swiss) | 2026-05-15 | developer-ecosystem |
| [[summary-blog-summer-of-gajumaru]] | The Summer of Gajumaru: Upcoming Launches (qpq.swiss) | 2026-05-15 | multi-cluster |
| [[summary-blog-in-space]] | The Gajumaru in Space — Cislunar Associate Chains (gajumaru.io) | 2026-05-15 | core-protocol |
| [[summary-blog-dev-updates-2026]] | QPQ Dev Updates March & April 2026 (qpq.swiss) | 2026-05-15 | multi-cluster |

---

## Comparisons & Syntheses

| Slug | Title | Date | Type |
|------|-------|------|------|
| — | — | — | — |



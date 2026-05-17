# Wiki Activity Log

> Append-only. Never delete entries. Each entry uses the prefix:
> `## [YYYY-MM-DD] {ingest|query|lint} | {title/description}`

---

## [2026-05-15] ingest | Vault Bootstrap

Source: (none — initial setup)
Pages created:
- wiki/index.md
- wiki/log.md
- wiki/hot.md
- wiki/overview.md
- .claude/skills/recall.md
- .claude/skills/my-world.md
- .claude/skills/today.md
- .claude/skills/close.md
- .claude/skills/lint.md

Pages updated: (none — first operation)
Contradictions flagged: none
Notes: Vault initialized with full directory structure, Obsidian config, .gitignore, and skill definitions. Git repository initialized and bootstrap commit created.

---

## [2026-05-15] ingest | Gajumaru: 2025 Year in Review & 2026 Prospectives (QPQ AG)

Source: raw/articles/Gajumaru- 2025 Year in Review & 2026 Prospectives – QPQ AG.url
Note: raw/articles/Gajumaru Un-White Paper 26-03-31.pdf — NOT ingested. No PDF extraction tool available (no pdftotext, Python, or Word). Pending manual copy-paste to .md file.

Pages created:
- wiki/sources/summary-qpq-2025-review.md
- wiki/concepts/gajumaru-architecture.md (hub: core-protocol)
- wiki/concepts/groot.md
- wiki/concepts/associate-chains.md
- wiki/concepts/ripa-model.md
- wiki/concepts/gaju-token.md (hub: tokenomics-economics)
- wiki/concepts/protected-mining.md
- wiki/concepts/gajumaru-product-suite.md (hub: developer-ecosystem)
- wiki/entities/qpq-ag.md
- wiki/entities/gregory-chew.md
- wiki/entities/ltin.md

Pages updated:
- wiki/index.md (all cluster sections populated)
- wiki/overview.md (full synthesis written)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none (first substantive ingest)

Key claims from source:
- Gaju tokens in circulation since Oct 16 2025
- CHF 1M+ SaaS revenue, zero marketing
- Groot: 553,800× more efficient than Bitcoin
- LTIN selected Gajumaru for Liechtenstein national digital economy
- MainNet launched April 6/7 2026
- Protected mining ends March 29 2027

---

## [2026-05-15] meta | Added type-specific ingest skills and routing

Pages created:
- .claude/skills/ingest-pdf.md
- .claude/skills/ingest-url.md
- .claude/skills/ingest-notes.md
- .claude/skills/ingest-text.md

Pages updated:
- .claude/skills/recall.md (added Ingest Routing table)
- wiki/hot.md (session close)

Notes: Ingest routing now covers .url, .pdf, .txt, -notes.md, and .md. Directory-glob shortcut rule added. Session closed; reboot pending.

---

## [2026-05-15] ingest | Gajumaru Un-White Paper (260331)

Source: raw/articles/gajumaru-un-white-paper.md (OCR'd via pypdfium2 + Tesseract from raw/articles/Gajumaru Un-White Paper 26-03-31.pdf)

Pages created:
- wiki/sources/summary-unwhitepaper.md
- wiki/concepts/tea-trilemma.md (member: core-protocol)
- wiki/concepts/cuckoo-cycle.md (member: core-protocol)

Pages updated:
- wiki/concepts/groot.md (efficiency corrected + contradiction flagged + consensus details added)
- wiki/concepts/ripa-model.md (two-path model fully documented; confidence upgraded to high)
- wiki/concepts/gajumaru-architecture.md (core test, TEA, partition principle, updated cluster table)
- wiki/index.md (new concept pages + source summary added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged:
- wiki/concepts/groot.md: efficiency 553,800× (Year in Review, Jan 2026) vs 1,846,200× (Un-White Paper, Mar 2026). Working figure updated to 1,846,200×.

Key new claims from source:
- Bitcoin-NG + Cuckoo Cycle consensus architecture detailed
- >300 TPS; 2-3 sec commercial settlement; 3-4 min absolute finality
- TEA trilemma (Trustlessness/Efficiency/Accountability) proposed vs Buterin's trilemma
- Two RIPA paths: RPA (trustless direct) and RIPA (via governed infrastructure)
- Bitcoin is Newcomen analogy; Gajumaru is the Watt engine
- GPL3 open source; defensive patents; zero external dependencies
- Built on Bitcoin-NG, Cuckoo Cycle, Aeternity Sophia/FATE VM

---

## [2026-05-15] meta | Migrated skills to .claude/commands/ + added ingest-video

Files moved: all 9 files from .claude/skills/ → .claude/commands/
Files created: .claude/commands/ingest-video.md
Files removed: .claude/skills/ (directory deleted)
Notes: Commands moved to .claude/commands/ for slash command support. ingest-video supports YouTube/Rumble via yt-dlp subtitles with Whisper fallback.

---

## [2026-05-15] ingest | Gajumaru - New Blockchain - Demo 1 (YouTube, Mar 2024)

Source: raw/transcripts/gajumaru-new-blockchain-demo-1.md
Origin: https://www.youtube.com/watch?v=_3Mnk2_kqOM (subtitle-based transcript via yt-dlp)
Speakers: Gregory Chew (likely host/closing), Dimitar (demo), Ulf (Bitcoin-NG), Craig Everett (product)

Pages created:
- wiki/sources/summary-gajumaru-new-blockchain-demo-1.md

Pages updated:
- wiki/entities/craig.md (full name Craig Everett confirmed; title Chief Product Officer)
- wiki/entities/ulf.md (Erlang since 1992; Erlang/OTP role added; second source)
- wiki/entities/gregory-chew.md (22-year vision; DAGs 2017; second source)
- wiki/index.md (craig updated, source row added)
- wiki/log.md (this entry)

Contradictions flagged: none
Key claims from source:
- Craig Everett = full name of CPO/lead architect
- Ulf has been an Erlanger since 1992 — vital to Gajumaru's Erlang/OTP implementation
- 300 TPS, 2-3 sec confirmation — demonstrated live, faster than Visa
- QPQ business model = products ON the blockchain, not the blockchain itself
- Closing speaker (likely Gregory Chew): 22 years working on new economic systems; explored DAGs in 2017
- Bitcoin and Ethereum are proof-of-concepts that never became MVPs
- Bitcoin-NG separates leader election from transaction processing — "a very clean separation of concerns"
- Next demo (QuidProQuo) announced from the start

---

## [2026-05-15] ingest | Gaju Mining Journey Update (YouTube)

Source: raw/transcripts/gaju-mining-journey-update.md
Origin: https://www.youtube.com/watch?v=vrF5AI6i9yg (subtitle-based transcript via yt-dlp)
Speakers: Gregory Chew (likely opening/closing), Craig (likely technical mid-section), QPQ AG

Pages created:
- wiki/sources/summary-gaju-mining-journey-update.md
- wiki/entities/ulf.md

Pages updated:
- wiki/entities/dimitar.md (baby arrival during development period; Ulf cross-link)
- wiki/entities/peter.md (two Peters noted; Peter Harpending identified)
- wiki/entities/gregory-chew.md (products role; full team named; Gaju Firsts cross-reference)
- wiki/entities/qpq-ag.md (complete team roster; development timeline)
- wiki/concepts/protected-mining.md (small business owners as primary adopters)
- wiki/index.md (ulf entity + source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none
Key claims from source:
- Full team named: Craig, Dimitar, Ulf, Greg, Peter, Santosh, Peter Harpending, Jarvis, Adam Percy
- Ulf built hive mining concept + dividend-writing smart contracts (global first)
- Small business owners = primary adopters, not crypto experts
- Payment provider rugpull at launch → cascading tech failures → forced zero-dependency web shop build
- Architecture A fell apart before the hive mining approach
- 300+ pre-release miners validated the system
- Timeline: Groot live Oct 22 2024, sales started March 2025, full operation target end August 2025
- "Making things impossible vs illegal" — Craig's framing referenced
- Dimitar had a new baby during development

---

## [2026-05-15] ingest | Gaju Firsts, Gajumaru Blockchain (YouTube)

Source: raw/transcripts/gaju-firsts-gajumaru-blockchain.md
Origin: https://www.youtube.com/watch?v=AAgXahd94yY (subtitle-based transcript via yt-dlp)
Speakers: unnamed (likely Craig or Gregory Chew)

Pages created:
- wiki/sources/summary-gaju-firsts-gajumaru-blockchain.md

Pages updated:
- wiki/concepts/grids.md (confirmed universal signing layer; integration table added)
- wiki/concepts/gajumaru-product-suite.md (GajuDesk name confirmed; Clutch resolved as earlier name; GajuMining Dashboard noted)
- wiki/concepts/groot.md (on-chain messaging capability added)
- wiki/index.md (source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none (Clutch/GajuDesk naming discrepancy partially resolved — GajuDesk confirmed current)
Key claims from source:
- GajuDesk confirmed as current desktop wallet name (Clutch was earlier name)
- GRIDS used for mining payout signing — universal signing layer confirmed
- Sub-6-second settlement demonstrated live on PoW blockchain
- On-chain messaging capability (like SWIFT business purpose fields)
- First-ever Gaju transactions recorded; first sent to speaker's wife Rachel McKone
- Speaker unnamed; likely Craig or Gregory Chew

---

## [2026-05-15] ingest | World's First Genuine Blockchain Marketplace, QuidProQuo on the Gajumaru (YouTube)

Source: raw/transcripts/worlds-first-genuine-blockchain-marketplace-quidproquo-on-the-gajumaru.md
Origin: https://www.youtube.com/watch?v=4O7uqJ64mA0 (subtitle-based transcript via yt-dlp)
Speakers: narrator (unnamed) — QPQ AG

Pages created:
- wiki/sources/summary-worlds-first-genuine-blockchain-marketplace-quidproquo.md
- wiki/concepts/grids.md

Pages updated:
- wiki/concepts/gajumaru-product-suite.md (GRIDS added; QuidProQuo/Clutch/Bor naming noted; GajuMarket detail expanded)
- wiki/concepts/associate-chains.md (NOT a layer two clarification; sources updated)
- wiki/index.md (grids concept + source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged:
- Product naming: QuidProQuo vs GajuMarket; Clutch vs GajuDesk; Bor vs GajuMobile — flagged as open question in gajumaru-product-suite.md

Key claims from source:
- QuidProQuo: dynamic smart contracts between counterparties; no third-party intermediation
- Four-element Gajumaru stack: Groot + Gaju + Associate Chains + Sophia/FATE
- Associate Chains are NOT a layer two — Groot facilitates, not validates
- GRIDS: universal wallet-based authentication; no username/password/GDPR
- Clutch = desktop wallet; Bor = mobile wallet
- Transaction escrow enforced on-chain in wallet secure enclave
- QuidProQuo may grow to need own associate chain + nested chains for national systems
- Sophia resolves irreparable Solidity inadequacies; Python-adoptable

---

## [2026-05-15] ingest | The Gajumaru — an actual, working blockchain (YouTube)

Source: raw/transcripts/the-gajumaru-an-actual-working-blockchain.md
Origin: https://www.youtube.com/watch?v=_v1nri8cBtA (subtitle-based transcript via yt-dlp)
Speakers: Craig (lead architect), Dimitar (implementation engineer), Peter (communicator), unnamed host

Pages created:
- wiki/sources/summary-the-gajumaru-an-actual-working-blockchain.md
- wiki/entities/peter.md

Pages updated:
- wiki/concepts/associate-chains.md (finality cooperation + competitive chain spawning added)
- wiki/concepts/groot.md (finality cooperation callout added)
- wiki/concepts/gajumaru-architecture.md (naming updated with "walking tree" meaning; peter added to cluster table)
- wiki/index.md (peter entity + source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none
Key claims from source:
- Gajimaru means "the walking tree" in Japanese
- Name was working name Craig expected to change — nothing better came up
- Associate chains cooperate to improve mint finality (mechanism TBD — Dimitar's area)
- Competitive chain spawning: no currency lock-in means market discipline is structural
- "Squares into polygons" — blockchain industry hides bad original designs behind complexity
- QPQ goal: "internet of economics" — open common resource layer
- Peter introduced as non-technical communicator / rubber duck

---

## [2026-05-15] ingest | Why the Gajumaru and How it Works (YouTube)

Source: raw/transcripts/why-the-gajumaru-and-how-it-works.md
Origin: https://www.youtube.com/watch?v=urxHvOL4fzI (subtitle-based transcript via yt-dlp)
Speakers: Craig (lead architect), Dimitar (implementation engineer), unnamed host

Pages created:
- wiki/sources/summary-why-the-gajumaru-and-how-it-works.md
- wiki/entities/craig.md
- wiki/entities/dimitar.md

Pages updated:
- wiki/concepts/associate-chains.md (technical implementation details from Dimitar; cross-chain transfer mechanics; central bank use case)
- wiki/concepts/gajumaru-architecture.md (naming origin story from Craig; added craig/dimitar to related + cluster table)
- wiki/index.md (entity pages + source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none
Key claims from source:
- Naming origin: gajimaru tree outside Craig's office window in Okinawa — single trunk drops independent trunks, mirrors architecture
- PoW mint required as trust anchor that no party can control
- Associate Chains: transaction throughput isolation; own database, CPU space, block size, consensus
- Gaju account valid on every chain; Gajus transferable cross-chain
- A central bank was consulted — confirmed need for different chain configs per transaction type
- Rejects "one ring to rule them all" — no single blockchain can meet all real-world requirements

---

## [2026-05-15] ingest | Gaju Mining, Pioneering the Human Economy (YouTube)

Source: raw/transcripts/gaju-mining-pioneering-the-human-economy.md
Origin: https://youtu.be/DF76Kl1Z4Pg (subtitle-based transcript via yt-dlp)

Pages created:
- wiki/sources/summary-gaju-mining-video.md

Pages updated:
- wiki/concepts/gaju-token.md (everyday currency positioning section added)
- wiki/concepts/protected-mining.md (mining accessibility + public mining target added)
- wiki/index.md (source summary row added)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none
Key claims from source:
- Bitcoin stopped being considered a currency in 2016 (became store of value)
- Gaju is real everyday money: bread, haircuts, t-shirts
- Mining requires no specialised equipment during protected rollout — everyday home computers
- Public mining opens end of 2026; target millions of miners
- QPQ deliberately refused VC funding to avoid corporatist control
- GajuMarket: buy/sell legal goods like eBay at a fraction of the cost
- Economic emancipation framing: "economy for the people, by the people"

---

## [2026-05-15] ingest | QPQ Public Wiki batch — W01-W04 (Blockchain Primer, Gajumaru, Blockchain Trilemma, Consensus)

Sources:
- raw/articles/qpq-wiki-blockchain-primer.md (W01)
- raw/articles/qpq-wiki-gajumaru.md (W02)
- raw/articles/qpq-wiki-blockchain-trilemma.md (W03)
- raw/articles/qpq-wiki-consensus.md (W04)

Pages created:
- wiki/sources/summary-qpq-wiki-blockchain-primer.md
- wiki/sources/summary-qpq-wiki-gajumaru.md
- wiki/sources/summary-qpq-wiki-blockchain-trilemma.md
- wiki/sources/summary-qpq-wiki-consensus.md

Pages updated:
- wiki/concepts/groot.md (witness mechanism; PoW trustlessness; object categories — PLAs; TTL; garbage collection/epochs/ledger closeout; node types; sources updated)
- wiki/concepts/tea-trilemma.md (CAP theorem connection; blockchain trilemma resolution; PoS nothing-at-stake failure mode; sources updated)
- wiki/concepts/associate-chains.md (any blockchain platform or non-blockchain infrastructure clarification; source added)
- wiki/entities/peter.md (Peter Harpending confirmed as QPQ Public Wiki author/editor; two-Peters disambiguation restructured)
- wiki/index.md (4 new source summary rows; 4 new cluster sections: foundations, monetary-mechanics, smart-contracts, technical-reference)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none

Key new claims from sources:
- W01: Peter Harpending confirmed as QPQ Public Wiki author/editor (last edited 2026-03-17)
- W02: Keyblock + microblocks = "generation"; keyblocks content-free (witness protection); Associate Chains may use non-blockchain infrastructure
- W02: Three object categories — Universal (PLAs), Non-transferable, Transferable; TTL on all data; epochs/ledger closeouts
- W03: Blockchain trilemma = secure/distributed/scalable — pick two; connected to CAP theorem; Algorand drops partition tolerance; Gajumaru solves via architecture + consensus
- W04: Consensus reduces to leader selection; PoW = trustless/anonymous (synonymous); required for a mint; PoS "nothing at stake" problem detailed

---

## [2026-05-15] ingest | QPQ Public Wiki batch — W05-W10 (Mining, PoW, Leader Selection, Finality, Smart Contracts, Sophia)

Sources:
- raw/articles/qpq-wiki-mining.md (W05)
- raw/articles/qpq-wiki-proof-of-work.md (W06)
- raw/articles/qpq-wiki-leader-selection.md (W07)
- raw/articles/qpq-wiki-finality.md (W08)
- raw/articles/qpq-wiki-smart-contracts.md (W09)
- raw/articles/qpq-wiki-sophia.md (W10)

Pages created:
- wiki/sources/summary-qpq-wiki-mining.md
- wiki/sources/summary-qpq-wiki-proof-of-work.md
- wiki/sources/summary-qpq-wiki-leader-selection.md
- wiki/sources/summary-qpq-wiki-finality.md
- wiki/sources/summary-qpq-wiki-smart-contracts.md
- wiki/sources/summary-qpq-wiki-sophia.md
- wiki/concepts/sophia-fate.md (new hub for smart-contracts cluster)

Pages updated:
- wiki/concepts/cuckoo-cycle.md (seed-number cycle-finding description; PoW properties; miner rewards; source added)
- wiki/concepts/tea-trilemma.md (election vs competition framing from W07; leader selection analysis added; sources updated)
- wiki/concepts/gajumaru-architecture.md (Sophia/FATE detail expanded; contributor names; sources updated)
- wiki/index.md (7 new source rows; sophia-fate added to smart-contracts cluster)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated — todo)

Contradictions flagged: none

Key new claims from sources:
- W05: Cuckoo Cycle = "least computation-heavy, most energy-efficient known PoW"; dual miner reward (new coins + tx fees)
- W06: PoW requires hard-to-solve/easy-to-verify + random outcomes
- W07: Election (PoS) requires known identity + costly stake; Competition (PoW) = costly signal without identity
- W08: Bitcoin finality = 6 blocks ≈ 1 hour; second-finality claims questioned under CAP theorem
- W09: Sophia + FATE VM address Solidity/EVM limitations; atomic execution
- W10: Sophia contributors — Erlang co-inventor Robert Virding, QuickCheck co-inventor John Hughes; FATE VM = immutability-first functional instruction set; Aeternity + Cardano only blockchains with property-based testing
- Open question raised: Is "Ulf" (QPQ team) = Ulf Norell (Sophia contributor)?

---

## [2026-05-15] ingest | QPQ Public Wiki batch — W11-W18 (DLTs, Blockchain, Transaction, Mempool, Monetary Mechanics, Money, GRIDS spec, Home)

Sources:
- raw/articles/qpq-wiki-dlts.md
- raw/articles/qpq-wiki-blockchain.md
- raw/articles/qpq-wiki-transaction.md
- raw/articles/qpq-wiki-mempool.md (authored by Craig Everett, not Peter Harpending)
- raw/articles/qpq-wiki-monetary-mechanics.md
- raw/articles/qpq-wiki-money.md
- raw/articles/qpq-wiki-grids.md (GRIDS technical spec v5, authored by Craig Everett)
- raw/articles/qpq-wiki-home.md

Pages created:
- wiki/sources/summary-qpq-wiki-dlts.md
- wiki/sources/summary-qpq-wiki-blockchain.md
- wiki/sources/summary-qpq-wiki-transaction.md
- wiki/sources/summary-qpq-wiki-mempool.md
- wiki/sources/summary-qpq-wiki-monetary-mechanics.md
- wiki/sources/summary-qpq-wiki-money.md
- wiki/sources/summary-qpq-wiki-grids.md
- wiki/sources/summary-qpq-wiki-home.md

Pages updated:
- wiki/concepts/grids.md (full name confirmed — Gajumaru Remote Instruction Dispatch System; URL schema; three instruction types; dead-drop SSO; security separation principle; confidence upgraded to high; Craig confirmed as author)
- wiki/entities/craig.md (GRIDS authorship added; Japan timezone +09:00 confirmed; sources updated)
- wiki/index.md (9 new source rows)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none

Key new claims from sources:
- W11/DLTs: public + distributed + consensus mechanism = DLT definition
- W12/Blockchain: linked list with hash chaining; retroactive change detectable
- W13/Transaction: TXs = state transition events; spend TX + contract call TX
- W14/Mempool: Craig Everett authored this page (UTC+9 confirmed); mempool = signed-message holding space; leader selects by profitability
- W15/Monetary Mechanics: three monetary approaches — commodity reference, debt issuance, ledger-based
- W16/Money: three money functions; currency requirements (liquidity, divisibility, fungibility, accessibility); value = shared belief in future value; perception precedes money supply in price effects
- W17/GRIDS: full URL schema confirmed; three instruction types (s/t/d); dead-drop = server-queued signing; SSO without server-side private data; Craig Everett as author
- W18/Home: wiki has ~30 pages; QPQ's own TODO list includes PoS primer, PoUW, Bitcoin-NG primer

## [2026-05-15] query | Quartz GitHub Pages publishing setup
Source: Local repository configuration request
Pages created: wiki/publishing.md
Pages updated: wiki/index.md
Infrastructure created: .github/workflows/deploy-quartz.yml,
                        .github/quartz/quartz.config.ts,
                        .github/quartz/quartz.layout.ts,
                        .github/quartz/custom.scss,
                        scripts/prepare-quartz-content.mjs,
                        scripts/preview-quartz.ps1
Contradictions flagged: none

## [2026-05-15] query | Quartz visual polish pass
Source: Local publishing/design request
Pages created: none
Pages updated: wiki/index.md
Infrastructure updated: .github/quartz/quartz.config.ts,
                        .github/quartz/quartz.layout.ts,
                        .github/quartz/custom.scss
Contradictions flagged: none

---

## [2026-05-15] ingest | QPQ Public Wiki batch — W19-W26+ (State Channels, Flation, Mint, Sophia FAQ, RLP, BaseN, API Encoding, Serialization, Testnet Node Setup)

Sources:
- raw/articles/qpq-wiki-state-channels.md
- raw/articles/qpq-wiki-flation.md
- raw/articles/qpq-wiki-mint.md
- raw/articles/qpq-wiki-sophia-faq.md
- raw/articles/qpq-wiki-rlp.md
- raw/articles/qpq-wiki-basen.md
- raw/articles/qpq-wiki-api-encoding.md
- raw/articles/qpq-wiki-serialization.md
- raw/articles/qpq-wiki-testnet-node-setup.md
- raw/articles/qpq-wiki-home.md (also saved this batch)
- NOTE: Install Erlang and ZX — URL returned wiki index; could not fetch content

Pages created:
- wiki/sources/summary-qpq-wiki-state-channels.md
- wiki/sources/summary-qpq-wiki-flation.md
- wiki/sources/summary-qpq-wiki-mint.md
- wiki/sources/summary-qpq-wiki-sophia-faq.md
- wiki/sources/summary-qpq-wiki-rlp.md
- wiki/sources/summary-qpq-wiki-basen.md
- wiki/sources/summary-qpq-wiki-api-encoding.md
- wiki/sources/summary-qpq-wiki-serialization.md
- wiki/sources/summary-qpq-wiki-testnet-node-setup.md
- wiki/concepts/state-channels.md (new concept page; developer-ecosystem cluster member)

Pages updated:
- wiki/concepts/gaju-token.md (coin vs token distinction; Gaju is a coin not a token; mint function context; sources updated)
- wiki/index.md (state-channels added to developer-ecosystem; 10 new source rows; sophia-fate moved to developer-ecosystem cluster listing)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none

Key new claims from sources:
- State Channels: 500+ transfers/sec single channel; 3500/sec at 50 channels; 10,000 concurrent channels tested stable; ~15ms round-trip; cross-AC fund transfers via State Channel Markets; demos Spring/Summer 2026
- Flation: inflation = increase in money supply (not price rise); coin = blockchain protocol native; token = any referential value device
- Mint: Bitcoin model — predetermined expansion; early miners get coins; later miners get fees; Gajumaru follows same structure
- Sophia FAQ: Peter Harpending email confirmed — peterharpending@qpq.swiss; Sophia compilation pipeline documented
- API Encoding: associate_chain tag=7, native_token tag=8, channel tag=6 — all confirmed
- Testnet: targets Devuan 6 (Excalibur); requires gmhive_client or gajumine

---

## [2026-05-15] lint | Full wiki health check — 36 sources, 12 concept pages, 7 entity pages

Scope: All concept pages (12), entity pages (7), source summaries (36), index.md, overview.md

### Contradictions
- groot.md: efficiency 553,800× (Year in Review, Jan 2026) vs 1,846,200× (Un-White Paper, Mar 2026) — pre-existing, already flagged with > [!contradiction] callout. Working figure: 1,846,200×.

### Syntax Bugs Fixed
- state-channels.md frontmatter: `[[sophia-fate]` was missing closing `]]` — malformed link; FIXED.

### Orphan Pages (resolved)
- state-channels.md — zero inbound concept/entity links (only index.md + its own source summary). Root cause: missing from gajumaru-product-suite.md "In this cluster" table. FIXED.

### Cluster Hub Gaps (resolved)
All fixed in this session:
- state-channels.md (developer-ecosystem member) → added to gajumaru-product-suite.md cluster table
- gregory-chew.md (developer-ecosystem entity) → added to gajumaru-product-suite.md cluster table
- ulf.md (core-protocol entity) → added to gajumaru-architecture.md cluster table
- ltin.md (core-protocol entity) → added to gajumaru-architecture.md cluster table

Pages fixed:
- wiki/concepts/gajumaru-product-suite.md
- wiki/concepts/gajumaru-architecture.md

### Missing Concept Pages (3+ mentions, no dedicated page)
- Bitcoin-NG: 27 occurrences across 12 files — no concept page; QPQ's own wiki TODO includes "Bitcoin-NG primer"
- Aeternity: 23 occurrences across 10 files — no concept/entity page; Sophia, FATE VM, State Channels all originate from Aeternity
- MainNet (launch event): 21 occurrences across 11 files — no milestone/event page

### Stale Claims
- gaju-token.md: "300+ active miners as of December 2025" — pre-MainNet figure; post-MainNet count unknown
- Efficiency figure: working figure 1,846,200× (Un-White Paper, Mar 2026); Year in Review figure 553,800× not yet reconciled

### Synthesis Back-links
No synthesis or comparison pages exist — no action needed.

### Suggested Next Steps
1. Create wiki/concepts/bitcoin-ng.md — fundamental to Groot; 27+ mentions; QPQ's wiki TODO item
2. Create wiki/entities/aeternity.md — Gajumaru's upstream for Sophia/FATE/State Channels; 23+ mentions
3. Find and ingest the Dimitar video on Associate Chain → Groot finality cooperation (open question #1)
4. Seek post-MainNet data source (miner count, Gaju price, LTIN status) to update stale December 2025 claims
5. Resolve Ulf identity — is QPQ's "Ulf" = Ulf Norell (Sophia contributor, Chalmers/Quviq)?

---

## [2026-05-15] ingest | QPQ Wiki completion — Install Erlang and ZX + Vim Setup (W28-W29)

Sources:
- raw/articles/qpq-wiki-install-erlang-and-zx.md (fetched via corrected slug: lowercase "zx")
- raw/articles/qpq-wiki-vim-setup.md

Pages created:
- wiki/sources/summary-qpq-wiki-install-erlang-and-zx.md
- wiki/sources/summary-qpq-wiki-vim-setup.md

Pages updated:
- wiki/entities/craig.md (ZX/zxq9 open question added)
- wiki/index.md (2 new source rows)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new claims:
- Gajumaru node stack requires Erlang 28.1 + ZX; ZX hosted at zxq9.com (zxq9 = possible Craig Everett handle — open question flagged in craig.md)
- Primary dev platform: Devuan 6 (Excalibur) consistent across all QPQ setup guides
- Sophia syntax highlighting confirmed (GitHub at minimum); Peter Harpending actively maintaining docs as of 2026-05-08

QPQ wiki ingestion status: COMPLETE — all 29 accessible pages ingested (27 research pages + Home + Vim Setup).
Install Erlang and ZX was previously unfetchable due to URL case sensitivity; now retrieved.

---

## [2026-05-15] ingest | bitcoin-ng.md + aeternity.md — missing concept and entity pages

Pages created:
- wiki/concepts/bitcoin-ng.md (new concept page; core-protocol cluster member)
- wiki/entities/aeternity.md (new entity page; developer-ecosystem cluster)

Pages updated:
- wiki/concepts/groot.md (related: bitcoin-ng added)
- wiki/concepts/gajumaru-architecture.md (related + cluster table: bitcoin-ng added)
- wiki/concepts/sophia-fate.md (related: aeternity added)
- wiki/concepts/state-channels.md (related: aeternity added)
- wiki/concepts/gaju-token.md (300+ miners caveat: pre-MainNet figure noted)
- wiki/index.md (bitcoin-ng + aeternity added; metrics: 37 sources, 12 concepts, 8 entities)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

---

## [2026-05-15] ingest | Deep source re-audit + QPQ git repo exploration (26 repos)

### Source Re-Audit (all 7 transcripts + Un-White Paper)

Gap analysis performed across all existing transcripts vs current wiki content. Key missed facts identified and ingested:

**Un-White Paper additions:**
- Financial infrastructure statistics: 1.3B unbanked, $5.7T SME gap, correspondent banking -39%, card fee extraction 2–3%, $6.5B bills of lading savings, Bitcoin practical costs
- GL1 (Global Layer 1) section: Singapore MAS consortium; named participants: Standard Chartered, Citi, JPMorgan, MUFG, BNY, Societe Generale-FORGE, Euroclear
- R3 Corda and Regulated Liability Network prior failures
- Payment network power framing: "making things impossible vs illegal"
- Michael Nolles debanking example; Steam/Mastercard TOS restriction
- Institutional advantage inversion framing
- Ethereum validator concentration figures: 6 entities = 52%; 4 entities = 62%
- Buterin sole authority over EF confirmed January 2025

**Gaju Token additions:**
- 7XGaju currency symbol with full rationale: Ki (木) = tree; keyboard-accessible design decision
- Pre-MainNet caveat added to "300+ miners" figure

**Gajumaru Architecture / naming origin:**
- Gajumaru = Japanese name for Banyan tree — species name added
- "Walking tree" / "runners" terminology documented
- "You can't tell which one was the original one" — Craig's quote added

**TEA Trilemma additions:**
- Ethereum validator concentration (52% / 62%) with specific source context
- Buterin sole authority over EF — concrete January 2025 example cited

### QPQ Git Repository Exploration (git.qpq.swiss/QPQ-AG)

26 public repos audited. Key identity resolutions and technical facts extracted:

**Identity confirmations (open questions resolved):**
- `zxq9` = Craig Everett — confirmed via GajuDesk commit author; all commits UTC+9 (Okinawa timezone)
- `uwiger` = Ulf Wiger — confirmed across gmserialization, gmconfig, enoise, gmhive_client; Erlanger since 1992
- Ulf in QPQ = Ulf Wiger (Erlang/OTP veteran), NOT Ulf Norell (Agda creator)

**Sophia/FATE technical details:**
- File extension: `.aes` — confirmed from ExampleCaller repo (counter.aes)
- ACI = Application Contract Interface (so_aci module)
- Current stable version: v7.4.0 (September 2023)
- AEVM eliminated in v7.0.0; FATE-only from v7 onward
- Oracle removal: preparing in March 2025; fully removed in v9.0.0
- FATE address prefixes: @ak_ (account), @ct_ (contract), @ch_ (channel), @ok_ (oracle), @oq_ (oracle query)
- Full version history documented: v3.0.0 through v9.0.0
- AENS (Aeternity Name Service): AENSv2 with raw data pointers (v8.0.0)
- BLS12-381 pairing cryptography + Poseidon hash: ZK-proof friendly (v8.0.0)
- Child contracts: Chain.clone, Chain.create (v6.0.0)
- QuickCheck property-based testing confirmed (John Hughes connection)

**QPQ software stack:**
- Build system: ZX (zxq9's own tool at zxq9.com/projects/zomp/) — evidenced by zomp.meta in all repos
- rebar3 also supported in many repos
- Erlang 28.1 reference version; Kerl-built from source; Devuan 6 primary platform
- Mining port: 17888 (gmhive_client default)
- gajumining.com: serves connection info via miner's public key; cached 24h
- CPU + CUDA GPU mining both supported (gmminer)
- Noise Protocol (enoise): DH448 + Blake2s for encrypted P2P
- Mnesia + RocksDB distributed storage
- `Gaju` repo: empty (11 watchers — planned full node repo)
- `hakuzaru`: type checker/data validator (Erlang, MIT)
- `QHL` (QPQ Header Library): Erlang/OTP header library

Pages created:
- wiki/concepts/qpq-software-stack.md (new concept page; developer-ecosystem cluster)
- wiki/entities/adam-percy.md (new entity page; developer-ecosystem cluster)
- wiki/entities/ulf.md REWRITTEN (Ulf Wiger identity confirmed; uwiger handle; full technical profile)

Pages updated:
- wiki/concepts/sophia-fate.md (major rewrite: file extension, ACI, FATE prefixes, full version history, AEVM elimination, oracle removal, AENS, BLS12-381, Poseidon, child contracts; Ulf Wiger as QPQ maintainer confirmed)
- wiki/concepts/gaju-token.md (7XGaju symbol section added; Ki/tree kanji; keyboard accessibility rationale)
- wiki/concepts/gajumaru-architecture.md (naming origin updated: Banyan tree species, "runners" terminology, Craig's quote)
- wiki/concepts/groot.md (Groot launch vs first Gaju drawdowns distinction clarified; note added)
- wiki/concepts/tea-trilemma.md (Ethereum validator concentration; Buterin sole authority Jan 2025 added)
- wiki/sources/summary-unwhitepaper.md (financial statistics section; GL1 section; R3/Corda context; payment network framing)
- wiki/entities/craig.md (ZX/zxq9 handle confirmed; Okinawa timezone consistency noted)
- wiki/index.md (qpq-software-stack + adam-percy added; metrics updated)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged:
- gmbytecode repo description says "supports both AEVM and FATE" — AEVM present for legacy compatibility; new contracts FATE-only (v7+). Documented in sophia-fate.md.

Key resolutions:
- Ulf Wiger identity: CONFIRMED (open question closed)
- Craig Everett = zxq9: CONFIRMED (open question closed)
- QPQ wiki completeness: CONFIRMED — 39 total sources now ingested

---

## [2026-05-15] ingest | GL1 context + hive-mining.md + QuidProQuo goodwill framing

Pages created:
- wiki/concepts/hive-mining.md (new concept; tokenomics-economics cluster member)

Pages updated:
- wiki/concepts/associate-chains.md (GL1 Singapore MAS section added; R3/Corda failures; institutional advantage inversion quote; source: summary-unwhitepaper)
- wiki/concepts/gaju-token.md (hive-mining added to "In this cluster" table)
- wiki/sources/summary-worlds-first-genuine-blockchain-marketplace-quidproquo.md (reputation/goodwill framing; archive mechanics; Robert the Stinky character note)
- wiki/index.md (hive-mining in tokenomics cluster; metrics: 38 sources / 15 concepts / 9 entities)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new content:
- GL1 (Global Layer 1): Singapore MAS consortium — Standard Chartered, Citi, JPMorgan, MUFG, BNY, Societe Generale-FORGE, Euroclear
- Prior institutional consortium failures: R3 Corda, Regulated Liability Network
- Hive mining: SaaS model, dividend-writing contracts, gmhive_client port 17888, Ulf Wiger authorship, scaling goals
- QuidProQuo reputation/goodwill: on-chain trust as commercial goodwill analogue; archive record after sale deletion

---

## [2026-05-15] ingest | gajumaru.io + gajumining.com + qpq.swiss site crawl; team roster confirmed

Sources crawled:
- gajumaru.io (homepage, /unwhite-paper/, /build/, /blog/, /mine/)
- gajumining.com (homepage, /the-gaju, /the-opportunity, /links)
- qpq.swiss (homepage, /blog/, /about/)
- 10 blog posts read: 6 from gajumaru.io, 4 from qpq.swiss

Pages created:
- wiki/entities/benno-raeber.md (CLO — new team member)
- wiki/entities/jarvis-carroll.md (R&D — surname now confirmed)
- wiki/entities/jeff-thomson.md (Product Research — new team member)
- wiki/sources/summary-blog-quantum-resistance.md
- wiki/sources/summary-blog-mythos-grids.md
- wiki/sources/summary-blog-summer-of-gajumaru.md
- wiki/sources/summary-blog-in-space.md
- wiki/sources/summary-blog-dev-updates-2026.md

Pages updated:
- wiki/entities/dimitar.md (full name: Dimitar Ivanov; title: CDO)
- wiki/entities/ulf.md (title: CTO; "first commercial Erlang license 1993")
- wiki/entities/craig.md (cybersecurity background; blog authorship confirmed; open question closed)
- wiki/entities/gregory-chew.md (background: law, commodities, investment banking, Africa cooperatives)
- wiki/entities/peter.md (title: Research Lead & Lead Cryptographic Developer)
- wiki/entities/qpq-ag.md (full team table with confirmed names/titles; MainNet dual-date note)
- wiki/concepts/gajumaru-product-suite.md (GajuMobile confirmed; GajuAuth + GajuPort added; GajuPay details)
- wiki/concepts/state-channels.md (M2 benchmark fix; A2P/A2A channels; whale subsidy framing; <1ms overhead)
- wiki/index.md (5 new source rows; 7 new entity entries in developer-ecosystem; metrics: 43 sources / 15 concepts / 12 entities)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged:
- MainNet date: April 6/7 2026 (technical launch at 23:59:00 Zulu) vs April 26, 2026 (public launch from Summer article). Both from QPQ sources. Flagged in qpq-ag.md.

Key discoveries:
- Full team confirmed: Gregory Chew (CEO), Ulf Wiger (CTO), Craig Everett (CPO), Dimitar Ivanov (CDO), Peter Harpending (Research Lead/Lead Cryptographic Developer), Benno Raeber (CLO), Cecille de Jesus, Jeff Thomson, Jarvis Carroll, Santosh
- Mobile wallet name resolved: GajuMobile (Bor was earlier working name)
- New products: GajuAuth (GRIDS-backed OAuth2), GajuPort, GajuVault, GajuMall
- New partners: Solstice Labs, INACRA (join Bank Frick, Bitcoin Suisse, Swiss Subnet)
- Quantum resistance plan: ML-DSA-44/65/87 via Sophia Crypto library; Curve25519 currently
- GajuDEX CLOB completed (April 2026); GajuMarket test environment operational (March 2026)
- Craig Everett confirmed as author of "Gajumaru in Space" (April 15, 2026)
- Mythos AI threat justified GRIDS architecture retroactively; Glasswing gave early access to AWS, Apple, Microsoft, Google, JPMorganChase
- Un-White Paper gap analysis: ~80% of document content not yet in wiki summary — major expansion needed

Contradictions flagged: none

Key claims documented:
- Bitcoin-NG: keyblock (~2 min PoW) + microblocks (~3 sec transactions) = generation; >300 TPS; 2-3 sec settlement; 3-4 min absolute finality; Eyal et al. 2016 USENIX NSDI
- Craig: separation of leader election from transaction serialization is "obvious in hindsight — nobody picked up on that"
- QPQ's own wiki TODO includes Bitcoin-NG primer (unwritten)
- Aeternity: upstream blockchain (Erlang/OTP) contributing Sophia, FATE VM, State Channels to Gajumaru

---

## [2026-05-15] ingest | Un-White Paper summary expansion — 10 new sections (full document coverage)

Source: raw/articles/gajumaru-un-white-paper.md (complete re-read in chunks, lines 1–10,355)
Pages updated:
- wiki/sources/summary-unwhitepaper.md (primary — 10 new sections added after "## Key Quotes"; frontmatter key_claims expanded from 10 to 22 entries)

New sections added:
1. GajuDEX — Genuine Decentralisation (DINO problem; 39/40 score; two deployments; FINMA test)
2. Fibonacci Mining Curve and Tokenomics (1,554,161 Gaju/keyblock Period 1; burned Gajus to unmined pool; transit currency role)
3. Witnessing Protocol and State Channels (patented content-free keyblock witnessing; Data TTL <10 GB; 500+/3,000+ TPS per channel; Generalised Accounts)
4. Bridge Elimination — Native Cross-Chain Transfers (Ronin $624M through Harmony $100M exploit record; native Associate Chain awareness)
5. Real-World Economic Applications (insurance pools, property/mortgage, unserved markets, tokenised shares, IP/royalties, human capital, PHYDEX, bills of lading)
6. GPL3 and Patent Strategy (copyleft vs permissive; Section 11 patent peace; Red Hat defensive model)
7. Regulatory Framework Analysis (FINMA substance-over-form; MiCA; MAS identifiable-operator; TVTG; Swiss DLT Act 2021; OFAC Ethereum critique)
8. Layer 2 Critique — The Mathematics (blob arithmetic impossibility; observed vs claimed TPS table; ZK prover time inflation; October 2020 pivot; sequencer revenue)
9. Specific Project Forensics (Ethereum OFAC/Lido/Buterin; Solana 57%/75%; DFINITY 48.5%/95%; Arbitrum $21.6M; Base $30M+; ZKSync OtterSec; Canton vocabulary evolution; Lightning Gini 0.97/$89/$137K)
10. Bitcoin Security Budget Crisis (0.6% fee ratio; Lightning $137K routing; empty mempool evidence)
11. Vocabulary of Unaccountable Power (Tony Benn five questions; C.A.R. Hoare Turing Award; Harold Pinter analogy; Canton trajectory)
12. Security Philosophy — Zero Dependencies (MetaMask 212,620 packages; NPM supply chain attack; GRIDS hierarchy; formal verification)

Contradictions flagged: none
Notes: Full document read (lines 1–10,355 in 700-line chunks after context-window constraint). Appendix, Glossary, and 71 footnotes/references confirmed; no new contradictions with existing wiki pages found.

---

## [2026-05-15] ingest | Blog post batch — 9 remaining qpq.swiss + gajumaru.io posts

Sources fetched:
- gajumaru.io/2026/04/29/a-case-for-defensive-mining/
- gajumaru.io/2026/04/12/gajumaru-state-channels/
- gajumaru.io/2026/04/02/why-the-bitcoin-lightning-network-failed/
- gajumaru.io/2026/03/13/why-proof-of-work-works-in-theory/ (author: Peter Harpending)
- qpq.swiss/2026/04/14/mythos-glasswingand-why-we-built-what-we-built/ (author: Greg Chew)
- qpq.swiss/2026/04/13/killing-the-whale-subsidy-why-a2p-state-channels-are-the-only-path-to-provider-profitability/
- qpq.swiss/2026/04/13/beyond-subscription-how-gajumaru-a2a-state-channels-kill-the-whale-subsidy/
- qpq.swiss/2026/04/13/the-end-of-the-ad-supported-lie-why-your-social-feed-needs-a-payment-rail/
- qpq.swiss/2026/03/26/gajupay-the-answer-to-the-broken-multi-billion-dollar-payment-solutions-industry/

Pages created (9 new source summaries):
- wiki/sources/summary-blog-defensive-mining.md
- wiki/sources/summary-blog-lightning-network-failed.md
- wiki/sources/summary-blog-gajumaru-state-channels.md
- wiki/sources/summary-blog-proof-of-work-theory.md
- wiki/sources/summary-blog-mythos-glasswing.md
- wiki/sources/summary-blog-whale-subsidy-a2p.md
- wiki/sources/summary-blog-a2a-state-channels.md
- wiki/sources/summary-blog-social-feed-payment-rail.md
- wiki/sources/summary-blog-gajupay.md

Pages updated:
- wiki/concepts/grids.md (full name corrected: Dispatch System → Dispatch and Serialisation; three-stage hardware roadmap added; open_question resolved; new sources added)
- wiki/concepts/protected-mining.md (defensive mining section added; source added)
- wiki/concepts/tea-trilemma.md (Peter Harpending trilemma quote added; source added)
- wiki/concepts/gajumaru-product-suite.md (GajuPay three-stage rollout added)
- wiki/entities/peter.md (confirmed blog author for PoW Theory post; source added)
- wiki/index.md (9 new source rows; metrics: 52 sources)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new content:
- Defensive mining: commercial entities mining as operational insurance; 47% Bitcoin custodian concentration; regulated mining pools with content-neutral commitments
- Lightning Network failure analysis: $89 routing ceiling; 23% failure rate at $100; routing wall; capital fronting requirement
- GRIDS full name confirmed: "Gajumaru Remote Instruction Dispatch and Serialisation" (not "System")
- GRIDS three-stage hardware roadmap: Stage 1 (current: device enclaves, GPL3); Stage 2 (in dev: air-gapped hardware, no wireless); Stage 3 (planned: sovereign manufacturing in Switzerland/Japan)
- Peter Harpending confirmed as public blog author (PoW Theory, March 2026)
- Greg Chew confirmed as public blog author (Mythos/Glasswing, April 2026)
- Payment market: $47.61B (2022) → $139.90B (2030); Japanese interchange math showing negative-margin per transaction
- A2P model: sub-cent settlement eliminates $0.30+3% floor; "Pay-as-you-Flow"
- A2A model: per-token/per-inference agent micropayments; OpenClaw agentic framework referenced
- Social feed: bot monetization reframe — payment rails convert spammers from costs to revenue
- GajuPay three-stage rollout: web portal MVP → webshop plugins → self-hosted enterprise backend
- "Any project claiming to have solved the Blockchain Trilemma is a scam" — Peter Harpending

---

## [2026-05-16] ingest | Concept page expansion — UWP deep audit follow-through (Session 2)

Source: wiki/sources/summary-unwhitepaper.md (content already ingested; this entry reflects propagation to concept pages)

Pages created:
- wiki/concepts/quantum-resistance.md (ML-DSA-44/65/87; GA upgrade path; Curve25519 current; 10-20yr threat timeline; Seth Lloyd 50-50 probability; performance cost 1.5x-2.2x)
- wiki/concepts/internet-of-economics.md (Internet of Data vs Internet of Economics; three restorations; trustlessness at scale; architectural separation; "only one protocol")

Pages updated:
- wiki/concepts/gaju-token.md (stabilisation treasury 125B Gaju; outer mining boundary Sept 30 2027; MainNet date significance "14 years from Satoshi's last email"; minting efficiency 249M× vs Bitcoin; base unit: 1 puck = 10⁻¹⁸ Gaju; updated sources)
- wiki/concepts/sophia-fate.md (Sophia etymology — Greek for "wisdom"; FATE VM Security Properties section: type safety, overflow prevention, memory isolation, data/control separation, test/prod fidelity; updated sources)
- wiki/concepts/state-channels.md (Scale Comparisons section: SUICA 500,000 TPS vs 300 TPS peak; WhatsApp Mac Mini M4 2.5B msg/day; bar tab metaphor; Machine Economy section: autonomous vehicles, AI inference, "machines don't have passports"; updated sources)
- wiki/concepts/grids.md (SSSO section added: Self Single Sign-On, no credential sharing, GDPR automatic, nothing to steal; RUAG Guardian Secure Mobile Platform reference added to Stage 3; updated sources)
- wiki/concepts/associate-chains.md (Jurisdictional Scaling section: 260 jurisdictions × 1,846,200 = 144M× vs Bitcoin; no architectural ceiling vs Polkadot/Cosmos/Ethereum L2s; updated sources)
- wiki/concepts/gajumaru-architecture.md (In this cluster table updated with quantum-resistance and internet-of-economics)
- wiki/index.md (2 new concept page rows; metrics: 17 concept pages)
- wiki/hot.md (session state updated)

Contradictions flagged: none
Notes: Session 2 continuation. All high-priority concept page updates from the UWP deep audit are now complete. Two new concept pages created for quantum resistance and Internet of Economics framing.

---

## [2026-05-16] ingest | New video transcripts, site resources, and source audit infrastructure

Sources:
- youtube.com/@Gajumaru_Chain — full channel video list obtained (40+ videos; previously only 7 ingested)
- qpq.swiss/resources/ — three new PDFs discovered (image-based; OCR not available without pdftoppm)
- gajumining.com/downloads, /docs/walkthrough, /faq — operational detail pages
- 5 new YouTube transcripts downloaded via yt-dlp

New transcripts ingested:
- raw/transcripts/blockchain-governance-privacy-alternate-financial-systems-and-associate-chains.md (2068 lines)
- raw/transcripts/gajumaru-how-the-gajumaru-addresses-scaling.md (1191 lines)
- raw/transcripts/token-summit-liechtenstein-gregory-chew-on-the-path-to-decentralization.md (503 lines)
- raw/transcripts/gajumaru-ripa-craig-everett.md (39 lines)
- raw/transcripts/gajumaru-blockchain-groot-1-846-200-times-more-efficient-than-bitcoin-8-23-times-the-security.md (11 lines)

Pages created:
- wiki/sources/summary-blockchain-governance-associate-chains.md
- wiki/sources/summary-how-gajumaru-addresses-scaling.md
- wiki/sources/summary-token-summit-gregory-chew.md
- wiki/concepts/gajudex.md (AMM+CLOB; 39/40 DINO score; FINMA-compliant; two deployments; PHYDEX planned)
- wiki/source-audit.md (new completeness tracking file)

Pages updated:
- wiki/concepts/associate-chains.md (cross-chain routing mechanism; hard cap enforcement; no bailout; why ACs can be fast; 3M TPS network total; no-ZK-rollup rationale; atomic currency exchange; new sources)
- wiki/entities/gregory-chew.md (Token Summit appearance confirmed; 23-year journey; majority shareholder; $60M cost; 2009 pivot; new sources)
- wiki/index.md (3 new source rows; 1 new concept page; metrics updated: 55 sources, 18 concept pages)
- wiki/source-audit.md (qpq-wiki-state-channels.md marked ✅ after first source audit)

Source audit performed this cycle:
- raw/articles/qpq-wiki-state-channels.md → summary-qpq-wiki-state-channels.md ✅ CONFIRMED

Key new content:
- Cross-chain routing: AC A → Groot → AC B (explicit mechanism confirmed by Craig Everett)
- Hard money supply cap: enforced by Groot at every keyblock height; AC cannot extract more than was deposited
- No bailout mechanism: if AC collapses, there is no rescue — "too big to fail" structurally impossible
- 3,000,000 TPS combined network: 10,000 ACs × 300 TPS (Craig's explicit calculation)
- ACs can use PoS/PoA because operators are known and legally accountable (leader selection problem solved differently)
- Associate chains can be SQL databases or banking systems with adapters — not required to be blockchains
- No ZK rollups: design decision to keep regulatory accountability with AC operators (not Groot)
- Greg confirmed as majority shareholder of QPQ AG
- QPQ cost to date: ~$60 million
- Token Summit: MiCA Recital 22 exemption discussed; independent rating agency proposed
- 40+ previously unknown videos on @Gajumaru_Chain channel; 35+ still unprocessed
- GajuMining FAQ: daily reward cap = 720 generations (~24 hours); up to 10 computers per account
- QPQ IaaS AG: Allmeindstrasse 17, 8840 Einsiedeln, Switzerland (operational entity)
- Shane Preater: community contributor maintaining Linux installer (github.com/shanepreater/gajumaru)
- gajumaru.io blog: 6 posts confirmed — all already ingested ✅

Contradictions noted:
- Protected mining date: walkthrough says "March 31, 2027" vs UWP "March 30, 2027" vs hot.md "March 29" — pending resolution

Open questions updated:
- AC → Groot finality cooperation: confirmed NOT in the 5 new transcripts; Craig's promise to "get back to that with slightly more details" remains unfulfilled in public sources

---

## [2026-05-16] ingest | Bulk channel video ingestion — 41 transcripts pulled, 4 major summaries created

Sources fetched (yt-dlp batch download):
- 41 VTT subtitle files downloaded from @Gajumaru_Chain YouTube channel
- 29 new transcripts converted to clean markdown in raw/transcripts/

Pages created:
- wiki/sources/summary-quantum-ai-machine-economy.md (Greg/Ulf/Craig discussion — quantum threat timeline update, A1/A2/A3 tiered accounts proposal, Nazgûl naming, Anthropic Mythos)
- wiki/sources/summary-npm-supply-chain-hack.md (full Craig/Greg/Ulf discussion — 18 packages, 2B downloads, MetaMask failure, GajuDesk zero-dependency architecture, Peter Harpending co-authorship)
- wiki/sources/summary-internet-of-economics-grids-mythos.md (Greg/Craig — two internets thesis, 3DS replacement, 25-year pitch to FIs, OpenClaw threat)
- wiki/sources/summary-gajumaru-channel-shorts.md (roll-up of ~25 short clips — operational confirmations, Nazgûl, price signal economy, Ulf's Swedish background)

Pages updated:
- wiki/concepts/quantum-resistance.md (updated timeline mid-2030s; $100K economic threshold; A1/A2/A3 tier proposal; multi-account best practice)
- wiki/concepts/grids.md (Mythos AI section; 3DS replacement path; operational status table; new sources)
- wiki/concepts/gajumaru-product-suite.md (GajuPay webhook architecture; GajuMobile May 2026 deployment; 90-day implementation timeline)
- wiki/entities/peter.md (confirmed as co-author of GajuDesk with Craig; new sources)
- wiki/entities/ulf.md (Swedish nationality confirmed; personal banking anecdote; public-speaking role across panel videos)
- wiki/entities/gregory-chew.md (Nazgûl metaphor; generational value creation; three time periods 22/23/25 years reconciled)
- wiki/index.md (4 new source rows; metrics: 59 sources, 18 concept pages)
- wiki/source-audit.md (Newly Added Sources section; audit status per new file)

Source audit performed this cycle:
- raw/transcripts/gajumaru-ripa-craig-everett.md ✅ FULL (39 lines)
- raw/transcripts/gajumaru-blockchain-groot-1-846-200-times-more-efficient-than-bitcoin-8-23-times-the-security.md ✅ FULL (11 lines)
- raw/transcripts/token-summit-liechtenstein-gregory-chew-on-the-path-to-decentralization.md ✅ FULL (503 lines)
- ~20 channel short transcripts read in full and rolled up

Key new content:
- Quantum threat timeline updated: mid-2030s for first realistic attack; $100K+ account value threshold
- A1/A2/A3 tiered quantum account proposal (Craig — pending Dimitar/Ulf review): elliptic-curve-with-hash-ID + ML-DSA-65/87 tiers
- Anthropic Mythos AI: announced but not released; can hack every standard auth access point in seconds
- NPM attack: 18 packages, 2B weekly downloads, 2B wallets potentially affected; Shai-Hulud worm
- GajuDesk co-authored by Peter Harpending + Craig Everett (zero dependencies, multiple wallets written this way)
- GajuPay backend integration model: webhook-based; vendor swaps credit-card webhook for GajuPay webhook
- GajuMobile deploys May 2026; GajuMarket currently in testnet
- "Nazgûl" coined by Greg as label for Bitcoin's would-be saviors (Saylor, Back, Wright, Fink)
- Price signal economy quantified: 10 pucks per like, 1 Gaju per repost, 1 penny per email — eliminates bot/spam economics
- Greg's three time periods reconciled: 22/23 years for Internet of Economics; 25 years for financial-institutions pitch
- Ulf is Swedish; personal banking anecdote (paid in crypto, year-long bank negotiation)
- 90-day cybersecurity industry implementation timeline — GRIDS achievable "well within"
- OpenClaw: 2M users currently; growing daily; the agentic framework Gajumaru A2A monetizes

Contradictions noted:
- Greg's "years on the project" varies: 22 (Demo 1) vs 23 (Token Summit) vs 25 (Mythos video). Resolution attempted in gregory-chew.md — different reference points, not actual conflicts.

Still pending:
- 35+ channel videos still downloaded but not summarized individually (rolled up; can be deep-audited later if priority)
- Full audit pass on the 5 new long transcripts (governance, scaling, quantum, npm, grids/mythos)

---

## [2026-05-16] audit | Full source completeness audit — all 29 QPQ public wiki raw articles confirmed

Sources audited (✅ all confirmed):
- raw/articles/qpq-wiki-state-channels.md
- raw/articles/qpq-wiki-gajumaru.md
- raw/articles/qpq-wiki-monetary-mechanics.md
- raw/articles/qpq-wiki-mint.md
- raw/articles/qpq-wiki-money.md
- raw/articles/qpq-wiki-consensus.md
- raw/articles/qpq-wiki-flation.md
- raw/articles/qpq-wiki-mining.md
- raw/articles/qpq-wiki-grids.md
- raw/articles/qpq-wiki-proof-of-work.md
- raw/articles/qpq-wiki-leader-selection.md
- raw/articles/qpq-wiki-finality.md
- raw/articles/qpq-wiki-blockchain-trilemma.md
- raw/articles/qpq-wiki-blockchain-primer.md
- raw/articles/qpq-wiki-blockchain.md
- raw/articles/qpq-wiki-smart-contracts.md
- raw/articles/qpq-wiki-sophia.md
- raw/articles/qpq-wiki-transaction.md
- raw/articles/qpq-wiki-mempool.md
- raw/articles/qpq-wiki-dlts.md
- raw/articles/qpq-wiki-home.md
- raw/articles/qpq-wiki-sophia-faq.md
- raw/articles/qpq-wiki-rlp.md
- raw/articles/qpq-wiki-basen.md
- raw/articles/qpq-wiki-serialization.md
- raw/articles/qpq-wiki-api-encoding.md
- raw/articles/qpq-wiki-testnet-node-setup.md
- raw/articles/qpq-wiki-install-erlang-and-zx.md
- raw/articles/qpq-wiki-vim-setup.md

Result: All summary-qpq-wiki-*.md files confirmed to fully capture raw content. Most raw articles are short (10-50 lines each). Only the GRIDS one had a notable discrepancy — the raw page still uses "Gajumaru Remote Instruction Dispatch System" while the corrected name "Gajumaru Remote Instruction Dispatch and Serialisation" comes from the later Mythos/Glasswing blog (already reflected in concept page).

Pages updated:
- wiki/source-audit.md — all 29 QPQ wiki rows updated with ✅ status; remaining queue now focused on the 7 original transcripts + 5 newly downloaded long transcripts

---

## [2026-05-16] audit | All 7 original raw transcripts ✅ + .url file ✅ — 37 of 37 raw files audited (100%)

Sources audited (✅ all confirmed):
- raw/transcripts/why-the-gajumaru-and-how-it-works.md
- raw/transcripts/the-gajumaru-an-actual-working-blockchain.md
- raw/transcripts/gaju-firsts-gajumaru-blockchain.md
- raw/transcripts/gajumaru-new-blockchain-demo-1.md
- raw/transcripts/worlds-first-genuine-blockchain-marketplace-quidproquo-on-the-gajumaru.md
- raw/transcripts/gaju-mining-pioneering-the-human-economy.md
- raw/transcripts/gaju-mining-journey-update.md
- raw/articles/Gajumaru- 2025 Year in Review .url (.url pointer file)

Result: All summaries confirmed to fully capture raw content. Speaker identifications consistent across sources. The "Clutch" (desktop) and "Bor" (mobile) wallet names from the QuidProQuo demo (March 2024) are confirmed as the predecessors of GajuDesk/GajuMobile — already reflected in the product-suite concept page.

Pages updated:
- wiki/source-audit.md — all 7 transcript rows updated with ✅; .url pointer marked ✅; total raw files confirmed: 37/37

Status: **100% of raw source files now ✅ audited.** Remaining audit work is for partially-read newly-downloaded long transcripts (~5 files) and 15 web-fetched blog sources (no raw files; would need re-fetch).

---

## [2026-05-16] ingest | 23 unprocessed VTT transcripts — 5 consolidated source summaries + 1 new concept page

Sources ingested (raw/transcripts/ VTT files, all previously downloaded but unprocessed):
- `AI Just Broke the Internet. Here Is the Fix#.en.vtt`
- `Gajumaru Blockchain：from Alternative to Default Economy.en.vtt`
- `Gajumaru Blockchain｜Decentralization vs Reality.en.vtt`
- `Gajumaru Blockchain｜Convenience vs Security.en.vtt`
- `Bitcoin Is Peer-to-Peer Cash. So Why Can't You Buy a Plane Ticket With It？.en.vtt`
- `The Nazgûl：Why Bitcoin's "Saviours" Want the Keys to the Kingdom.en.vtt`
- `The Web Was Never Designed to Carry Economic Value. Post-Quantum, Post-AI, It Cannot#.en.vtt`
- `What If a Like Cost 10 Pucks？ The Price Signal Economy Applied to Social Media#.en.vtt`
- `Internet of Economics｜GRIDS Live Demos, Ready Now.en.vtt`
- `Gajumaru Blockchain｜The World's First On-Chain Marketplace - Security.en.vtt`
- `Gajumaru Blockchain｜Three Live Demos. No Passwords. No Mythos Threat#.en.vtt`
- `Internet of Economics｜No Passwords. No Breaches. Payments in Seconds#.en.vtt`
- `Gajumaru Blockchain｜Watch a Login and a Payment Without Passwords.en.vtt`
- `Internet of Economics｜No Login. No Password. No Attack Surface. GRIDS Live Demo.en.vtt` (longest, ~6:38)
- `Gajumaru Blockchain｜GRIDS：Gajumaru Remote Instruction Dispatch and Serialisation#.en.vtt`
- `Gajumaru Blockchain｜No Account. No Password. No Database to Hack#.en.vtt`
- `Gajumaru Blockchain｜Quantum Will Not Break Blockchain Tomorrow#.en.vtt`
- `Gajumaru Blockchain｜The Machine Economy Is Here. It Just Doesn't Have an Economic Base to Operate On.en.vtt`
- `Gajumaru Blockchain｜If Every Email Cost One Penny There Would Be No Spam#.en.vtt`
- `Gajumaru｜Generational value creation.en.vtt`
- `Gajumaru｜Blockchain and currency that works.en.vtt`
- `Gajumaru｜GajuDesk wallet：no dependencies.en.vtt`
- `Gajumaru｜Quantum Threat：Stay Calm and Keep Coding.en.vtt`

Pages created:
- wiki/sources/summary-grids-demo-series.md (10 GRIDS demo clips consolidated)
- wiki/sources/summary-quantum-calm.md (2 quantum clips; Peter Harpending)
- wiki/sources/summary-economics-social.md (7 clips: alternative economy, zero-dependency wallets, price signals, generational value)
- wiki/sources/summary-nazgul-bitcoin.md (2 clips: Nazgûl metaphor + Lightning failure)
- wiki/sources/summary-web-machine-economy.md (3 clips: web failure, machine economy, decentralization vs reality)
- wiki/concepts/price-signal-economy.md (new concept page)

Pages updated:
- wiki/concepts/grids.md (Mythos incident specifics: April 7 2026, Claude Mythos, OpenBSD, 27-year RCE, root access no-auth; Stage 2 air-gap clarified: "no network connection of any kind"; music streaming auth example; new sources added)
- wiki/concepts/internet-of-economics.md (Machine Economy section added; digitisation vs digitalisation distinction; ZKP impossibility critique; "2 million people using Open Claw"; alternative→default economy sequencing; new sources added)
- wiki/concepts/quantum-resistance.md (Hype Calibration section added; LLM/quantum parallel quote; Peter's "stay calm" framing; new source added)
- wiki/concepts/associate-chains.md (Decentralisation vs Reality section added: Ulf's Swedish bank anecdote; RIPA acronym explicitly cited; PoW untamperable core + regulated pockets framing)
- wiki/index.md (5 new source rows; 1 new concept page; metrics: 64 sources, 19 concept pages)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new content:
- **Mythos incident specifics confirmed**: April 7 2026; Claude Mythos / Project Glasswing; OpenBSD; 27-year-old RCE; root access from anywhere without authentication; no human involvement after initial instruction; 90-day industry window
- **Stage 2 air-gap details**: "no network connection of any kind" — no WiFi, no Bluetooth, no radio; QR codes only
- **Music streaming auth model**: self-referential; site auto-creates blank account on first visit; no database of credentials to hack
- **GajuPay webhook**: confirmed as "watches chain, calls vendor webhook" integration model
- **Zero-dependency wallets**: Craig + Peter Harpending built GajuDesk from scratch; "not impossible, just annoying"; browser plugin wallets called "sketchy — deliberate backdoors"
- **Lightning Gini index 0.97**: near-absolute monopoly; fails at airline ticket price; all demos are micropayments "for a good reason"
- **Nazgûl specifics**: "clingy wraiths that want to run everything, but their own influence has corrupted themselves first and foremost"; "there's like nine of them and they're all creeps"
- **Machine economy**: "2 million people using Open Claw and growing"; ZKP labs "know the mathematical impossibility"; only Groot + state channels + GRIDS provide the economic base
- **Digitisation vs digitalisation**: existing systems digitise the corporatist model; Gajumaru digitalises to a new capitalist model machines can actually use
- **Bot farm math**: 0.5 yen/retweet × tens of thousands/hour = economically destroyed; <5% blogs write original content
- **Milton Friedman reference**: price signals as best curation filters
- **Generational value**: same sliver on 100× bigger pie = vastly more than 100× more valuable; "we can build a much much bigger pie, exponentially bigger"
- **Alternative → default economy sequencing**: Greg Chew's explicit framing; "chasing short-term money and hoarding" critique of crypto
- **Quantum hype calibration**: same pattern as LLM hype; "world will not change immediately, but it isn't"
- **Ulf's Swedish bank anecdote**: accepted crypto payment but warned against running business in crypto — regulation is real; RIPA answers it architecturally
- **GRIDS implementation**: 1,846,200× more efficient than Bitcoin; 8.23× greater security; any business/government can implement within weeks / well within 90 days
- **Web architectural failure**: "we knew the web was the wrong architecture long before Mythos"; defense-in-depth is not the answer



---

## [2026-05-16] audit | Deep audit: 5 partially-read long transcripts — all 5 fully read, summaries and concept pages updated

Sources (all fully read in this session):
- raw/transcripts/quantum-ai-and-the-machine-economy-why-the-internet-isn-t-safe-for-economic-value.md (lines 1849-3352 new in this pass)
- raw/transcripts/npm-supply-chain-hack-unserious-crypto-serious-gajumaru-full.md (lines 400-2520 new in this pass)
- raw/transcripts/internet-of-economics-grids-mythos-ai-and-the-end-of-payment-credentials-in-the-public-domain.md (lines 400-2122 new in this pass)

Previous passes (prior session): Scaling (lines 500-1198), Governance (lines 700-2075) — fully read and captured.

All 5 long transcripts now ✅ FULLY AUDITED (0 partial transcripts remaining)

Pages updated:
- wiki/sources/summary-quantum-ai-machine-economy.md (delegated signing, BankID, ZKP age proof, settlement/finality, GajuDesk 5278 lines, Un-White Paper writing process, TEA model, agent provisioning)
- wiki/sources/summary-npm-supply-chain-hack.md (Lava Moat details, MetaMask mobile flaw, Craig's discovery journey, Sophia/ISC origin, candlestick problem, QPQ ethos)
- wiki/sources/summary-internet-of-economics-grids-mythos.md (Greg phished, CA compromise, 3-9mo Mythos timeline, credit card replacement roadmap, Salt Typhoon, Web 3 definition, broadcasting price signals)
- wiki/concepts/grids.md (BankID comparison section, GajuDesk audibility, state channel signing integration)
- wiki/concepts/state-channels.md (delegated signing + agent provisioning section)
- wiki/concepts/internet-of-economics.md (Web 3 definition, broadcasting price signals, hunter-gatherer framing)
- wiki/concepts/sophia-fate.md (Aeternity/ISC origin backstory)
- wiki/source-audit.md (all 5 marked ✅; total 42/42 raw files audited)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new content captured:
- State channel delegated signing: two modes (auto/manual); "by default does not automatically sign anything"
- Agent provisioning pattern: give agent 100 Gaju; main keys stay offline; no kingdom-key exposure
- BankID vs GRIDS: same UX, GRIDS is universal and trustless (BankID requires residency; Ukrainian refugees excluded)
- ZKP age verification: prove over-18 without sharing personal ID; requires AC-registered KYC operator
- Settlement vs. finality: 2-3s / 3-4min / Bitcoin 3-4 days — finality is binary mathematical certainty
- GajuDesk: 5,278 lines; Craig wrote the package manager too; one dependency = Erlang/OTP by Ericsson
- Lava Moat: MetaMask's security attempt = JS permissioning in JS; Craig thought it was an elaborate joke; has own dependencies; failed
- Mythos detail: Anthropic estimate 6-18 months until all LLMs can replicate; Craig thinks "a bit generous"
- Vibe-coded future: AI will crack company backends silently; real email from real server with cracked backend
- CA chain: compromising one CA compromises all; DNS not secure
- 3-9 months: effectively every login and password will be in the public domain post-Mythos
- Credit card replacement roadmap: augment 3DS → link to public key → eliminate card numbers → fraud-prevention focus
- Salt Typhoon: GRIDS secures initiation but not full call; access point between parties cannot be hacked
- Web 3 definition: pay for services as you use them; do not give your data to the world
- "Half a penny per email = no spam"; on-chain 50-year storage = large fee
- "No global economic resource layer since hunter-gatherers"
- Sophia/FATE: ISC license (confirmed); Yannis Mares built Aeternity specifically because Ethereum is insecure
- QPQ team ethos: all from working families; building for their communities; Craig's first adopter is a corner shop 300m away
- "One ring to rule them all" = the mint
- Un-White Paper: Greg used Claude+Grok for narrative structure; LLMs consistently misidentified Gajumaru as infrastructure

---

## [2026-05-16] query | Post-MainNet live data fetch — product status, LTIN, miner metrics

Sources fetched: gajumaru.io, gajumining.com, qpq.swiss, qpq.swiss/blog/ (pages 1-3), gajumaru.io/blog/

Pages updated:
- wiki/entities/ltin.md (public endorsement + launch status + metrics availability note)
- wiki/hot.md (open questions updated with current-state observations)
- wiki/log.md (this entry)

Findings:
- **"Trusted by the sovereign state of Liechtenstein"** — explicit public claim on gajumining.com homepage (new durable fact)
- **LTIN not yet launched** (2026-05-16) — Q3/Q4 2026 remains the target; both sites confirm "in 2026"
- **Summer 2026 products not yet live** — GajuMobile, GajuMarket, GajuPay, GajuVault, GajuMall, GajuPort, GajuSafe all "coming soon"
- **Currently live**: GajuMine, GajuDesk, GajuExplore (TLS cert issue prevents stat access)
- **Live metrics not accessible**: GajuExplore (explorer.gajumaru.io) returns TLS cert error; no public stats dashboard; miner count and Gaju price unknown
- **Blog completeness confirmed**: qpq.swiss = 9 posts (all ingested ✅); gajumaru.io = 6 posts (all ingested ✅); no new posts since April 30, 2026
- **qpq.swiss homepage**: "Mainnet Launch: COMPLETED — Gajumaru has transitioned from a working system to a complete platform ready for global adoption"

---

## [2026-05-16] audit | Blog source audit — all 15 web-fetched sources re-fetched and verified

Sources re-fetched (live WebFetch):
- qpq.swiss/2026/04/14/mythos-glasswingand-why-we-built-what-we-built/ (Greg Chew)
- qpq.swiss/2026/04/30/the-architectural-answer-to-the-mythos-ai-security-vulnerability-grids/
- qpq.swiss/2026/04/30/the-summer-of-gajumaruupcoming-launches/
- gajumaru.io/2026/02/05/quantum-resistance-on-gajumaru/ (Ulf Wiger)
- gajumaru.io/2026/04/15/the-gajumaru-in-space/ (Craig Everett)
- qpq.swiss/2026/04/30/dev-updates-04-2026/ + qpq.swiss/2026/04/02/dev-update-03-2026/
- gajumaru.io/2026/04/29/a-case-for-defensive-mining/
- gajumaru.io/2026/04/02/why-the-bitcoin-lightning-network-failed/
- gajumaru.io/2026/04/12/gajumaru-state-channels/
- gajumaru.io/2026/03/13/why-proof-of-work-works-in-theory/ (Peter Harpending)
- qpq.swiss/2026/04/13/killing-the-whale-subsidy.../
- qpq.swiss/2026/04/13/beyond-subscription.../
- qpq.swiss/2026/04/13/the-end-of-the-ad-supported-lie.../
- qpq.swiss/2026/03/26/gajupay.../

Pages updated:
- wiki/sources/summary-blog-mythos-glasswing.md (Groot genesis 22 Oct 2024; NPM Sept 2025; LavaMoat #5728; Ciaran Martin; CSA/SANS/OWASP 11-action framework; Stage 1 honest limitation; Stage 2 Series A; LTIN Q3/Q4 2026; Project Glasswing incl. Cisco + Linux Foundation)
- wiki/sources/summary-blog-mythos-grids.md (US Treasury April 13 emergency meeting — first since Oct 2008; Bank of Canada Resiliency Group; Bank of England CMORG; NSA/CISA/Google CISO/National Cyber Director framework; Mythos 3-5 exploit chains; car/ship analogy; Stage 2 Series A; Stage 1 free/Stage 2+3 paid; 15-20min demo; time+customization only cost)
- wiki/sources/summary-blog-summer-of-gajumaru.md (April 26 = 15th anniversary of Satoshi's last message, April 26 2011)
- wiki/sources/summary-blog-quantum-resistance.md (author = Ulf Wiger; ED25519 clarification; Erlang/OTP 28.1; ML-DSA hardness numbers: Cat2=123/112, Cat3=182/165, Cat5=252/229 bits; below-100-TPS projection; lattice quantum speedup ~15-20 bits)
- wiki/sources/summary-blog-in-space.md (round-trip 2.5s ping vs 5s edge-to-edge distinction; East Asia-East Coast ~200ms terrestrial Solana strain)
- wiki/sources/summary-blog-dev-updates-2026.md (GajuMining Vaults multisig full detail from March update: multisig expansion, signature hash revision, add/remove signatories, threshold config, action visualization, tx hash tracking; Wallaby testing; IP-based country detection)
- wiki/sources/summary-blog-lightning-network-failed.md (full 6-row success rate table; Abedesselam et al. paper title; Plasma/zkSync Layer-2 compounding-constraints framing; Visa 65k TPS peak; BTC $2.4T market cap)
- wiki/sources/summary-blog-gajumaru-state-channels.md (2ms round-trip; JSON-RPC server mode; proxy keypair explicit reference)
- wiki/sources/summary-blog-proof-of-work-theory.md (Visa 65k TPS peak; BTC $2.4T market cap; Bitcoin 7 TPS theoretical)
- wiki/sources/summary-blog-gajupay.md (PinePhone MVP demo platform; 5 core operational requirements articulated)
- wiki/sources/summary-blog-a2a-state-channels.md ($0.003 micro-task example added)
- wiki/concepts/grids.md (Stage 1 honest "probably secure" limitation; Stage 2 Series A dependency; Stage 3 national security conversation; commercial model table; 15-20min demo; US Treasury April 13 emergency meeting; Bank of Canada + Bank of England + NSA/CISA/Google CISO; 11-action framework; car/ship analogy; key quote "every cybersecurity budget..."; Mythos 3-5 exploit chains)
- wiki/concepts/quantum-resistance.md (ED25519 clarification; Erlang/OTP 28.1; ML-DSA hardness table with bits; quantum lattice speedup explanation; below-100-TPS projection)
- wiki/source-audit.md (all 15 blog sources marked ✅; total audit count updated to 57 sources — 100% complete)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none

Key new content:
- **Groot genesis date:** 22 October 2024 (MainNet genesis block)
- **NPM supply chain attack date:** September 2025 (confirmed)
- **LavaMoat flaw:** GitHub issue #5728 on MetaMask repo (public documentation)
- **Project Glasswing orgs:** includes Cisco and Linux Foundation (in addition to AWS, Apple, Microsoft, Google, JPMorganChase)
- **Ciaran Martin** (former UK NCSC head) cited; CSA/SANS/OWASP published 11-action framework
- **April 13 US Treasury emergency meeting:** first joint Fed/Treasury+Wall Street CEOs meeting since Oct 2008
- **Bank of Canada Financial Sector Resiliency Group + Bank of England CMORG** activated
- **Former NSA Director, CISA Director, Google CISO, National Cyber Director** on response framework
- **Stage 1 honest limitation:** "probably secure rather than definitely secure" — no air-gap = no mathematical guarantee
- **GRIDS commercial model:** Stage 1 free; Stage 2+3 paid hardware; implementation = time + customization only
- **April 26 = 15th anniversary of Satoshi's last known public message** (April 26, 2011) — deliberate date choice
- **Ulf Wiger** confirmed as author of quantum-resistance blog (not just "QPQ AG")
- **Erlang/OTP 28.1** (Sept 2025) provides ML-DSA verification — implementation mechanism confirmed
- **ML-DSA hardness numbers:** Cat2 = 123/112 classical/quantum; Cat3 = 182/165; Cat5 = 252/229 bits
- **Quantum speedup on lattice crypto:** only ~15-20 bits (vs. Grover's √ speedup on symmetric)
- **GajuMining Vaults:** multisig treasury feature with add/remove signatories, threshold config — confirmed in March 2026 dev update
- **PinePhone** (Linux mobile) used as GajuPay MVP demo platform
- **Lightning full failure table:** $0.05=99%; $10=90%; $200=50%; $1,000=25%; $10,000=5%
- **Layer-2 compounding constraints:** Plasma → zkSync → optimistic rollups each add constraints, not resolve trilemma

---

## [2026-05-16] ingest | 4 remaining video transcripts — Bitcoin PoC, Whitelist Mining, Future of Banking, Stablecoins

Sources ingested:
- raw/transcripts/gajumaru-bitcoin-proof-of-concept.md (3423 lines — FULLY read in this session)
- raw/transcripts/gajumaru-update-whitelist-mining-distribution.md (888 lines — fully read)
- raw/transcripts/gajumaru-future-of-banking-in-blockchain.md (37 lines — fully read)
- raw/transcripts/unmasking-stablecoins-genius-act-tether.md (320 lines — fully read)

Pages created:
- wiki/sources/summary-video-bitcoin-proof-of-concept.md
- wiki/sources/summary-video-whitelist-mining-distribution.md
- wiki/sources/summary-video-future-of-banking.md
- wiki/sources/summary-video-stablecoins-genius-act.md

Pages updated:
- wiki/concepts/groot.md (authoritative Groot definition; "50-year" principle; initial 5×$300 laptop hardware)
- wiki/concepts/protected-mining.md (Satoshi 40%; 5 accounts = 95% BTC consensus; 2 = 51%; no governance debate; 720 blocks/day; GajuMine/GajuDesk; GRIDS login; payment processor ordeal)
- wiki/concepts/state-channels.md (Lightning dirty hack analysis — glass cannon; dangerous just; BOLT template; Tokyo/London subway use case)
- wiki/concepts/associate-chains.md (ACs as ideal multi-party state channel; regulatory compliance angle; 1DLT precursor; Aeternity Hyperchains)
- wiki/concepts/gaju-token.md (2% inflation gold origin; 720 blocks/day; self-referential currency; London tube analogy)
- wiki/entities/gregory-chew.md (2002 HSBC GPRS demo as first iteration; future banking model)
- wiki/source-audit.md (4 new transcripts added; total updated to 61 sources)
- wiki/index.md (4 new source rows; count 64→68)
- wiki/log.md (this entry)
- wiki/hot.md (current focus updated)

Contradictions flagged: none

Key new content:
- **Austrian economics foundation**: Mises/Hayek "real money"; 2% inflation target traces to ~2%/yr gold supply growth
- **Groot definition**: "uncontrolled shared ledger where history cannot be changed, resistant to censorship, no operator to trust"
- **Bitcoin-NG rejection**: Bitcoin community rejected it due to FOMO economics; community dynamics prevent large technical changes
- **Bitcoin confirmation spikes (July 2024)**: avg 57 min → 2,500 min → 11,000 min
- **Bitcoin cost/transaction**: ~$100+ (mining rewards + fees) at 2024/2025 prices
- **Lightning glass cannon problem**: liquidity overprovision required; rebalancing needs on-chain operations → swamps Bitcoin
- **Runes**: fungible tokens via UTXO abuse; at scale kills the chain
- **Ordinals**: Satoshi inscription NFTs; 3.9MB; $100k+ block fee competition; no garbage collection
- **Bitcoin OS**: ZK proof hashes on Bitcoin; Bitcoin cannot validate proofs, only store hashes
- **Juicero analogy**: expensive engineering for unnecessary product
- **1DLT precursor**: earlier QPQ project; fatally flawed but ahead of its time; Aeternity Hyperchains parallel
- **AC = ideal multi-party state channel**: Craig's framing; multi-party state channels too complex
- **"50-year" principle**: if still doing transactions on Groot in 50 years, doing it wrong
- **QPQ trust model**: 18-month bootstrap window; "burn the keys to the kingdom"; Liechtenstein stage quote
- **Market despair**: people entering crypto knowingly as casino (Joe Truck Driver narrative)
- **South Sea bubble**: 1711 analogy for crypto — real premise corrupted by fraud layer
- **XRP/Solana/BNB/Cardano**: all PoS = "clicking heels together three times"
- **Satoshi 40%**: QPQ explicitly designed whitelist mining to avoid this concentration
- **No governance**: internal debate resolved — any governance = infrastructure not resource; no foundation
- **720 blocks/day**: incentivises diverse mining pools vs Bitcoin's few blocks/day
- **GajuMine/GajuDesk**: install-once SaaS mining; private key stays client-side
- **GRIDS login**: gajmining.com authentication via GRIDS URL — no username/password
- **Payment processor ordeal**: ~9 months; all rejected as "crypto-adjacent"; EU + Singapore companies secured
- **2002 HSBC demo**: Greg transferred money and certificates at HSBC London HQ using 2G/GPRS phones — "first iteration"
- **Future of banking**: bank infrastructure = liability; most want delegated custody; self-custody right not yet available at scale
- **Stablecoin confidence game**: "con = confidence"; USDT monopoly accidental; competition → bank runs → death
- **GENIUS Act**: no audit requirement; Ulf: stablecoins are databases not crypto (PostgreSQL faster)
- **Self-referential currency**: London tube analogy; Gaju defined by goods not dollars

---

## [2026-05-16] audit | Deep audit — 4 recent VTT transcripts fully read; 3 source summaries expanded; 5 concept/entity pages updated

Sources deep-audited (raw VTT read line-by-line against existing wiki summaries):
- raw/transcripts/Gajumaru ｜ Bitcoin is a Proof of Concept.en.vtt (3,423 lines — all read across two sessions)
- raw/transcripts/Gajumaru Update： Whitelist Mining, Distribution & Payment Processing.en.vtt (888 lines — fully read)
- raw/transcripts/Gajumaru ｜ The future of banking in blockchain - the place for trust and delegated responsibility..en.vtt (280 lines — fully read; all content already captured ✅)
- raw/transcripts/Unmasking Stablecoins： Genius Act, Tether's Secrets, and the Future of On-Chain Money.en.vtt (2,552 lines — fully read)

Pages updated:
- wiki/sources/summary-video-bitcoin-proof-of-concept.md (11 new key_claims; 3 new sections; 4 expanded sections)
- wiki/sources/summary-video-whitelist-mining-distribution.md (8 new key_claims; GajuDesk "overfeatured"; "juice" terminology; G20 economy + one-and-only-chance framing; economic emancipation; early adopter demographics)
- wiki/sources/summary-video-stablecoins-genius-act.md (5 new key_claims; Trump meme coin Ponzi detail; Gaju = Bitcoin whitepaper fulfilment quote; statists/corporists frame; GENIUS Act "least useful" quote)
- wiki/concepts/protected-mining.md ("juice" terminology section; G20 economy on-chain goal; "one and only chance" framing; economic emancipation quote; early adopter demographics)
- wiki/concepts/gaju-token.md (1 trillion supply justified by global debt $100T+ private debt)
- wiki/concepts/internet-of-economics.md (statists/corporists/individual three-way tension section; "humanity as transmission fluid" Greg DC stage quote)
- wiki/entities/gregory-chew.md (DC stage appearance; Zug/event observations; David Graeber "Debt" counter-reference)
- wiki/log.md (this entry)

Contradictions flagged: none

Key new content captured (not in prior summaries):
- **JP Morgan 1912 testimony**: described greenback (fiat) as "not money... a credit note" — Craig reference in Bitcoin PoC
- **David Graeber counter-claim**: Greg's "next 5,000 years" = explicit dig at Graeber's "Debt: The First 5,000 Years"; Gajumaru claims opposite thesis (non-credit money)
- **"Humanity as transmission fluid"**: Greg DC stage quote — humanity = squishy bit compressed between monetary inflation and CPI/PPI indicators
- **Gold in space / asteroid mining**: "trillions of tons of gold floating in space"; Musk space exploration = asteroid mining ambition; cryptographic puzzle immune to this devaluation
- **Gold metastability (one-way function)**: gold passed through physical one-way function (stellar nucleosynthesis); PoW = mathematical equivalent
- **Bitcoin block separation of concerns**: proof/leader-selection bundled with transactions = proof-of-concept architectural mistake never resolved
- **"The definition got locked"**: Bitcoin became immutable the moment pizza-purchasing created exchange value
- **Bitcoin + Ethereum = "two massive proofs of concept"**: both are PoC not finished products
- **IMF agenda critique**: "driving agenda that we should continue to create public debt. Debt to whom? By whom? For whom? I have no idea."
- **1 trillion Gaju justified**: "Why are there one trillion gajus? Why is there $100 trillion in private debt in the world?"
- **Greg at events in Zug etc.**: people cite Bitcoin as inspiration but proceed as if its title (peer-to-peer electronic cash) doesn't exist
- **Real money formal definition**: finite resource, extraction has value, not debaseable, not censorable, P2P without intermediation
- **"Juice" = block rewards**: defensive miners are NOT primarily motivated by juice
- **G20 economy on chain**: "the one and only chance" to get millions mining → G20-scale economy on-chain
- **"Economic emancipation of humanity"**: Craig's explicit phrase for what whitelist mining distribution launches
- **Trump meme coin Ponzi**: NYT reports massive gains but only true if exit possible; immediate exit would collapse price
- **GENIUS Act "least useful"**: giving regulatory support to "one of the least useful things you could do in crypto — make a second stablecoin"
- **Gaju = Bitcoin whitepaper fulfilment**: "the only open global currency that delivers the vision originally proposed in the Bitcoin white paper"
- **Statists/corporists/individual frame**: three-way political economy tension; Gajumaru restores individual equal standing

---

## [2026-05-16] ingest | New concept page: monetary-philosophy.md; groot.md + bitcoin-ng.md expanded; overview.md major update

Pages created:
- wiki/concepts/monetary-philosophy.md (NEW — Austrian economics, real money formal definition, gold metastability, asteroid mining problem, JP Morgan 1912, Graeber counter-reference, humanity as transmission fluid, IMF critique, self-referential currency, crypto confidence game)

Pages updated:
- wiki/concepts/groot.md (Bitcoin block separation-of-concerns as the proof-of-concept architectural mistake Groot corrects; "definition got locked" at pizza moment)
- wiki/concepts/bitcoin-ng.md (Bitcoin PoC video reference; Bitcoin rejected Bitcoin-NG due to FOMO economics; Ethereum's Vitalik Buterin contrast)
- wiki/concepts/gaju-token.md (cluster hub table updated with monetary-philosophy + price-signal-economy entries)
- wiki/index.md (monetary-philosophy added to tokenomics-economics cluster)
- wiki/overview.md (MAJOR UPDATE: full cluster map; QPQ core argument synthesis; open questions table with status; resolved facts table; correct efficiency figure; full team roster; Revision History)
- wiki/log.md (this entry)
- wiki/hot.md (session cache updated)

Contradictions flagged: none

Key changes:
- monetary-philosophy.md centralises the monetary theory content previously only accessible via the Bitcoin PoC source summary
- groot.md now explicitly explains WHY Bitcoin-NG was the right fix and WHY Bitcoin couldn't adopt it
- bitcoin-ng.md now records the FOMO economics rejection dynamic
- overview.md now reflects full wiki state as of 2026-05-16 (replaces the outdated 2026-05-15 bootstrap version)

---

## [2026-05-16] lint | Full health check — cluster audit, date contradiction resolution, cross-link pass

Lint pass scope:
- Cluster health: every concept/entity page has `cluster:` field ✅
- Hub completeness: every `cluster_role: hub` page has "In this cluster" section
- Date consistency: protected mining end date across all pages
- Cross-link completeness: monetary-philosophy.md inbound links
- Orphan check: all 20 concept pages have 5+ inbound links ✅

Pages updated:
- wiki/concepts/sophia-fate.md (FIXED: added missing "In this cluster" body section — was cluster_role: hub without the required section)
- wiki/concepts/protected-mining.md (date resolution note added: 30 March 2027 confirmed authoritative; three conflicting sources explained; "After March 29 2027" section heading corrected to "After 30 March 2027")
- wiki/concepts/hive-mining.md (FIXED: 2 references updated from "March 29, 2027" to "30 March 2027")
- wiki/index.md (protected-mining entry corrected from "March 29 2027" to "target 30 March 2027 (outer boundary 30 Sep 2027)"; monetary-philosophy entry added under tokenomics-economics cluster)
- wiki/overview.md (protected mining date corrected to 30 March 2027 in open questions table)
- wiki/concepts/internet-of-economics.md (monetary-philosophy + price-signal-economy added to related field)
- wiki/sources/summary-video-bitcoin-proof-of-concept.md (monetary-philosophy added to related field)
- wiki/hot.md (current focus updated; protected mining marked RESOLVED everywhere)

Contradictions resolved:
- **Protected mining end date**: Three conflicting dates across wiki — "March 29" (Year in Review typo), "March 30" (Un-White Paper twice), "March 31" (walkthrough rounding). Authoritative: **30 March 2027** confirmed by grepping raw/articles/gajumaru-un-white-paper.md (two explicit occurrences). All date references in wiki now corrected.

Cluster health findings:
- All 20 concept pages have `cluster:` field ✅
- sophia-fate.md was cluster_role: hub without "In this cluster" body section — FIXED ✅
- All other hub pages (gajumaru-architecture, gaju-token, gajumaru-product-suite) had correct hub sections ✅

Cross-link findings:
- monetary-philosophy.md: 6 inbound links (gaju-token cluster table, index.md, overview.md, summary-video-bitcoin-proof-of-concept.md related field, internet-of-economics.md related field, hot.md) — well connected ✅
- No orphan pages found ✅

Suggested future investigations:
1. AC → Groot finality cooperation: promised in a QPQ video; mechanism completely absent from all 61 sources — high priority when new content published
2. QPQ IaaS AG (Einsiedeln) vs QPQ AG (Zug): functional division unknown; may be in company registry records
3. Un-White Paper Technical Paper: exists but not yet in raw/; ingest when available
4. Santosh: full surname + role still unknown across all 61 sources
5. Groot efficiency figure discrepancy: 553,800× (Year in Review) vs 1,846,200× (Un-White Paper) — warrant a source comparison synthesis page

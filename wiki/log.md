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
Notes: Claude Code 2.x uses .claude/commands/ for custom slash commands. ingest-video supports YouTube/Rumble via yt-dlp subtitles with Whisper fallback.

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

Contradictions flagged: none

Key claims documented:
- Bitcoin-NG: keyblock (~2 min PoW) + microblocks (~3 sec transactions) = generation; >300 TPS; 2-3 sec settlement; 3-4 min absolute finality; Eyal et al. 2016 USENIX NSDI
- Craig: separation of leader election from transaction serialization is "obvious in hindsight — nobody picked up on that"
- QPQ's own wiki TODO includes Bitcoin-NG primer (unwritten)
- Aeternity: upstream blockchain (Erlang/OTP) contributing Sophia, FATE VM, State Channels to Gajumaru


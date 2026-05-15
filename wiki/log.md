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

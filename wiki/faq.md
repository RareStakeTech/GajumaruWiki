---
type: reference
title: "Frequently Asked Questions"
aliases: [faq, FAQ, questions]
created: 2026-05-16
updated: 2026-05-16
confidence: high
---

# Frequently Asked Questions

A structured reference for the most common questions about Gajumaru, QPQ AG, the Gaju token, and the ecosystem. Every answer cites the wiki page where the claim is fully documented.

---

## The Basics

### What is Gajumaru?

Gajumaru is a blockchain infrastructure built by QPQ AG (Zug, Switzerland) that QPQ describes as "the world's first digital economic resource layer: an actual blockchain that actually works, minting real money that really works."

It consists of:
- **Groot** — the base-layer blockchain (PoW, 300+ TPS, no governance)
- **Associate Chains** — independent governed chains that connect natively to Groot
- **Gaju token** — the native fixed-supply currency minted by Groot
- **GRIDS** — the authentication and signing protocol
- **A product suite** — GajuDesk, GajuMobile, GajuDEX, QuidProQuo, GajuPay, and more

Groot has been operational since **22 October 2024**. Public MainNet launched **26 April 2026**.

See: [[gajumaru-architecture]], [[groot]], [[gajumaru-product-suite]]

---

### What does "resource layer" mean?

A resource layer is infrastructure that has no operator — like the high seas or the internet's TCP/IP layer. Nobody owns it; nobody can tell you to leave; the rules are enforced by mathematics alone.

The distinction matters: infrastructure has an operator who can say no (freeze accounts, censor transactions, exclude participants). A resource layer has no operator and therefore no veto. The resource layer is where trustlessness lives; governed infrastructure (Associate Chains) is built on top of it.

See: [[ripa-model]], [[internet-of-economics]]

---

### What is Groot?

Groot is the resource layer at the heart of the Gajumaru ecosystem. It is a proof-of-work blockchain that:
- Runs the **Bitcoin-NG** consensus protocol (separated keyblocks for leader election, microblocks for transactions)
- Uses **Cuckoo Cycle** as its proof-of-work algorithm (memory-bound; ASIC-resistant)
- Achieves **300+ TPS** with **2–3 second** commercial settlement and **3–4 minute** absolute finality
- Hosts **native smart contracts** in the Sophia language, executed by the FATE VM
- Is **1,846,200× more transactionally efficient** than Bitcoin (four-factor calculation)
- Has **no operator, no foundation, no governance body**

Groot cannot be shut down, censored at the base layer, or modified by QPQ after the protected mining window closes.

See: [[groot]], [[bitcoin-ng]], [[cuckoo-cycle]], [[sophia-fate]]

---

### Who built Gajumaru?

QPQ AG is the company behind Gajumaru, incorporated in Zug, Switzerland. The core team:

| Person | Role |
|--------|------|
| Gregory Chew | CEO; majority shareholder; 24-year vision; law/commodities background |
| Craig Everett | CPO (zxq9); lead architect; Okinawa-based |
| Ulf Wiger | CTO (uwiger); Erlang/OTP veteran; designed the hive mining architecture |
| Dimitar Ivanov | CDO; blockchain implementation; Associate Chain interplay |
| Peter Harpending | Research Lead & Lead Cryptographic Developer; GajuDesk co-author |
| Benno Raeber | CLO (Chief Legal Officer) |

Total build cost: approximately **$60 million** (Greg Chew, Token Summit).

See: [[qpq-ag]], [[gregory-chew]], [[craig]], [[ulf]], [[dimitar]], [[peter]]

---

### Is Gajumaru open source?

Yes. All production code is licensed under **GPL3** (GNU General Public License v3). GPL3 is a copyleft licence: any modification must be shared under the same licence, preventing competitors from taking the code, closing the source, and extracting rent.

GPL3's Section 11 patent peace provision: any contributor who initiates patent litigation against any GPL3 participant **loses their GPL3 licence immediately** — making the entire codebase a patent-hostile zone for aggressors.

QPQ has also filed **defensive patents** on novel contributions (witnessing protocol, specific Groot mechanisms), licensed on the Red Hat model: free to all participants who do not assert patents against the ecosystem.

GajuDesk and GajuMobile are committed to be open-sourced. The Groot node software is already public.

See: [[qpq-ag]], [[summary-unwhitepaper]]

---

## The Gaju Token

### What is the Gaju token?

Gaju is the native **coin** (not a token) of the Groot blockchain. It is minted via proof-of-work mining and has a fixed total supply.

QPQ's distinction: a *coin* is the underlying currency established by a blockchain protocol; a *token* is any referential value device. Associate Chains may issue their own tokens; Gaju is Groot's native output.

**Symbol:** `7XGaju` (the `%`character is the Japanese kanji Ki (木) meaning "tree," typeable on any standard keyboard)
**Base unit:** 1 puck = 10⁻¹⁸ Gaju (minimum indivisible unit)

See: [[gaju-token]]

---

### How many Gaju tokens are there?

**1 trillion Gaju**, distributed over **87.5 years** following a Fibonacci-derived emission curve. After that, no more — ever.

The supply was sized against global economic scale: *"Why are there one trillion gajus? Well, why is there $100 trillion worth of private debt in the world?"* The supply must be large enough for Gajumaru to function as an operating layer for a G20-scale economy.

A **Stabilisation Treasury** of **125 billion Gaju** is reserved to smooth early-adoption volatility during the protected mining window.

See: [[gaju-token]], [[protected-mining]]

---

### What makes the Gaju token "sound money"?

Sound money satisfies Craig Everett's formal definition:
> "Money based upon a finite resource that can be proven, whose extraction has a value — not debaseable, not censorable, tradable between peers without intermediation."

Gaju satisfies all four criteria:
- **Finite**: 1 trillion total, hard cap enforced by protocol
- **Extraction has value**: Cuckoo Cycle mining requires real computational and energy expenditure
- **Not debaseable**: no government can print more; QPQ cannot print more; protocol is locked
- **Not censorable / peer-to-peer**: Groot's trustless resource layer enforces this structurally

It is positioned as restoring the commodity money ideal that gold historically provided, but with a mathematical puzzle replacing geological scarcity — and without gold's vulnerability to asteroid mining (an explicit design argument in the Un-White Paper).

See: [[monetary-philosophy]], [[gaju-token]], [[cuckoo-cycle]]

---

### Can I buy Gaju on an exchange?

As of May 2026: Gaju liquidity is enabled via **GajuDEX** (part of [[gajumaru-product-suite]]) from Q2 2026. **GajuFX** (CHF/EUR/USD fiat on/off ramps) is available via QPQ Capital AG's SRO-regulated services.

GajuExplore (explorer.gajumaru.io) is the designated on-chain explorer but had a TLS certificate error during the May 2026 audit — live metrics were temporarily unavailable.

See: [[gajumaru-product-suite]], [[gajudex]]

---

## Mining

### How do I mine Gaju?

During the **protected mining window** (now through 30 March 2027), mining licenses are purchased via **gajumining.com**. This is a SaaS model:
- QPQ operates the Hive miners (hardware infrastructure)
- License holders receive Gaju drawdowns from smart contracts
- Required hardware: a standard laptop with 8 GB RAM running any OS
- Software: GajuMine (miner) + GajuDesk (wallet); both install once, auto-update, require no maintenance

**Login:** gajumining.com uses GRIDS URL authentication — no username or password.

See: [[protected-mining]], [[hive-mining]], [[grids]]

---

### What is the "protected mining" period?

The protected mining period is a finite window during which mining licenses sold via gajumining.com provide privileged access to Gaju generation, before the network is opened to competitive mining communities.

**Key dates:**
- Target end: **30 March 2027** (authoritative per Un-White Paper, stated twice)
- Outer boundary: **30 September 2027**
- From bootstrap (May 2026): approximately **10 months remaining**

After 30 March 2027, license sales shift to competitive mining communities and associations. QPQ can no longer push protocol updates. The minting function is locked — QPQ holds no more network power than any other participant.

QPQ's framing: *"This is probably the one and only chance we have to try and get millions, maybe tens of millions of people into doing this at an early stage and effectively create something that is akin to a G20 economy on chain."*

See: [[protected-mining]]

---

### What happens to miners after March 2027?

Three ongoing income sources:

1. **Block rewards (juice):** The 1-trillion-Gaju supply distributes over 87.5 years via Fibonacci-modelled emission. Rewards continue after March 2027 but decline gradually per the curve — no sudden halving cliff.

2. **Transaction fees (growing):** As the network onboards commercial actors, fee revenue per block increases. The 720-blocks/day schedule distributes fees more frequently than Bitcoin's ~144 blocks/day.

3. **Defensive mining (platform insurance):** Commercial entities whose businesses depend on Groot's censorship resistance have rational incentive to mine beyond direct profit — as operational insurance protecting their on-chain operations.

**Open question:** QPQ has not published a model of the post-2027 equilibrium crossover point where fee revenue replaces juice revenue.

See: [[protected-mining]]

---

### Why is Gaju mining accessible on a laptop?

The **Cuckoo Cycle** proof-of-work algorithm is memory-bound and graph-theoretic — it was specifically designed so that memory access patterns prevent the efficiency gains that make ASICs dominate SHA-256 (Bitcoin) mining.

- **Standard laptop** (8 GB RAM): 40–100W; sufficient for Cuckoo Cycle mining
- **Bitcoin ASIC**: 3,500W+; industrially cooled

QPQ's framing: *"Memory is memory. You cannot build a specialist chip that has access to more memory faster than a standard chip."* The ASIC arms race that created Bitcoin's mining centralisation cannot happen with Cuckoo Cycle.

See: [[cuckoo-cycle]], [[protected-mining]]

---

## How Gajumaru Works

### What is the difference between Groot and an Associate Chain?

| | **Groot (Resource Layer)** | **Associate Chain (Infrastructure)** |
|--|------------------------|-------------------------------------|
| Governance | None — algorithmic consensus only | Yes — by design; identifiable operators |
| Access | Permissionless | Operator-controlled; may require KYC |
| Consensus | Bitcoin-NG PoW + Cuckoo Cycle | Any — PoW, PoS, PoA, database, legacy banking adapter |
| Speed | 300+ TPS; 3-sec microblocks | "Phenomenally high" — no leader selection problem |
| Trust requirement | None | Operators are legally accountable |
| Analogy | High seas / internet / outer space | Coastal waters / ports / regulated airspace |

Associate Chains are not Layer 2s. They are peer chains — Groot is aware of them and they of Groot, at the protocol level. They have their own independent database, CPU space, block size, and consensus. One AC's congestion cannot affect another's throughput.

See: [[associate-chains]], [[groot]], [[ripa-model]]

---

### What is GRIDS?

**GRIDS** = Gajumaru Remote Instruction Dispatch and Serialisation.

It is the authentication and signing layer for the Internet of Economics — a passwordless authentication protocol based on a dead-drop cryptographic challenge:

1. A service posts a signing challenge to a known location on-chain (the "dead drop")
2. The user's wallet detects the challenge and signs it with their private key
3. The service verifies the signature — authentication is complete
4. No username, no password, no credential database, nothing to breach

**What merchants receive:** Only payment confirmation. Not the user's identity, keys, address history, or personal data. GDPR compliance for the authentication layer is automatic — nothing personal is transmitted.

**Security hierarchy:**
- Level 1 (operational): Secure Enclave in GajuDesk/GajuMobile
- Level 2 (next phase): GRIDS dedicated hardware wallet (air-gapped, QR-code protocol)
- Level 3 (planned): Full QPQ hardware stack

**SSSO (Self Single Sign-On):** GRIDS enables "first-party single sign-on" — same convenience as Google/Apple SSO without the surveillance or data exposure.

See: [[grids]]

---

### What is a state channel?

A state channel is a bilateral, off-chain payment session between two parties — opened once with one on-chain transaction, used for unlimited interactions, closed once with one on-chain transaction.

The bar tab metaphor: open a tab (one transaction), buy unlimited rounds (no on-chain fee per round), settle at the end (one transaction).

**Performance (M2 MacBook benchmark):**
- **500+ coin transfers/second per channel**
- **3,000+ plain messages/second per channel**
- **50 channels in parallel**: 3,500 coin transfers/second, 30,400 messages/second
- One Mac Mini: handles 1,000 concurrent channels stably at **500,000+ TPS total**

**Key improvement over Bitcoin's Lightning Network:**
- Channel top-up is supported (Lightning requires close + reopen for additional funds)
- No routing complexity (each channel is a direct bilateral session)
- Native protocol support (Groot is aware of state channels; Bitcoin has no knowledge of Lightning)
- No routing ceiling (Lightning's empirical ceiling is ~$89; beyond this, routing fails)

See: [[state-channels]], [[lightning-vs-state-channels]]

---

### What is GajuDEX?

**GajuDEX** is a genuinely decentralised exchange (AMM + CLOB with stop losses) deployed on Groot.

Key properties:
- Immutable post-deployment: no admin can change it
- No admin keys: no party can intervene in trades
- No governance token: no insider voting on protocol parameters
- No KYC at the Groot deployment (a KPoS Associate Chain deployment adds KYC for regulated participants)
- First DEX to pass FINMA's substance-over-form test for genuine decentralisation
- Scored **39/40** on QPQ's DINO decentralisation framework (all major DEXs score 20 or below)

See: [[gajudex]]

---

## Technology

### Why does Gajumaru use Proof of Work instead of Proof of Stake?

PoS cannot produce a trustless resource layer — this is a structural consequence, not a preference.

**The PoS problem:** Validators must be known (else the system is trivially gamed). Known validators can be coerced, bribed, legally compelled, or delegated to. "Anonymous PoS" fails all three TEA tests: not trustless (must trust validators not to collude), not accountable (cannot identify or replace pseudonymous validators).

**The PoW solution:** The act of solving a difficult puzzle is a costly signal that doesn't require identity. The cost of compromising the system rises with participant count until it exceeds the value to be gained. Trustless and anonymous are the same thing in this context.

**Proof from Ethereum:** OFAC-compliant validators at times processed **over 70% of Ethereum blocks** — meaning the US Treasury effectively controlled transaction inclusion on a "decentralised" network. This is the definitive proof that PoS cannot be a resource layer.

**Associate Chains can use PoS:** When operators are known and legally accountable, PoS works. The governance problems vanish because the accountability requirement is met. ACs run at "phenomenally high speeds" precisely because they avoid the leader-selection problem that PoW solves.

See: [[tea-trilemma]], [[cuckoo-cycle]], [[groot]]

---

### How is Gajumaru 1,846,200× more efficient than Bitcoin?

Four compounding architectural improvements (Un-White Paper, Chapter V):

| Step | Mechanism | Factor |
|------|-----------|--------|
| 1 | Bitcoin-NG: 300+ TPS over 120-sec keyblock vs Bitcoin's 3.25 TPS over 600-sec block | **92.31×** |
| 2 | Settlement latency: 3-sec microblock vs 600-sec Bitcoin block | **200×** |
| 3 | Witnessing: compresses attack window to 4 min; reduces required hashrate | **10×** |
| 4 | Cuckoo Cycle: 10–50× fewer CPU instructions per solution vs SHA-256 (conservative end) | **10×** |
| **Total** | | **1,846,200×** |

The Year in Review cited 553,800× — a 3-factor formula that combined steps 3 and 4 into ~30×. Both figures are mathematically consistent; the Un-White Paper's 4-factor breakdown is the authoritative technical specification.

See: [[groot]], [[bitcoin-ng]], [[cuckoo-cycle]]

---

### Is Gajumaru quantum-resistant?

**Current status:** Groot uses Curve25519 elliptic-curve signing — practically impossible to brute-force with any hardware that exists today. Realistic estimates require tens or hundreds of millions of physical qubits to crack elliptic-curve keys; the most advanced current machines have fewer than 150.

**Built-in migration path:** Gajumaru supports **ML-DSA** (Module-Lattice-Based Digital Signature Algorithm, recently approved by NIST) from MainNet launch. Gas costs: approximately **1.5× to 2.2×** standard verification.

**Architectural approach:** Generalised Accounts (GA) allow any account to upgrade to any Sophia-based authentication scheme — including schemes not yet invented. The correct approach is not to pick a winner but to build architecture that enables users to choose and adapt.

**Associate Chain sovereignty:** An AC operator can mandate quantum-resistant signing for all accounts on its chain without any coordination with Groot or other ACs.

**Competitor comparison:** Ethereum validator keys are persistent and publicly known — directly targetable by a quantum adversary. Bitcoin lacks smart contract capability to implement alternative authentication schemes. Neither has a GA-equivalent migration path.

See: [[quantum-resistance]], [[gajumaru-architecture]]

---

### What makes Sophia/FATE safer than Solidity/EVM?

The Sophia smart contract language and FATE virtual machine were designed from first principles around C.A.R. Hoare's 1980 principle: make it so simple there are obviously no deficiencies.

| Security property | FATE VM | Ethereum EVM |
|------------------|---------|-------------|
| Type safety | Every operation typed; violations revert all state | Type confusion exploitable |
| Integer overflow | Unbounded arithmetic; overflow impossible | Overflow attacks cost billions in Ethereum ecosystem |
| Memory isolation | Controlled jump destinations; buffer overflow impossible | Re-entrancy and buffer exploits documented |
| Self-modifying code | Data/control flow separated; impossible | Possible; enables attack surface |
| Test/prod fidelity | Code tested on FATE runs on FATE exactly | Simulation divergence causes prod failures |
| Formal verification | Supported natively | Limited tooling; not standard |

See: [[sophia-fate]]

---

## Ecosystem and Adoption

### What is LTIN?

**LTIN** = Liechtenstein Trust Integrity Network. It is the first sovereign Associate Chain deployment — Liechtenstein's national digital economy infrastructure, built on Gajumaru's Associate Chains architecture.

**Ownership:**
- Majority owner: Telecom Liechtenstein
- Technical partner & shareholder: QPQ AG
- Founding participants: Bank Frick, Bitcoin Suisse, Swiss Subnet, Zilliqa

**Framework:** Operates under the Liechtenstein Blockchain Act; EU MiCAR compliant from launch; Liechtenstein is an EEA member giving EU market access.

**Status (May 2026):** Announced October 22, 2025 (six days after first Gaju token circulation). Not yet launched as of May 2026 (~7 months post-announcement). Target: Q3/Q4 2026. QPQ public language shifted from "Q2/Q3/Q4" to simply "in 2026." gajumining.com homepage states: *"Trusted by the sovereign state of Liechtenstein."*

See: [[ltin]]

---

### What is the RIPA model?

**RIPA = Resource → Infrastructure → Platform → Application** — the four-layer deployment model for the Gajumaru ecosystem.

Two traversal paths:

**RPA (skip Infrastructure):** Operate directly on Groot. Permissionless, censorship-resistant, globally accessible, no consumer protection. Available to the 1.3 billion unbanked. No operator can say no.

**RIPA (use governed Infrastructure):** Use regulated Associate Chains on top of Groot. Faster, cheaper, regulated, consumer protections, familiar UX. Operators can say no — but participants always have the RPA exit, which disciplines operator behaviour.

**Why both must exist:** RPA disciplines RIPA (operators who know users can leave must remain fair). RIPA disciplines RPA (ensures trustlessness is a choice, not a sentence).

See: [[ripa-model]], [[ripa-vs-traditional-banking]]

---

### Is Gajumaru compliant with financial regulations?

Yes — designed as a requirement, not retrofitted as a constraint.

| Framework | Status |
|-----------|--------|
| FINMA (Switzerland) | GajuDEX passes substance-over-form test; QPQ AG in Zug; QPQ Capital AG VQF-affiliated |
| MiCA (EU) | Compliant; Liechtenstein LTIN MiCAR compliant from launch; Cuckoo Cycle PoW makes sustainability compliance straightforward |
| MAS (Singapore) | GajuDEX passes identifiable-operator test; GL1 Associate Chain explicitly positioned as MAS-compliant |
| Liechtenstein TVTG | LTIN operates under the world's earliest comprehensive DLT legal framework |
| Swiss DLT Act 2021 | Tokenised shares on ACs are legally equivalent instruments under Swiss law |
| US GENIUS Act (July 2025) | First federal stablecoin framework; Gajumaru's AC architecture is designed for this compliance context |
| US CLARITY Act (passed House, July 2025) | CFTC/SEC split on decentralisation criteria; Groot's architecture is designed to be genuinely decentralised under this test |
| UK Cryptoassets Regulations 2025 | Full enforcement from October 2027; QPQ's position: Gajumaru passes every test |

See: [[summary-unwhitepaper]], [[ltin]]

---

### Why is there a 24-year backstory?

Greg Chew's 2002 demonstration at HSBC's London headquarters — transferring money and certificates using 2G/GPRS mobile phones — was the first concrete proof-of-concept for what became Gajumaru. The intervening 24 years were spent understanding why existing infrastructure failed, what a correct solution required, and building it.

QPQ frames Gajumaru not as a startup idea but as the **mature iteration of a long-running technical vision** — one that waited until the underlying technology (Aeternity's Sophia/FATE VM, Cuckoo Cycle, Bitcoin-NG, Erlang/OTP) had matured sufficiently to build correctly.

See: [[gregory-chew]], [[summary-video-future-of-banking]]

---

## Common Objections

### "This sounds like every other blockchain project — what's actually different?"

The structural test is QPQ's own: does it allow you to trust the message rather than the messenger, securely at scale?

Distinguishing features that are verifiable rather than claimed:
1. **Groot has been operational since October 2024** — not a roadmap
2. **No governance at the resource layer** — QPQ cannot modify Groot after the protected mining window closes; no foundation can be coerced
3. **No bridges** — native AC interoperability at the protocol level; verified against $1.8B+ in bridge exploits
4. **GajuDEX scored 39/40 on DINO framework** — every major DEX scored 20 or below
5. **FINMA substance-over-form test passed** — regulators agree it is genuinely decentralised
6. **Liechtenstein national chain** — sovereign government selected Gajumaru before MainNet launch
7. **GPL3 + defensive patents** — open source with built-in patent peace; no extractive IP
8. **$60M build cost, no VC pressure** — "nobody with capital to deploy wanted a resource layer"

See: [[gajumaru-architecture]], [[gajudex]], [[ltin]]

---

### "Is this a security or investment risk?"

QPQ explicitly does not provide investment advice. The wiki documents what QPQ has stated, demonstrated, and built — not price predictions or return projections.

Documented risk factors:
- **LTIN launch delay**: 7 months post-announcement with no public explanation (May 2026)
- **Protected mining cliff**: post-2027 economics not publicly modelled by QPQ
- **GajuExplore outage**: TLS certificate error during May 2026 audit — live metrics temporarily unavailable
- **18-month trust model**: QPQ explicitly asks for trust during the bootstrap window as "honest brokers"; after that, the design goal is that QPQ holds no special power

See: [[ltin]], [[protected-mining]]

---

### "Can't a government just shut this down?"

At the resource layer: no — by design. Groot has no operator, no headquarters, no admin keys, no shutdown mechanism. It is the same category of answer as "can a government shut down TCP/IP."

At the infrastructure layer: yes — an Associate Chain operator is a legal entity in a jurisdiction. A government can regulate, restrict, or compel compliance from an AC operator. This is the design: ACs are governed and accountable; their operators can be held responsible. The exit to Groot remains available to any participant who cannot or will not comply with an AC's governance.

OFAC's demonstrated ability to compel SWIFT exclusion and Ethereum block compliance applies to identified infrastructure operators, not to the resource layer.

See: [[groot]], [[ripa-model]], [[tea-trilemma]]

---

### "Why will Gajumaru win when $120B has already failed?"

From the Un-White Paper's direct answer:

Every project that received VC funding was deployed by an entity that wanted to **extract** value from the base layer. Resource layers serve everyone — they generate no monopoly. Nobody with capital to deploy wanted to build one, because there is no base-layer toll to collect.

QPQ held no special position in Groot's consensus from day one. Cannot change rules, freeze assets, or exclude participants. This required sustained discipline against every incentive in the industry — QPQ is the only team that has demonstrated this in over a decade of blockchain development.

Additionally: the technical barriers, the Garden of Eden barrier, and compounding network effects mean Groot cannot be outcompeted even by a future entrant with unlimited resources. By the time such a competitor became operational, Groot's embedded network effects would be "practically insurmountable."

See: [[summary-unwhitepaper]], [[gajumaru-vs-ethereum-two-proofs]]

---

*This FAQ is derived from primary QPQ sources. All claims link to source summaries in wiki/sources/. For detailed technical treatment of any topic, follow the page links.*

*Last updated: 2026-05-16*

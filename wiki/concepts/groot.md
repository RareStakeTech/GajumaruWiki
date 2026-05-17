---
type: concept
title: "Groot (Resource Layer)"
aliases: [groot, resource-layer]
sources: [[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-gaju-firsts-gajumaru-blockchain]], [[summary-qpq-wiki-gajumaru]], [[summary-qpq-wiki-consensus]], [[summary-video-bitcoin-proof-of-concept]], [[summary-video-whitelist-mining-distribution]]
related: [[gajumaru-architecture]], [[associate-chains]], [[gaju-token]], [[protected-mining]], [[cuckoo-cycle]], [[tea-trilemma]], [[bitcoin-ng]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: core-protocol
cluster_role: member
---

# Groot (Resource Layer)

Groot is the governance-free, proof-of-work resource layer of the Gajumaru blockchain. It is the "R" in the [[ripa-model]] and underpins all [[associate-chains]].

No operator. No one can say no. Algorithmic consensus only. The "high seas" of the global digital economy.

## Status
Operational since **22 October 2024**. As of end 2025: 300,000+ generations produced. Absolute finality: **3–4 minutes** (2 keyblocks at 2-minute intervals).

> Note: Groot launched October 22, 2024. First Gaju token drawdowns to miners occurred October 16, 2025 — nearly one year after network launch. These are two distinct events.

## Why Bitcoin's Block Structure Was a Proof-of-Concept Mistake

From [[summary-video-bitcoin-proof-of-concept]], Craig articulates the architectural root cause of Bitcoin's limitations:

> "When I say separation of concerns in design... the cryptographic proof that does the leader selection — you would want to separate that from the actual work of including transactions into the ledger. And that's something that Bitcoin never got to, because by the time somebody was, you know, buying pizzas with it, the definition got locked."

Bitcoin's fundamental design error: **the same block that carries the cryptographic proof (leader election) also carries all the transactions**. Everything can only travel at the pace of that single block speed. This is how you build a proof-of-concept — you "make kind of a glommed-together data structure" before you fully understand the system.

The fix (Bitcoin-NG) was published in academic literature in 2016. Bitcoin could never adopt it because by then the "definition got locked" — the moment exchanges formed and the protocol had monetary value, any change became categorically impossible. This is the frozen proof-of-concept problem.

Groot implements the separation of concerns correctly from the start.

## Consensus Architecture

**Bitcoin-NG** (Eyal et al., 2016, USENIX NSDI): Decouples leader election from transaction serialisation. Keyblocks (~every 2 min) elect leaders; microblocks (~every 3 sec) carry transactions. Absolute finality = no transaction older than 2 keyblocks can be ejected. A keyblock plus all its associated microblocks constitutes a **generation**.

**[[Cuckoo-cycle]]** (Tromp, 2014/2019): Memory-bound, graph-theoretic proof-of-work. No ASIC arms race — mining remains decentralised. Suitable for 87.5-year [[gaju-token]] distribution.

## PoW and Trustlessness

PoW has a special property among all leader-selection mechanisms: **participants need not be known or trusted**. In this context, "trustless" and "anonymous" are synonymous. This is a requirement for a mint to function correctly — any mint that requires identifying participants can be captured or gatekept. Source: [[summary-qpq-wiki-consensus]].

## Witness Mechanism

Groot employs a **witness mechanism** among stakeholders for accelerated finality. Key properties:
- Functions as **fork protection** — not the primary consensus basis
- **Keyblocks witnessed are content-free** — they carry no transactions
- This means witnesses commit to the leader election outcome, not to any transaction content — protecting witnesses from inadvertently endorsing questionable transactions
- Finality: typically **2–4 minutes**

Source: [[summary-qpq-wiki-gajumaru]]

## On-Chain Object Categories

| Category | Objects |
|----------|---------|
| **Universal (transferable)** | Plain Old Accounts (PLAs) — implicitly created; transferable between users |
| **Non-transferable** | Contracts, state channels, generalised accounts, subordinate ledgers |
| **Transferable** | Currency — Gajus or AC-defined coins |

PLAs (Plain Old Accounts) are the foundational account type: they come into existence automatically and can be transferred like any asset.

## Data TTL and Storage

All on-ledger data carries a **Time-to-Live (TTL)** value. Storage cost scales with the height duration required:
- ~3-minute generation intervals → one-year storage requires TTL = current height + 175,200
- TTL can be extended via **TTL transactions**
- Subordinate ledgers may implement arbitrary storage rules, including **infinite TTL**
- State channel objects have infinite TTL within the channel context

## Garbage Collection and Epochs

At **governance-determined heights**, data snapshots create new genesis blocks. Terminology:
- **Epoch** — the span between two consecutive genesis blocks
- **Ledger closeout** — the transition from one epoch to the next

Node operating modes:
| Mode | Behaviour |
|------|-----------|
| Garbage-collected | Clears expired and non-current data |
| Archive | Retains historical data |
| Full archive | Complete ledger history across all epochs |
| Partial archive | Current + some past epochs only |

All nodes preserve the current epoch's transaction logs, enabling reconstruction of garbage-collected states.

## Performance Specifications

| Metric | Value |
|--------|-------|
| Throughput | >300 transactions per second |
| Commercial settlement | 2–3 seconds (next microblock) |
| Absolute finality | 3–4 minutes (2 keyblocks) |
| Efficiency vs Bitcoin | **1,846,200×** more transactionally efficient (up to 9,231,000× at upper Cuckoo bound) |
| Security vs Bitcoin | At least 8.23× greater in commercial utilisation |
| Energy per transaction | ~0.0024 kWh (less than running a lightbulb for 3 minutes) |
| Bitcoin energy per tx | ~1,335 kWh |
| Simple spend cost | 0.0000169 Gaju (< 2 thousandths of a cent at $1/Gaju) |
| Network daily capacity | 30 million transactions/day at full throughput |

**Efficiency breakdown — four compounding steps (Un-White Paper Ch. V):**

1. **Bitcoin-NG Decoupling (92.31×):** Groot processes 300+ TPS over 120-second keyblock cycle = 36,000+ txs per 10-min window. Bitcoin: 3.25 TPS × 600s = 1,950 txs. Ratio: 92.31×
2. **Settlement Latency (200×):** Bitcoin settlement = 600s; Groot microblock = 3s. Running total: 18,462×
3. **Compressed Settlement Security (10×):** Witnessing limits attack windows to 4 minutes. Bitcoin's open window allows 51% attackers to accumulate advantage over hours/days (a "patience" attack). Groot requires 10× less hashrate for equivalent security. Running total: 184,620×
4. **Cuckoo Cycle Memory-Latency Bound (10×–50×):** Memory-bound PoW = 10–50× fewer CPU instructions vs SHA-256 at equivalent security. Conservative: **1,846,200×**. Upper: **9,231,000×**

**Protocol sovereignty:** After public mining opens (target: 30 March 2027; outer boundary: 30 September 2027), Groot is a **finished protocol** — architecturally complete, not abandoned. No base-layer updates can be forced. No governance structure exists through which QPQ could act. The architecture asks you to trust mathematics and PoW, not QPQ. *"A resource layer that keeps changing under someone's direction is not a resource layer. It is infrastructure under active management."*

**Mining energy:** Gaju miner runs on laptop with 8 GB RAM, ~60–100 watts (equivalent to an incandescent light bulb). Bitcoin ASIC: ~3,500 watts per unit, industrial cooling required. No warehouse, no power substation.

> [!note]
> **Efficiency figure discrepancy — RESOLVED:**
> - [[summary-qpq-2025-review]] (Jan 2026): 553,800× more efficient than Bitcoin
> - [[summary-unwhitepaper]] (Mar 2026): 1,846,200× more efficient than Bitcoin
>
> **Root cause (mathematical):** The Year in Review used a 3-factor formula; the Un-White Paper uses 4. Checking the raw Un-White Paper arithmetic (Ch. V, pp. 64–65):
>
> | Step | Factor | YIR running total | UWP running total |
> |------|--------|-------------------|-------------------|
> | Bitcoin-NG decoupling | 92.31× | 92.31× | 92.31× |
> | Settlement latency | 200× | 18,462× | 18,462× |
> | Witnessing security compression | 10× | *(not separately counted)* | 184,620× |
> | Cuckoo Cycle memory bound (min) | 10× | *(rolled into ~30× combined)* | **1,846,200×** |
> | **Year in Review combined steps 3+4** | **~30×** | **553,800×** | — |
>
> The Year in Review (Jan 2026) merged witnessing + Cuckoo into a single ~30× factor. The Un-White Paper (Mar 2026) separated witnessing as a distinct 10× multiplier and set Cuckoo at the conservative 10× minimum — producing a 3.33× higher total. Both are QPQ internal publications; no external contradiction. The 4-step breakdown is the technically correct formulation. **Authoritative figure: 1,846,200× (Un-White Paper, conservative 10× Cuckoo bound).**

## On-Chain Messaging

Gajumaru transactions support attached message data — analogous to SWIFT's business purpose fields. Any transaction can carry business data, personal notes, or other structured information on-chain. Demonstrated in [[summary-gaju-firsts-gajumaru-blockchain]]: the first-ever Gaju transaction included a personal message.

## Transparency Model
Groot is a public ledger — all transactions visible. This is the price of trustlessness (no hidden cargoes; full exposure). Regulatory compliance sits at Associate Chain boundaries, not on Groot itself. Analogous to TCP/IP not regulating content.

## Relation to Token
[[gaju-token]] first drawdowns occurred 16 October 2025. Token symbol: 7XGaju.

## Explorer
GajuExplorer: `groot.mainnet.gajumaru.io`

## Finality Cooperation with Associate Chains

[[associate-chains]] cooperate to improve finality on Groot. Craig (attributing to Dimitar) references this explicitly but defers detail to a later video. Current sources do not describe the mechanism.

> [!open_question]
> Mechanism for Associate Chain → Groot finality cooperation not yet documented. See [[summary-the-gajumaru-an-actual-working-blockchain]].

## Authoritative Definition

Greg's canonical description of Groot from [[summary-video-bitcoin-proof-of-concept]]:

> "An uncontrolled shared ledger where the history cannot be changed, that is resistant to censorship. There is no operator that you have to trust. That is Groot."

This is followed by the positioning statement: Groot is **Bitcoin made tens of thousands of times more efficient with native smart contracts and a native virtual machine**.

## The "50-Year" Principle

Craig in [[summary-video-bitcoin-proof-of-concept]]:
> "If you're doing transactions primarily in Groot 50 years from now, you're doing it wrong."

The base layer is the settlement backbone and currency anchor — not the primary transaction layer. State channels and Associate Chains are the correct location for high-frequency activity. The 300 TPS base layer is designed to be sufficient for direct on-chain payments at coffee-shop scale, with state channels serving where sub-second or higher-throughput is required.

## Initial Hardware

The chain was started on **five $300 laptops with i5 processors**. This was possible due to the Cuckoo Cycle PoW design. Source: [[summary-video-whitelist-mining-distribution]].

## Sources
[[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-qpq-wiki-gajumaru]], [[summary-qpq-wiki-consensus]], [[summary-video-bitcoin-proof-of-concept]], [[summary-video-whitelist-mining-distribution]]

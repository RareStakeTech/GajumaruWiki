---
type: synthesis
title: "From Proof of Concept to Finished Product: Bitcoin, Ethereum, and Gajumaru"
sources: [[summary-video-bitcoin-proof-of-concept]], [[summary-unwhitepaper]], [[summary-qpq-2025-review]]
related: [[groot]], [[gajumaru-architecture]], [[associate-chains]], [[state-channels]], [[tea-trilemma]], [[bitcoin-ng]], [[monetary-philosophy]]
filed_from_query: true
date: 2026-05-16
---

# From Proof of Concept to Finished Product: Bitcoin, Ethereum, and Gajumaru

> "Both Bitcoin AND Ethereum are two massive proofs of concept — Bitcoin for the monetary concept; Ethereum for programmable smart contracts."
> — Craig Everett, [[summary-video-bitcoin-proof-of-concept]]

This synthesis draws on the Bitcoin PoC video, the Un-White Paper, and other QPQ primary sources to trace the argument that Bitcoin and Ethereum proved the ideas, but neither was ever evolved into the finished product — and what that means for Gajumaru.

---

## Summary Verdict

| Dimension | Bitcoin | Ethereum | Gajumaru |
|-----------|---------|----------|---------|
| What it proved | Trustless digital money is possible | Programmable contracts on a blockchain work | Both — at production scale |
| Governance model | No foundation (virtue and prison) | Foundation-controlled (Garden of Eden capture) | No governance; PoW; will never have it |
| Evolvable? | No — "definition got locked" | Yes — but corrupted by the process | By design: ACs innovate; Groot is stable |
| Smart contracts | No native VMs; dirty hacks only | EVM/Solidity — commercially dangerous | Sophia + FATE; formally verifiable; no overflows |
| Layer 2 / scaling | Lightning: dirty hack; ~3 TPS | L2s: centralised sequencers; blob arithmetic impossible | ACs: sovereign chains; native protocol awareness |
| Regulatory path | None meaningful | Centralisation revealed by OFAC compliance | FINMA/MiCA/MAS/TVTG compliance by design |
| Security model | SHA-256; ASIC arms race | Anonymous PoS; 4–6 entities control 52–62% | Cuckoo Cycle PoW; no ASIC advantage; witnessing |
| Quantum readiness | No GA framework; locked into existing signing | Validator keys persistent and targetable | ML-DSA via Generalised Accounts; AC-sovereign upgrades |
| Throughput | 3–7 TPS; $50–100 fees under congestion | L2 claims defy arithmetic; observed 10–150 settled TPS | 300 TPS base; state channels 500,000+ TPS; no ceiling via ACs |

---

## Part I — Bitcoin: The Proof That Couldn't Evolve

### What It Proved

Bitcoin demonstrated that trustless digital money was achievable: a finite resource, extraction with cost, not debaseable, not censorable, tradable between peers without intermediation. This was the Austrian monetary ideal — gold's ungovernability as a cryptographic equivalent.

The proof was necessary. Without Bitcoin, there was no demonstrated existence of real money on a blockchain. Gajumaru's Gaju token borrows every principle Bitcoin established and resolves its production failures.

### The Architectural Flaw

Bitcoin's block bundles cryptographic proof (leader election via PoW) and transaction inclusion in a single unit. This was a proof-of-concept design choice — when you don't know all the details yet, you create a "glommed-together data structure." Everything must travel at the pace of that single block: 600 seconds, ~3.25 TPS.

Bitcoin-NG (Eyal et al., 2016) proposed the correct fix: decouple leader election (keyblocks) from transaction serialisation (microblocks). This is exactly what Groot implements. Bitcoin rejected it.

### "The Definition Got Locked"

The critical moment: once people bought pizzas with Bitcoin and exchanges formed, the protocol acquired commercial value. From that point, any change became impossible because it risked the value that had crystallised.

Bitcoin's ungovernability — its virtue as sound money — became its prison as infrastructure. A hard fork requires convincing a critical mass of all mining nodes to upgrade simultaneously. Miners who don't fully understand the change resist out of rational fear. Satoshi's anonymity meant no trusted leader could drive consensus. The result: good ideas (like Bitcoin-NG) were systematically rejected via **FOMO economics** — communities don't want to risk what's working.

> "It is categorically impossible to get the bulk of Bitcoin participants to agree to any large architectural change."
> — Craig Everett

Bitcoin's confirmation spikes (blockchain.com data, 2024):
- Average: 57 minutes at the "low"
- Regular spikes: 2,500 minutes
- Extreme: 11,000 minutes (July 2024)

Bitcoin cost per transaction (mining rewards + fees): **~$100+** at 2024/2025 prices.

### The Dirty Hacks

Every Bitcoin extension is a workaround that creates a new capability by abusing an unintended feature of the existing architecture, without solving the underlying problem:

**Lightning Network** — built because "the answer must be Bitcoin":
- No channel top-up: to add funds, close and reopen (two full on-chain transactions)
- Routing complexity: multi-hop routing without intermediation is expert-level work
- Glass cannon: liquidity is static; rebalancing requires on-chain operations
- Intermediation reintroduces trust: custodial Lightning = trust the node operator = "just use the bank"
- 2018 launch → ~3 TPS today, despite Bitcoin's full network effect
- Empirical routing ceiling: **$89** — larger transfers cannot route reliably
- Gini coefficient of node capacity: **0.97** (near-perfect wealth concentration)
- Annual routing revenue for the entire network: ~$137,000

**Runes**: fungible tokens via UTXO abuse — at scale, kills the underlying chain.

**Ordinals**: NFTs stamped on single satoshis — no garbage collection, fills chain forever.

**Bitcoin OS**: ZK rollup layer; Bitcoin can only store proof hashes, cannot validate them. Ethereum can validate ZK proofs natively. Bitcoin cannot. "What does it bring to the table other than: you can do this with Bitcoin too — slower and more expensive?"

The **Juicero analogy**: expensive engineering producing a strictly worse product, driven purely by the premise that "the answer must be Bitcoin."

---

## Part II — Ethereum: The Proof That Got Captured

### What It Proved

Ethereum proved that programmable smart contracts could operate on a public blockchain — that arbitrary computation could be embedded in a trustless system. This was the second necessary proof.

The proof was real. But Ethereum's execution path replicated the Garden of Eden failure: introducing governance made it something worth capturing, and it was captured.

### The Garden of Eden Capture

Ethereum had a known founder and foundation — which enabled fast iteration but "corrupted" the chain. The progression is documented:

1. Foundation formed to coordinate development
2. Foundation became the de facto decision-maker
3. Projects competed for foundation favour
4. Validators became dependent on foundation delegation (Solana pattern replicated)
5. Governance became feudalism with better vocabulary

Buterin stated publicly on X (January 21, 2025): **"The person deciding the new EF leadership team is me."**

Former Ethereum Foundation employees (The Guardian, February 2026): described governance as **"cosplaying community governance."**

Paul Brody (EY / Enterprise Ethereum Alliance): community described as **"a lot like pretty normal shareholders."**

### OFAC Compliance — The Definitive Test

The TEA trilemma (Trustlessness / Efficiency / Accountability) provides the analytical framework. Ethereum's anonymous proof-of-stake fails Trustlessness at the most basic test:

At peak periods, validators complying with OFAC sanctions processed **over 70% of all Ethereum blocks** — meaning the US Treasury effectively controlled transaction inclusion on a "decentralised" network. This is the definitive proof that proof-of-stake systems cannot be resource layers.

**Stake concentration (Rated Network data):**

| Entity | Stake share |
|--------|-------------|
| Lido | Largest single operator |
| Coinbase, Figment, Kiln, Binance | Combined: 52–62% of all staked ETH |

Flashbots controls MEV extraction infrastructure; OFAC compliance is enforced at the block level, not the validator level — meaning the infrastructure around Ethereum enforces censorship regardless of individual validator intent.

### The October 2020 L2 Pivot

Ethereum's shift to a "rollup-centric roadmap" was not driven by engineering necessity — it simultaneously preserved four commercially aligned interests:

1. ETH token value (no mechanism change required)
2. Developer ecosystem (Solidity/EVM preserved)
3. VC investment (L2 tokens as new investable assets)
4. Foundation power (L2 ecosystem requires coordination with EF)

What the pivot gave up: actual decentralisation.

**The blob arithmetic impossibility (EIP-4844 / EIP-7691):**
- Maximum blob space per block: **1,179,648 bytes** (shared across ALL L2s simultaneously)
- Minimum data required for 1,000 honest TPS: **4,260,000 bytes/block**
- That is less than 28% of what 1,000 TPS requires

Claimed vs observed TPS (L2Beat data):

| Layer 2 | Claimed TPS | Observed settled TPS |
|---------|------------|---------------------|
| Arbitrum | 40,000 | 10–30 |
| Base | 2,000–3,571 | 30–150 |
| ZKSync | 20,000+ | 12–16 |

**February 2026**: Ethereum publicly admitted limits. The document calls this "five years without decentralisation."

**ZK prover time constraint**: ZK proofs form a sequential chain — each must complete before the next begins. At 2,000 TPS: 21× prover time inflation. At 10,000 TPS: 105× inflation. Backlogs compound without bound under sustained load.

**ZKSync soundness failure**: OtterSec (March 3, 2026) identified Fiat-Shamir transcript binding vulnerabilities in 6 production zkVMs — Jolt, Nexus, Cairo-M, Ceno, Expander, Binius64. These failures allow proofs to be accepted for **invalid state transitions**.

**Sequencer revenue without accountability:**
- Arbitrum: $21.6M from a single unaccountable sequencer
- Base (Coinbase): $30M+ profit in 2024 from sequencer position

### Ethereum's VM Problem

Ethereum's EVM and Solidity have "proven insecure and dangerous for commercial deployment." The FATE VM (Sophia) was designed with C.A.R. Hoare's 1980 principle as the foundation:

> "There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."

FATE VM protections that EVM lacks:
- Type safety (every operation typed; violations revert all state changes)
- Unbounded integer arithmetic (overflow exploits costing billions in Ethereum are structurally impossible)
- Memory isolation (buffer overflow and reentrancy attacks impossible)
- Data/control flow separation (self-modifying code impossible)
- Test/prod fidelity (no simulation divergence)

---

## Part III — Gajumaru: The Finished Product

### Built on Both Proofs

QPQ describes Gajumaru as the Watt engine to Bitcoin's Newcomen: not a rejection of what Bitcoin proved, but the production-grade implementation that makes the idea deployable.

Gajumaru absorbs both proofs:
- From Bitcoin: the monetary model (PoW, finite supply, no debasement, Cuckoo Cycle instead of ASIC-dominated SHA-256)
- From Ethereum: the programmability model (smart contracts, VMs) — but correctly implemented (Sophia + FATE)
- Rejects: Bitcoin's throughput limitation, Ethereum's governance, both chains' scaling compromises

**Groot definition** (Greg Chew):
> "An uncontrolled shared ledger where the history cannot be changed, that is resistant to censorship. There is no operator that you have to trust."

This is Bitcoin — made 1,846,200× more transactionally efficient, with native smart contracts and a native virtual machine.

### Doing What Bitcoin Couldn't Do

Bitcoin-NG was rejected by the Bitcoin community in 2016. QPQ implemented it from Groot's genesis block.

The separation of keyblocks (leader election, finality every 2 minutes) from microblocks (transactions every 3 seconds) gives Groot:
- 300+ TPS base layer — 100× Bitcoin
- 2–3 second commercial settlement (not 57–11,000 minutes)
- Absolute finality in 3–4 minutes
- No dirty hacks required for coffee payments

The Cuckoo Cycle PoW eliminates the ASIC arms race:
- 8 GB RAM laptop: 40–100W
- Bitcoin ASIC: 3,500W
- Bitcoin energy per transaction: ~1,335 kWh
- Gajumaru energy per transaction: ~0.0024 kWh

### Doing What Ethereum Couldn't Do

Associate Chains are QPQ's answer to Ethereum's L2 problem — and the architectural improvement is structural, not incremental:

| Dimension | Ethereum L2 | Gajumaru AC |
|-----------|-------------|-------------|
| Sequencer | Single entity; no accountability | Known operator; regulated; auditable |
| Settlement | Blob space shared globally | Each AC adds throughput independently |
| Governance | Foundation-dependent | Each AC self-governed; sovereign |
| Exits | Bridge required | Native protocol-level AC awareness; no bridges |
| Security | ZK soundness failures documented | Groot witnessing; no proof chain constraint |
| Regulatory | OFAC compliance baked in at infrastructure layer | Jurisdiction-specific on each AC |
| Scale ceiling | ~28% of 1,000 TPS in blob space | No architectural ceiling |

QPQ explicitly states: "If you're doing transactions primarily in Groot 50 years from now, you're doing it wrong." The base layer is the settlement backbone. ACs are the right place for volume — not Layer 2 workarounds, but sovereign governed chains with native Groot awareness.

### The No-Governance Design Choice

QPQ held an internal debate about creating a foundation. The conclusion was unanimous: no foundation, no governance of any kind.

The whitelist period is the only window in which QPQ can push protocol updates. Once it ends (30 March 2027), QPQ has no more power over the chain than any other participant. The minting function is locked. There is no governance body that can be coerced, no ring to wield.

Greg: *"No matter how nice you think anybody in QPQ is, you can never let us have keys to the kingdom. Our whole point is we will burn the keys to the kingdom."*

### The Fulfilment Argument

Satoshi's paper is titled *"Bitcoin: A Peer-to-Peer Electronic Cash System."* The Bitcoin community abandoned both "peer-to-peer" and "cash system" — building a store of value and a speculation platform instead.

QPQ's position: **Gajumaru is the actual peer-to-peer electronic cash system the Bitcoin whitepaper described.**

The proof is not philosophical — it is technical:
- Sending €500 from Berlin to Nairobi: **fraction of a cent, settles in seconds** (vs €40–80 in correspondent banking fees, 3–5 business days)
- Simple spend on Groot: **0.0000169 Gaju** at $1/Gaju
- State channels enable per-token, per-frame, per-millisecond billing — the machine economy that neither Bitcoin nor Ethereum can support

---

## The "Why" of the Two Proofs

Bitcoin failed to evolve because it was too successful too fast — the community's economic stake in the status quo became the barrier to necessary improvement. This was not a governance failure; it was a feature of Bitcoin's trustlessness. The cure (governance) would have been worse than the disease.

Ethereum failed by choosing the cure. Its governance enabled rapid iteration — and the ratchet turned. Once a foundation existed and acquired value, it became something worth capturing. Capture happened gradually, not suddenly. "Feudalism with better vocabulary and none of the accountability."

Both failures are structurally determined, not character failures. The Garden of Eden problem predicts exactly what happened. QPQ's response is not to design better governance — it is to refuse governance entirely, from day one, structurally, irreversibly.

The two proofs were necessary. Neither was the product. The product is Gajumaru.

---

## Sources

- [[summary-video-bitcoin-proof-of-concept]] — Craig, Greg, Ulf on Bitcoin's architectural limitations and Gajumaru's design rationale
- [[summary-unwhitepaper]] — Full Un-White Paper: TEA trilemma, Garden of Eden, specific project forensics, Layer 2 mathematics
- [[summary-qpq-2025-review]] — QPQ Year in Review 2025: efficiency figures, Groot launch context

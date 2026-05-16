---
type: source
title: "Gajumaru | Bitcoin is a Proof of Concept"
slug: summary-video-bitcoin-proof-of-concept
source_file: raw/transcripts/gajumaru-bitcoin-proof-of-concept.md
author: "Gregory Chew, Craig Everett, Ulf Wiger"
date_published: 2025-01-01
date_ingested: 2026-05-16
key_claims:
  - Bitcoin is explicitly a proof of concept that proved the idea but was never evolved past it
  - Austrian economics basis: "real money" (Mises/Hayek) — gold's ungovernability as the ideal
  - 2% inflation target traces to historical gold supply increasing ~2%/year through mining
  - Bitcoin-NG was proposed to separate consensus from transaction throughput; Bitcoin community rejected it (FOMO economics)
  - Bitcoin blocks used only ~1MB of 4MB limit; practical throughput 3–7 TPS; 24h+ waits at minimum fee
  - Bitcoin confirmation time spikes (July 2024 data): average 57 min "low" → 2,500 min → 11,000 min peaks
  - Bitcoin cost per transaction (mining rewards + fees): ~$100+ at 2024/2025 prices
  - Bitcoin ungovernability = hard fork requires convincing critical mass of ALL miners = "categorically impossible" for large changes
  - Satoshi anonymity = lack of trusted leadership = community could not vest trust in a change-driver
  - Lightning Network launched 2018; currently ~3 TPS total — "most successful state channel in world" but should be far more
  - Lightning "dangerous just": no channel top-up without close+reopen; routing explosively complex; normal people cannot use it without intermediation
  - Lightning intermediation reintroduces trust without oversight — "just use the bank"
  - Lightning liquidity rebalancing requires on-chain operations → "glass cannon problem"
  - Runes = fungible tokens via UTXO abuse; at scale, kills the underlying chain
  - Ordinals = NFTs via Satoshi inscription; 3.9MB limit; $100k+ block fee competition; no garbage collection
  - Bitcoin OS = layer 2 rollups with ZK proofs; Bitcoin can ONLY store hashes, cannot validate proofs
  - Groot definition: "uncontrolled shared ledger where history cannot be changed, resistant to censorship, no operator to trust — Bitcoin made tens of thousands of times more efficient with native smart contracts and native virtual machines"
  - True killer feature of Gajumaru: not efficiency but composable AC framework for every regulatory/national/industry environment
  - 1DLT = earlier QPQ project (fatally flawed, but ahead of its time); concept similar to Aeternity Hyperchains
  - Greg at "Point0 conference": tried to raise hand — technology already built; Global Layer 1 wanted exactly what Gajumaru had
  - Gajumaru chain: 300 TPS base layer; 3-second microblock confirmation
  - "If you're doing transactions primarily in Groot 50 years from now, you're doing it wrong"
  - Gajumaru state channels BOLT protocol names copied from Lightning as template (not the on-chain limitations)
  - ACs = "ideal multi-party state channel" — localize state channels to specific problems without global routing
  - XRP, Solana, BNB, Cardano = all proof of stake = "clicking heels together three times"
  - Governance = infrastructure, not resource; debasing = failure as currency
  - South Sea bubble analogy: real underlying premise but rats now selling wax as cheese
  - Market despair: people entering crypto consciously as casino ("Joe Truck Driver" losing hope narrative)
  - Dogecoin = $37.6B joke; those who didn't take it as a joke are the punchline
  - "The answer must be Bitcoin" framing drives all dirty hacks (Lightning, Runes, Ordinals, Bitcoin OS)
  - QPQ 18-month plan: rapid iteration then fully open/public; "trust us during bootstrap because it's clearly in our interest"
  - Greg on stage in Liechtenstein: "No matter how nice you think anybody in QPQ is, you can never let us have keys to the kingdom"
related: [[groot]], [[associate-chains]], [[state-channels]], [[protected-mining]], [[tea-trilemma]], [[bitcoin-ng]], [[gaju-token]], [[internet-of-economics]]
confidence: high
---

# Summary: Gajumaru | Bitcoin is a Proof of Concept

The longest video in the series — a 3,400-line transcript of an extended discussion between Greg, Craig, and Ulf. It covers why Bitcoin is permanently limited by its initial design, why all attempts to extend it are dirty hacks, and why Gajumaru's architecture is the correct solution.

---

## Austrian Economics Foundation

The conversation opens with the monetary theory underpinning Gajumaru's design: the Austrian economics tradition (Mises, Hayek) that values "real money" — a commodity that cannot be artificially produced and whose supply is governed only by physics, not politics. Gold's properties are enumerated: fungible, divisible, portable, verifiable, ungovernable.

**The 2% inflation target**: the conventional 2% central bank target traces to the historical observation that gold supplies grew by roughly 2% per year through mining. Modern central banks inherited this target as the "natural" monetary growth rate, stripped of the discipline gold provided.

---

## Bitcoin as Q-DOS

Bitcoin is positioned as the Q-DOS of blockchain: a hastily assembled proof-of-concept that happened to work well enough to dominate, but that is now locked in by its own limitations.

The critical difference from the PC analogy: PC limitations were local (each user dealt with their own machine's constraints). Bitcoin's limitations are **global**: if Bitcoin is to serve as a retail payment network, every person on earth is affected by the same 3–7 TPS ceiling. The limitations are not personal inconveniences — they are structural caps on a global system.

---

## Why Bitcoin Cannot Evolve

Bitcoin's ungovernability — the property that makes it trustworthy as a store of value — is also the property that makes it impossible to upgrade:

- A hard fork requires convincing a **critical mass of all mining nodes** to upgrade simultaneously
- Miners who don't fully understand the change (most of them) will resist out of rational fear
- There is no trusted leadership to propose and drive consensus: Satoshi's anonymity meant no one could vest trust in a change-driver through track record
- The result: even good ideas (like Bitcoin-NG) were rejected because the community uses FOMO economics — they don't want to risk what's working
- Craig: it is "categorically impossible" to get the bulk of Bitcoin participants to agree to any large architectural change

Ethereum, by contrast, had a known founder and foundation, which allowed far faster innovation — though Craig notes this also "corrupted" the chain in other ways.

---

## The Dirty Hacks

Four Bitcoin extensions are characterised as "dirty hacks" — workarounds that create a new capability by abusing an unintended feature of the existing architecture, without ever solving the underlying problem:

### Lightning Network
- Launched 2018; currently ~3 TPS (far below what it "should" be given Bitcoin's dominance)
- Operates via multisig UTXO abuse to simulate state channels
- **No channel top-up**: to add funds to an existing channel you must close and reopen it (two full on-chain transactions at Bitcoin's cost and latency)
- **Routing complexity**: managing multi-hop routing without intermediation is expert-level work; normal people cannot do it
- **Glass cannon problem**: liquidity is static; rebalancing requires on-chain operations that would swamp the underlying Bitcoin network
- **Intermediation reintroduces trust**: custodial Lightning = trust the node operator without regulatory oversight = "just use the bank"
- The BOLT protocol (Lightning's standard) was used as a naming template for Gajumaru state channels — QPQ took the concept but not the on-chain limitations

### Runes
- Fungible tokens via UTXO abuse
- Less flexible than smart contracts (Bitcoin has no idea what is being done to it)
- At any meaningful scale, floods the Bitcoin network and makes fees prohibitive

### Ordinals
- NFTs by stamping a single Satoshi with up to 3.9MB of data
- Cost: competing for block space against $100k+ aggregate block fees
- No garbage collection or data lifetime management — blockchain storage grows forever

### Bitcoin OS
- Layer 2 rollup framework; runs EVM/Solana/Rust contracts off-chain
- Commits ZK proof **hashes** to Bitcoin — Bitcoin cannot actually validate the proof, only store the hash
- Ethereum can validate ZK proofs natively; Bitcoin cannot
- Craig: "What does it bring to the table other than, hey, you can do this with Bitcoin too — slower and more expensive?"

The Juicero analogy is applied: expensive engineering producing a product that is strictly worse than simpler alternatives, driven by the premise that "the answer must be Bitcoin."

---

## Bitcoin Confirmation Spikes (2024 Data)

Ulf presents data from blockchain.com:
- Average transaction wait time: 57 minutes at the "low"
- Spike to **2,500 minutes** (regular occurrence)
- Spike to **11,000 minutes** (July 2024)

This is not ancient history — it is the live 2024 Bitcoin network.

---

## Groot's Correct Architecture

**Groot definition** (Greg's articulation):
> "An uncontrolled shared ledger where the history cannot be changed, that is resistant to censorship. There is no operator that you have to trust."

Groot is Bitcoin made tens of thousands of times more efficient, with **native smart contracts** (Sophia) and a **native virtual machine** (FATE).

**300 TPS base layer** — 100× Bitcoin — sufficient for coffee-shop payment without any layer 2. The 3-second microblock is not a 100% finality guarantee, but for low-value transactions it is perfectly adequate (no one scans a $1 note, but they do scan a $100 note).

**The "50-year" principle**: *"If you're doing transactions primarily in Groot 50 years from now, you're doing it wrong."* The base layer is not the destination — it is the settlement backbone. State channels and ACs are the right place for volume.

---

## Associate Chains as Killer Feature

Craig identifies the AC design as the real breakthrough:
> "Instead of having to do dirty hacks, you can foster very deliberate innovation within an AC. That AC can be the peak of a whole tree of its own stuff."

Ulf adds the regulatory insight: AC design allows a **known operator** to register with a regulatory body and operate a compliant chain in a specific domain — without requiring the whole Gajumaru community to agree to that regulatory structure.

The two factors Craig identifies as driving long-term success:
1. Innovation without whole-network consensus requirement
2. Regulatory compliance path for specific use cases

**ACs as ideal multi-party state channels**: Craig and Ulf had previously considered multi-party state channels (rejected as too complex even for 2 parties). ACs serve the function conceptually — define an insanely fast state channel context within the broader Gajumaru framework.

### Earlier Precursors
- **1DLT**: earlier QPQ project, "fatally flawed" at the time but ahead of everything else; composable blockchain infrastructure for industries/nation states
- **Aeternity Hyperchains**: similar concept Ulf and Craig had studied; precursor thinking

---

## Self-Referential vs Dollar-Pegged

A key theme woven through the conversation (and directly linked to the stablecoins discussion): Gaju is designed to be **self-referential** — its purchasing power is defined by real goods, not by dollar conversion. The London tube analogy: people pay in pounds and don't mentally convert to dollars. Stablecoins are perpetually dollar-defined and therefore not a true independent currency.

---

## South Sea Bubble / Market Despair

Craig introduces the South Sea Bubble (1711) as an analogy: a *real* premise (foreign trade was going to be transformative) corrupted by rampant speculation and fraud. Bitcoin and Ethereum represent the real premise; the current crypto landscape is the fraud layer on top.

The "market despair" dimension is new: Craig observes that many people now enter crypto **consciously knowing it's a casino** — because they see no legitimate path forward in the conventional economy (the "Joe Truck Driver" narrative). This is a darker dynamic than traditional Ponzi dynamics.

---

## QPQ's Trust Model and 18-Month Window

Greg explicitly addresses the trust question:
> "No matter how nice you think anybody in QPQ is, you can never let us have keys to the kingdom. Our whole point is we will burn the keys to the kingdom."

He draws a distinction: during the 18-month bootstrap period, QPQ is a trustworthy broker because it is "clearly in our interest to try to be honest brokers until at least we've captured your attention." After that window, incentives change and the community should not trust QPQ governance any more than any other participant.

This is the explicit design rationale for the temporary nature of whitelist mining and the locked minting function.

---

## On Other Cryptocurrencies

- **XRP, Solana, BNB, Cardano**: all proof-of-stake; Craig frames as "created by clicking one's heels together three times and saying I will create a cryptocurrency"
- **Governance = infrastructure**: any governed chain is debasing and controllable — not a resource, not a currency
- **Dogecoin**: started as a joke; $37.6B market cap; the joke is on those who didn't treat it as one
- **Bitcoin**: the only chain that has demonstrated it can be a currency — but locked in by its initial design and the culture around it

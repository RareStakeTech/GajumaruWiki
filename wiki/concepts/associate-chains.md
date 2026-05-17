---
type: concept
title: "Associate Chains"
aliases: [associate-chain, multi-chain, interoperability]
sources: [[summary-qpq-2025-review]], [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-qpq-wiki-gajumaru]], [[summary-unwhitepaper]], [[summary-blog-in-space]], [[summary-video-bitcoin-proof-of-concept]]
related: [[gajumaru-architecture]], [[groot]], [[ripa-model]], [[ltin]], [[craig]], [[dimitar]], [[peter]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: core-protocol
cluster_role: member
---

# Associate Chains

Associate Chains are independent blockchains that connect natively to Gajumaru's [[groot]] resource layer. They form the "Infrastructure" layer in the [[ripa-model]].

## Key Properties
- **Independent**: Each Associate Chain can be created, designed, and governed independently of QPQ AG and of each other.
- **Native interoperability**: All Associate Chains interoperate with each other and with Groot natively.
- **No bridges**: Inter-chain communication requires no bridging protocols or third-party trust dependencies.
- **Permissionless**: Any party can create an Associate Chain after MainNet launch.
- **NOT a Layer 2**: Associate Chains are aware of Groot and Groot is aware of them. Groot's role is to facilitate their operation with one another — not to validate it. This is a peer relationship, not a hierarchical dependency. Source: [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]].

## Technical Implementation (Dimitar)

Each Associate Chain has:
- Its own **independent database**
- Its own **independent CPU space** (transaction throughput isolation)
- Its own **block size** — configurable per chain
- Its own **consensus** — PoW, PoS, Proof of Authority, or any suitable model
- Freedom to **enable new functionalities** as needed by the business case
- May operate using **any blockchain platform or even non-blockchain infrastructure** — provided it complies with inter-chain protocols for fund transfers. Source: [[summary-qpq-wiki-gajumaru]]

**Transaction isolation:** If one Associate Chain carries very high transaction volume (e.g., a viral application), that load is completely isolated — it cannot congest other Associate Chains or affect their throughput or fees. This directly solves the Ethereum problem where viral products lock up the entire network.

## Account Universality and Cross-Chain Transfers (Craig)

- **A Gaju account is valid on every chain** — demanded by the ecosystem design
- Each Associate Chain treats the Groot mint like a local bank treats a central bank
- Launching an Associate Chain requires "checking out" Gajus from the mint to the new chain
- Gajus are transferable between associate chains and between user accounts cross-chain

## Two Paths to an Associate Chain

1. **Performance path:** Start on Groot (unregulated space) → if successful, spawn an Associate Chain to own your transaction throughput
2. **Compliance path:** Move to an Associate Chain, add KYC/custom consensus for local jurisdiction → Gajus treated as foreign currency not under regulatory control

## Real-World Use Case: Central Bank Consultation

A central bank consulted by QPQ confirmed needing different chain configurations for different transaction types:
- **High-speed chain** — retail payments (coffee purchases)
- **High-security chain** — interbank settlements, end-of-day settlements

This validates the multi-chain design against real institutional requirements.

## Deployment Status
Architecture validated by [[ltin]] selection before MainNet. Full Associate Chain capability delivered at **MainNet (April 6/7 2026)**.

## First Associate Chain
[[ltin]] — Liechtenstein Trust Integrity Network — is the first sovereign Associate Chain deployment, planned for Q2/Q3/Q4 2026.

## Jurisdictional Scaling

The Un-White Paper frames Associate Chains in terms of global jurisdictional coverage:

- **260 national jurisdictions** × Groot's 1,846,200× efficiency = approximately **144 million×** more efficient than Bitcoin at global scale
- No other architecture comes close: Polkadot is limited to **100 cores** (parachains), Cosmos creates fragmentation without shared security, Ethereum L2s share constrained blob space with hard architectural ceilings
- Gajumaru's Associate Chain model has **no architectural ceiling** — chains are added without degrading the base layer, and each chain has fully isolated throughput

This means Gajumaru scales to every national regulatory regime simultaneously, each with its own chain parameters, governance model, and compliance layer — all sharing a single governance-free resource layer.

Source: [[summary-unwhitepaper]]

## Significance
The no-bridge, native interoperability design distinguishes Gajumaru from most multi-chain ecosystems (e.g., Cosmos IBC, Polkadot bridges, Ethereum L2s), where bridges represent systemic risk and trust assumptions.

## Associate Chains Cooperate to Improve Mint Finality

Craig (attributing to Dimitar): "The associate chains will also cooperate to improve the finality as we call it on the mint."

The mechanism is not yet documented — Craig defers detail to a later video. This suggests Associate Chains play an active security role for [[groot]], not merely consuming the mint as passive clients.

> [!open_question]
> How exactly do Associate Chains cooperate to improve Groot finality? Source promises more detail in a follow-up video. See [[summary-the-gajumaru-an-actual-working-blockchain]].

## Cross-Chain Money Transfer Mechanism

Money moves between chains via an explicit on-chain transfer, not a bridge:

> "Your account on Groot is the same as your account on an associate chain. So the way that you get money over there is you send money to yourself. You do a spend transaction from you to you on a different chain. And every keyblock height is an opportunity for those transactions to go both ways."

**Cross-chain routing path:**
- From AC A to AC B: the nearest common parent is Groot
- The path is: AC A → Groot → AC B
- Groot is aware of all subordinate chains and enforces the cap

**The Hard Cap (anti-inflation guarantee):**
> "More money can never be taken out of an associate chain than was put in. So you have a hard cap on the circulation of the money supply."

This constraint is enforced by Groot at every keyblock height. An AC can implement its own native currency but cannot print Gajus it does not have.

**No bailout mechanism:**
> "If an associate chain allows sneaky stuff to happen and they're inventing and blowing up money or whatever, if people start evacuating from that chain, that whole thing collapses and there's no bailout mechanism whatsoever. The funny money problem that you've got in the too big to fail banks — that cannot occur in the context of the Gaju."

Source: [[summary-how-gajumaru-addresses-scaling]]

## Why Associate Chains Can Be Fast

Associate chains solve the adversarial peer-selection problem by using **known, legally accountable operators**:

> "When you get to associate chains, you now have operators and they're known which means you don't have the peer selection, you don't have the leader selection problem anymore. You have known actors, they're under legal penalty if they screw up."

This is why ACs can use Proof of Stake or Proof of Authority and achieve "phenomenally high speeds" — the PoW slowness exists specifically because of the adversarial trustless leader election problem, which ACs eliminate.

**Network total throughput:** 10,000 associate chains × 300 TPS = **3,000,000 TPS** combined global network throughput (Craig Everett's explicit calculation).

Source: [[summary-how-gajumaru-addresses-scaling]]

## Technical Architecture — Additional Detail (Ulf Wiger)

**No ZK rollups by design:**
> "Our assumption is that the permissionless chain cannot be put in a position to know too much about the associate chain. If the idea is that the responsibility and the regulatory compliance lies with those who operate the associate chain."

Requiring AC operators to submit ZK proofs to Groot would make adoption harder without adding commercial utility. The operators are identifiable and legally on the hook; mathematical proof compliance on the base layer is unnecessary and burdensome.

**Atomic currency exchange:**
Because Gaju is the universal transit currency, a New Zealand dollar → Gaju → Canadian dollar exchange can occur within **a single transactional block** — "the transaction could be almost atomic."

Source: [[summary-blockchain-governance-associate-chains]]

## Decentralisation vs Reality — Ulf Wiger

Ulf Wiger (CTO) articulates the practical tension between full decentralisation and real-world regulatory requirements with a personal anecdote:

> A Swedish bank accepted a cryptocurrency payment from Ulf but told him: "We cannot advise you to run your business entirely in crypto." Regulatory reporting obligations, compliance risk, and AML requirements are real constraints — even for enthusiasts.

The architectural response is not to fight regulation but to structure it correctly:

> "PoW untamperable core + regulated pockets on top."

- **Groot (base layer):** Proof-of-Work, governance-free, permissionless — untamperable by design. No entity can regulate this layer without defeating the protocol.
- **Associate Chains (infrastructure layer):** Can implement PoS, PoA, KYC, compliance requirements — each chain configures for its jurisdiction. These are the "regulated pockets."

This maps directly to the **RIPA model**: Resource (Groot) → Infrastructure (ACs) → Platform → Application. The RIPA acronym is explicitly cited in this context.

Regulation at the infrastructure layer is appropriate — AC operators are identifiable, legally accountable, and benefit from regulatory clarity. Regulating the resource layer would destroy trustlessness.

Source: [[summary-web-machine-economy]]

## Competitive Chain Spawning (Market Discipline)

If an Associate Chain gets overloaded or fails to serve its use case, users can spawn a competing chain. Because Gajus are cross-chain transferable and no chain-specific currency lock-in exists, resources flow to the better chain naturally. This embeds market discipline structurally in the architecture — no single Associate Chain can become an inescapable monopoly.

## Institutional Validation: GL1 and the Consortium Problem

The Un-White Paper explicitly references the **Global Layer 1 (GL1)** initiative — a consortium led by the **Monetary Authority of Singapore** — as institutional validation for Gajumaru's Master Associate Chain design.

**GL1 participants:** Standard Chartered, Citi, JPMorgan, MUFG, BNY, Societe Generale-FORGE, Euroclear

> "This consortium operates a Master Associate Chain. This is their GL1."

**Why prior consortia failed:**
> "Previous attempts at this, including R3's Corda and the Regulated Liability Network, failed because the governance question proved unanswerable."

Gajumaru's answer: the governance question is unanswerable for a base layer, so Groot provides a governance-free foundation below all institutional infrastructure. Each institution's Associate Chain can have whatever governance it requires, while sharing a common trustless resource layer.

**The institutional advantage inversion:**
> "The institutions best positioned to thrive are, ironically, the very institutions that today profit from the system the Gajumaru changes. They have the expertise, the regulatory standing, the client relationships, and the institutional knowledge. What they lack is the connective tissue that lets them deploy those assets globally without surrendering sovereignty to a competitor's platform or a consortium they do not control."

Source: [[summary-unwhitepaper]]

## ACs as Ideal Multi-Party State Channels

From [[summary-video-bitcoin-proof-of-concept]], Craig:

> "Associate chains could sort of be thought of as the ideal multi-party state channel — within which you can actually define insanely fast state channels on top of that."

QPQ considered multi-party state channels and rejected them as too complex (even 2-party state channels have enough edge cases; adding multi-party dispute resolution multiplies the problem). Associate Chains serve the conceptual role — each AC creates a defined context within which localized state channels can run, without global routing or cross-AC complexity.

**Layering principle:** "You got these layers of different solutions you can craft at each level and you can localize them to a specific problem. So you don't have to handle all of the online transactions for a shop in South America with the Tokyo subway."

## ACs Enable Innovation Without Whole-Network Consensus

Craig in [[summary-video-bitcoin-proof-of-concept]]:

> "Instead of having to do dirty hacks, you can foster very deliberate innovation within an AC. That AC can be the peak of a whole tree of its own stuff, which can do whatever it wants within the general context of Gajumaru."

The AC design is identified as the **true killer feature** of Gajumaru — not just efficiency, but the ability for any regulatory environment, national context, or industry to implement exactly the rules it requires without requiring the whole network to agree:

> "Every single type of regulatory environment, national environment, industry environment, whatever you want to call it — they're all trust markets of different types. And within that, there will be subsets of trust markets, each of which needs a different model."

Ulf's contribution (noted by Greg): the AC design "kind of lends itself to working with regulators because you could have a known operator and say, 'hey regulatory body — can I register to run a regulated chain in this space or not?'"

The two success factors Craig identifies:
1. Innovation without whole-network consensus
2. Regulatory compliance path for specific use cases

## 1DLT Precursor

Earlier QPQ project: **1DLT** (One DLT). Core concept: a composable blockchain infrastructure for specific industries or nation states — any virtual machine, any programmatic language, multiple chains fused together. Greg describes it as "fatally flawed but way ahead of everything else at the time." The Aeternity **Hyperchains** concept was a parallel development that Ulf and Craig were aware of. Both preceded the Associate Chains design.

## See Also

- [[gajumaru-vs-ethereum-two-proofs]] — Synthesis: why Ethereum's L2 approach fails and how ACs solve it structurally

## Sources
[[summary-qpq-2025-review]], [[summary-why-the-gajumaru-and-how-it-works]], [[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-unwhitepaper]], [[summary-video-bitcoin-proof-of-concept]]

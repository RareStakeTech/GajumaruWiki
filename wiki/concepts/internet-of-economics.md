---
type: concept
title: "Internet of Economics"
aliases: [internet-of-economics, economic-internet, transactional-internet]
sources: [[summary-unwhitepaper]], [[summary-web-machine-economy]], [[summary-economics-social]], [[summary-internet-of-economics-grids-mythos]]
related: [[groot]], [[grids]], [[ripa-model]], [[gajumaru-architecture]], [[tea-trilemma]], [[associate-chains]]
created: 2026-05-16
updated: 2026-05-16
confidence: high
cluster: core-protocol
cluster_role: member
---

# Internet of Economics

QPQ's central framing for Gajumaru: the Internet of Data (HTTP/TCP/IP — the information web) and the **Internet of Economics** (a distinct, sovereign transactional layer) must be architecturally separate.

> "GRIDS is fundamental to the internet of economics, establishing a distinct transactional protocol from the internet of data — where we find the information that leads to our transactional choices."

## The Distinction

| Internet of Data | Internet of Economics |
|-----------------|----------------------|
| HTTP/TCP/IP — optimised for information | GRIDS/Gajumaru — optimised for transactions |
| Identity = credentials (username, password, OAuth token) | Identity = keypair ownership |
| Value transfer = bank API call, card network | Value transfer = on-chain or state channel transaction |
| Privacy = legal obligation + breach risk | Privacy = architectural property (nothing to steal) |
| Governed infrastructure at every layer | Governance-free resource layer at the base |

The web was built to share information. Trying to move money over it — via card networks, SWIFT, ACH, PayPal — is retrofitting an economic layer onto infrastructure never designed for it. Every inefficiency, every intermediary, every fee, and every censorship point flows from this original architectural mistake.

## Three Restorations

The Un-White Paper frames the Internet of Economics as delivering three restorations to participants:

1. **Money** — Finite, holdable, undebaseable, transferable without permission. Sound money as a reference point that disciplines all derivative instruments built on top of it.

2. **Assets** — Direct ownership via cryptographic keys. No intermediary can revoke, freeze, or confiscate without defeating the cryptography itself. Title is provable, transferable, and independent of any institutional relationship.

3. **Data** — GRIDS sends **payment confirmation**, not identity. Merchants receive proof that payment occurred; they never receive the payer's keys, address history, or personal data. The economic transaction is authenticated without surrendering information about the transacting party.

Economic emancipation = not the absence of governance, but the presence of **genuine choice**.

> "We are not anti-governance. We are anti-monopoly-on-governance."

## The Architectural Requirement

For a transactional internet to function, the base resource layer must pass a single test:

> "Does this allow us to trust the message rather than the messenger, securely at scale?"

Every legitimate blockchain application flows from this. An internet of economics that can be frozen, censored, or captured is not an internet of economics — it is a faster version of the existing financial system with added jargon. The core test is not performance, not compliance, not interoperability — it is **trustlessness at scale**.

The resource layer that passes this test:
- Requires no operator (no one can say no)
- Uses only algorithmic consensus
- Is permissionlessly accessible
- Has a governance-free foundation

## The "Only One Protocol" Claim

QPQ argues that the structure of the problem admits only one correct answer:

- A resource layer with governance is infrastructure, not resource (the Garden of Eden problem)
- Infrastructure requires accountability to someone — accountability creates a capture point
- A single global resource layer cannot be multiple competing protocols — network effects converge
- Therefore: one governance-free, trustless, proof-of-work resource layer

Gajumaru's claim is not "we are better than competitors" but "we are the only architecture that can serve this function." All others either have governance (and are therefore infrastructure, not resource) or lack the performance characteristics to function at global scale.

> "Bitcoin is Newcomen. Not a failure. A proof — genuine, necessary, and insufficient to reach what it demonstrated was possible. The Gajumaru is the engine that can."

## Separation of Transactional and Informational Layers

The practical consequence of this separation:

- A user browses a marketplace (Internet of Data — HTTP, server, credentials)
- They decide to buy something (the informational layer informed the economic choice)
- They pay via GRIDS (Internet of Economics — wallet, keypair, on-chain confirmation)

These two events occur on architecturally separate systems. The merchant's website never holds the buyer's payment credentials. The Gajumaru blockchain doesn't care what content lives on the web. Neither layer has authority over the other.

GRIDS enforces this separation by design: the dead-drop protocol routes the signing challenge from the web to the wallet without requiring the wallet to be embedded in the browser.

## The Machine Economy

The machine economy is the near-term manifestation of the Internet of Economics: autonomous agents (AI models, vehicles, IoT devices) transacting continuously without human intermediation.

> "The machine economy is there, it's about to be unbridled, but it doesn't have the economic base upon which to operate."

Evidence of readiness: "2 million people using Open Claw" (and growing) — autonomous agent usage is already at scale in informational contexts. The missing layer is the economic base.

**Why current infrastructure fails machines:**
- Machines cannot hold bank accounts or use credit cards
- Payment processors impose minimum costs (~$0.30 + 3%) that make micropayments uneconomical
- Subscription SaaS forces flat-rate pricing on variable usage
- Machines cannot wait for T+2 or even 10-second settlement

**The only path:**

> "The only way there is through Gajumaru Groot, state channels, GRIDS."

All three layers are required:
- **Groot:** governance-free resource layer — no institutional permission required
- **State Channels:** A2A and A2P patterns; instant, near-zero-cost micropayments
- **GRIDS:** authenticated instruction dispatch; machines can interact with services without credential databases

See [[state-channels]] for the A2P/A2A architecture, and [[price-signal-economy]] for the economic model.

## The Digitisation vs Digitalisation Distinction

> "Digitization of the corporatist model → digitalization + capitalist model that machines will actually use."

- **Digitisation:** putting existing processes (bank accounts, contracts, settlements) onto digital rails while keeping institutional intermediaries
- **Digitalisation:** re-architecting from first principles for an agent-driven, permission-free digital economy

The Internet of Economics is a digitalisation project, not a digitisation project.

## On Zero Knowledge Proofs

> "Anybody who's ever talked about zero knowledge proofs from a ZKP lab knows the mathematical impossibility of what they're doing."

QPQ's position: ZKP-based scaling and privacy solutions (Ethereum rollups, Zcash-style privacy) face fundamental mathematical constraints that their proponents understand but do not publicly acknowledge. This is a critique of the ZKP industry's claims, not ZKP mathematics itself.

## Alternative Economy → Default Economy

The sequencing of adoption (Greg Chew):

> "Get as many people as possible engaged — not just as a currency but as an alternative economy at first and a default economy in time."

Phase 1: Gajumaru as an opt-in alternative alongside fiat.
Phase 2: Gajumaru as the baseline for economic activity globally.

The critique of the existing crypto industry: most projects are "chasing short-term money and hoarding" rather than building infrastructure for a functioning alternative economy.

## Web 3 — Simple Definition (Greg)

> "Web 3 is the world in which you do not give the world your information. Instead, you pay for services, utility as you use it, as you find it, as you use it."

This reframes the entire Web 3 discourse: not NFTs, not DAOs, not token speculation. Web 3 = micropayment-native, data-sovereign, pay-as-you-go services. The current web (Web 2) is: give your data in exchange for free services. Web 3 inverts this.

**Price signals on broadcasting:** Greg's argument that the economic model should be **pay to broadcast**, not monetize attention:

> "If you charged a half a penny for every email sent, spam would be impossible to do."

At even tiny per-action costs:
- Email spam: economically unviable at scale
- Bot farms: destroyed (see [[price-signal-economy]])
- AI-generated junk content: uneconomical to mass-generate

On-chain message storage: fees are proportional to storage duration. Wanting a message stored on-chain for 50 years = "quite a big fee." This disciplines data permanence to genuine economic demand.

Source: [[summary-internet-of-economics-grids-mythos]]

## No Global Economic Resource Layer Since Hunter-Gatherers

Greg's historical framing (also in the NPM transcript):

> "Creating a new global economy, an open global economy for the whole world to use with a singular mint that you do not have to trust, that cannot deflate your work."

> "To create a global economic resource layer which we really have not had since the days that we were hunter-gatherers and we negotiated the spaces between us through violence."

The claim: every form of money since hunter-gatherer economies has been controlled by some entity (tribe, king, central bank). Gajumaru is the first architecture since then in which the resource layer is ungoverned and uncontrolled by any party.

Source: [[summary-npm-supply-chain-hack]]

## Sources
[[summary-unwhitepaper]], [[summary-web-machine-economy]], [[summary-economics-social]], [[summary-internet-of-economics-grids-mythos]], [[summary-npm-supply-chain-hack]]

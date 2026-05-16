---
type: concept
title: "Quantum Resistance"
aliases: [quantum-resistant, post-quantum, ml-dsa, pqc, post-quantum-cryptography]
sources: [[summary-blog-quantum-resistance]], [[summary-unwhitepaper]], [[summary-quantum-ai-machine-economy]], [[summary-gajumaru-channel-shorts]], [[summary-quantum-calm]]
related: [[groot]], [[sophia-fate]], [[grids]], [[gajumaru-architecture]]
created: 2026-05-16
updated: 2026-05-16
confidence: high
cluster: core-protocol
cluster_role: member
---

# Quantum Resistance

Gajumaru's approach to post-quantum cryptography is pre-emptive: integrate NIST-standardised quantum-resistant signing algorithms before quantum computers can threaten the network, using the existing **Generalised Accounts (GA)** mechanism as the upgrade path.

## Current Security Posture

Gajumaru currently uses **Curve25519** for account signing. This is described as "practically impossible to brute-force with currently existing computing hardware." No change is required in the near term.

## Quantum Threat Timeline

QPQ takes a measured, non-alarmist position:

| Data Point | Detail |
|-----------|--------|
| Current largest quantum systems | ~133 physical qubits |
| Required to break Curve25519 | Tens to hundreds of **millions** of error-corrected qubits |
| Realistic timeline | 10–20 years minimum, requiring substantial breakthroughs |
| Expert probability estimate | Seth Lloyd (physicist): 50–50 probability large-scale quantum computation may never materialise |

**Conclusion from QPQ:** The quantum threat is real but not imminent. Preparation now — not crisis response later.

## ML-DSA Integration Plan

QPQ will integrate all three NIST FIPS 204 lattice-based signature algorithms via the **Sophia `Crypto` library**:

| Algorithm | NIST Security Category | Equivalent Security |
|-----------|----------------------|---------------------|
| ML-DSA-44 | Category 2 | — |
| ML-DSA-65 | Category 3 | Breaking 192-bit AES |
| ML-DSA-87 | Category 5 | — |

**Target:** Available by Groot MainNet Launch 2026. All three algorithms will be accessible from Sophia smart contracts.

**Performance cost:** ML-DSA verification ≈ **1.5×–2.2× standard Curve25519**. On-chain cost: ~0.00000015 Gaju per transaction — negligible in absolute terms.

## Upgrade Mechanism: Generalised Accounts (GA)

The near-term upgrade path uses **Generalised Accounts** — an existing Gajumaru protocol feature allowing accounts to swap their authentication method without changing their identifier.

- A GA-contract implementing ML-DSA-65 (or -44/-87) can be deployed
- Users who want quantum resistance migrate their account to use the GA contract
- **The account address (public key) does not change** — no coordination required, no re-issuing of addresses
- This is not a hard fork; it is opt-in per account

This is the "mechanism" for the quantum resistance transition referenced throughout QPQ documentation.

## Updated Threat Timeline (2026 Q1)

Subsequent QPQ discussion (Ulf, on the Quantum/AI/Machine Economy video) updated the timeline with two developments:

- **Google's theoretical optimizations** to Shor's algorithm reduce qubit requirements significantly
- **Neutral atom systems** make tens of thousands of physical qubits realistically achievable

The updated estimate:
- **Mid-2030s** for the first quantum computer that could attack a single blockchain keypair
- Such an attack would require approximately **10 days** of dedicated compute against one target
- Economic threshold: attack only sensible if the account holds **$100,000+** in value
- Opportunity cost: quantum computer time has higher-value uses (protein folding, chemistry, drug design)

Net: the threat moved "an order of magnitude closer" but remains decades away and economically marginal even when achieved.

Source: [[summary-quantum-ai-machine-economy]]

## Proposed A1/A2/A3 Tiered Account Categories (Craig — pending review)

Craig has proposed extending Gajumaru's account model with tiered security categories. Status: pending review with Dimitar and Ulf before publication.

| Tier | Cryptography | ID format | Properties |
|------|-------------|-----------|------------|
| AK (current) | Curve25519 (ECC) | Public key visible | Default; ECC's full feature set available |
| **A1** | Curve25519 (ECC) | **Hash of public key** | No attack surface until first activity; Bitcoin-style pattern |
| **A2** | ML-DSA-65 | Hash | ~3KB signatures, ~2KB public keys; bloat tradeoff |
| **A3** | ML-DSA-87 (implied) | Hash | Highest-strength; heaviest |

**A1 tradeoff:** Cannot use ECC's pre-shared-key features (e.g., encrypting messages to a recipient whose public key you know in advance) — because the public key is hidden until the first signing operation. Acceptable for accounts used as value stores rather than message endpoints.

**A2 tradeoff:** Chain bloat — larger signatures and public keys cost more storage and bandwidth. Use selectively for high-value accounts, not for daily transactions.

The tiered model gives users explicit choice over the security/efficiency tradeoff per account, rather than forcing a single global policy.

Source: [[summary-quantum-ai-machine-economy]]

## Multi-Account Best Practice

Independent of quantum threat (Ulf):

> "If you have lots of crypto, you spread it out over several accounts. You have some accounts with keys that never touch the internet that you don't have in your mobile wallet — just to minimize the risk that you will lose those keys. And then you have some accounts that have a limited amount of money in them that you use for your daily work."

Quantum-resistance does not change this advice — it adds an additional optional layer (A2/A3 accounts) for high-value vaults while daily-use accounts can remain on standard ECC.

## Long-Term Direction

Future Gajumaru versions may implement **native quantum-resistant authentication** — mapping GA-contract behaviour to native protocol functions, potentially via abstract data types. This would make quantum resistance a first-class protocol feature rather than a contract-level add-on.

## Security Philosophy

QPQ's approach reflects the broader Gajumaru zero-dependency philosophy: build security into the architecture proactively rather than patching it in response to a crisis. The Curve25519 → ML-DSA migration path is designed and ready; it does not require a governance vote or emergency hard fork.

Source: [[summary-blog-quantum-resistance]]

## Hype Calibration

QPQ draws an explicit parallel between LLM hype and quantum hype:

> "Large language models. We're being told that they're perfect. They can do everything. In fact, we know from testing them that they're extraordinarily limited and they're stuck with hallucination."

> "We get on to quantum computing and we're being told that the world as we know it is going to change immediately, but it isn't."

Both are real technologies with real futures — but both are presented in public discourse as imminent world-changers when the reality is decades away. QPQ's position: reason from evidence, not headlines.

Source: [[summary-quantum-calm]]

## Sources
[[summary-blog-quantum-resistance]], [[summary-unwhitepaper]], [[summary-quantum-ai-machine-economy]], [[summary-quantum-calm]]

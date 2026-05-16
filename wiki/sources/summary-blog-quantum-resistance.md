---
type: source
title: "Quantum Resistance on Gajumaru Blockchain (gajumaru.io, Feb 2026)"
slug: summary-blog-quantum-resistance
source_file: web:https://gajumaru.io/2026/02/05/quantum-resistance-on-gajumaru/
author: "Ulf Wiger (QPQ AG)"
date_published: 2026-02-05
date_ingested: 2026-05-15
key_claims:
  - Author: Ulf Wiger (CTO, QPQ AG) — confirms Ulf's role as public technical writer alongside Craig and Peter
  - Current key pair: ED25519 (Curve25519 base) — practically impossible to brute-force with existing hardware
  - Quantum computers capable of breaking Curve25519 are unlikely within 5-10 years, if ever
  - Current largest quantum systems: under 150 qubits (IBM, Dec 2023); breaking elliptic-curve requires tens to hundreds of millions of error-corrected qubits
  - ML-DSA-44, ML-DSA-65, ML-DSA-87 (NIST FIPS 204) via Sophia Crypto library, enabled by Erlang/OTP 28.1 (released Sept 2025)
  - Breaking ML-DSA-65 classically: ~2²¹⁷ operations (~10²⁹–10³⁰ years); memory: 2¹³⁹ bits
  - Quantum speedup on ML-DSA lattice attacks: only ~15–20 bits (vs. Grover's square-root speedup on symmetric crypto); quantum cost ~165 bits — still infeasible
  - ML-DSA security hardness: Cat2=123/112 bits (classical/quantum); Cat3=182/165; Cat5=252/229
  - ML-DSA verification costs ~1.5x–2.2x Curve25519; ~0.00000015 Gaju per tx; projected throughput if all TX use ML-DSA: below 100 TPS
  - Generalized Accounts (GA) enable alternative authentication as the near-term mechanism
  - Long-term: may implement native quantum-resistant authentication rather than GA contracts
related: [[groot]], [[gajumaru-architecture]], [[sophia-fate]], [[grids]]
confidence: high
---

# Summary: Quantum Resistance on Gajumaru Blockchain

Blog post addressing the quantum computing threat to Gajumaru's cryptographic foundations.

---

## Current Security Posture

Gajumaru currently uses **Curve25519** for account representation — described as "practically impossible to brute-force with currently existing computing hardware."

## Quantum Threat Assessment

The article takes a measured view:
- Breaking Curve25519 would require **tens to hundreds of millions of error-corrected qubits**
- Current largest quantum systems: ~133 physical qubits
- Path to capability: "10-20 years minimum, involving substantial technological innovations"
- Seth Lloyd (physicist): 50-50 probability large-scale quantum computation may never materialise

**Conclusion:** Quantum threat is real but not imminent. QPQ is preparing now, not in crisis mode.

## Near-Term Solution: ML-DSA via Generalized Accounts

**Generalized Accounts (GA)** — an existing Gajumaru feature — enable alternative authentication methods. QPQ will use GA contracts to integrate ML-DSA via the Sophia `Crypto` library, enabled by **Erlang/OTP 28.1** (released September 2025) which includes ML-DSA verification.

| Algorithm | NIST Category | Classical Hardness | Quantum Hardness |
|-----------|--------------|-------------------|-----------------|
| ML-DSA-44 | 2 | ~123 bits | ~112 bits |
| ML-DSA-65 | 3 | ~182 bits | ~165 bits |
| ML-DSA-87 | 5 | ~252 bits | ~229 bits |

All three available via the Sophia `Crypto` library by **Groot Mainnet Launch 2026**.

**Performance cost:** ML-DSA verification ≈ 1.5×–2.2× Curve25519. On-chain cost: ~0.00000015木 per tx. If all transactions used ML-DSA: network throughput would drop **below 100 TPS** — acceptable for now, prompts long-term native integration work.

**Why lattice-based crypto is safe from quantum:** Grover's algorithm gives a square-root speedup on symmetric keys (halving effective security bits). For ML-DSA's lattice structure, the quantum speedup is only ~15–20 bits, leaving quantum cost at ~165 bits for ML-DSA-65 — computationally infeasible.

## Long-Term Direction

Future versions may implement **native quantum-resistant authentication** rather than relying on GA contracts — potentially mapping GA behaviour to native functions via abstract data types.

## Significance

This pre-emptive approach — integrating quantum-resistant signing before quantum computers are a practical threat — mirrors the zero-dependency philosophy: build security into the architecture rather than patching it in later.

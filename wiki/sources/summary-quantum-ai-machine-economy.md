---
type: source
title: "Quantum, AI, and the Machine Economy: Why the Internet Isn't Safe for Economic Value (YouTube)"
slug: summary-quantum-ai-machine-economy
source_file: raw/transcripts/quantum-ai-and-the-machine-economy-why-the-internet-isn-t-safe-for-economic-value.md
author: "QPQ AG (Greg Chew, Ulf Wiger, Craig Everett — panel discussion)"
date_published: 2026-01-01
date_ingested: 2026-05-16
key_claims:
  - Quantum threat timeline updated — Google optimizations brought attacks "an order of magnitude closer" but still mid-2030s for first realistic attack
  - First plausible quantum attack: 10+ days of compute against a single blockchain keypair using neutral-atom systems with tens of thousands of qubits
  - Cost threshold for quantum attack to be economically sensible — account must hold $100,000+ in value
  - New A1/A2/A3 tiered account category proposal (Craig, pending Dimitar/Ulf review)
  - A1 accounts — elliptic curve key but account ID is HASH of public key (no attack surface until activity)
  - A2 accounts — ML-DSA keys; signature ~3-4 KB; public key ~2 KB; bloats chain so use selectively
  - Bitcoin best practice for quantum safety — keep public key hidden until signing; "temporary account" pattern
  - "The most insecure thing in the security chain is the human being" — mnemonic loss is the dominant practical risk
  - Quantum panic is agenda-driven — naming Saylor, Adam Back, Craig Wright, Larry Fink as wannabe "saviors" of Bitcoin
  - LLM industry "growing up" — must work on commercial base; cannot continue VC subsidy indefinitely
  - Anthropic announcement of imminent machine economy referenced
  - Layered quantum defense — users choose security level appropriate to value at risk
related: [[quantum-resistance]], [[groot]], [[sophia-fate]], [[grids]], [[gajumaru-architecture]], [[gregory-chew]], [[ulf]], [[craig]]
confidence: high
---

# Summary: Quantum, AI, and the Machine Economy

Panel discussion featuring Greg Chew, Ulf Wiger, and Craig Everett. Three topics: quantum (Google's recent optimizations), the arrival of the machine economy (Anthropic announcement), and Anthropic's Mythos AI. Most detailed public discussion of Gajumaru's tiered quantum-resistance approach.

---

## Quantum Threat Timeline Update (Ulf)

Recent developments have brought the quantum threat **an order of magnitude closer** without changing the fundamental conclusion:

- **Theoretical optimizations** to Shor's algorithm reduce the number of qubits needed (Google)
- **Neutral atom systems** increase the realistic qubit count to tens of thousands
- **Mid-2030s** is now the most optimistic timeline for a quantum computer that could attack a single blockchain keypair — running flat out for ~10 days

**Cost analysis:**
- Such an attack would not be economically sensible unless the target account holds at least **$100,000** in value, "probably a lot more"
- Quantum computer time has more lucrative applications (protein folding, chemistry simulations)
- The opportunity cost of using a quantum computer for crypto-cracking is substantial

> "We're still fine. We're not panicking on our end. It will be good for humanity if they manage to build those machines — maybe ideally machines that aren't really economical for cracking crypto but really good for a lot of other things."

---

## A1/A2/A3 Tiered Account Categories (Craig — proposed, pending review)

Craig proposed a new tiered account scheme to give users layered quantum-resistance choices:

| Tier | Cryptography | ID Format | Notes |
|------|-------------|-----------|-------|
| AK (current) | Elliptic curve (Curve25519) | Public key visible | Default; no public-key hiding |
| **A1** | Elliptic curve | **Hash of public key** | Bitcoin-style; no attack surface until activity occurs |
| **A2** | ML-DSA (medium strength, ~65) | Hash | ~3KB signatures, ~2KB public keys |
| **A3** | Higher-strength ML-DSA (implied) | Hash | Heavier still |

Trade-off for A1: cannot use ECC's advanced features (e.g., encrypting messages to a recipient whose public key you know in advance) because the public key is hidden until first signing. This is acceptable for accounts used as value stores rather than message endpoints.

The proposal is pending review with Dimitar and Ulf before publication.

---

## Best Practice for Multi-Account Security (Ulf)

Independent of quantum threat:

> "If you have lots of crypto, you spread it out over several accounts. You have some accounts with keys that never touch the internet that you don't have in your mobile wallet — just to minimize the risk that you will lose those keys. And then you have some accounts that have a limited amount of money in them that you can use for your daily work."

Quantum-resistance does not change this advice — it adds an additional optional layer for the high-value accounts.

---

## The Anthropic Mythos AI Announcement

Anthropic announced (but did not release) **Mythos** — an AI model that could "hack every single access point going for everything" including bank logins, building security, and authentication systems. The release was paused because the capability was deemed too dangerous.

QPQ's framing: Mythos is the proof that the **internet of data** is structurally unsafe as a substrate for economic activity. Adding more layered defense to the same architecture cannot fix it — only removing the sensitive data from the public domain entirely (GRIDS approach) eliminates the attack surface.

> "It's not that you've increased the security. You've just removed the sensitive data from needing to be protected at all."

---

## The Anti-Quantum-Panic Critique (Greg)

Greg directly named figures positioning themselves as "saviors" of Bitcoin:

- **Michael Saylor** — "Talking about how he's going to save Bitcoin from quantum and he has so many devs working on a quantum security algorithm"
- **Adam Back** — "Has a long track record of wanting to be the savior"
- **Craig Wright** — "No doubt we'll see Craig Wright rear his wonderfully litigious head around some of this stuff as well"
- **Larry Fink** (BlackRock) — implied: previously said Bitcoin "can be forked"; QPQ expects he will fund a fork to "save Bitcoin"

> "The thing that's really happening is they're creating this panic to drive [an agenda]."

Greg's framing: the quantum panic is being used to set up a hostile-fork narrative where insiders position themselves to control the post-quantum Bitcoin.

---

## Sources
[[quantum-resistance]], [[grids]], [[summary-blog-quantum-resistance]]

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
  - Mythos found tens of thousands of zero-days autonomously; Anthropic estimate 6-18 months before all LLMs can do same
  - State channel delegated signing: proxy key pair; two modes (automatic/manual); "by default doesn't automatically sign anything"
  - Agent provisioning: give agent 100 Gaju; agent has own key pair; main keys stay offline on separate device
  - Trustlessness is binary (TEA) — either you have it or you don't; if not, you've traded for efficiency but must have accountability
  - GajuDesk: 5,278 lines; one external dependency = Erlang runtime (by Ericsson); package manager also written from scratch
  - BankID (Sweden) — ubiquitous for everyone under 70; requires residency (Ukrainian refugees excluded); GRIDS is universal and trustless
  - ZKP for age verification — can prove "over 18" without sharing personal ID; requires trusted KYC operator on AC
  - Settlement vs. finality: settlement = 2-3 seconds (you walk out of shop); finality = 3-4 minutes; Bitcoin = 3-4 days
  - "Day zero month zero" of machine economy = April 26 2026 (MainNet public launch)
  - GajuMobile: Android first, then iOS; GPL3 core + paid premium versions
  - "Heisen money" — Craig's term for cryptocurrency: betting slip, might be worth a lot, might be worth nothing
  - Enterprise blockchain failure: crypto industry used Fabian tactics to place agents in decision-making roles who define blockchain
  - Greg wrote Un-White Paper with 25 years of notes (IKEA cubes full); used Claude+Grok for narrative structure testing
  - QPQ content: high perplexity score + tight topical cluster; LLMs "constantly surprised" — rated very high authority
related: [[quantum-resistance]], [[groot]], [[sophia-fate]], [[grids]], [[gajumaru-architecture]], [[gregory-chew]], [[ulf]], [[craig]], [[state-channels]]
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

## Mythos + Security Architecture (Craig + Greg — extended)

Mythos found tens of thousands of zero-day vulnerabilities autonomously, including the 27-year-old OpenBSD flaw. Anthropic's estimate: 6-18 months before all LLMs can replicate what Mythos did ("a bit generous," per Craig).

> "Every single agentic framework today is running store credentials on a connected device that is completely wide open."

The correct answer remains separation of concerns: **the signing context must be physically separated from the execution context**. Craig and Greg's articulation of GRIDS in this video is the most detailed:
- Keys should NOT be on the same computer as the browsing context, "if possible"
- "I have my keys on a totally separate device that is gapped"
- Browser plugin wallets are "crazy — that's just nuts"

The "never roll your own crypto" cult belief contributed to code being reviewed by very few eyeballs — the vulnerability surface for Mythos to exploit.

---

## State Channel Delegated Signing (Ulf — detailed)

One of the recent additions to state channels:

> "When you open the channel, you can basically tell the state channel logic proxy that okay, set up a key pair that allows you to sign things and the chain will recognize them."

**Two operational modes:**
1. **Delegated (automatic)**: agent has proxy key pair, signs interactions automatically; useful for agentic AI loops
2. **Manual approval**: every state channel signing step pauses and waits for GajuDesk/GajuMobile to sign

By default: **no automatic signing** — must explicitly install delegated key pair.

**Agent provisioning pattern (Greg's M4 Mac example):**
- Give agent 100 Gaju (limited amount)
- Agent sets up state channel independently
- Agent has authority ONLY over what you've given it — "never give the agent the keys to your kingdom"
- If agent goes haywire, you've limited your risk

State channel cloud: QPQ may offer cloud-hosted state channel service, making QPQ a party in the transaction.

---

## BankID Comparison (Ulf)

Sweden's BankID system:
- QR code login; ubiquitous for everyone under 70; used daily for banking, government sites, etc.
- **Requires residency**: Ukrainian refugees who fled to Sweden couldn't use it because they lacked a Swedish residency permit — even when they had bank accounts
- Trust-based: certificate from bank issued to your phone

GRIDS is the same UX pattern but:
- **Universal** (not tied to a bank or nationality)
- **Trustless** (self-authenticating; no certificate authority required)
- Works for anyone with a private key

---

## ZKP Age Verification (Ulf)

GRIDS supports anonymous login with optional ZKP credentials:
> "If you're in a site that requires you to be 18, you could provide a proof for that and say: here is the proof that I'm over 18. That's all I'm going to share."

Requires a credentialed KYC operator (e.g., Swedish or Swiss KYC provider) to issue signed proof. Voted on at the AC level. Does not require sharing personal ID number — only the relevant predicate.

---

## Settlement vs. Finality (Greg — detailed explanation)

> "Settlement is 2 to 3 seconds but finality is 3 to four minutes. You don't have to stand there at the till for 3 to four minutes."

- **Settlement** = probabilistic: merchant is satisfied, you leave the shop. Like going around a blind corner in Ireland — you're putting faith in the other car
- **Finality** = binary mathematical certainty: either 1 (you have it) or 0 (you don't)
- Current fiat digital payments: settlement and finality are "a galaxy apart" (2-5 days)
- Gajumaru: settlement 2-3 seconds, finality 3-4 minutes
- Bitcoin: 3-4 days
- Cash: finality is immediate (notes change hands)

---

## "Heisen Money" and the Crypto Critique

Craig's term for cryptocurrency: **"Heisen money"** — like the Heisenberg uncertainty principle. A cryptographic betting slip that might be worth a lot, might be worth nothing. "Who knows until the moment that it happens."

The deeper point: if crypto had real commercial value, the industry could not sustain the completely non-serious approach to security (browser plugins, npm dependencies, MetaMask).

---

## Trustlessness is Binary (Greg — TEA model)

> "Trustlessness is binary. Either you have it or you do not. If you do not, for any aspect that you do not, you have created an efficiency because trust enables efficiency. But where you have that trust that enables the efficiency, you must have accountability. Or you don't have trust, you have blind faith."

TEA = Trustlessness, Efficiency, Accountability. Enterprise blockchain failed because:
- Crypto industry used Fabian tactics to place agents in decision-making roles
- Those agents defined blockchain as "we said it is"
- Gajumaru's definition: can you trust the message, not the messenger, securely at scale?

---

## GajuDesk Code Audibility

> "GajuDesk is 5,278 lines right now. That's a totally readable project."

Compare: Hello World in Vue.js = approximately 75,000 lines.

Craig also wrote the package manager used to build GajuDesk — with zero dependencies. It bootstraps and runs itself. The one external dependency the entire stack has is the **Erlang/OTP runtime** (written by Ericsson).

---

## Sources
[[quantum-resistance]], [[grids]], [[state-channels]], [[summary-blog-quantum-resistance]]

---
type: source
title: "Internet of Economics | GRIDS, Mythos AI, and the end of payment credentials in the public domain (YouTube)"
slug: summary-internet-of-economics-grids-mythos
source_file: raw/transcripts/internet-of-economics-grids-mythos-ai-and-the-end-of-payment-credentials-in-the-public-domain.md
author: "QPQ AG (Greg Chew, Craig Everett — interview format)"
date_published: 2026-01-01
date_ingested: 2026-05-16
key_claims:
  - The web was designed to share information — using it to carry economic value is a fundamental category error
  - Two internets exist — Internet of Data (information sharing) and Internet of Economics (economic activity)
  - Anthropic announced Mythos AI — capable of hacking every access point in seconds; release paused due to danger
  - GRIDS removes attack surface entirely — does not add layered defense
  - "The easiest code to secure is the code that you don't have" — Craig's design principle
  - Proposal — replace 3D Secure (3DS) credit card verification with GRIDS signing
  - Proposal — replace credit cards entirely with wallet-bound payment via GRIDS
  - Greg's pitch to financial institutions for 25 years — focus on USP, not infrastructure-as-asset (infrastructure is liability)
  - Real internet identity question is not national ID — it is repeated interaction history (trust signals)
  - OpenClaw cited as agentic framework that bad actors will use for targeted spear-phishing
  - AI-driven spear-phishing at scale enabled by data breaches that "are probably going to accelerate"
  - Email was never designed to be secure — retrofitting security is always bad architecture
  - 3DS sometimes fires for small transactions, sometimes doesn't — adding friction without consistent security
related: [[grids]], [[internet-of-economics]], [[quantum-resistance]], [[gregory-chew]], [[craig]], [[gajumaru-product-suite]]
confidence: high
---

# Summary: Internet of Economics — GRIDS, Mythos AI, and the End of Payment Credentials in the Public Domain

Greg Chew and Craig Everett discuss why every economic transaction on the current web is structurally insecure, why Anthropic's Mythos AI announcement is the proof of structural failure, and how GRIDS removes the attack surface rather than defending it.

---

## The "Two Internets" Frame

> "When we talk about the web, there are actually two internets. One of them you've used every day for the last 30 years. The other is just being built."

| Internet | Designed for | Examples |
|----------|-------------|----------|
| Internet of Data | Sharing information — duplication is a feature | Web pages, social media, search |
| **Internet of Economics** | Carrying value — uniqueness is critical | Payments, identity, contract signatures |

> "A payment that's duplicated is not a payment. It's an error."

The mistake of the last 30 years has been running economic activity on the wrong internet — patching the Internet of Data to handle value rather than building the Internet of Economics from first principles.

---

## Anthropic's Mythos AI

> "Two weeks ago, an AI model called Mythos was released by Anthropic. Sorry, forgive me — not released. It was announced by Anthropic. They actually haven't released it because they discovered that it could hack every single access point going for everything."

The capabilities Anthropic identified:
- Bank transfer login compromise
- Bank account login compromise
- Physical building security access
- Authentication systems generally

> "Almost instantaneously in seconds."

The release was paused. QPQ's interpretation: the cybersecurity industry's response will be "more layered defense, more defense in depth." This response is structurally wrong because **it tries to protect the wrong thing**. The fix is not to defend the credential data better — it is to remove the credential data from the public domain entirely.

---

## GRIDS as the Architectural Answer

> "Grids dissociates the two things. It says if you are signing into a secure portal, you don't actually give a login and password that can be hacked. You provide a secure authentication cryptographic code from one to the other, a key from public key A to public key B."

Key properties:
- One-time authentication per action (not persistent session login)
- Signature context completely separated from execution context (browser/app)
- Site never holds credentials — only public key + signed challenge
- "The attack surface is gone" — not merely reduced

Craig's restatement:
> "The easiest code to secure is the code that you don't have. The easiest part to fix is the part that you don't need to have in your system."

---

## The 3D Secure / Credit Card Replacement Proposal

Greg recounted buying a phone case for €16.99 and being struck by how absurd the standard flow is:
- Hand credit card details to people he's never met
- 3DS sometimes fires for verification, sometimes doesn't
- Layers of personal data exposure to every merchant in the transaction chain

His proposal:
- **Replace 3DS with GRIDS** for verification of credit card transactions
- Then ask: why are credit cards needed at all? Replace the credit card with a **wallet-bound payment** via GRIDS
- Existing payment systems can accept wallet-bound payment via GRIDS as an integration point

This is the architecture path from current credit-card-based commerce to GRIDS-based commerce without requiring everyone to migrate simultaneously.

---

## Greg's 25-Year Argument to Financial Institutions

> "The argument I've been making for 25 years to financial institutions is: you will make more money with less risk by focusing on your USP and not on all the things that you do to deliver that USP. All of those infrastructures are not an asset. They are in fact a liability."

This is the strategic frame for selling Gajumaru to banks and payment companies:
- Their USP is risk pricing, customer relationships, regulatory standing
- Their infrastructure (proprietary networks, custom payment rails) is not their USP — it is overhead
- Sharing infrastructure (Gajumaru) lets each institution focus on its USP and earn higher margins on less risk

Note: Greg cites **25 years** here for his financial institution outreach, distinct from the 23-year figure for the Internet of Economics vision (Token Summit) and the 22-year figure (Demo 1, March 2024). The dates align with: ~2001 (start), 2009 (shelved centralized system), present.

---

## AI-Driven Spear-Phishing Threat

Craig and Greg discussed how AI agents will weaponize data breaches:

> "Spear fishing with AI — and now that we have these like local run agents and access to LLMs that you can easily stock with black market purchase private data from any number of data breaches which are probably going to accelerate soon..."

> "OpenClaw to automate extremely carefully targeted [attacks] — you're totally going to believe that your grandmother just got sick and wrote you an email. You're 100% going to believe that because all the cues that you could possibly convey in bits is going to be there."

The defense is not better detection — it is removing the credential data from circulation. If there are no credentials to steal and no shared sessions to impersonate, AI-driven phishing has nothing to extract.

Greg's personal anecdote: he was fooled by a Spotify phishing email so good that, comparing it side-by-side with a real Spotify email afterward, he could not tell the difference.

---

## Repeated Interaction as Real Identity

> "The real question that you care about on the internet is not what someone's national ID card says. What you care about is repeated interactions with that person or entity — is it always the same one or not?"

Craig's framing: identity is not a one-time attribute (name, DOB, ID number) — it is a history of interactions accumulating trust signals. National-ID-on-blockchain solutions miss this point. GRIDS-based identity naturally produces repeated-interaction history because every interaction is signed by the same keypair.

---

## Sources
[[grids]], [[internet-of-economics]], [[quantum-resistance]]

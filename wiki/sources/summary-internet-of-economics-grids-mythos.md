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
  - Greg got phished by Spotify email despite being a nerd — gave credit card details before smelling a rat
  - "3 to 9 months: effectively every login and password will be in the public domain" — post-Mythos timeline
  - Vibe-coded backends → future where real company infrastructure is cracked and runs scams the company doesn't know about
  - Compromising a single CA (certificate authority) compromises all — DNS is not secure either
  - Web 3 simple definition: you do not give the world your information; instead you pay for services as you use them
  - "Half a penny per email = no spam" — price signal argument applied to email
  - On-chain message storage: you pay for the duration you want it stored; 50-year storage = "quite a big fee"
  - Gaju Market: no text input fields anywhere until after authentication
  - Visa/Mastercard USP: 60-80 years of fraud data; should charge for fraud prevention as fee service
  - Greg had meetings with Mastercard at Point Zero Forum; 25 years of boardroom meetings (Barclays, HSBC, RBS, Bank of Scotland)
  - Salt Typhoon: contacted ~1.5 years ago; GRIDS secures call initiation, not full call content
  - OpenClaw billing change: $5,000 compute cost for $200 revenue; ChatGPT has $300B Oracle compute subsidy
  - "Public key becomes your credit card" — online identity tied to public key, not card numbers
  - QPQ working on a "Black Paper" for the Ethereum ecosystem criticism
related: [[grids]], [[internet-of-economics]], [[quantum-resistance]], [[gregory-chew]], [[craig]], [[gajumaru-product-suite]], [[price-signal-economy]], [[state-channels]]
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

## Post-Mythos Timeline

> "Effectively, every login, every password is going to be in the public domain [in 3 to 9 months]."

The vibe-coded future threat: AI will crack company backends silently, running scams inside legitimate infrastructure. You'll get a real email from Spotify's real server, but the backend itself will have been cracked and will be running an automated scam Spotify doesn't know about.

Additional infrastructure fragility noted by Craig:
- Cloudflare and AWS behave as potential man-in-the-middle (capacity drives intent; they can't certify their own security)
- Compromising a single **certificate authority** compromises all — the CA trust chain is structural
- DNS is not actually secure

---

## Web 3 — Simple Definition

> "Web 3 is the world in which you do not give the world your information. Instead, you pay for services, utility as you use it, as you find it, as you use it."

Compared to current web (web 2): you give your data in exchange for services. Greg's economic argument: **charge for broadcasting data** rather than monetizing attention.

> "If you charged a half a penny for every email sent, spam would be impossible to do."

On-chain message storage: you specify how long you want it maintained. 50-year message storage = a large fee. This is "grown-up behavior" for data management.

---

## Credit Card Replacement Roadmap

Craig's roadmap for integrating GRIDS into the existing payment system without requiring simultaneous mass migration:

1. **Augment 3DS with GRIDS** — replace second-factor verification; use existing account for initial authentication, then add public key
2. **Link accounts to public key** — vendor connects existing user ID to public key; from that point, only public key needed to authenticate
3. **Eliminate credit card numbers** — "your public key becomes your credit card" for online transactions
4. **Phone-based in-person** — same GajuMobile + GRIDS flow at physical terminal; eliminates need for physical card at all

> "It can't get stolen if it doesn't exist."

Visa/Mastercard benefit: **focus on fraud prevention** as their USP. They have 60-80 years of fraud data. GPQ is the only chain structurally positioned to enable fraud-prevention integration at the AC layer.

GajuMarket security design: **no text input fields anywhere until after authentication**. No username, no password fields in the system.

---

## Institutional Outreach (Greg)

Greg's 25-year history of boardroom conversations: Barclays, HSBC, Royal Bank of Scotland, Bank of Scotland — same argument since ~2001: infrastructure is a liability, not an asset; focus on USP.

Mentioned conversation with Mastercard at **Point Zero Forum**: "focus on fraud detection and prevention."

Greg was writing letters to legislators, regulators, banks, payment service providers, and critical infrastructure providers post-Mythos. QPQ is also working on a **"Black Paper" for the Ethereum ecosystem** — analysis Greg intends to send to every regulator he can find an email address for.

---

## Salt Typhoon

A contact reached out ~1.5 years ago asking if GRIDS could solve for the **Salt Typhoon** cyber espionage incident. Greg's answer: yes for call/session initiation, not for the full call content itself. If the access point between two parties is secured by GRIDS (public key authentication to initiate the conversation), that access point is effectively un-hackable — because nothing in the public domain links to it.

---

## Separation of Concerns as Design Northstar

> "Something that has been a northstar for all of you all the time — to the point that I think Ulf has it tattooed on his body somewhere — is the Tony Hall speech about complexity and simplicity."

This refers to C.A.R. Hoare's principle: make it so simple there are obviously no errors (harder) or so complicated there are no obvious errors (the JavaScript path). The QPQ team chose the hard path. Every major architectural decision — GRIDS, state channels, zero-dependency wallets, Associate Chains — is an expression of separation of concerns.

---

## Sources
[[grids]], [[internet-of-economics]], [[quantum-resistance]], [[price-signal-economy]], [[state-channels]]

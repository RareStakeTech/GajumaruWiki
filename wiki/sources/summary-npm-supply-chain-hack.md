---
type: source
title: "NPM Supply Chain Hack, Unserious Crypto, Serious Gajumaru Full (YouTube)"
slug: summary-npm-supply-chain-hack
source_file: raw/transcripts/npm-supply-chain-hack-unserious-crypto-serious-gajumaru-full.md
author: "QPQ AG (Greg Chew, Craig Everett, Ulf Wiger — discussion format)"
date_published: 2025-09-15
date_ingested: 2026-05-16
key_claims:
  - Largest NPM supply chain attack in history — 18 packages with 2 billion weekly downloads affected
  - Up to 2 billion wallets potentially affected by the attack vector
  - MetaMask is the "Google of Ethereum-based wallets" — the dominant attack target
  - MetaMask spent tremendous effort trying to secure against NPM vulnerabilities — and failed
  - Attack pattern — malicious code rewrote receiver account in MetaMask transactions silently
  - Even the package author of an attacked package may not know about the compromise (transitive dependency)
  - "Leftpad incident" recap — one developer pulled a single trivial package; half the internet broke
  - GajuDesk written from scratch with zero dependencies — including its own package manager (also zero-dependency)
  - NPM operates by automatic dependency resolution — Hello World in Vue.js spits out 70,000 lines of code
  - JavaScript framework builds typically show tens of thousands of critical security warnings — and developers ship anyway
  - The web is "permanently on fire" — warnings are normalized; airline-grade engineering treats warnings as errors
  - JavaScript was specified over a weekend by one person who then got stuck with it
  - Browser plugins like MetaMask are inherently insecure architecture — the signing context must be separated
  - MetaMask's security attempt: "Lava Moat" — JavaScript permissioning runtime written in JavaScript; Craig and Peter thought it was an elaborate joke; it has its own dependencies; failed against the real attack
  - Lava Moat specific: attack discovered accidentally because malware assumed `fetch` function in runtime; older runtime version caused crash → investigation
  - MetaMask mobile: JS framework wrapped in cross-platform build; doesn't use Android hardware key store; mnemonic stored without biometric hardware security
  - npm accounts for ~60% of JavaScript attack vectors
  - Tony Hall (C.A.R. Hoare) quoted: two methods — "make it so simple there are obviously no errors" OR "make it so complicated there are no obvious errors"
  - Candlestick problem: under time/reward pressure, people get tunnel vision; MetaMask chose complexity over simplicity
  - Sophia/FATE borrowed from Aeternity under ISC license (not MIT); Yannis Mares raised money to build globally-expert secure VM
  - Ethereum hacked daily — DeFi scam tracker shows hundreds of millions to billions lost regularly; police won't help (crypto not legally recognized as currency)
  - QPQ team ethos: "building for our people" — working-class families; first potential adopter is Craig's corner shop 300m from his house
  - "One ring to rule them all" = the mint; controlling the mint corrupts — even if well-intentioned initially
  - "The internet of economics — since hunter-gatherers, we've had no global economic resource layer"
related: [[grids]], [[qpq-ag]], [[qpq-software-stack]], [[gajumaru-product-suite]], [[craig]], [[ulf]], [[gregory-chew]], [[sophia-fate]], [[internet-of-economics]]
confidence: high
---

# Summary: NPM Supply Chain Hack, Unserious Crypto, Serious Gajumaru

Long-form discussion (likely September 2025) reacting to the largest NPM supply chain attack in history. Craig walks through the technical history of NPM/JavaScript and explains why GajuDesk's zero-dependency architecture is the only structural answer.

---

## The Attack Itself

> "The largest NPM supply chain attack in history with 18 packages and two billion weekly downloads affected."

The "Shai-Hulud worm" (referenced in the Un-White Paper Security Philosophy chapter) spread autonomously across the NPM ecosystem in this incident.

Affected critical packages included:
- `debug` (~357M weekly downloads)
- `chalk` (~300M weekly downloads)
- `ansi-styles` (~371M weekly downloads)

**Potential blast radius: 2 billion wallets** (the MetaMask ecosystem and adjacent JS wallets).

---

## How the Attack Vector Works

> "The attack is so subtle and so layered. The author doesn't know about it. And actually what the target is is not even MetaMask. It's the page that would have an Ethereum account in it. And that account has been changed to the malicious — to the attacker's account."

The malicious code rewrote the receiver account silently when a user attempted to pay. The displayed address on the merchant page and in MetaMask itself could appear correct but route to the attacker's address.

Craig and Peter analyzed MetaMask's defenses a year prior and concluded the architecture could not be secured — only worked around. The current incident is the predicted failure.

---

## Why JavaScript and NPM Are Structurally Broken (Craig)

**Origin of the mess:**
- JavaScript was specified over a weekend by one person; the spec was incomplete and self-contradictory
- The person came back and said "Oh crap, now we're stuck with this"
- Node.js extracted JavaScript from the browser, but the language defects came with it
- NPM is automatic dependency resolution — when you depend on package X, NPM transitively fetches every dependency of X, of every X's dependencies, and so on
- Hello World in Vue.js produces approximately **70,000 lines of code** from thousands of dependencies

**The "everything is on fire" problem:**
- Builds in JS frameworks routinely show tens of thousands of critical security warnings
- Developers normalize this: "It always does that"
- Compare to airline engineering: warnings are treated as errors and must be resolved before shipping
- In JavaScript: warnings are ignored and the build is shipped under investor pressure

**The leftpad story** (cited as foundational example):
- One programmer published many tiny single-function packages
- One of them, `leftpad`, was a 10-line function inserting spaces to the left of text
- Every framework in the universe transitively depended on leftpad
- The author had a dispute with NPM and pulled his package
- **Half the internet broke the next day**

---

## GajuDesk's Zero-Dependency Architecture

> "When we built our software, our desktop wallet — that's all from scratch. There's no dependencies. And the package manager actually that we use for that, I [Craig] wrote that too with zero dependencies. It actually bootstraps and runs itself."

- GajuDesk is written from scratch in Erlang/Elixir (per the QPQ stack)
- Even the package manager used to build it has zero dependencies and bootstraps itself
- "We know every single detail of how everything works and all of our code"
- This is the structural answer to NPM-class attacks: **no supply chain to attack**

GajuDesk is contrasted explicitly with MetaMask:
> "MetaMask is a wallet that is actually designed to handle different kinds of crypto. So they had to take a more agnostic approach. We didn't have to. We're specifically a Gajumaru wallet, so we could go vertical and own every layer."

---

## Why Browser Plugin Wallets Are Fundamentally Unsafe (Craig)

> "The web — where we use browsers and Chrome and Firefox — it is just a nightmare of problems. The only correct way to cope with all the just limitless number of unknowable security vulnerabilities is to just separate the context."

This is the core argument for GRIDS:
- The browser is an inherently unsafe execution context
- The signing context (wallet) must never live inside the unsafe execution context
- A wallet that is a browser plugin is **architecturally** insecure regardless of how carefully it is coded
- The only correct solution is out-of-band signing (QR code, separate device, separate process)

> "The easiest code to secure is the code that you don't have."

---

## MetaMask's Lava Moat Defence — and Its Failure

MetaMask did think about npm supply chain attacks. Their response: **Lava Moat** — a JavaScript code-permissioning runtime, implemented in JavaScript.

Craig and Peter found this when auditing MetaMask a year before the actual attack. Their reaction:

> "We thought this idea was so silly that we actually thought this was an elaborate joke at first. It took us a couple days to realize: no, they're totally serious."

Lava Moat's problem: it has its own dependencies. Their logic was "too many dependencies is scary → let's make it 10x more complicated." It did not protect against the recent attack.

**How the real attack was discovered:** The malicious code assumed the `fetch` function existed in the JavaScript runtime. The victim's project was using an older runtime version that didn't have it. It crashed. They investigated. Found obfuscated (minified) malicious code. In JS, minified/obfuscated code is normal — nobody looks at it.

---

## MetaMask Mobile Architecture Flaw

> "They've actually taken literally the same JavaScript nightmare and they just put it in your phone and they say, 'Tada, finished. Runs on iPhone and Android.'"

The result: the mobile wallet runs in a web-like environment and doesn't know about the **Android hardware key store**. The mnemonic phrase is stored on-device without the biometric hardware security features of the phone. Compare to GajuMobile, which is written natively.

---

## Craig's Discovery Journey

Craig's origin story for this problem:
> "Nobody's done Amazon in crypto world, so I should do that." It turned out that crypto sucks and that's why no one had done it yet.

- Tried to build a crypto marketplace
- Reverse-engineered MetaMask and wallet communication protocols
- Wrote own wallet + communication library + in-page code from scratch (with Peter)
- Realized: "there is absolutely no safe way to do a browser wallet"
- Conclusion: "I know every single detail of how everything works and all of our code"

---

## Sophia, Aeternity, and ISC License

> "Yannis Mares identified back in the days when Ethereum was first coming about which was that it was gloriously insecure in of itself because Solidity is a terrible smart contract language and Ethereum virtual machines are not secure. He therefore raised a great deal of money to build an alternative."

The aspect QPQ borrowed from the Aeternity project: **Sophia**, a smart contract language, under the **ISC license** (similar to MIT; more permissive than GPL).

Ethereum continues to be hacked daily — DeFi scam tracker documents hundreds of millions to billions lost routinely. If you go to the police, they may stare at you blankly: crypto is not legally recognized as currency, so the crime may not be cognizable.

---

## Candlestick Problem + Team Ethos

Greg introduced the **candlestick problem** (Dan Pink TED talk): under time pressure and reward pressure, people get tunnel vision and fail to see out-of-box solutions. MetaMask, under investor pressure, chose Lava Moat (more complexity) instead of stepping back and building the separation of context from scratch.

QPQ ethos (Greg):
> "I'm thinking about the little farm town that my mother came from... the good hardworking people who didn't have a lot but were always kind."

All QPQ team members come from working families. They put their faces and names on everything. Craig's first potential Gajumaru adopter: "a little lady and her brother [who] still run a corner shop that's been the family for eons" — 300 metres from his house.

> "How dare I give them some garbage that can get cracked easy?"

---

## Sources
[[grids]], [[qpq-ag]], [[qpq-software-stack]], [[sophia-fate]], [[internet-of-economics]]

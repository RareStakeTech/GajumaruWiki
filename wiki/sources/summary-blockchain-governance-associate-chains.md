---
type: source
title: "Blockchain Governance, Privacy, Alternate Financial Systems and Associate Chains (YouTube)"
slug: summary-blockchain-governance-associate-chains
source_file: raw/transcripts/blockchain-governance-privacy-alternate-financial-systems-and-associate-chains.md
author: "QPQ AG (Greg, Craig, Ulf, Dimitar — panel discussion)"
date_published: 2025-01-01
date_ingested: 2026-05-16
key_claims:
  - Associate chains do not have to be blockchains — can be databases, SQL systems, or banking systems with "a clever adapter on it"
  - No ZK rollups by design — the permissionless Groot cannot be put in a position to know too much about what happens on regulated ACs
  - Connection point mechanism — any party can create one; majority of AC operators must co-sign all cross-chain transfers
  - AC hierarchy — an AC can itself have connected sub-ACs (national chain → banks as sub-chains)
  - Natively interoperable but selectively interconnected — each AC defines its own connectivity rules for what comes in/out
  - The superior chain only verifies the subordinate cannot print money — no supervisory control beyond this one constraint
  - Currency exchange via Gaju can be atomic in one transactional block (e.g., NZD → Gaju → CAD)
  - QPQ spent approximately 60 million USD to reach this point
  - Layer zero described as wanting to be central counterparty to every transaction — should be the most regulated entity but is not
  - Tornado Cash analysis — "willful acceptance" of profit from illegal activity; DAO control not actually decentralized
  - GL1 (Singapore MAS) initiative described at "Point Zero in Zurich" — QPQ believes the technology for GL1 already exists as the Gajumaru
  - Each jurisdiction can dictate who gets to be a node, confirm access, provide access — on their own AC
  - "Natively interoperable" comes from the Groot group structure; "selectively interconnected" is driven by each AC's connectivity choices
  - American AC might treat a Taiwanese AC differently from a Chinese AC, depending on political/diplomatic ties
related: [[associate-chains]], [[groot]], [[ripa-model]], [[gaju-token]], [[grids]], [[gregory-chew]], [[ulf]], [[dimitar]], [[craig]]
confidence: high
---

# Summary: Blockchain Governance, Privacy, Alternate Financial Systems and Associate Chains

Long-form panel video featuring all four primary QPQ team members (Greg Chew, Craig Everett, Ulf Wiger, Dimitar Ivanov). Most detailed technical discussion of Associate Chain architecture available in public sources.

---

## Associate Chain Architecture — Technical Detail (Ulf + Craig)

**Associate chains do not have to be blockchains.** They can be:
- Public permissioned chains (run by trusted parties)
- Private chains
- Databases (SQL or otherwise)
- Legacy banking systems with "a clever adapter on it"

**Why no ZK rollups:**
> "Our assumption is that the permissionless chain cannot be put in a position to know too much about the associate chain. If the idea is that the responsibility and the regulatory compliance lies with those who operate the associate chain."

Banks and regulated operators on ACs should not be required to "comply with some complex mathematical proofs on the Groot" — this would make adoption harder without adding commercial utility. The AC operators are identifiable and on the hook; zero-knowledge proofs would add complexity without serving the accountability model.

**Connection mechanism:**
- Anyone can create a connection point for an associate chain
- The connection point has a list of **approver accounts**
- Anything going in or out of the parent chain to the associate chain must be **signed by a majority of the associate chain operators**

**Hierarchy:**
Associate chains can themselves have connected sub-ACs. Example:
- A national chain (e.g., "Kathmandu national chain") at the top
- Each regulated bank in that country runs a sub-chain
- The national chain is the "minting master" for the national native currency
- Sub-chains see the national chain as their superior

**Natively interoperable but selectively interconnected:**
> "The group structure makes it natively interoperable. But how an associate chain chooses to permit those within the chain to transact outside of the chain — and what can come in and out of that pathway is determined by their rules of connectivity."

Example: An American AC might treat a Taiwanese AC and Taiwanese dollar differently from a Chinese AC and the yuan, reflecting political and diplomatic ties. Each AC sets its own connectivity rules.

**The only constraint the superior chain enforces:**
> "The superior chain doesn't really control anything except that it verifies that the subordinate chain cannot print money. It cannot create money out of thin air. The amount of Gajus you pull out of the associate chain can never exceed the amount of Gajus that you have transferred into it."

**Atomic currency exchange:**
Because Gaju is the universal transit currency, a New Zealand dollar → Gaju → Canadian dollar exchange could occur within a single transactional block. "The transaction could be almost atomic that you have New Zealand dollar, Gaju, Canadian dollar within the same transactional block as opposed to multiple steps."

---

## QPQ Cost Disclosure

Greg stated that QPQ has spent approximately **$60 million** to reach the current point — building Groot, developing the product suite, filing patents, and assembling the team. This figure was mentioned in the context of explaining why making the whole thing free and open is a "hard sell" to funders.

---

## Governance and Regulatory Discussion

**The "trust the message" test** (Greg, multiple times throughout):
> "What does a blockchain actually do? It allows us to trust the message, not the messenger, securely at scale."

**GL1 framing** (Greg references attending "Point Zero in Zurich"):
Greg heard the Monetary Authority of Singapore describe GL1 as a framework for transacting assets between jurisdictions for which "the technology doesn't yet exist." QPQ's position: "The technology does exist for you to do this. It's called the Gajumaru."

**Layer Zero critique:**
> "Layer zero is a company who wishes to be a central counterparty to every transaction and should therefore be the most regulated entity in the entire market. But they're not."

**Tornado Cash analysis** (Ulf + Craig):
- Roman Storm convicted partly for "willful acceptance" — profiting from increased traffic (via "torn coin") while knowing illegal actors were using the platform
- Tornado Cash's DAO gave founders controlling stake; not genuinely decentralized
- Lesson: if you create something outside regulation and profit from its use, you cannot later claim no responsibility

**Regulatory framing of blockchain transparency** (Greg):
> "Groot — the open-source governance-free resource layer — actually everything is transparent. An unadulterated transaction within Bitcoin is entirely traceable right back from genesis. So actually a real actual blockchain is an extremely poor money laundering tool."

The opacity that allows money laundering in traditional finance comes from banks being **regulated entities** that legitimately have private books. ACs can implement that same privacy via design — within a fully traceable framework.

**Jeff Bezos quote cited:** "Your margin is my profit." — used as encapsulation of the corporatist agenda of rent-seeking intermediation.

---

## Sources
[[summary-the-gajumaru-an-actual-working-blockchain]], [[summary-qpq-wiki-gajumaru]]

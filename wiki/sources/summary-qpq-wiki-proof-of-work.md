---
type: source
title: "Proof of Work (QPQ Public Wiki)"
slug: summary-qpq-wiki-proof-of-work
source_file: raw/articles/qpq-wiki-proof-of-work.md
author: "Peter Harpending (last edited 2026-03-17)"
date_published: 2026-03-17
date_ingested: 2026-05-15
key_claims:
  - PoW puzzle must be difficult to solve but easy to verify (jigsaw puzzle analogy)
  - PoW puzzle must produce random outcomes given equally powerful contenders
  - These two properties together make PoW suitable for trustless leader selection
related: [[cuckoo-cycle]], [[groot]], [[tea-trilemma]]
confidence: high
---

# Proof of Work (QPQ Public Wiki)

Short foundational page explaining the two essential properties that make a proof-of-work puzzle suitable for leader selection, authored by [[peter]] (Peter Harpending).

## Two Required Properties

1. **Difficult to solve, easy to verify** — Like a jigsaw puzzle: assembling it takes a long time, but checking a completed puzzle requires only a glance. In PoW terms: solving requires significant work, verifying requires trivial computation.

2. **Random outcomes** — Given a set of equally powerful contenders, the winner should be random. No participant can guarantee a win by having more determination or knowledge — only by being (randomly) first.

## Significance

These two properties together explain why PoW is used for trustless leader selection on [[groot]]. The difficulty creates a real cost signal; the randomness prevents monopolisation. See also: [[summary-qpq-wiki-leader-selection]] for why competition is preferred over voting.

---
type: concept
title: "Hive Mining"
aliases: [hive-miner, saas-mining, gaju-hive]
sources: [[summary-gaju-mining-journey-update]], [[summary-gaju-mining-video]], [[summary-qpq-2025-review]]
related: [[protected-mining]], [[gaju-token]], [[groot]], [[ulf]], [[qpq-software-stack]], [[cuckoo-cycle]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: tokenomics-economics
cluster_role: member
---

# Hive Mining

Hive mining is QPQ's SaaS-based model for delivering [[protected-mining]] access to non-technical participants. Customers purchase mining licenses from QPQ; QPQ operates the mining hardware (the "hive"); smart contracts on [[groot]] automatically distribute Gaju rewards to license holders as they are earned.

## What It Is

A conventional blockchain miner runs software locally and receives rewards directly. Hive mining inverts this: QPQ operates physical mining infrastructure on behalf of license holders. A **dividend-writing smart contract** on Groot ties each license to its share of the hive's output and distributes Gaju automatically.

This removes the hardware acquisition, maintenance, and configuration burden from the end user entirely.

## Key Technical Facts

| Component | Detail |
|-----------|--------|
| Client software | `gmhive_client` (Erlang/OTP) |
| Default port | **17888** |
| Connection lookup | `gajumining.com` via miner's public key; cached 24h |
| GPU support | CPU + CUDA GPU (via `gmminer`) |
| License model | SaaS — software + services bundled at gajumining.com |
| Reward distribution | On-chain dividend-writing smart contracts |

## Who Built It

Designed and implemented by [[ulf]] (Ulf Wiger) — from scratch, with no prior art:

> "Ulf has had lots of fun with the task of: 'Hey, we're going to do this hive mining concept. Just poop out a whole hive mining concept and make everything work with dividend-writing contracts that tie it all together on the blockchain.'"

This was a global first. No reference implementations existed. "There was no Reddit forum you could go to."

## Why This Model

The target audience is small business owners and everyday computer users — not crypto engineers. Requirements:

1. No specialised mining hardware (ordinary home computers during protected rollout)
2. No large power supplies
3. Minimal configuration — install, activate, mine
4. Security must match non-technical users' capabilities

The SaaS model achieves this: QPQ handles the infrastructure, users receive rewards via smart contract. After the [[protected-mining]] window closes (30 March 2027), the model is designed to hand off to community-run competitive mining associations for long-term decentralisation.

## Development Context

The hive mining system was built concurrently with — and despite — a payment provider rugpull and cascading technology failures in late 2024/early 2025. It was one of several "first-ever" engineering problems QPQ solved without reference documentation.

## Scaling

Ulf is responsible for ensuring the infrastructure can handle the transition from ~300 pre-release miners to the millions target:

> "Ulf has been doing the work to make sure that the blockchain itself, the hive miners and so on can actually handle this."

## Relation to Tokenomics

Hive mining is the primary distribution mechanism for Gaju during the [[protected-mining]] period. The protected window ends 30 March 2027. Early miners receive the most Gajus — the Bitcoin 2008/2009 early-miner analogy is explicit in QPQ's marketing. See [[gaju-token]] for full supply schedule.

## Sources
[[summary-gaju-mining-journey-update]], [[summary-gaju-mining-video]], [[summary-qpq-2025-review]]

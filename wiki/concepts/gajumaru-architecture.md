---
type: concept
title: "Gajumaru Architecture"
aliases: [gajumaru-stack, gajumaru-system]
sources: [[summary-qpq-2025-review]]
related: [[groot]], [[associate-chains]], [[ripa-model]], [[gaju-token]], [[qpq-ag]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: hub
---

# Gajumaru Architecture

Gajumaru is a layered blockchain system built by [[qpq-ag]]. The stack is organised around the [[ripa-model]]: Resource, Infrastructure, Platform, Application.

## Core Layers

### Resource Layer — [[groot]]
The base consensus and resource allocation layer. Operational since October 2024. 553,800× more efficient than Bitcoin. Produces "generations" (blocks); 300,000+ produced by end 2025. Finality: 2–4 minutes (witnessing-based). The efficiency claim reflects Groot's design versus Bitcoin's proof-of-work energy expenditure.

### Infrastructure Layer — [[associate-chains]]
Independent blockchains that connect natively to Groot. No bridges; no third-party trust dependencies. Each Associate Chain can be created, designed, and governed independently. The first is [[ltin]] — the Liechtenstein national digital economy chain. Full Associate Chain capability delivered at MainNet (April 6/7 2026).

### Platform & Application Layers
Smart contract environment using Sophia language (FINMA compliant). Permissionless after MainNet — external developers can build without QPQ intervention. Products like [[gajumaru-product-suite]] (GajuDEX, GajuMarket, GajuPay, etc.) sit at these layers.

## MainNet Status
Launched April 6/7 2026 at 23:59:00 Zulu. Delivers full Groot documentation enabling an Ethereum-style external developer ecosystem.

## In this cluster

| Page | Role | Description |
|------|------|-------------|
| [[gajumaru-architecture]] | hub | Full stack overview (this page) |
| [[groot]] | member | Resource layer — consensus, efficiency, generations |
| [[associate-chains]] | member | Multi-chain architecture, interoperability, no bridges |
| [[ripa-model]] | member | Deployment model: Resource/Infrastructure/Platform/Application |

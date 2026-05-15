---
type: web-article
title: "State Channels"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/State-Channels
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Gajumaru State Channels

State Channels on Gajumaru represent an advancement of Aeternity State Channels. They function as 1-to-1 messaging sessions anchored on-chain and support:

- Co-signed coin transfers
- Deposit and withdraw coins
- Loading and calling Smart Contracts
- Sending plain messages

Channels can remain open indefinitely. Participants may disconnect and reconnect later to resume sessions. Channel state can be checkpointed to the chain, and upon closure, coin balances distribute to corresponding on-chain accounts. All state changes require co-signatures, enabling immediate settlement. The on-chain protocol includes dispute resolution logic. Each endpoint can monitor the chain for suspicious closing attempts by the other party, with third-party monitor support available.

## Performance

Each Gajumaru node can function as a State Channel proxy with a JSON-RPC interface, servicing at least one thousand concurrent channels. Since channels rarely touch the chain, simultaneous open channels scale approximately linearly with deployed nodes.

Single-channel estimates (from M4 Macbook benchmarks):
- 40 contract calls per second
- 500+ coin transfers per second
- 3000+ plain messages per second

Scaling benchmarks using 50 concurrent channels yielded:
- 1,900 contract calls per second (47.5x increase)
- 3,500 coin transfers per second (6.5x increase)
- 30,400 plain messages per second (11.5x increase)

Testing pushed to 10,000 concurrent channels with stable throughput. 10 performance cores saturated at 50 channels during maximum load. Adding more nodes scales total throughput linearly when channels avoid posting transactions.

State Channel Markets: a market provider services merchants and customers, facilitating atomic payments with ~15ms round-trip cost plus network delays, immediate settlement.

Within Gajumaru, State Channel Markets could enable immediate fund transfers between Associate Chains, where the Market provider uses on-chain mechanisms for bulk collateral balancing.

### On-chain performance

Opening a channel requires an on-chain transaction. Support for deferring funding confirmation makes channels immediately usable upon seeing the opening transaction on-chain. Gajumaru's witnessing-based finality shortens confidence timelines further.

### Transaction fees

State Channels impose no mandatory transaction fees. Cross-AC State Channel Markets might feature higher fees reflecting regulatory compliance costs.

## Execution models

### Peer-to-peer

User A and User B establish a channel via `ChannelCreateTx` on-chain. Within the channel, they exchange coins, load and execute contracts, deposit and withdraw, and snapshot state. Benefits: aggregation, instant finality through co-signed transactions, in-band messaging, privacy (internal transactions remain hidden; only closing state appears on-chain).

### Client-to-Server

Scenarios like scooter rental, casinos, and coffee shop cards can implement server-side models. Server listens on port and services client state channels. Clients disconnect and reconnect to the same channel anytime. Each session remains private and encrypted.

## Planned extensions

Native multi-currency support for Associate Chains, reflected in State Channels for efficient different-currency transfers.

## Use cases

- Instant payments (Swish/Venmo for events and transportation)
- Loyalty cards (coffee shop cards)
- Open tabs at restaurants/bars
- Micro-paywalls for paid content access
- Pay-as-you-go AI bot interaction
- Pay-as-you-go media streaming with in-band messaging
- Social media content promotion through monetary tips

## Implementation status

End-to-end demos of State Channel use cases scheduled for Spring or early Summer 2026 (post-MainNet), pending funding. Basic Gajumaru State Channel design support since 2019, exemplified by CoinFabrik's merchant demo.

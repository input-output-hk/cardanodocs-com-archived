---
title: What Makes Cardano SL Special?
parent: introduction
order: 3
---

## What Makes Cardano SL Special?

<!-- v0.1.0.0 -->

While there are similarities between Bitcoin and Cardano SL, there are also many
differences between these two cryptocurrencies. The most significant difference
is that Bitcoin is a proof of work type cryptocurrency, while Cardano SL makes
use of a proof of stake approach to reach consensus. This encourages honesty and
long term participation.

### Purpose of a Consensus Algorithm

Consensus algorithms are used to produce new transaction blocks, resulting in an
updated state of the ledger. Whenever someone publishes a block of transactions,
they — or rather, their node that runs the cryptocurrency protocol — have to
attach a proof that they have merited it. Below two types of such proofs are
discussed.

### Proof of Work and Mining

Proof of work is the most common consensus algorithm type for cryptocurrencies.
It originated in Bitcoin, and this is how this cryptocurrency works. To generate
proof of work, a computer has to solve a challenge. The challenge is a
computationally heavy problem which is hard to solve, but the solution is easy
to verify. When a computer on a proof of work based network finds a solution, it
publishes it along with the transactions that the computer has been observing while
cracking the problem. The owner of this computer collects the transaction fees
and a reward for generating a block. The entire process is called *mining*.
Mining is very energy consuming, and the amount of energy needed is constantly increasing,
which can lead to unsound competition.

### Proof of Stake and Minting

Proof of stake is a novel approach to block generation. IOHK scientists led by
[Prof. Aggelos Kiayias](https://iohk.io/team/aggelos-kiayias/) have designed the
first provably secure proof of stake algorithm called Ouroboros. Ouroboros lies
at the heart of Cardano SL. Research team has published a
[white paper](https://iohk.io/research/papers/a-provably-secure-proof-of-stake-blockchain-protocol/)
that is a worthy read for anyone with a background in cryptocurrency theory. The
core idea of proof of stake is that instead of wasting electricity on cracking
computationally heavy problems, a node is selected to mint a new block, with a
probability proportional to the amount of coins this node has. If a node
has positive (&gt; 0) [stake](/cardano/proof-of-stake/#stake), it is called *a
stakeholder*. If a node eventually becomes chosen to mint a block, it is called *a
slot leader*. You can read more about this process in [Proof of Stake in Cardano
SL](/cardano/proof-of-stake/).
---
title: 术语表
parent: ''
order: 4
---

# 术语表

## Ada

我们的货币的名字，为纪念 [Ada
Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace) 而命名。

## 地址

[节点](#节点)的唯一标示符。请阅读[卡尔达诺结算层的地址](/cardano/addresses/)获得更多信息。

## 余额

请阅读[卡尔达诺结算层的余额和权益](/cardano/balance-and-stake/) 获得解释。

## 区块

[账本](#账本)的基础元素。请阅读[卡尔达诺区块](/technical/blocks/)获取技术细节。

## 区块链

请阅读[账本](#账本)。

## 卡尔达诺结算层

卡尔达诺 SL (或者说卡尔达诺结算层) 是由 [IOHK](https://iohk.io/team) 设计和开发的去中心化加密货币。为纪念 [Gerolamo Cardano](https://en.wikipedia.org/wiki/Gerolamo_Cardano) 而命名。

## 掷币

掷币协议是允许两方或多方获得均匀随机值的协议。我们使用掷币协议作为 [SSC](#ssc) 的基础。请阅读[论文](#论文)（第36页）以了解掷币协议的更多详情。

## 一致性算法

分布式系统对于共享数据集合达成一致观点的一种方式。卡尔达诺结算层使用[乌洛波罗斯一致性算法](/cardano/proof-of-stake/)，这是一个基于[权益证明](#权益证明)的算法。

## 加密货币

使用加密协议来生成账本的计算机系统，请阅读[加密货币基础](/introduction/#cryptocurrency-basics)了解更多信息。

## 代达罗斯

卡尔达诺结算层钱包应用。 它为用户提供一个用户界面, 用户可以管理，发送，收取资金等等。请阅读[卡尔达诺结算层钱包应用前端](/technical/wallet-frontend/)获取更多信息。

## 去中心化

通过独立节点进行交互操作的计算机系统的概念。在维护共享数据集合，如账本的情况下，需要对数据的一致性和可靠性达成共识。

## Epoch

我们将知道谁有权利在每个 slot 中生成一个区块的更长的时间段。请阅读[论文](#论文)（第3页）了解技术细节。

## 追随中本聪

一种随机选择权益所有者在区块链中建立一个新区块的机制，根据协议中的股份数量，按比例获得选举机会。

## 保证输出交付

保证输出交付是一种机制，能证明诚实方能保证成功完成多方计算（MPC）。我们在 [SSC](#ssc) 中使用 G.O.D.

## 诚实的大多数

诚实的大多数是指诚实的参与者数量严格大于攻击者数量的情况，即至少 50% + 1 是诚实的大多数。

## Kademlia

请阅读[对等点发现](#对等点发现)。

## 领导者选举

挑选谁将在下一个 epoch 生成区块的过程。将依据领导者的股权比例选出（参见[权益证明](#权益证明), [追随中本聪算法](#追随中本聪算法))。

## 账本

个人所拥有的价值的数据集合。请阅读[论文](#论文)了解技术细节。

## Lovelace

我们的货币的最小单位的名称。为纪念 [Ada
Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace) 而命名。

## 铸币

在[权益证明和铸币](/introduction/#权益证明和铸币)系统中生成新区块的过程。

## 节点

参与分布式协议系统的计算机程序。请阅读[高层次概述](/technical/#高层次概述)获取更多细节。

## 论文

官方协议论文：[乌洛波罗斯：一个可证安全的权益证明区块链协议](https://eprint.iacr.org/2016/889)。请注意，卡尔达诺结算层的实现与论文的实现不同，[请阅读差异](/cardano/differences/)以了解详情。

## 节点发现

节点运行后找到其他节点的方法。我们使用的节点发现基于 Kademlia DHT。请阅读 [ Kademlia 
论文](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf)获得技术细节。


## Plutus

在卡尔达诺中定义智能协议的强类型纯函数式语言。请阅读 [Plutus](/technical/plutus/introduction/) 获取更多细节。

## 权益证明

乌洛波罗斯权益证明算法是[协议](#论文)中最重要的部分。它定义了[节点](#节点)对[账本](#账本)状态达成共识的方式。请阅读[乌洛波罗斯权益证明算法](/cardano/proof-of-stake/)获取更多细节。

## PVSS

公开验证密钥共享模式 (Publicly Verifiable Secret Sharing)是我们在 [SSC](#ssc) 中使用的密码方案。请阅读[卡尔达诺结算层 PVSS](/technical/pvss/) 获取更多细节。

## 富人

有足够股权参与一些行动的权益所有人。具体来说，有三种类型的动作：随机性生成（[slot 领导者选举过程](/technical/leader-selection/)），[重量级权益委派](/technical/delegation/#重量级权益委派)，[更新提案的投票](/cardano/update-mechanism/#应用程序更新：签署和宣布)。

## 签名

一种用来生成我们在[加密货币](#加密货币)中使用的保证任何类型信息真实性证据的方法。

## Slot

在不同节点上显著大于预期的不同时钟数的一小段物理时间。请阅读[论文](#论文)(第4页)获取更多技术细节。

## Slot 领导者

slot 领导者是一个被选举为有权在当前 slot 创建区块的节点。请阅读[论文](#论文)(第7页)获取更多技术细节。

## SSC

SSC (Shared Seed Computation) 是 [Slot 领导者选举](#领导者选举)的一部分。这部分被实现为[保证输出交付](#保证输出交付)的[掷币](#掷币)协议。作为 SSC 的结果，我们得到一个将用于[追随中本聪](#追随中本聪)机制的随机算法。

## 权益

请阅读 [卡尔达诺结算层的余额和权益](/cardano/balance-and-stake/) 章节获取解释。

## 权益所有人

一个拥有正数股权的节点。

## 转账

表示价值转移的数据。请阅读[卡尔达诺结算层的转账](/cardano/transactions/)获取更多细节。

## 转账费用

请阅读[卡尔达诺结算层转账费用](/cardano/transaction-fees/)章节获取解释。

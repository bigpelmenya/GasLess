# GasLess
# Project Overview
Gasless Microtransactions for Social Apps is a decentralized solution built on the Base blockchain to enable seamless, fee-free microtransactions. This project allows users to tip or make small payments on social platforms without paying gas fees, using meta-transactions where a relayer pays for gas. It's designed to empower creators and users, particularly in regions like India, by removing the cost barrier for microtransactions.

# Features
Gasless Transactions: Users can send tips without paying gas fees.
Relayer Node: A relayer submits transactions on behalf of users.
Decentralized Tipping: Ideal for small contributions to content creators on social platforms.
# Technologies Used
Solidity
EIP-712 (Meta-transactions)
Hardhat
Web3.js
Node.js
Express
Base blockchain
GitHub Actions
# How It Works
Users sign a transaction off-chain using EIP-712 without paying gas.
Relayer node processes the signed transaction, submits it to the Base network, and pays the gas.
Tipping: Funds are transferred to the recipient, with the process being seamless for the end-user.

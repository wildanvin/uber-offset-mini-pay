# Uber Offset

This app uses the Toucan Protocol, Google Maps API and the new MiniPay wallet from Opera Browser to offset CO2 emitted by your car rides.

## Live Demo

Checkout the dapp [live](https://uber-offset-mini-pay-nextjs.vercel.app/), it is running on the Celo mainnet so you will need some money to use it. It will be cents I promise! and you will be offsetting some CO2 😁

## Screencast

Watch a demo video on:

- [Youtube](https://youtu.be/P8YNsWUpTR8)
- [tape.xyz](https://tape.xyz/watch/0x014f6f-0x36)

## Scaffold-ETH 2

For the front end I used Scaffold-ETH 2 because I like the different components and details that they have incorporated for dapp development. However, at the moment it doesn't support MiniPay out of the box. So if you fork Scaffold-ETH 2 to start a new project and you want to add support for MiniPay you have to modify:

- `Header.tsx`: at `packages/nextjs/components/Header.tsx`
- `wagmiConnectors.tsx`: at `packages/nextjs/services/web3/wagmiConnectors`

You can modify them to something similar that I have in this repo.

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/wildanvin/uber-offset-mini-pay
cd uber-offset-mini-pay
yarn install
```

2. On a second terminal, start the NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.

# bonk.fun Bundler Bot

A high-performance Solana bot for automated transaction bundling, token creation, and volume generation, leveraging Raydium and Jito for MEV bundles. Designed for advanced users and developers looking to automate and optimize Solana DeFi workflows.

## Features
- Automated creation and bundling of Solana transactions
- - Uses 20 wallets by default for volume and distribution operations
- - Token minting and distribution
- - Volume generation via Raydium launchpad
- - Jito MEV bundle execution
- - Lookup Table (LUT) management for efficient transaction size
- Written in TypeScript, using Solana and Raydium SDKs

## Requirements
- Node.js (v18 or higher recommended)
- Yarn or npm
- Solana CLI tools (for wallet/key management)
- A funded Solana wallet (private key required)

## Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Bonkfun-bundler-bot
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Configure environment variables:**
   - Copy your Solana private key and RPC endpoint into a `.env` file:
     ```env
     PRIVATE_KEY=your_base58_private_key
     RPC_ENDPOINT=https://your.solana.rpc.endpoint
     ```

## Usage
- **Start the main bot:**
  ```bash
  yarn start
  # or
  npm run start
  ```
  
  By default, the bot will generate and use 20 wallets for its operations. You can change this by setting the `DISTRIBUTE_WALLET_NUM` environment variable in your `.env` file:
  ```env
  DISTRIBUTE_WALLET_NUM=20
  ```
- **Other scripts:**
  - `gather`: Collects and consolidates SOL from distributed wallets
  - `closeLut`: Deactivates and closes Lookup Tables
  - `closeWsol`: Closes wrapped SOL accounts

  Example:
  ```bash
  yarn gather
  yarn closeLut
  yarn closeWsol
  ```

## Disclaimer
This bot is intended for educational and research purposes. Use at your own risk. The authors are not responsible for any financial losses or misuse.

## Contact
- Telegram: [@topsecretagent_007](https://t.me/topsecretagent_007)
- Twitter: [@lendon1114](https://twitter.com/lendon1114)

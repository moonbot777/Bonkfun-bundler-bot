import {
  TxVersion,
  getPdaLaunchpadPoolId,
  Curve,
  PlatformConfig,
  LAUNCHPAD_PROGRAM,
  buyExactInInstruction,
  getPdaLaunchpadConfigId,
  getATAAddress,
  getPdaLaunchpadAuth,
  getPdaLaunchpadVaultId,
} from '@raydium-io/raydium-sdk-v2'
import BN from 'bn.js'
import { Connection, Keypair, VersionedTransaction, TransactionMessage, ComputeBudgetProgram, PublicKey, SystemProgram } from '@solana/web3.js'
import { 
  NATIVE_MINT, 
  TOKEN_PROGRAM_ID, 
  getAssociatedTokenAddressSync,
  createAssociatedTokenAccountIdempotentInstruction,
  createSyncNativeInstruction
} from '@solana/spl-token'
import { initSdk } from '../utils/config'
import { createBuyersAta } from './createAta'

export const makeBuyTx = async (connection: Connection, mint: Keypair, buyerKps: Keypair[], lookupTableAddress: PublicKey) => {
  console.log("🚀 ~ makeBuyTx ~ buyerKps:", buyerKps)
  try {
    

  } catch (err) {
    console.error("makeBuyTx error", err);
    throw err;
  }
}

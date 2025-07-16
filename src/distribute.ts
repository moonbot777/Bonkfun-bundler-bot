import { Connection, Keypair, SystemProgram, TransactionMessage, VersionedTransaction, ComputeBudgetProgram, TransactionInstruction } from '@solana/web3.js';
import { createAssociatedTokenAccountIdempotentInstruction, createSyncNativeInstruction, getAssociatedTokenAddressSync, NATIVE_MINT } from "@solana/spl-token";
import { Data, saveDataToFile } from '../utils';
import base58 from 'bs58';

export const distributeSol = async (
  connection: Connection,
  mainKp: Keypair,
  buyerKps: Keypair[],
  solAmountToBuy: number
) => {
  const data: Data[] = []
  const wallets = []
  try {
  
  } catch (error) {
    console.error("Error in makeDistributeTx:", error);
    throw error;
  }
}
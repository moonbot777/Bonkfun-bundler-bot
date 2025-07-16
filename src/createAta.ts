import { ComputeBudgetProgram, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionMessage, VersionedTransaction, sendAndConfirmTransaction } from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  Account,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  getAccount,
  TokenAccountNotFoundError,
  TokenInvalidAccountOwnerError,
  createAssociatedTokenAccountInstruction,
  TokenInvalidMintError,
  TokenInvalidOwnerError,
  createAssociatedTokenAccountIdempotentInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { DISTRIBUTE_WALLET_NUM } from "../constants";


export const makeCreateMainAta = async (connection: Connection, mint: PublicKey, mainKp: Keypair): Promise<Account> => {
  try {
    
  } catch (err) {
    console.log("makeCreateMainAta error ====>", err);
    throw new Error("Failed to create main ATA");
  }
}

export const createBuyersAta = async (
  mint: PublicKey,
  buyerPubkey: PublicKey,
) => {
  try {
    

  } catch (err) {
    console.log("Error in create token ata tx:", err)
  }
}





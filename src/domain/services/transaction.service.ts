import { Injectable, Inject } from '@nestjs/common';
import type { TransactionRepository } from "../../application/interfaces/transaction-repository.interface";
import { Transaction } from "../entities/transaction.entity";

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TransactionRepository')
    private readonly transactionRepository: TransactionRepository,
  ) {}

  public createTransaction(transaction: Transaction): Transaction {
    this.transactionRepository.save(transaction);
    return transaction;
  }

  public getAllTransactions(): Transaction[] {
    return this.transactionRepository.findAll();
  }

  public clearTransactions(): void {
    this.transactionRepository.clear();
  }
}
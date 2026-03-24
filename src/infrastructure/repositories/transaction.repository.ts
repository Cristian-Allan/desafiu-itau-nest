import { Injectable } from '@nestjs/common';
import { TransactionRepository } from 'src/application/interfaces/transaction-repository.interface';
import { Transaction } from 'src/domain/entities/transaction.entity';


@Injectable()
export class TransactionRepositoryImpl implements TransactionRepository {
  private transactions: Transaction[] = [];

  save(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  clear(): void {
    this.transactions = [];
  }

  findAll(): Transaction[] {
    return [...this.transactions];
  }
}

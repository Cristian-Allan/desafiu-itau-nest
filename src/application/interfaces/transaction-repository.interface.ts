import { Transaction } from '../../domain/entities/transaction.entity';

export interface TransactionRepository {
  save(transaction: Transaction): void;
  clear(): void;
  findAll(): Transaction[];
}
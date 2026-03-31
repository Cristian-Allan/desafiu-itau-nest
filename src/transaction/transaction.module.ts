import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction.controller';
import { TransactionRepositoryImpl } from '../infrastructure/repositories/transaction.repository';
import { CreateTransactionUseCase } from '../application/use-cases/transactions/create-transaction.usecase';
import { GetAllTransactionsUseCase } from '../application/use-cases/transactions/get-all-transactions.usecase';
import { ClearTransactionsUseCase } from '../application/use-cases/transactions/clear-transactions.usecase';
import { TransactionService } from '../domain/services/transaction.service';

@Module({
  controllers: [TransactionController],
  providers: [
    {
      provide: 'TransactionRepository',
      useClass: TransactionRepositoryImpl,
    },
    TransactionService,
    CreateTransactionUseCase,
    GetAllTransactionsUseCase,
    ClearTransactionsUseCase,
  ],
})
export class TransactionModule {}
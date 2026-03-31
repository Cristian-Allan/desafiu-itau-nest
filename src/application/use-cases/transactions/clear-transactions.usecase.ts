import { Injectable } from '@nestjs/common';
import { TransactionService } from "../../../domain/services/transaction.service";

@Injectable()
export class ClearTransactionsUseCase {

    constructor(
        private readonly transactionService: TransactionService,
    ) {}

    public execute(): void {
        this.transactionService.clearTransactions();
    }
}
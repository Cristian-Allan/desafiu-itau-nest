import { TransactionRepository } from "src/application/interfaces/transaction-repository.interface";

export class ClearTransactionsUseCase {

    constructor(private readonly transactionRepository: TransactionRepository) {}

    public execute(): void {
        this.transactionRepository.clear();
    }
}
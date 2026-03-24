import { TransactionDTO } from "src/application/dto/transactions.dto";
import { TransactionRepository } from "src/application/interfaces/transaction-repository.interface";
import { Transaction } from "src/domain/entities/transaction.entity";



export class CreateTransactionUseCase {

    constructor(private readonly TransactionRepository: TransactionRepository) {}

    public execute(dto: TransactionDTO): void {
        const transaction = new Transaction(dto.valor, dto.dataHora);
        this.TransactionRepository.save(transaction);
    }
}
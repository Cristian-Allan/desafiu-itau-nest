import { Injectable } from '@nestjs/common';
import { TransactionDTO } from "../../dto/transactions.dto";
import { Transaction } from "../../../domain/entities/transaction.entity";
import { TransactionService } from "../../../domain/services/transaction.service";

@Injectable()
export class CreateTransactionUseCase {

    constructor(
        private readonly transactionService: TransactionService,
    ) {}

    public execute(dto: TransactionDTO): Transaction {
        const transaction = new Transaction(dto.valor, new Date(dto.dataHora));
        return this.transactionService.createTransaction(transaction);
    }
}
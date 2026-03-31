import { Injectable } from '@nestjs/common';
import { Transaction } from "../../../domain/entities/transaction.entity";
import { PaginatedResponseDTO } from "../../dto/paginated-response.dto";
import { TransactionService } from "../../../domain/services/transaction.service";

@Injectable()
export class GetAllTransactionsUseCase {

    constructor(
        private readonly transactionService: TransactionService,
    ) {}

    public execute(page: number = 1, limit: number = 10): PaginatedResponseDTO<Transaction> {
        const allTransactions = this.transactionService.getAllTransactions();
        const total = allTransactions.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const data = allTransactions.slice(startIndex, endIndex);

        return new PaginatedResponseDTO(data, page, limit, total);
    }
}
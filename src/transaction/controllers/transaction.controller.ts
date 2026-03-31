import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { TransactionDTO } from "../../application/dto/transactions.dto";
import { PaginatedResponseDTO } from "../../application/dto/paginated-response.dto";
import { CreateTransactionUseCase } from "../../application/use-cases/transactions/create-transaction.usecase";
import { GetAllTransactionsUseCase } from "../../application/use-cases/transactions/get-all-transactions.usecase";
import { ClearTransactionsUseCase } from "../../application/use-cases/transactions/clear-transactions.usecase";
import { Transaction } from "../../domain/entities/transaction.entity";

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {

    constructor(
        private readonly createTransactionUseCase: CreateTransactionUseCase,
        private readonly getAllTransactionsUseCase: GetAllTransactionsUseCase,
        private readonly clearTransactionsUseCase: ClearTransactionsUseCase,
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar uma nova transação' })
    @ApiResponse({ status: 201, description: 'Transação criada com sucesso', type: Transaction })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    public createTransaction(@Body() transactionDto: TransactionDTO): Transaction {
        return this.createTransactionUseCase.execute(transactionDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Listar transações com paginação' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Página (padrão: 1)' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Itens por página (padrão: 10)' })
    @ApiResponse({ status: 200, description: 'Lista de transações', type: PaginatedResponseDTO })
    public getAllTransactions(
        @Query('page') page: string = '1',
        @Query('limit') limit: string = '10'
    ): PaginatedResponseDTO<Transaction> {
        const pageNum = Number.parseInt(page, 10) || 1;
        const limitNum = Number.parseInt(limit, 10) || 10;
        return this.getAllTransactionsUseCase.execute(pageNum, limitNum);
    }

    @Delete()
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Limpar todas as transações' })
    @ApiResponse({ status: 204, description: 'Transações limpas com sucesso' })
    public clearTransactions(): void {
        this.clearTransactionsUseCase.execute();
    }

}
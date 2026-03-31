import { Injectable, Inject } from '@nestjs/common';
import { StatisticsResponseDTO } from "../../dto/statistics-response.dto";
import type { TransactionRepository } from "../../interfaces/transaction-repository.interface";
import { StatisticsService } from '../../../domain/services/statistics.service';

@Injectable()
export class GetStatisticsUseCase {

    constructor(@Inject('TransactionRepository') private readonly transactionRepository: TransactionRepository) {}

    public execute(): StatisticsResponseDTO {
        const transactions = this.transactionRepository.findAll();
        const recentTransactions = transactions.filter(transaction => transaction.isRecent());
        const statistics = StatisticsService.calculateStatistics(recentTransactions);

        return new StatisticsResponseDTO(statistics.count, statistics.sum, statistics.avg, statistics.min, statistics.max);
    }
}
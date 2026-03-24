import { StatisticsResponseDTO } from "src/application/dto/statistics-response.dto";
import { TransactionRepository } from "src/application/interfaces/transaction-repository.interface";
import { StatisticsService } from '../../../domain/services/statistics.service';


export class GetStatisticsUseCase {

    constructor(private readonly transactionRepository: TransactionRepository) {}

    public execute(): StatisticsResponseDTO {
        const transactions = this.transactionRepository.findAll();
        const recentTransactions = transactions.filter(transaction => transaction.isRecent());
        const statistics = StatisticsService.calculateStatistics(recentTransactions);

        return new StatisticsResponseDTO(statistics.count, statistics.sum, statistics.avg, statistics.min, statistics.max);
        
    }
}
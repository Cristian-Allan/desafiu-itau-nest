import { Transaction } from '../entities/transaction.entity';

export class StatisticsService {
  public static calculateStatistics(transactions: Transaction[]): {
    count: number;
    sum: number;
    avg: number;
    min: number;
    max: number;
  } {
    if (transactions.length === 0) {
      return { count: 0, sum: 0, avg: 0, min: 0, max: 0 };
    }

    const values = transactions.map(t => t.getValor());
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);

    return { count: transactions.length, sum, avg, min, max };
  }
}
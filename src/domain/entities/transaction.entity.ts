import { TransactionExceptions } from "../exceptions/transactions.exceptions";

export class Transaction {
  private readonly valor: number;
  private readonly dataHora: Date;
  private static readonly RECENT_TIME_LIMIT_MS = 60 * 1000;

  constructor(valor: number, dataHora: Date) {
    this.validate(valor, dataHora);

    this.valor = valor;
    this.dataHora = dataHora;
  }

  public validate(valor: number, dataHora: Date): void {
    if (valor <= 0) {
      throw TransactionExceptions.ERROR_INVALID_VALUE;
    }

    const now = new Date();

    if (dataHora.getTime() > now.getTime()) {
      throw TransactionExceptions.ERROR_FUTURE_DATE;
    }
  }

  public getValor(): number {
    return this.valor;
  }

  public getDataHora(): Date {
    return this.dataHora;
  }

  public isRecent(): boolean {
    const now = new Date();
    const diff = now.getTime() - this.dataHora.getTime();

    return diff <= Transaction.RECENT_TIME_LIMIT_MS;
  }
}
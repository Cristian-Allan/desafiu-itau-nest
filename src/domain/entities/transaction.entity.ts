
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
      throw new Error('O valor da transação não pode ser negativo.');
    }

    const now = new Date();

    if (dataHora.getTime() > now.getTime()) {
      throw new Error('A data e hora da transação não podem estar no futuro.');
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
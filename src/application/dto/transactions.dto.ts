import { IsDateString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class TransactionDTO {
    @IsNotEmpty({ message: 'O valor da transação é obrigatório.' })
    @IsNumber({}, { message: 'O valor da transação deve ser um número.' })
    @Min(0.01, { message: 'O valor da transação não pode ser negativo.' })
    valor: number;

    @IsNotEmpty({ message: 'A data e hora da transação são obrigatórias.' })
    @IsDateString({}, { message: 'A data e hora da transação não são válidas.' })
    dataHora: string;

    constructor(valor: number, dataHora: string) {
        this.valor = valor;
        this.dataHora = dataHora;
    }
}
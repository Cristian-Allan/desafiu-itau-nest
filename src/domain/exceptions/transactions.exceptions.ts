import { BadRequestException, HttpException } from '@nestjs/common';

type TransactionExceptionKey = 'ERROR_INVALID_VALUE' | 'ERROR_FUTURE_DATE';

export const TransactionExceptions: Record<
  TransactionExceptionKey,
  HttpException
> = {
  ERROR_INVALID_VALUE: new BadRequestException({
    message: {
      pt_br: 'O valor da transação não pode ser negativo.',
      en: 'The transaction value cannot be negative.',
    },
    statusCode: 400,
    token: 'ERROR_INVALID_VALUE',
  }),
  ERROR_FUTURE_DATE: new BadRequestException({
    message: {
      pt_br: 'A data e hora da transação não podem estar no futuro.',
      en: 'The transaction date and time cannot be in the future.',
    },
    statusCode: 400,
    token: 'ERROR_FUTURE_DATE',
  }),
};

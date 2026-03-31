import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDTO<T> {
  @ApiProperty({ description: 'Lista de itens' })
  data: T[];

  @ApiProperty({ description: 'Página atual', example: 1 })
  page: number;

  @ApiProperty({ description: 'Itens por página', example: 10 })
  limit: number;

  @ApiProperty({ description: 'Total de itens', example: 100 })
  total: number;

  @ApiProperty({ description: 'Total de páginas', example: 10 })
  totalPages: number;

  constructor(data: T[], page: number, limit: number, total: number) {
    this.data = data;
    this.page = page;
    this.limit = limit;
    this.total = total;
    this.totalPages = Math.ceil(total / limit);
  }
}
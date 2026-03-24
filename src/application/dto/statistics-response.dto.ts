export class StatisticsResponseDTO {

  constructor(
    public readonly count: number,
    public readonly sum: number,
    public readonly avg: number,
    public readonly min: number,
    public readonly max: number,
  ) {}
}
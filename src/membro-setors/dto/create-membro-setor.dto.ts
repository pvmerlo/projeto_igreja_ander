import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMembroSetorDto {
  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  dataEntrada: Date;

  @Type(() => Date)
  @IsDate()
  dataSaida?: Date;

  @IsInt()
  @IsNumber()
  setorId: number;

  @IsInt()
  @IsNumber()
  membroSetorId: number;
}

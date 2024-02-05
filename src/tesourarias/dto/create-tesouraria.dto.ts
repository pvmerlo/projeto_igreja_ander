import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTesourariaDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoMovimentacao: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  valor: number;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataMotimentacao: Date;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  comunidadeId: number;

  @IsInt()
  @IsPositive()
  responsavelId?: number;
}

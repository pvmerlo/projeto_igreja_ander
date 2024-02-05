import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDizimoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  meses: string;

  @IsNumber()
  @IsPositive()
  valor: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  tipoPagamento: string;

  @IsPositive()
  @IsInt()
  pessoaId: number;
}

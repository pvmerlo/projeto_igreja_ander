import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEstoqueDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantidade: number;

  @IsNumber()
  @IsPositive()
  setorId?: number;

  @IsInt()
  @IsPositive()
  responsavelId?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  comunidadeId: number;
}

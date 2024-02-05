import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSetorDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  setor: string;

  @IsNumber()
  @IsPositive()
  responsavelId?: number;

  @IsNumber()
  @IsPositive()
  comunidadeId: number;
}

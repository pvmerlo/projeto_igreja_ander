import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateComunidadeDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nomeComunidade: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsPositive()
  @IsInt()
  responsavelId: number;
}

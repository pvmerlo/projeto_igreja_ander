import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContatoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  celular: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  telContato: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsPositive()
  @IsInt()
  pessoaId: number;
}

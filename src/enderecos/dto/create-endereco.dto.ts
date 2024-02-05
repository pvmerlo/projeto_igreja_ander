import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  cep: string;

  //   @MaxLength(50)
  //   @IsString()
  //   @IsNotEmpty()
  //   estado: string;

  //   @MaxLength(255)
  //   @IsString()
  //   @IsNotEmpty()
  //   cidade: string;

  //   @MaxLength(255)
  //   @IsString()
  //   @IsNotEmpty()
  //   bairro: string;

  //   @MaxLength(255)
  //   @IsString()
  //   @IsNotEmpty()
  //   rua: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  numero: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  referencia?: string;

  @IsPositive()
  @IsInt()
  pessoaId: number;
}

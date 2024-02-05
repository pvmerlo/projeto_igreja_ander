import { HttpStatus } from '@nestjs/common';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateMembroTurmaDto {
  @IsInt()
  @IsNumber()
  turmaId: number;

  @IsInt()
  @IsNumber()
  membroId: number;

  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  status: string;
}

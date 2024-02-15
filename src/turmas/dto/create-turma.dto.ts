import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateTurmaDto {
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataInicio: Date;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataTermino: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  turma: string;

  @IsPositive()
  @IsInt()
  professorId: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  setorId: number;
}

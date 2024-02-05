import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateTiposEventoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoEvento: string;
}

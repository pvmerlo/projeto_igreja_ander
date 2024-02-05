import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTiposSacramentoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoSacramento: string;
}

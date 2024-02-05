import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposSacramentoDto } from './create-tipos-sacramento.dto';

export class UpdateTiposSacramentoDto extends PartialType(CreateTiposSacramentoDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposEventoDto } from './create-tipos-evento.dto';

export class UpdateTiposEventoDto extends PartialType(CreateTiposEventoDto) {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposEventosService } from './tipos-eventos.service';
import { CreateTiposEventoDto } from './dto/create-tipos-evento.dto';
import { UpdateTiposEventoDto } from './dto/update-tipos-evento.dto';

@Controller('tipos-eventos')
export class TiposEventosController {
  constructor(private readonly tiposEventosService: TiposEventosService) {}

  @Post()
  create(@Body() createTiposEventoDto: CreateTiposEventoDto) {
    return this.tiposEventosService.create(createTiposEventoDto);
  }

  @Get()
  findAll() {
    return this.tiposEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposEventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposEventoDto: UpdateTiposEventoDto) {
    return this.tiposEventosService.update(+id, updateTiposEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposEventosService.remove(+id);
  }
}

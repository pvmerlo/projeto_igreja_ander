import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TiposSacramentosService } from './tipos-sacramentos.service';
import { CreateTiposSacramentoDto } from './dto/create-tipos-sacramento.dto';
import { UpdateTiposSacramentoDto } from './dto/update-tipos-sacramento.dto';

@Controller('tipos-sacramentos')
export class TiposSacramentosController {
  constructor(
    private readonly tiposSacramentosService: TiposSacramentosService,
  ) {}

  @Post()
  create(@Body() createTiposSacramentoDto: CreateTiposSacramentoDto) {
    return this.tiposSacramentosService.create(createTiposSacramentoDto);
  }

  @Get()
  findAll() {
    return this.tiposSacramentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposSacramentosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTiposSacramentoDto: UpdateTiposSacramentoDto,
  ) {
    return this.tiposSacramentosService.update(+id, updateTiposSacramentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposSacramentosService.remove(+id);
  }
}

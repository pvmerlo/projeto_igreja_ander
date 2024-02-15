import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembroSetorsService } from './membro-setors.service';
import { CreateMembroSetorDto } from './dto/create-membro-setor.dto';
import { UpdateMembroSetorDto } from './dto/update-membro-setor.dto';

@Controller('membro-setors')
export class MembroSetorsController {
  constructor(private readonly membroSetorsService: MembroSetorsService) {}

  @Post()
  create(@Body() createMembroSetorDto: CreateMembroSetorDto) {
    return this.membroSetorsService.create(createMembroSetorDto);
  }

  @Get()
  findAll() {
    return this.membroSetorsService.findAll();
  }

  @Get(':setorId/:membroId')
  findOne(
    @Param('setorId') setorId: number,
    @Param('membroId') membroId: number,
  ) {
    return this.membroSetorsService.findOne(setorId, membroId);
  }

  @Patch(':setorId/:membroId')
  update(
    @Param('setorId') setorId: number,
    @Param('membroId') membroId: number,
    @Body() updateMembroSetorDto: UpdateMembroSetorDto,
  ) {
    return this.membroSetorsService.update(
      setorId,
      membroId,
      updateMembroSetorDto,
    );
  }

  @Delete(':setorId/:membroId')
  remove(
    @Param('setorId') setorId: number,
    @Param('membroId') membroId: number,
  ) {
    return this.membroSetorsService.remove(setorId, membroId);
  }
}

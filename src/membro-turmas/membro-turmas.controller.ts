import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembroTurmasService } from './membro-turmas.service';
import { CreateMembroTurmaDto } from './dto/create-membro-turma.dto';
import { UpdateMembroTurmaDto } from './dto/update-membro-turma.dto';

@Controller('membro-turmas')
export class MembroTurmasController {
  constructor(private readonly membroTurmasService: MembroTurmasService) {}

  @Post()
  create(@Body() createMembroTurmaDto: CreateMembroTurmaDto) {
    return this.membroTurmasService.create(createMembroTurmaDto);
  }

  @Get()
  findAll() {
    return this.membroTurmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membroTurmasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembroTurmaDto: UpdateMembroTurmaDto) {
    return this.membroTurmasService.update(+id, updateMembroTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membroTurmasService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembroSetorsService } from './MembroSetorsService';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membroSetorsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMembroSetorDto: UpdateMembroSetorDto,
  ) {
    return this.membroSetorsService.update(+id, updateMembroSetorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membroSetorsService.remove(+id);
  }
}

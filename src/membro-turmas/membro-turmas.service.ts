import { Injectable } from '@nestjs/common';
import { CreateMembroTurmaDto } from './dto/create-membro-turma.dto';
import { UpdateMembroTurmaDto } from './dto/update-membro-turma.dto';

@Injectable()
export class MembroTurmasService {
  create(createMembroTurmaDto: CreateMembroTurmaDto) {
    return 'This action adds a new membroTurma';
  }

  findAll() {
    return `This action returns all membroTurmas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membroTurma`;
  }

  update(id: number, updateMembroTurmaDto: UpdateMembroTurmaDto) {
    return `This action updates a #${id} membroTurma`;
  }

  remove(id: number) {
    return `This action removes a #${id} membroTurma`;
  }
}

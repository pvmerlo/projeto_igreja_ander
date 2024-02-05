import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from './errors';

@Injectable()
export class PessoasService {
  constructor(private prismaService: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDto) {
    const result = await this.prismaService.$transaction([
      this.prismaService.pessoa.create({
        data: {
          nome: createPessoaDto.nome,
          cpf: createPessoaDto.cpf,
          dataNascimento: createPessoaDto.dataNascimento,
          sexo: createPessoaDto.sexo,
          comunidadeId: createPessoaDto.comunidadeId,
        },
      }),
    ]);
    return result[0];
  }
  findAll() {
    return this.prismaService.pessoa.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.pessoa.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`People with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    try {
      return await this.prismaService.pessoa.update({
        where: { id },
        data: updatePessoaDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`People with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.pessoa.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`People with ID ${id} not found`);
      }
      throw error;
    }
  }
}

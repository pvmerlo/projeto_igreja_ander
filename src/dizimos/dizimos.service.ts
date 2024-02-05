import { Injectable } from '@nestjs/common';
import { UpdateDizimoDto } from './dto/update-dizimo.dto';
import { NotFoundError } from 'src/pessoas/errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDizimoDto } from './dto/create-dizimo.dto';

@Injectable()
export class DizimosService {
  constructor(private prismaService: PrismaService) {}

  async create(createDizimoDto: CreateDizimoDto) {
    const pessoa = await this.prismaService.pessoa.findUnique({
      where: { id: createDizimoDto.pessoaId },
    });
    if (!pessoa) {
      throw new NotFoundError('People not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.dizimo.create({
        data: {
          meses: createDizimoDto.meses,
          valor: createDizimoDto.valor,
          tipoPagamento: createDizimoDto.tipoPagamento,
          pessoaId: createDizimoDto.pessoaId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.dizimo.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.dizimo.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Dizimo ID ${id} Não existe`);
      }
      throw error;
    }
  }

  async update(id: number, updateDizimoDto: UpdateDizimoDto) {
    try {
      return await this.prismaService.dizimo.update({
        where: { id },
        data: updateDizimoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Dizimo with ID ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      return await this.prismaService.dizimo.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Dizimo with ID ${id} not found`);
      }
      throw error;
    }
  }
}

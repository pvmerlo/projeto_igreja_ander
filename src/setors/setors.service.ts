import { Injectable } from '@nestjs/common';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { NotFoundError } from 'src/pessoas/errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSetorDto } from './dto/create-setor.dto';

@Injectable()
export class SetorsService {
  constructor(private prismaService: PrismaService) {}

  async create(createSetorDto: CreateSetorDto) {
    const comunidade = await this.prismaService.comunidade.findUnique({
      where: { id: createSetorDto.comunidadeId },
    });
    if (!comunidade) {
      throw new NotFoundError('People not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.setor.create({
        data: {
          descricao: createSetorDto.descricao,
          setor: createSetorDto.setor,
          responsavelId: createSetorDto.responsavelId,
          comunidadeId: createSetorDto.comunidadeId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.setor.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.setor.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Setor ID ${id} Não existe`);
      }
      throw error;
    }
  }

  async update(id: number, updateSetorDto: UpdateSetorDto) {
    try {
      return await this.prismaService.setor.update({
        where: { id },
        data: updateSetorDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Setor with ID ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      return await this.prismaService.setor.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Setor with ID ${id} not found`);
      }
      throw error;
    }
  }
}

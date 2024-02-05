import { Injectable } from '@nestjs/common';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { NotFoundError } from 'src/pessoas/errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';

@Injectable()
export class EstoquesService {
  constructor(private prismaService: PrismaService) {}

  async create(createEstoqueDto: CreateEstoqueDto) {
    const comunidade = await this.prismaService.comunidade.findUnique({
      where: { id: createEstoqueDto.comunidadeId },
    });
    if (!comunidade) {
      throw new NotFoundError('Comunidade not found');
    }

    const setor = await this.prismaService.setor.findUnique({
      where: { id: createEstoqueDto.setorId },
    });
    if (!setor) {
      throw new NotFoundError('setor not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.estoque.create({
        data: {
          produto: createEstoqueDto.produto,
          quantidade: createEstoqueDto.quantidade,
          setorId: createEstoqueDto.setorId,
          responsavelId: createEstoqueDto.responsavelId,
          comunidadeId: createEstoqueDto.comunidadeId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.estoque.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.estoque.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`estoque ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    try {
      return await this.prismaService.estoque.update({
        where: { id },
        data: updateEstoqueDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Estoque with ID ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      return await this.prismaService.estoque.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Estoque with ID ${id} not found`);
      }
      throw error;
    }
  }
}

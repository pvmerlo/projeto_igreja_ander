import { Injectable } from '@nestjs/common';
import { CreateMembroSetorDto } from './dto/create-membro-setor.dto';
import { UpdateMembroSetorDto } from './dto/update-membro-setor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/pessoas/errors';

@Injectable()
export class MembroSetorsService {
  constructor(private prismaService: PrismaService) {}

  async create(createMembroSetorDto: CreateMembroSetorDto) {
    const setor = await this.prismaService.setor.findUnique({
      where: { id: createMembroSetorDto.setorId },
    });
    if (!setor) {
      throw new NotFoundError('setor not found');
    }
    const membro = await this.prismaService.pessoa.findUnique({
      where: { id: createMembroSetorDto.membroSetorId },
    });
    if (!membro) {
      throw new NotFoundError('pessoa not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.membroSetor.create({
        data: {
          dataEntrada: createMembroSetorDto.dataEntrada,
          dataSaida: createMembroSetorDto.dataSaida,
          setorId: createMembroSetorDto.setorId,
          membroSetorId: createMembroSetorDto.membroSetorId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.membroSetor.findMany();
  }

  async findOne(setorId: number, membroSetorId: number) {
    try {
      const membroSetor = await this.prismaService.membroSetor.findFirst({
        where: {
          AND: [
            {
              setorId,
            },
            {
              membroSetorId,
            },
          ],
        },
      });
      return membroSetor;
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `membro ${membroSetorId} no setor ${setorId} Não existe`,
        );
      }
      throw error;
    }
  }

  async update(
    setorId: number,
    membroSetorId: number,
    updateMembroSetorDto: UpdateMembroSetorDto,
  ) {
    try {
      const membroSetor = await this.prismaService.membroSetor.update({
        where: {
          AND: [
            {
              setorId,
            },
            {
              membroSetorId,
            },
          ],
        },
        data: updateMembroSetorDto,
      });
      return membroSetor;
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `membro ${membroSetorId} no setor ${setorId} Não existe`,
        );
      }
      throw error;
    }
  }

  async remove(setorId: number, membroSetorId: number) {
    try {
      return await this.prismaService.membroSetor.delete({
        where: {
          AND: [
            {
              setorId,
            },
            {
              membroSetorId,
            },
          ],
        },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `membro ${membroSetorId} no setor ${setorId} Não existe`,
        );
      }
      throw error;
    }
  }
}

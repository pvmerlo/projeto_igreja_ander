import { Injectable } from '@nestjs/common';
import { CreateMembroSetorDto } from './dto/create-membro-setor.dto';
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
    } finally {
    }
  }
  catch(error) {
    console.error(error);
    if (error.code === 'P2025') {
      throw new NotFoundError(`membro setor ID ${id} Não existe`);
    }
    throw error;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/pessoas/errors';

@Injectable()
export class TurmasService {
  constructor(private prismaService: PrismaService) {}

  async create(createTurmaDto: CreateTurmaDto) {
    const professor = await this.prismaService.pessoa.findUnique({
      where: { id: createTurmaDto.professorId },
    });
    if (!professor) {
      throw new NotFoundError('People not found');
    }

    const setor = await this.prismaService.setor.findUnique({
      where: {
        id: createTurmaDto.setorId,
      },
    });
    if (!setor) {
      throw new NotFoundError('setor not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.turma.create({
        data: {
          dataInicio: createTurmaDto.dataInicio,
          dataTermino: createTurmaDto.dataTermino,
          turma: createTurmaDto.turma,
          professorId: createTurmaDto.professorId,
          setorId: createTurmaDto.setorId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.turma.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.turma.findFirstOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Turma ID ${id} not found`);
      }
    }
  }

  async update(id: number, updateTurmaDto: UpdateTurmaDto) {
    try {
      return await this.prismaService.turma.update({
        where: { id },
        data: updateTurmaDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`turma with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.turma.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`turma with ID ${id} not found`);
      }
      throw error;
    }
  }
}

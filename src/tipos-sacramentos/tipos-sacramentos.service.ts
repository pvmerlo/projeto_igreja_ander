import { Injectable } from '@nestjs/common';
import { CreateTiposSacramentoDto } from './dto/create-tipos-sacramento.dto';
import { UpdateTiposSacramentoDto } from './dto/update-tipos-sacramento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/pessoas/errors';

@Injectable()
export class TiposSacramentosService {
  constructor(private prismaService: PrismaService) {}

  async create(createTiposSacramentoDto: CreateTiposSacramentoDto) {
    const result = await this.prismaService.$transaction([
      this.prismaService.tipoSacramento.create({
        data: {
          tipoSacramento: createTiposSacramentoDto.tipoSacramento,
        },
      }),
    ]);
    return result[0];
  }
  findAll() {
    return this.prismaService.tipoSacramento.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.tipoSacramento.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo sacramento with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateTiposSacramento: UpdateTiposSacramentoDto) {
    try {
      return await this.prismaService.tipoSacramento.update({
        where: { id },
        data: updateTiposSacramento,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo Sacramento with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.tipoSacramento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo Sacramento with ID ${id} not found`);
      }
      throw error;
    }
  }
}

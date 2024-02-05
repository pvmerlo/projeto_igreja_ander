import { Injectable } from '@nestjs/common';
import { CreateTiposEventoDto } from './dto/create-tipos-evento.dto';
import { UpdateTiposEventoDto } from './dto/update-tipos-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/pessoas/errors';

@Injectable()
export class TiposSacramentosService {
  constructor(private prismaService: PrismaService) {}

  async create(createTiposEventoDto: CreateTiposEventoDto) {
    const result = await this.prismaService.$transaction([
      this.prismaService.tipoEvento.create({
        data: {
          tipoEvento: createTiposEventoDto.tipoEvento,
        },
      }),
    ]);
    return result[0];
  }
  findAll() {
    return this.prismaService.tipoEvento.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.tipoEvento.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo Evento with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateTiposSacramento: UpdateTiposEventoDto) {
    try {
      return await this.prismaService.tipoEvento.update({
        where: { id },
        data: updateTiposSacramento,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo evento with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.tipoEvento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tipo evento with ID ${id} not found`);
      }
      throw error;
    }
  }
}

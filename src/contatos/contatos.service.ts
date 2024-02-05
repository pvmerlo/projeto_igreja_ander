import { Injectable } from '@nestjs/common';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { NotFoundError } from 'src/pessoas/errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContatoDto } from './dto/create-contato.dto';

@Injectable()
export class ContatosService {
  constructor(private prismaService: PrismaService) {}

  async create(createContatoDto: CreateContatoDto) {
    const pessoa = await this.prismaService.pessoa.findUnique({
      where: { id: createContatoDto.pessoaId },
    });
    if (!pessoa) {
      throw new NotFoundError('People not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.contato.create({
        data: {
          celular: createContatoDto.celular,
          telContato: createContatoDto.telContato,
          email: createContatoDto.email,
          pessoaId: createContatoDto.pessoaId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.contato.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.contato.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contato ID ${id} Não existe`);
      }
      throw error;
    }
  }

  async update(id: number, updateContatoDto: UpdateContatoDto) {
    try {
      return await this.prismaService.contato.update({
        where: { id },
        data: updateContatoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contato with ID ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      return await this.prismaService.contato.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contato with ID ${id} not found`);
      }
      throw error;
    }
  }
}

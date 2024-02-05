import { Module } from '@nestjs/common';
import { MembroTurmasService } from './membro-turmas.service';
import { MembroTurmasController } from './membro-turmas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [MembroTurmasController],
  providers: [MembroTurmasService],
})
export class MembroTurmasModule {}

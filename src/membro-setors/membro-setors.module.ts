import { Module } from '@nestjs/common';
import { MembroSetorsService } from './MembroSetorsService';
import { MembroSetorsController } from './membro-setors.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [MembroSetorsController],
  providers: [MembroSetorsService],
})
export class MembroSetorsModule {}

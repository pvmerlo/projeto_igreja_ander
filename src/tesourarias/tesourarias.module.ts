import { Module } from '@nestjs/common';
import { TesourariasService } from './tesourarias.service';
import { TesourariasController } from './tesourarias.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [TesourariasController],
  providers: [TesourariasService],
})
export class TesourariasModule {}

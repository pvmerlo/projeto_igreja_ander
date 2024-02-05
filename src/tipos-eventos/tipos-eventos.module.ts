import { Module } from '@nestjs/common';
import { TiposEventosService } from './tipos-eventos.service';
import { TiposEventosController } from './tipos-eventos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TiposEventosController],
  providers: [TiposEventosService],
})
export class TiposEventosModule {}

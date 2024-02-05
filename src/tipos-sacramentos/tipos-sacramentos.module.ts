import { Module } from '@nestjs/common';
import { TiposSacramentosService } from './tipos-sacramentos.service';
import { TiposSacramentosController } from './tipos-sacramentos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TiposSacramentosController],
  providers: [TiposSacramentosService],
})
export class TiposSacramentosModule {}

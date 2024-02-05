import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { ContatosModule } from './contatos/contatos.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { TiposSacramentosModule } from './tipos-sacramentos/tipos-sacramentos.module';
import { TiposEventosModule } from './tipos-eventos/tipos-eventos.module';
import { SacramentosModule } from './sacramentos/sacramentos.module';
import { DizimosModule } from './dizimos/dizimos.module';
import { ComunidadesModule } from './comunidades/comunidades.module';
import { CalendariosModule } from './calendarios/calendarios.module';
import { SetorsModule } from './setors/setors.module';
import { MembroSetorsModule } from './membro-setors/membro-setors.module';
import { TurmasModule } from './turmas/turmas.module';
import { MembroTurmasModule } from './membro-turmas/membro-turmas.module';
import { TesourariasModule } from './tesourarias/tesourarias.module';
import { EstoquesModule } from './estoques/estoques.module';

@Module({
  imports: [
    PessoasModule,
    ContatosModule,
    EnderecosModule,
    TiposSacramentosModule,
    TiposEventosModule,
    SacramentosModule,
    DizimosModule,
    ComunidadesModule,
    CalendariosModule,
    SetorsModule,
    MembroSetorsModule,
    TurmasModule,
    MembroTurmasModule,
    TesourariasModule,
    EstoquesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

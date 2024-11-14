import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlunoMaisDadosPageRoutingModule } from './pagina-aluno-mais-dados-routing.module';

import { PaginaAlunoMaisDadosPage } from './pagina-aluno-mais-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlunoMaisDadosPageRoutingModule
  ],
  declarations: [PaginaAlunoMaisDadosPage]
})
export class PaginaAlunoMaisDadosPageModule {}

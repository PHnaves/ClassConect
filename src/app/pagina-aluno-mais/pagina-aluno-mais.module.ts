import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlunoMaisPageRoutingModule } from './pagina-aluno-mais-routing.module';

import { PaginaAlunoMaisPage } from './pagina-aluno-mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlunoMaisPageRoutingModule
  ],
  declarations: [PaginaAlunoMaisPage]
})
export class PaginaAlunoMaisPageModule {}

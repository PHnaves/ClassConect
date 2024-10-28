import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlunoMateriaPageRoutingModule } from './pagina-aluno-materia-routing.module';

import { PaginaAlunoMateriaPage } from './pagina-aluno-materia.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlunoMateriaPageRoutingModule
  ],
  declarations: [PaginaAlunoMateriaPage]
})
export class PaginaAlunoMateriaPageModule {}

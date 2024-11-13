import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlunoAtividadesMaisPageRoutingModule } from './pagina-aluno-atividades-mais-routing.module';

import { PaginaAlunoAtividadesMaisPage } from './pagina-aluno-atividades-mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlunoAtividadesMaisPageRoutingModule
  ],
  declarations: [PaginaAlunoAtividadesMaisPage]
})
export class PaginaAlunoAtividadesMaisPageModule {}

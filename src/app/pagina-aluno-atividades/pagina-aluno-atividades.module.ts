import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlunoAtividadesPageRoutingModule } from './pagina-aluno-atividades-routing.module';

import { PaginaAlunoAtividadesPage } from './pagina-aluno-atividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlunoAtividadesPageRoutingModule
  ],
  declarations: [PaginaAlunoAtividadesPage]
})
export class PaginaAlunoAtividadesPageModule {}

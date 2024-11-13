import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlunoAtividadesMaisPage } from './pagina-aluno-atividades-mais.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlunoAtividadesMaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlunoAtividadesMaisPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlunoAtividadesPage } from './pagina-aluno-atividades.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlunoAtividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlunoAtividadesPageRoutingModule {}

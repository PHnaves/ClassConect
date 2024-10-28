import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlunoMaisPage } from './pagina-aluno-mais.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlunoMaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlunoMaisPageRoutingModule {}

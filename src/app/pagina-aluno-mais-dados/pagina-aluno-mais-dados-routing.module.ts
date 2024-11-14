import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlunoMaisDadosPage } from './pagina-aluno-mais-dados.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlunoMaisDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlunoMaisDadosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlunoMateriaPage } from './pagina-aluno-materia.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlunoMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlunoMateriaPageRoutingModule {}

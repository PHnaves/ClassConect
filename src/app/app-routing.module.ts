import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-aluno-atividades',
    loadChildren: () => import('./pagina-aluno-atividades/pagina-aluno-atividades.module').then( m => m.PaginaAlunoAtividadesPageModule)
  },
  {
    path: 'pagina-aluno-materia',
    loadChildren: () => import('./pagina-aluno-materia/pagina-aluno-materia.module').then( m => m.PaginaAlunoMateriaPageModule)
  },
  {
    path: 'pagina-aluno-mais',
    loadChildren: () => import('./pagina-aluno-mais/pagina-aluno-mais.module').then( m => m.PaginaAlunoMaisPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

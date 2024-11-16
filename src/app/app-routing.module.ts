import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
  },
  {
    path: 'pagina-aluno-atividades-mais',
    loadChildren: () => import('./pagina-aluno-atividades-mais/pagina-aluno-atividades-mais.module').then( m => m.PaginaAlunoAtividadesMaisPageModule)
  },
  {
    path: 'pagina-aluno-mais-dados',
    loadChildren: () => import('./pagina-aluno-mais-dados/pagina-aluno-mais-dados.module').then( m => m.PaginaAlunoMaisDadosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

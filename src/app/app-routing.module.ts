import { AlunosCadastrarComponent } from './alunos-page/alunos-cadastrar/alunos-cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AlunosPageComponent } from './alunos-page/alunos-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'alunos', component: AlunosPageComponent
  },
  { path: 'home', component: HomePageComponent
  },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

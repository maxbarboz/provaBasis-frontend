import { DisciplinasPageComponent } from './disciplinas-page/disciplinas-page.component';
import { AlunosCadastrarComponent } from './alunos-page/alunos-cadastrar/alunos-cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AlunosPageComponent } from './alunos-page/alunos-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaCadastrarComponent } from './disciplinas-page/disciplina-cadastrar/disciplina-cadastrar.component';


const routes: Routes = [
  { path: 'alunos', component: AlunosPageComponent
  },
  { path: 'home', component: HomePageComponent
  },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent
  },
  { path: 'disciplinas', component: DisciplinasPageComponent
  },
  { path: 'disciplinas/cadastrar', component: DisciplinaCadastrarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

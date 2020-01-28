import { AlunosDetalharComponent } from './alunos-page/alunos-detalhar/alunos-detalhar.component';
import { DisciplinasPageComponent } from './disciplinas-page/disciplinas-page.component';
import { AlunosCadastrarComponent } from './alunos-page/alunos-cadastrar/alunos-cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AlunosPageComponent } from './alunos-page/alunos-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaCadastrarComponent } from './disciplinas-page/disciplina-cadastrar/disciplina-cadastrar.component';
import { ProfessoresPageComponent } from './professores-page/professores-page.component';
import { ProfessoresCadastrarComponent } from './professores-page/professores-cadastrar/professores-cadastrar.component';


const routes: Routes = [
  { path: 'alunos', component: AlunosPageComponent
  },
  { path: 'home', component: HomePageComponent
  },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent
  },
  { path: 'alunos/detalhar', component: AlunosDetalharComponent
  },
  { path: 'disciplinas', component: DisciplinasPageComponent
  },
  { path: 'disciplinas/cadastrar', component: DisciplinaCadastrarComponent
  },
  { path: 'professores', component: ProfessoresPageComponent
  },
  { path: 'professores/cadastrar', component: ProfessoresCadastrarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NotasPageComponent } from './avaliacoes-page/notas-page/notas-page.component';
import { AvaliacoesEditarComponent } from './avaliacoes-page/avaliacoes-editar/avaliacoes-editar.component';
import { AvaliacoesPageComponent } from './avaliacoes-page/avaliacoes-page.component';
import { AlunosDetalharComponent } from './alunos-page/alunos-detalhar/alunos-detalhar.component';
import { DisciplinasPageComponent } from './disciplinas-page/disciplinas-page.component';
import { AlunosCadastrarComponent } from './alunos-page/alunos-cadastrar/alunos-cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AlunosPageComponent } from './alunos-page/alunos-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasCadastrarComponent } from './disciplinas-page/disciplinas-cadastrar/disciplinas-cadastrar.component';
import { ProfessoresPageComponent } from './professores-page/professores-page.component';
import { ProfessoresCadastrarComponent } from './professores-page/professores-cadastrar/professores-cadastrar.component';
import { DisciplinasDetalharComponent } from './disciplinas-page/disciplinas-detalhar/disciplinas-detalhar.component';
import { ProfessoresDetalharComponent } from './professores-page/professores-detalhar/professores-detalhar.component';


const routes: Routes = [
  { path: 'alunos', component: AlunosPageComponent
  },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent
  },
  { path: 'alunos/detalhar', component: AlunosDetalharComponent
  },
  { path: 'disciplinas', component: DisciplinasPageComponent
  },
  { path: 'disciplinas/cadastrar', component: DisciplinasCadastrarComponent
  },
  { path: 'disciplinas/detalhar', component: DisciplinasDetalharComponent
  },
  { path: 'professores', component: ProfessoresPageComponent
  },
  { path: 'professores/cadastrar', component: ProfessoresCadastrarComponent
  },
  { path: 'professores/detalhar', component: ProfessoresDetalharComponent
  },
  { path: 'avaliacoes', component: AvaliacoesPageComponent
  },
  { path: 'avaliacoes/editar', component: AvaliacoesEditarComponent
  },
  { path: 'avaliacoes/notas', component: NotasPageComponent
  },
  { path: '', component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

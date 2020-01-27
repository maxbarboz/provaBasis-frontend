import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasPageComponent } from './disciplinas-page.component';
import { DisciplinaCadastrarComponent } from './disciplina-cadastrar/disciplina-cadastrar.component';


const routesDisciplinas: Routes = [
  { path: 'disciplinas', component: DisciplinasPageComponent, children: [
      { path: 'cadastrar', component: DisciplinaCadastrarComponent} ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesDisciplinas)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
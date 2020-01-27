import { AlunosCadastrarComponent } from './alunos-cadastrar/alunos-cadastrar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosPageComponent } from './alunos-page.component';


const routesAlunos: Routes = [
  { path: 'alunos', component: AlunosPageComponent, children: [
      { path: 'cadastrar', component: AlunosCadastrarComponent} ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesAlunos)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

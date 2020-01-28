import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresPageComponent } from './professores-page.component';
import { ProfessoresCadastrarComponent } from './professores-cadastrar/professores-cadastrar.component';


const routesProfessores: Routes = [
  { path: 'professores', component: ProfessoresPageComponent, children: [
      { path: 'cadastrar', component: ProfessoresCadastrarComponent} ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesProfessores)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

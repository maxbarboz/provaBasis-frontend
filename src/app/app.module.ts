import { AlunosCadastrarComponent } from './alunos-page/alunos-cadastrar/alunos-cadastrar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AlunosModule } from './alunos-page/alunos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomePageComponent } from './home-page/home-page.component';

import {HttpModule} from '@angular/http';
import { DisciplinasModule } from './disciplinas-page/disciplinas.module';
import { ProfessoresPageComponent } from './professores-page/professores-page.component';
import { ProfessoresModule } from './professores-page/professor.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunosModule,
    SharedModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    HttpModule,
    DisciplinasModule,
    ProfessoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

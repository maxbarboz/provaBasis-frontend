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
import { DisciplinasPageComponent } from './disciplinas-page/disciplinas-page.component';
import { DisciplinaCadastrarComponent } from './disciplinas-page/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinasModule } from './disciplinas-page/disciplinas.module';

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
    DisciplinasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

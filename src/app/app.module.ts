import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AlunosModule } from './alunos-page/alunos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ProfessoresModule } from './professores/professores.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomePageComponent } from './home-page/home-page.component';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunosModule,
    ProfessoresModule,
    SharedModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

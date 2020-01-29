import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DisciplinasModule } from './disciplinas-page/disciplinas.module';
import { ProfessoresModule } from './professores-page/professores.module';
import { AlunosModule } from './alunos-page/alunos.module';
import { CoreModule } from './core/core.module';

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
    CoreModule,
    HttpModule,
    DisciplinasModule,
    ProfessoresModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

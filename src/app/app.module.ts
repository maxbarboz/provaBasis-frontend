import { ErrorHandlerService } from './core/error-handler.service';
import { CoreModule } from './core/core.module';
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

import { HttpModule } from '@angular/http';
import { DisciplinasModule } from './disciplinas-page/disciplinas.module';
import { ToastyModule } from 'ng2-toasty';
import { ProfessoresModule } from './professores-page/professor.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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

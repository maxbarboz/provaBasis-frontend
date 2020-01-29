import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {TableModule} from 'primeng/table';

import { SharedModule } from '../shared/shared.module';
import { ProfessoresCadastrarComponent } from './professores-cadastrar/professores-cadastrar.component';
import { ProfessoresListagemComponent } from './professores-listagem/professores-listagem.component';
import { ProfessoresPageComponent } from './professores-page.component';
import { ProfessoresDetalharComponent } from './professores-detalhar/professores-detalhar.component';

@NgModule({
  declarations: [
    ProfessoresCadastrarComponent,
    ProfessoresListagemComponent,
    ProfessoresPageComponent,
    ProfessoresDetalharComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    RouterModule,
    TableModule,
    HttpClientModule
  ],
  exports: [
    ProfessoresCadastrarComponent,
    ProfessoresListagemComponent,
    ProfessoresPageComponent,
    ProfessoresDetalharComponent
  ],
  providers: [
  ]
})

export class ProfessoresModule { }

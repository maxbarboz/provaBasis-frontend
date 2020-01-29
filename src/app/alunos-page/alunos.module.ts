import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';

import { AlunosService } from './alunos.service';
import { AlunosPageComponent } from './alunos-page.component';
import { AlunosCadastrarComponent } from './alunos-cadastrar/alunos-cadastrar.component';
import { SharedModule } from '../shared/shared.module';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';
import { AlunosDetalharComponent } from './alunos-detalhar/alunos-detalhar.component';

@NgModule({
  declarations: [
    AlunosCadastrarComponent,
    AlunosPageComponent,
    AlunosListagemComponent,
    AlunosDetalharComponent
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
    HttpClientModule,
    MultiSelectModule
  ],
  exports: [
    AlunosCadastrarComponent,
    AlunosPageComponent,
    AlunosListagemComponent,
    AlunosDetalharComponent
  ],
  providers: [
    AlunosService
  ]
})

export class AlunosModule { }

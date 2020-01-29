import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { DisciplinasPageComponent } from './disciplinas-page.component';
import { DisciplinasListagemComponent } from './disciplinas-listagem/disciplinas-listagem.component';
import { SharedModule } from '../shared/shared.module';
import { DisciplinasCadastrarComponent } from './disciplinas-cadastrar/disciplinas-cadastrar.component';
import { DisciplinasDetalharComponent } from './disciplinas-detalhar/disciplinas-detalhar.component';

@NgModule({
  declarations: [
      DisciplinasListagemComponent,
      DisciplinasPageComponent,
      DisciplinasCadastrarComponent,
      DisciplinasDetalharComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    RouterModule,
    HttpClientModule,
    TableModule
  ],
  exports: [
      DisciplinasPageComponent,
      DisciplinasListagemComponent,
      DisciplinasDetalharComponent,
      DisciplinasCadastrarComponent
  ],
  providers: [
  ]
})

export class DisciplinasModule { }

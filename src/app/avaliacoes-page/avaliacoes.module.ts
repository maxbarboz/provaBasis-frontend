import { AvaliacoesPageComponent } from './avaliacoes-page.component';
import { SharedModule } from './../shared/shared.module';
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
import { AvaliacoesListagemComponent } from './avaliacoes-listagem/avaliacoes-listagem.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
     AvaliacoesPageComponent,
     AvaliacoesListagemComponent
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
    TableModule,
    CalendarModule
  ],
  exports: [
    AvaliacoesPageComponent,
    AvaliacoesListagemComponent
  ],
  providers: [
  ]
})

export class AvaliacoesModule { }

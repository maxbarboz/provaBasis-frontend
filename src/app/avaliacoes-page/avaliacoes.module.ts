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
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

import { AvaliacoesPageComponent } from './avaliacoes-page.component';
import { SharedModule } from './../shared/shared.module';
import { AvaliacoesV2PageComponent } from './avaliacoes-v2-page/avaliacoes-v2-page.component';

@NgModule({
  declarations: [
     AvaliacoesPageComponent,
     AvaliacoesV2PageComponent
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
    CalendarModule,
    CheckboxModule
  ],
  exports: [
    AvaliacoesPageComponent,
    AvaliacoesV2PageComponent
  ],
  providers: []
})

export class AvaliacoesModule { }

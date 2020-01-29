import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';
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
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    CalendarModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule,
    RouterModule,
    TableModule,
    HttpClientModule,
    MultiSelectModule
  ],
  exports: [
    ProfessoresCadastrarComponent,
    ProfessoresListagemComponent,
    ProfessoresPageComponent
  ],
  providers: [
  ]
})

export class ProfessoresModule { }

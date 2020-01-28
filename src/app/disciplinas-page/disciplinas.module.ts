import { DisciplinasPageComponent } from './disciplinas-page.component';
import { DisciplinasListagemComponent } from './disciplinas-listagem/disciplinas-listagem.component';
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
import { DisciplinaCadastrarComponent } from './disciplina-cadastrar/disciplina-cadastrar.component';
import {SliderModule} from 'primeng/slider';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { DisciplinasDetalharComponent } from './disciplinas-detalhar/disciplinas-detalhar.component';

@NgModule({
  declarations: [
      DisciplinasListagemComponent,
      DisciplinasPageComponent,
      DisciplinaCadastrarComponent,
      DisciplinasDetalharComponent
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
    SliderModule,
    ToggleButtonModule
  ],
  exports: [
      DisciplinasPageComponent,
      DisciplinasListagemComponent,
      DisciplinasPageComponent
  ],
  providers: [
  ]
})

export class DisciplinasModule { }

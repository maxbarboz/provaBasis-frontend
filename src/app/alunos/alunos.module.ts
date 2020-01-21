import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosCadastrarComponent } from './alunos-cadastrar/alunos-cadastrar.component';
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

@NgModule({
  declarations: [
    AlunosCadastrarComponent
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
    DropdownModule
  ],
  exports: [
    AlunosCadastrarComponent
  ]
})

export class AlunosModule { }

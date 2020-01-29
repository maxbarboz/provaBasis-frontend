import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerService } from './error-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  exports: [
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService
  ]
})
export class CoreModule { }

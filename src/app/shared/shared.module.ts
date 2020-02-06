import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule
  ],
  declarations: [ MessageComponent, ErrorPageComponent ],
  exports: [
    MessageComponent,
    ErrorPageComponent
  ]
})

export class SharedModule { }

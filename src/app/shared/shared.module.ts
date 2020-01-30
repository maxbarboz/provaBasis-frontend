import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule
  ],
  declarations: [ MessageComponent ],
  exports: [
    MessageComponent
  ]
})

export class SharedModule { }

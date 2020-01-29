import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" style="color: #B22222;" class="pi pi-exclamation-triangle
     alert alert-warning" role="alert">
      {{ text }}
    </div>
  `,
  styles: ['./message.component.css']
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}

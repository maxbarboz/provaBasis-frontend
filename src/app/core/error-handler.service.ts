
import { ToastyModule, ToastyService } from 'ng2-toasty';
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService{

  constructor(private toasty: ToastyService) {}

  handleError(errorResponse) {

    let errorMessage;

    if( typeof errorResponse === 'string'){
      errorMessage = errorResponse
    }else{
      errorMessage = 'Erro ao processar serviço remoto. Tente novamente.';
    }
    
    this.toasty.error(errorMessage);
  }

}
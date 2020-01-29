import { ErrorHandlerService } from './../../core/error-handler.service';
import { ProfessoresService } from '../professores.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-professores-detalhar',
  templateUrl: './professores-detalhar.component.html',
  styleUrls: ['./professores-detalhar.component.css']
})
export class ProfessoresDetalharComponent implements OnInit {

  professor = new Professor;

  constructor(
    private professoresService: ProfessoresService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit() {
    this.professoresService.detalhar().subscribe( res => {
      this.professor = res.json();
    },
    err =>  {
      console.log( err.json().message )
      this.errorHandler.handleError( err.json().message );
    }
    );
  }

}

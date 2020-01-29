import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ProfessoresService } from '../professores.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-professores-cadastrar',
  templateUrl: './professores-cadastrar.component.html',
  styleUrls: ['./professores-cadastrar.component.css']
})
export class ProfessoresCadastrarComponent implements OnInit {

  professor: Professor = new Professor;
  
  constructor(
    private professorService: ProfessoresService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit() {

    if(this.professorService.carregarProfessor == true) {
      this.professorService.detalhar().subscribe( ( res =>{
        this.professor = res.json();
        console.log( this.professor );
      }));
    }
  }

  adicionar(professor){
    this.professorService.adicionar(this.professor).subscribe( professor => {
      this.toasty.success('Professor cadastrado com sucesso')
    },
    err =>  {
      this.errorHandler.handleError( err.json().message );
    }
    );
  }

}

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
  editar: boolean = false;

  constructor(
    private professorService: ProfessoresService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit() {
    if(this.professorService.carregarProfessor == true) {
      this.carregarProfessor();
    }
  }

  carregarProfessor(){
    this.professorService.detalhar().subscribe( ( res =>{
      this.professor = res.json();
      this.editar = true;
    }));
  }

  adicionar(){
    if(this.editar == true){
      console.log( this.professor )
      this.professorService.editar(this.professor).subscribe( professor => {
        this.toasty.success('Edição feita com sucesso')
      },
      err =>  {
        this.errorHandler.handleError( err.json().message );
      }
      );
    }else{
      this.professorService.adicionar(this.professor).subscribe( professor => {
        this.toasty.success('Professor cadastrado com sucesso')
      },
      err =>  {
        this.errorHandler.handleError( err.json().message );
      }
      );
    }
  }

}

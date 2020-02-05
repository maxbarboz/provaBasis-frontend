import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno.model';
import { SelectItem } from 'primeng/api/selectitem';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.scss']
})
export class AlunosCadastrarComponent implements OnInit{

  aluno: Aluno = new Aluno();
  disciplinas: SelectItem[];
  alunoId: number;
  editar: boolean = false;
  date6: Date;

  constructor(
    private alunosService: AlunosService,
    private disciplinasService: DisciplinasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) {
  }

  ngOnInit() {
    if(this.alunosService.carregarAluno == true) {
      this.carregarAluno();
    }
    
    this.carregarDisciplina();
  }

  carregarAluno(){
    this.alunosService.detalhar().subscribe( ( res =>{
      this.aluno = res.json();
      console.log( this.aluno )
      this.editar = true;
    }));
  }

  carregarDisciplina(){
    this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
      return { label: disciplina.nome , value: {"id" : disciplina.id }  }
    }));
  }
    
  adicionar() {
    if(this.editar == true) {
      this.alunosService.editar(this.aluno).subscribe(
        aluno => {this.toasty.success('Edição feita com sucesso')
      },
      err =>  {
        if( !err.json().errors ){
          console.log( err.json().message )
          this.errorHandler.handleError( err.json().message );
        }else{
          console.log(err.json().errors[0].defaultMessage )
          this.errorHandler.handleError( err.json().errors[0].defaultMessage );
        }
      }
      );
    }else{
      this.alunosService.adicionar(this.aluno).subscribe(
        aluno => {
          this.toasty.success('Aluno cadastrado com sucesso')
      },
      err =>  {
        if( !err.json().errors ){
          console.log( err.json().message )
          this.errorHandler.handleError( err.json().message );
        }else{
          console.log(err.json().errors[0].defaultMessage )
          this.errorHandler.handleError( err.json().errors[0].defaultMessage );
        }
        }
      );
    }
  }
    
}


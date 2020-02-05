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
  listaDisciplinas: number[] = [];
  todasDisciplinas: any[] = [];

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
      this.listaDisciplinas = this.getDisciplinasSelecionados(this.aluno.disciplinas);
      this.editar = true;
    }));
  }

  getDisciplinasSelecionados(disciplinas: any[]){
    return disciplinas.map(disciplina => disciplina.id);
  }

  carregarDisciplina(){
    this.disciplinasService.consultar()
      .subscribe( (res: any[]) => {
        this.todasDisciplinas = res;
        this.disciplinas = res.map( disciplina => {
          return { label: disciplina.nome , value:  disciplina.id   }
        });
      });
  }

  vincularDisciplinas(){
    this.aluno.disciplinas = this.todasDisciplinas.filter(disciplina => {
      return this.listaDisciplinas.some(disc => disc == disciplina.id);
    });
  }
    
  adicionar() {
    this.vincularDisciplinas();
    if(this.editar == true) {
      this.alunosService.editar(this.aluno).subscribe(
        aluno => {this.toasty.success('Edição feita com sucesso')
      },
      err =>  { this.verificacaoErrors( err ) }
      );
    }else{
      this.alunosService.adicionar(this.aluno).subscribe(
        aluno => {
          this.toasty.success('Aluno cadastrado com sucesso')
      },
      err =>  { this.verificacaoErrors( err ) }
      );
    }
  }

  verificacaoErrors(err){
    if( !err.json().errors ){
      this.errorHandler.handleError( err.json().message );
    }else{
      err.json().errors.forEach( errors => {
        this.errorHandler.handleError( errors.defaultMessage );
      });
    }
  }
    
}


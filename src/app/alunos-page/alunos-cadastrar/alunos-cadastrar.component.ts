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
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit{

aluno: Aluno = new Aluno();
disciplinas: SelectItem[];
alunoId: number;

constructor(
  private alunosService: AlunosService,
  private disciplinasService: DisciplinasService,
  private toasty: ToastyService,
  private errorHandler: ErrorHandlerService
  ) {
}

ngOnInit() {
  this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
        return { label: disciplina.nome , value: {"id": disciplina.id} }
    }));

  if(this.alunosService.carregarAluno == true) {
    this.alunosService.detalhar().subscribe( ( res =>{
      this.aluno = res.json();
      console.log( this.aluno );
    }));
  }
}

  adicionar() {
    this.alunosService.adicionar(this.aluno).subscribe(
      aluno => {this.toasty.success('Aluno cadastrado com sucesso')
    },
    err =>  {
      console.log( err )
      this.errorHandler.handleError( err.json().message );
    }
    );
  }
}


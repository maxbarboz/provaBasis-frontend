import { ErrorHandlerService } from './../../core/error-handler.service';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css']
})
export class AlunosListagemComponent implements OnInit {

  alunos: any = [];
  cols: any[] =  [];

  constructor(
    private alunosService: AlunosService, 
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'matricula', header: 'Matrícula' },
      { field: 'idade', header: 'Idade' }
    ];
  }

  consultar(){
    this.alunosService.consultar().subscribe( res => {
      this.alunos = res;
    });
  }

  excluir(matricula: string){
    this.confirmation.confirm({
      message: 'Deseja realmente excluir?',
      accept: () => {
        this.alunosService.excluir(matricula).subscribe( res => {
          this.toasty.success('Aluno excluido com sucesso')
          this.consultar();
        },
        err =>  {
          this.errorHandler.handleError( err.json().message );
        }
        );
      }
    });
  }

  addIdPesquisa(id: number, carregarAluno: boolean){
    this.alunosService.addIdPesquisa(id, carregarAluno);
  }
}

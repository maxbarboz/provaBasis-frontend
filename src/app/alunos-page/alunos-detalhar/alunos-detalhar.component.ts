import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { AvaliacoesService } from './../../avaliacoes-page/avaliacoes.service';
import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { Aluno } from './../../model/aluno.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Avaliacao } from 'src/app/model/avaliacao.model';

@Component({
  selector: 'app-alunos-detalhar',
  templateUrl: './alunos-detalhar.component.html',
  styleUrls: ['./alunos-detalhar.component.css']
})
export class AlunosDetalharComponent implements OnInit {

alunos: Aluno = {};
cols: any;
disciplina: any;
avaliacaoEditar: Avaliacao = new Avaliacao;

mostrarComponent: boolean = false;

  constructor(
    private alunosService: AlunosService,
    private disciplinasService: DisciplinasService,
    private avaliacaoService: AvaliacoesService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit() {
  this.detalhar();
  }

  detalhar(){
    this.alunosService.detalhar().subscribe( res => {
      this.alunos = res.json();
      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'nota', header: 'Nota Avaliacão' },
        { field: 'data' , header: 'Data' }
      ];
      console.log( this.alunos);
    }); 
  }
  visualizar(){
   this.mostrarComponent = !this.mostrarComponent;
  }

  teste(event: any){
    if(event === "nome"){
      console.log(event);
      return true;
    }
  }

  testeData(event: any){
    if(event === "data"){
      console.log(event);
      return true;
    }
  }

  excluir(id: number){
    this.confirmation.confirm({
      message: 'Deseja realmente excluir?',
      accept: () => {
        this.avaliacaoService.excluir(id).subscribe( res => {
          this.toasty.success('Nota excluída com sucesso')
          this.detalhar();
        },
        err =>  {
          this.errorHandler.handleError( err.json().message );
        }
        );
      }
    });
  }

  salvarObjeto(id: number){
    this.avaliacaoService.detalhar(id).subscribe( res => {
      this.avaliacaoEditar = res;
    }); 
  }

  editar(){
    this.avaliacaoService.editar(this.avaliacaoEditar).subscribe( res => {
      this.toasty.success('Nota editada com sucesso')
      this.detalhar();
    },
    err =>  {
      this.errorHandler.handleError( err.json().message );
    });
  }

}

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { AvaliacoesService } from './../../avaliacoes-page/avaliacoes.service';
import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { Aluno } from './../../model/aluno.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-alunos-detalhar',
  templateUrl: './alunos-detalhar.component.html',
  styleUrls: ['./alunos-detalhar.component.css']
})
export class AlunosDetalharComponent implements OnInit {

alunos: Aluno = {};
cols: any;
disciplina: any;

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
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'nota', header: 'Nota Avaliacão' },
      { field: 'data', header: 'Data' }
    ];
  }

  detalhar(){
    this.alunosService.detalhar().subscribe( res => {
      console.log( res.json())
      this.alunos = res.json();
    });
  }
  visualizar(){
   this.mostrarComponent = !this.mostrarComponent;
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
}

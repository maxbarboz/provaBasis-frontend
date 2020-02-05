import { AlunosService } from './../alunos-page/alunos.service';
import { SelectItem } from 'primeng/api/selectitem';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { AvaliacoesService } from './avaliacoes.service';
import { DisciplinasService } from './../disciplinas-page/disciplinas.service';
import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../model/avaliacao.model';

@Component({
  selector: 'app-avaliacoes-page',
  templateUrl: './avaliacoes-page.component.html',
  styleUrls: ['./avaliacoes-page.component.css']
})
export class AvaliacoesPageComponent implements OnInit {

  avaliacao: Avaliacao = new Avaliacao;
  disciplina: SelectItem[];
  alunos: SelectItem[];
  exibindoAlunos: boolean;
  
  constructor(
    private avaliacoesService: AvaliacoesService,
    private disciplinasService: DisciplinasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarDisciplina();
  }

  carregarDisciplina(){
    this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplina = res.map( disciplina => {
      return { label: disciplina.nome , value: {"id": disciplina.id} }
    }));   
  }

  carregarAluno(idDisciplina){
    this.disciplinasService.detalharParaAvaliacao(idDisciplina).subscribe( res => {
      this.alunos = res.json().alunos.map( aluno => {
        return { label: aluno.nome , value: {"id": aluno.id} }
      })
      console.log( this.alunos )
      this.alteraExibindoAlunos();
    });
  }

  alteraExibindoAlunos(){
    this.exibindoAlunos = !this.exibindoAlunos;
  }

  adicionar(){
    console.log( this.avaliacao )
    this.avaliacoesService.adicionar(this.avaliacao).subscribe(
      avaliacao => {
        this.toasty.success('Nota lançada com sucesso')
      },
      err =>  {
        this.errorHandler.handleError( err.json().message );
      })
  }

}

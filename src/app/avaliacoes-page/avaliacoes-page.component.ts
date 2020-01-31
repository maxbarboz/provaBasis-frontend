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

  disciplinas: any;
  avaliacao: Avaliacao = new Avaliacao;

  constructor(
    private disciplinasService: DisciplinasService,
    private avaliacaoService: AvaliacoesService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit() {
    this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
      return { label:  disciplina.nome, value: {"id": disciplina.id} }
    }));
  }
  
  adicionar(){
      this.avaliacaoService.adicionar(this.avaliacao).subscribe(
        resp => {
          this.toasty.success('Avaliação cadastrada com sucesso')
        }, err =>  {
            this.errorHandler.handleError( err.json().message );
        })
  }
}

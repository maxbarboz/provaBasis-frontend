import { ErrorHandlerService } from './../../core/error-handler.service';
import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { Avaliacao } from './../../model/avaliacao.model';
import { AvaliacoesService } from './../avaliacoes.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-avaliacoes-editar',
  templateUrl: './avaliacoes-editar.component.html',
  styleUrls: ['./avaliacoes-editar.component.css']
})
export class AvaliacoesEditarComponent implements OnInit {

  avaliacao: Avaliacao = new Avaliacao;
  disciplinas: any;
  constructor(
    private avaliacaoService: AvaliacoesService,
    private disciplinasService: DisciplinasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    
    this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
      return { label:  disciplina.nome, value: {"id": disciplina.id} }
    }));
    
    this.avaliacaoService.detalhar().subscribe( res =>{
      console.log( res )
      this.avaliacao = res;
    });
    
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

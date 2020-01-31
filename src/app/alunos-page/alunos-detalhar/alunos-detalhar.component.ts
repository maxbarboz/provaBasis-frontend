import { AvaliacoesService } from './../../avaliacoes-page/avaliacoes.service';
import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { Aluno } from './../../model/aluno.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-detalhar',
  templateUrl: './alunos-detalhar.component.html',
  styleUrls: ['./alunos-detalhar.component.css']
})
export class AlunosDetalharComponent implements OnInit {

alunos: Aluno = {};
cols: any;
disciplina: any;
avaliacao: any;

  constructor(
    private alunosService: AlunosService,
    private disciplinasService: DisciplinasService,
    private avaliacaoService: AvaliacoesService
    ) { }

  ngOnInit() {
    this.consultar();

    this.alunosService.detalhar().subscribe( res => {
      this.alunos = res.json();
    });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'avaliacao.nota', header: 'Nota Avaliacão' },
      { field: 'data', header: 'Data' }
    ];
  }

  consultar(){
    this.disciplinasService.consultar().subscribe( res => {
      this.disciplina = res;
      console.log( this.disciplina )
    });

    this.avaliacaoService.consultar().subscribe( res => {
      this.avaliacao = res;
      console.log( this.avaliacao )
    });
  }

}

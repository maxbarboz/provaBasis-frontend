import { AvaliacoesService } from './../avaliacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-page',
  templateUrl: './notas-page.component.html',
  styleUrls: ['./notas-page.component.css']
})
export class NotasPageComponent implements OnInit {

  avaliacao: any;
  cols: any;

  constructor(
    private avaliacaoService: AvaliacoesService
  ) { }

  ngOnInit() {
    this.consultar();

    console.log( this.avaliacao )
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'nomeDisciplina', header: 'Disciplina' },
      { field: 'data', header: 'Data' },
    ];
  }

  consultar(){
    this.avaliacaoService.detalhar().subscribe( res => {
      this.avaliacao = res;
    });
  }
}

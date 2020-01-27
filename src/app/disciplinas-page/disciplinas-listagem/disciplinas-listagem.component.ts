import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent implements OnInit {

  disciplinas: any = [];
  cols: any[] =  [];

  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'cargaHoraria', header: 'Carga Horária' },
      { field: 'descricao', header: 'Descrição' }
    ];
  }

  consultar(){
    this.disciplinasService.consultar().subscribe( res => {
      this.disciplinas = res;
    });
  }
}

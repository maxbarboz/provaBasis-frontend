import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent implements OnInit {

  disciplina: any = [];
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
      this.disciplina = res;
    });
  }

  excluir(id: number){
    console.log( id )
    this.disciplinasService.excluir(id).subscribe( res => {
      alert('Disciplina excluida com sucesso!');
      this.consultar();
    });
  }

  addIdPesquisa(id: number){
    this.disciplinasService.addIdPesquisa(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professor.service';

@Component({
  selector: 'app-professores-listagem',
  templateUrl: './professores-listagem.component.html',
  styleUrls: ['./professores-listagem.component.css']
})
export class ProfessoresListagemComponent implements OnInit {

  professores: any = [];
  cols: any[] =  [];

  constructor(private professorService: ProfessoresService) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'matricula', header: 'Matrícula' },
      { field: 'area', header: 'Área' },
      { field: 'idade', header: 'Idade' }
    ];
  }

  consultar(){
    this.professorService.consultar().subscribe( res => {
      console.log( res )
      this.professores = res;
    });
  }

  excluir(matricula: string){
    this.professorService.excluir(matricula).subscribe( res => {
      alert('Professor excluido com sucesso!');
      this.consultar();
    });
  }

  addIdPesquisa(id: number){
    this.professorService.addIdPesquisa(id);
  }
}

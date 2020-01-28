import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css']
})
export class AlunosListagemComponent implements OnInit {

  alunos: any = [];
  cols: any[] =  [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'matricula', header: 'Matrícula' },
      { field: 'idade', header: 'Idade' }
    ];
  }

  consultar(){
    this.alunosService.consultar().subscribe( res => {
      this.alunos = res;
    });
  }

  excluir(matricula: string){
    this.alunosService.excluir(matricula).subscribe( res => {
      alert('Aluno excluido com sucesso!');
      this.consultar();
    });
  }
}

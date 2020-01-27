import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno.model';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit{

aluno: Aluno = new Aluno();

cities1 = [
    { label: 'Selecione a disciplina', value: null },
    { label: 'Matemática', value: 1 },
    { label: 'Português', value: 2 },
    { label: 'Espanhol', value: 3 },
    { label: 'Ed. Física', value: 4 },
    { label: 'Geografia', value: 5 }
];

constructor(private alunosService: AlunosService) {
}

ngOnInit() {
}

  adicionar() {
    console.log(this.aluno);
    this.alunosService.adicionar(this.aluno).subscribe( aluno => {
      alert('Aluno cadastrado!');
    });
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent {

cities1 = [
    { label: 'Selecione a disciplina', value: null },
    { label: 'Matemática', value: 1 },
    { label: 'Português', value: 2 },
    { label: 'Espanhol', value: 3 },
    { label: 'Ed. Física', value: 4 },
    { label: 'Geografia', value: 5 }
];

}

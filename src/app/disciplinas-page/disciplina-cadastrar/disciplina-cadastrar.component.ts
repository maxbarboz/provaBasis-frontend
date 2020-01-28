import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastrar',
  templateUrl: './disciplina-cadastrar.component.html',
  styleUrls: ['./disciplina-cadastrar.component.css']
})
export class DisciplinaCadastrarComponent implements OnInit {

  disciplina: Disciplina;

  constructor() { 
    this.disciplina = new Disciplina();
  }

  ngOnInit() {
  }

}

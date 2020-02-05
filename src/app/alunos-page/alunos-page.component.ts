import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-page',
  templateUrl: './alunos-page.component.html',
  styleUrls: ['./alunos-page.component.css']
})
export class AlunosPageComponent implements OnInit{

  alunos = [];

  constructor(private alunosService: AlunosService){}

  ngOnInit()  {
    this.alunosService.consultar();
  }
  
}

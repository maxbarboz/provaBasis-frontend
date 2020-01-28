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

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunosService.detalhar().subscribe( res => {
      this.alunos = res.json();
      console.log( this.alunos );
    });
  }

}

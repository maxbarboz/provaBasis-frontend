import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno.model';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit{

aluno: Aluno = new Aluno();
disciplinas: SelectItem[];

constructor(private alunosService: AlunosService, private disciplinasService: DisciplinasService) {
}

ngOnInit() {
  this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
        return { label: disciplina.nome , value: {"id": disciplina.id} }
    }));
}

  adicionar() {
    console.log(this.aluno);
    this.alunosService.adicionar(this.aluno).subscribe( aluno => {
      alert('Aluno cadastrado!');
    });
  }
}


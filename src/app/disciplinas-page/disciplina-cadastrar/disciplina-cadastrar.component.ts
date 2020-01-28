import { DisciplinasService } from './../disciplinas.service';
import { ProfessoresService } from './../../professores-page/professor.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-disciplina-cadastrar',
  templateUrl: './disciplina-cadastrar.component.html',
  styleUrls: ['./disciplina-cadastrar.component.css']
})
export class DisciplinaCadastrarComponent implements OnInit {

  disciplina: Disciplina = new Disciplina();
  professores: SelectItem[];

  colsAtiva: any = [];

  constructor(private disciplinaService: DisciplinasService, private professoreService: ProfessoresService) { 
    
    this.professoreService.consultar().subscribe( (res: any[]) =>
    this.professores = res.map( professor => {
        return { label: professor.nome , value: {"id": professor.id} }
    }));

    this.colsAtiva = [
      {label: '1 - Ativa', value: 1 },
      {label: '2 - Não Ativa', value: 0 }
    ];

  }

  ngOnInit() {
  }

  adicionar() {
    this.disciplinaService.adicionar(this.disciplina).subscribe( disciplina => {
      alert('Disciplina cadastrada!');
    });
  }

}

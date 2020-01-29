import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno.model';
import { SelectItem } from 'primeng/api/selectitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit{

aluno: Aluno = new Aluno();
disciplinas: SelectItem[];
alunoId: number;
pt: any;

constructor(private alunosService: AlunosService, private disciplinasService: DisciplinasService, private route: ActivatedRoute) {
  this.pt = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezemrbo" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dec" ],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Sem'
  };
}

ngOnInit() {
  this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplinas = res.map( disciplina => {
        return { label: disciplina.nome , value: {"id": disciplina.id} }
    }));

  if(this.alunosService.carregarAluno == true){
    this.alunosService.detalhar().subscribe( ( res =>{
      this.aluno = res.json();
      console.log( this.aluno );
    }));
  }
}

  adicionar() {
    this.alunosService.adicionar(this.aluno).subscribe( aluno => {
      alert('Aluno cadastrado!');
    });
  }
}


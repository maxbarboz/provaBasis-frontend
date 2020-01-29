import { ProfessoresService } from './../professor.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-professores-cadastrar',
  templateUrl: './professores-cadastrar.component.html',
  styleUrls: ['./professores-cadastrar.component.css']
})
export class ProfessoresCadastrarComponent implements OnInit {

  professor: Professor = new Professor;
  
  constructor(private professorService: ProfessoresService) { }

  ngOnInit() {
  }

  adicionar(professor){
    this.professorService.adicionar(this.professor).subscribe( professor => {
      alert('Professor cadastrado!');
    });
  }

}

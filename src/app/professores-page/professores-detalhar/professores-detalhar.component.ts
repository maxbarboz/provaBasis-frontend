import { ProfessoresService } from '../professores.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor.model';

@Component({
  selector: 'app-professores-detalhar',
  templateUrl: './professores-detalhar.component.html',
  styleUrls: ['./professores-detalhar.component.css']
})
export class ProfessoresDetalharComponent implements OnInit {

  professor = new Professor;
  exibindoMaterias: boolean = true;

  constructor(
    private professoresService: ProfessoresService
    ) {}

  ngOnInit() {
    this.detalharProfessor();
  }

  detalharProfessor(){
    this.professoresService.detalhar().subscribe( res => {
      this.professor = res.json();

      if( this.professor.disciplinas[0] == null){
        this.exibindoMaterias = !this.exibindoMaterias;
      }
    });
  }
}

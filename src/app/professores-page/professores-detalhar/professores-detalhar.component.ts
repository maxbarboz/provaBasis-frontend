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

  constructor(
    private professoresService: ProfessoresService
    ) {}

  ngOnInit() {
    this.professoresService.detalhar().subscribe( res => {
      this.professor = res.json();
    });
  }

}

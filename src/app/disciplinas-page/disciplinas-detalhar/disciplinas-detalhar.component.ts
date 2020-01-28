import { DisciplinasService } from './../disciplinas.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';

@Component({
  selector: 'app-disciplinas-detalhar',
  templateUrl: './disciplinas-detalhar.component.html',
  styleUrls: ['./disciplinas-detalhar.component.css']
})
export class DisciplinasDetalharComponent implements OnInit {

  disciplina: Disciplina = {};

  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit() {
    this.disciplinasService.detalhar().subscribe( res => {
      this.disciplina = res.json();
    });
  }

}

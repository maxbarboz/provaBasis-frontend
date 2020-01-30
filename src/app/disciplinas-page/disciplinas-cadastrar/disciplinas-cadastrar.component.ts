import { ErrorHandlerService } from '../../core/error-handler.service';
import { DisciplinasService } from '../disciplinas.service';
import { ProfessoresService } from '../../professores-page/professores.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';
import { SelectItem } from 'primeng/api/selectitem';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-disciplinas-cadastrar',
  templateUrl: './disciplinas-cadastrar.component.html',
  styleUrls: ['./disciplinas-cadastrar.component.css']
})
export class DisciplinasCadastrarComponent implements OnInit {

  disciplina: Disciplina = new Disciplina();
  professores: SelectItem[];
  editar: boolean = false;
  colsAtiva: any = [];

  constructor(
    private disciplinaService: DisciplinasService,
    private professoreService: ProfessoresService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { 
    
    this.professoreService.consultar().subscribe( (res: any[]) =>
    this.professores = res.map( professor => {
        return { label: professor.nome , value: {"id": professor.id} }
    }));

    this.colsAtiva = [
      {label: '1 - Ativa', value: 1 },
      {label: '2 - Não Ativa', value: 0 }
    ];

    if(this.disciplinaService.carregarDisciplina == true) {
      this.disciplinaService.detalhar().subscribe( ( res =>{
        this.disciplina = res.json();
        this.editar = true;
      }));
    }

  }

  ngOnInit() {
  }


  adicionar() {
    if(this.editar == true){
      this.disciplinaService.editar(this.disciplina).subscribe( disciplina => {
        this.toasty.success('Edição feita com sucesso')
      },
      err =>  {
        this.errorHandler.handleError( err.json().message );
      });
    }else{
      this.disciplinaService.adicionar(this.disciplina).subscribe( disciplina => {
        this.toasty.success('Disciplina cadastrada com sucesso')
      },
      err =>  {
        this.errorHandler.handleError( err.json().message );
      });
    }
  }

}

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { ToastyService } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-professores-listagem',
  templateUrl: './professores-listagem.component.html',
  styleUrls: ['./professores-listagem.component.css']
})
export class ProfessoresListagemComponent implements OnInit {

  professor: any = [];
  cols: any[] =  [];

  constructor(
    private professorService: ProfessoresService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'matricula', header: 'Matrícula' },
      { field: 'area', header: 'Área' },
      { field: 'idade', header: 'Idade' }
    ];
  }

  consultar(){
    this.professorService.consultar().subscribe( res => {
      this.professor = res;
    });
  }

  excluir(matricula: string){
    this.confirmation.confirm({
      message: 'Deseja realmente excluir?',
      accept: () => {
        this.professorService.excluir(matricula).subscribe( res => {
          this.toasty.success('Professor excluido com sucesso')
          this.consultar();
        },
        err =>  {
          this.errorHandler.handleError( err.json().message );
        }
        );
      }
    });
  }

  addIdPesquisa(id: number, carregarProfessor: boolean){
    this.professorService.addIdPesquisa(id, carregarProfessor);
  }
}

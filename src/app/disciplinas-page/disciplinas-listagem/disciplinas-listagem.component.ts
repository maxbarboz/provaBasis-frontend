import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-disciplinas-listagem',
  templateUrl: './disciplinas-listagem.component.html',
  styleUrls: ['./disciplinas-listagem.component.css']
})
export class DisciplinasListagemComponent implements OnInit {

  disciplina: any = [];
  cols: any[] =  [];

  constructor(
    private disciplinasService: DisciplinasService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'cargaHoraria', header: 'Carga Horária' },
      { field: 'descricao', header: 'Descrição' }
    ];
  }

  consultar(){
    this.disciplinasService.consultar().subscribe( res => {
      this.disciplina = res;
    });
  }

  excluir(id: number){
    this.confirmation.confirm({
      message: 'Deseja realmente excluir?',
      accept: () => {
        this.disciplinasService.excluir(id).subscribe( res => {
          this.toasty.success('Disciplina excluida com sucesso')
          this.consultar();
        },
        err =>  {
          this.errorHandler.handleError( err.json().message );
        }
        );
      }
    });
}



  addIdPesquisa(id: number, carregarDisciplina: boolean){
    this.disciplinasService.addIdPesquisa(id, carregarDisciplina);
  }
}

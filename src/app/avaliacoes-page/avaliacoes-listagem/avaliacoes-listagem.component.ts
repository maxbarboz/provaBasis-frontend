import { ConfirmationService } from 'primeng/api';
import { AvaliacoesService } from './../avaliacoes.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-avaliacoes-listagem',
  templateUrl: './avaliacoes-listagem.component.html',
  styleUrls: ['./avaliacoes-listagem.component.css']
})
export class AvaliacoesListagemComponent implements OnInit {

  avaliacao: any = [];
  cols: any[] =  [];

  constructor(
    private avaliacaoService: AvaliacoesService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
    ) {}

  ngOnInit()  {
    this.consultar();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'aluno.nome', header: 'Nome' },
      { field: 'nota', header: 'Nota' }
    ];
  }

  consultar(){
    this.avaliacaoService.consultar().subscribe( res => {
      this.avaliacao = res;
    });
  }

  excluir(id: number){
    this.confirmation.confirm({
      message: 'Deseja realmente excluir?',
      accept: () => {
        this.avaliacaoService.excluir(id).subscribe( 
          res => {
          this.toasty.success('Avaliação excluida com sucesso')
          this.consultar();
        });
      }
    });
  }

  addIdPesquisa(id: number){
    this.avaliacaoService.addIdPesquisa(id);
    console.log( id )
  }
}
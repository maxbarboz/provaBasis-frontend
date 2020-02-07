import { ErrorHandlerService } from './../../core/error-handler.service';
import { Aluno } from 'src/app/model/aluno.model';
import { ToastyService } from 'ng2-toasty';
import { AvaliacoesService } from './../avaliacoes.service';
import { SelectItem } from 'primeng/api/selectitem';
import { Avaliacao } from './../../model/avaliacao.model';
import { DisciplinasService } from './../../disciplinas-page/disciplinas.service';
import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-avaliacoes-v2-page',
  templateUrl: './avaliacoes-v2-page.component.html',
  styleUrls: ['./avaliacoes-v2-page.component.css']
})
export class AvaliacoesV2PageComponent implements OnInit {

  avaliacao: Avaliacao = new Avaliacao;
  disciplina: SelectItem[];
  alunos = [];
  exibindoAlunos: boolean;
  exibindoErro: boolean;
  mostrarDisciplinas: boolean;
  cols: any[];
  idDisciplina: any;
  alunoNome: String;

  constructor(
    private disciplinasService: DisciplinasService,
    private avaliacoesService: AvaliacoesService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit() {
    this.carregarDisciplina();
  }

  carregarDisciplina(){
    this.disciplinasService.consultar().subscribe( (res: any[]) =>
    this.disciplina = res.map( disciplina => {
      return { label: disciplina.nome , value: {"id": disciplina.id} }
    }));   
  }

  carregarAluno(idDisciplina){
    this.idDisciplina = idDisciplina;
    this.alunos = [];
    this.disciplinasService.detalharParaAvaliacao(idDisciplina).subscribe( res => {

      let aluno: any;
      console.log( res.json() )
      res.json().alunos.forEach( abc => {
        aluno = {
          id: abc.id,
          nome: abc.nome,
          matricula: abc.matricula,
          nota: undefined,
          data: undefined
        }

        this.alunos.push(aluno)
      })

      console.log( this.alunos )
      if( this.alunos[0] == null ){
        this.alteraExibindoErro();
      }else{
        this.alteraExibindoAlunos();
        this.montaColuna();
      }
      this.montaColuna();
    });
  }
  
  montaColuna(){
    return this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'matricula', header: 'Matrícula' }
    ];
  }

  montaNotaAvaliacao(){
    this.alunos.map( alunoAva => {
      this.avaliacao.aluno = {
        id: alunoAva.id
      }
      this.avaliacao.data = alunoAva.data
      this.avaliacao.disciplina = {
        id: this.idDisciplina
      }
      this.avaliacao.nota = alunoAva.nota
      this.alunoNome = alunoAva.nome

      if( this.avaliacao.nota == null && this.avaliacao.data == null){
      }else if( this.avaliacao.nota == null || this.avaliacao.data == null){
        this.toasty.error(`Faltou dados para lançar a nota do aluno: ${this.alunoNome}` )
      }else{
        this.avaliacoesService.adicionar(this.avaliacao).subscribe(
          avaliacao => {
            this.toasty.success("Nota(as) lançada(as) com sucesso")
          },
          err =>  {
            this.errorHandler.handleError( err.json().message );
        })
      }
    })   
  }

  alteraExibindoAlunos(){
    this.exibindoAlunos = !this.exibindoAlunos;
  }

  adicionar(){
    this.montaNotaAvaliacao()
  }

  alteraExibindoErro(){
    return this.exibindoErro = !this.exibindoErro;
  }

  mostrarDisciplinasAlterar(){
    return this.mostrarDisciplinas = !this.mostrarDisciplinas;
  }
}

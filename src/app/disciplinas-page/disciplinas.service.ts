import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  idDisciplina: number;
  carregarDisciplina: boolean;

  // tslint:disable-next-line: deprecation
  constructor(
    private http: Http,
    private httpService: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/disciplinas');
  }

  adicionar(disciplina: any) {
    return this.http.post('http://localhost:8080/api/disciplinas', disciplina);
  }

  excluir(id: number) {
    return this.http.delete(`http://localhost:8080/api/disciplinas/${id}`);
  }
  
  detalhar() {
    this.carregarDisciplina = false;

    if( this.idDisciplina == undefined ){
      this.router.navigate(['/disciplinas'])
      return this.http.get('http://localhost:8080/api/disciplinas')
    }

    return this.http.get(`http://localhost:8080/api/disciplinas/detalhes/${this.idDisciplina}`);
  }

  addIdPesquisa(id: number, carregarDisciplina: boolean){
    this.idDisciplina = id;
    this.carregarDisciplina = carregarDisciplina;
  }
}
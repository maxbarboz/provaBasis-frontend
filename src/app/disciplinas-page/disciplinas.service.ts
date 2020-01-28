import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  idDisciplina: number;
  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private httpService: HttpClient) { }

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
    return this.http.get(`http://localhost:8080/api/disciplinas/detalhes/${this.idDisciplina}`);
  }

  addIdPesquisa(id: number){
    this.idDisciplina = id;
  }
}
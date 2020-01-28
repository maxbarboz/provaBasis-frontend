import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  idAluno: number;

  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private httpService: HttpClient) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/alunos');
  }

  adicionar(aluno: any) {
    return this.http.post('http://localhost:8080/api/alunos', aluno);
  }

  excluir(matricula: string) {
    return this.http.delete(`http://localhost:8080/api/alunos/${matricula}`);
  }

  detalhar() {
    return this.http.get(`http://localhost:8080/api/alunos/detalhes/${this.idAluno}`);
  }

  addIdPesquisa(id: number){
    this.idAluno =  id;
  }
}

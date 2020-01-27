import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private httpService: HttpClient) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/alunos');
  }

  adicionar(aluno: any) {
    return this.http.post('http://localhost:8080/api/alunos', aluno);
  }

}

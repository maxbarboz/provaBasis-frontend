import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  idProfessor: number;
  carregarProfessor: boolean;
  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private httpService: HttpClient) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/professores');
  }

  excluir(matricula: string) {
    return this.http.delete(`http://localhost:8080/api/professores/${matricula}`);
  }

  adicionar(professor: any) {
    return this.http.post('http://localhost:8080/api/professores', professor);
  }

  detalhar() {
    this.carregarProfessor = false;
    return this.http.get(`http://localhost:8080/api/professores/detalhes/${this.idProfessor}`);
  }

  addIdPesquisa(id: number, carregarProfessor: boolean){
    this.idProfessor =  id;
    this.carregarProfessor = carregarProfessor;
  }


}
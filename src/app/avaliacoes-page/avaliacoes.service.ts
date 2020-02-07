import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {

    idAvaliacao: number;
  // tslint:disable-next-line: deprecation
  constructor(
    private http: Http,
    private httpService: HttpClient
    ) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/avaliacoes');
  }

  detalhar(id) {
    return this.httpService.get(`http://localhost:8080/api/avaliacoes/detalhes/${id}`);
  }

  adicionar(avaliacao: any): Observable<{}> {
    return this.http.post('http://localhost:8080/api/avaliacoes', avaliacao)
  }

  editar(avaliacao: any): Observable<{}> {
    return this.http.put('http://localhost:8080/api/avaliacoes', avaliacao)
  }
  excluir(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/api/avaliacoes/${id}`)
  }

  addIdPesquisa(id: number){
    this.idAvaliacao = id;
  }
}
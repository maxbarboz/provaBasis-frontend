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

  detalhar() {
    return this.httpService.get(`http://localhost:8080/api/avaliacoes/detalhes/${this.idAvaliacao}`);
  }

  adicionar(avaliacao: any): Observable<{}> {
    return this.http.post('http://localhost:8080/api/avaliacoes', avaliacao)
  }

  excluir(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/api/avaliacoes/${id}`)
  }

  addIdPesquisa(id: number){
    console.log( id )
    this.idAvaliacao = id;
  }
}
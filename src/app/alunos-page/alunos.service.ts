import { ErrorHandlerService } from './../core/error-handler.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  idAluno: number;
  carregarAluno: boolean;

  // tslint:disable-next-line: deprecation
  constructor(
    private http: Http,
    private httpService: HttpClient, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  consultar() {
    return this.httpService.get('http://localhost:8080/api/alunos');
  }

  adicionar(aluno: any): Observable<{}> {

    console.log( aluno )
    return this.http.post('http://localhost:8080/api/alunos', aluno)
  }

  editar(aluno: any): Observable<{}> {
    console.log( aluno )
    return this.http.put('http://localhost:8080/api/alunos', aluno)
  }

  excluir(matricula: string) {
    return this.http.delete(`http://localhost:8080/api/alunos/${matricula}`);
  }

  detalhar() {
    this.carregarAluno = false;
    
    if( this.idAluno == undefined ){
      this.router.navigate(['/alunos'])
      return this.http.get('http://localhost:8080/api/alunos');
    }

    return this.http.get(`http://localhost:8080/api/alunos/detalhes/${this.idAluno}`);
  }

  addIdPesquisa(id: number, carregarAluno: boolean){
    this.idAluno =  id;
    this.carregarAluno = carregarAluno;
  }
}

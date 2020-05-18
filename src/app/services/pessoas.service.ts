import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './models/pessoas.model';
import { Observable } from 'rxjs';
import { Resposta } from './models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  readonly url: string = 'http://dummy.restapiexample.com/api/v1'
  constructor(private http: HttpClient) { }

  getResponse(): Observable<Resposta> {
    return this.http.get<Resposta>(`${this.url}/employees`);
  }

  getPessoas(): Pessoa[] {
    var pessoas = [];
    this.getResponse().subscribe(
    x => { 
      pessoas = x.data;
    });
    return pessoas;
  }
}

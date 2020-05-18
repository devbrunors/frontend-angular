import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoasService } from 'src/app/services/pessoas.service';
import { Pessoa } from 'src/app/services/models/pessoas.model';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  simpleRequestPessoas: Pessoa[];

  title = 'frontend';
  constructor(private pessoaService: PessoasService){

  }

  ngOnInit(){
    this.getSimpleHttpRequest();
  }
  getSimpleHttpRequest(){
    this.pessoaService.getResponse().subscribe(
    x => { 
      this.simpleRequestPessoas = x.data;
    });
  }

}

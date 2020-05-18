import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public form: FormGroup;
  @Input() public nome: string;
  @Input() public id: string;

  valorSaldo = 0;

  mostrarSaldoAdicionado = false;

  progressbar = document.getElementById('progress-bar');
  
  constructor(
    private formBuilder: FormBuilder
    ) {
      this.nome = "";
      this.id = "";
    }

    @ViewChild("modalSaldo", { static: false })
    modalSaldo: ModalComponent;

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      saldo: [null]
    });

    this.valorSaldo = 0;
    this.form.controls.saldo.setValue(this.valorSaldo);

  }

  public novoSaldo(): void {
    this.modalSaldo.open();
  }

  public adicionarSaldo(valor): void {
    if(this.form.value.saldo + valor <= 200){
      this.form.controls.saldo.setValue(this.form.value.saldo + valor);
      this.valorSaldo = this.form.value.saldo;
      document.getElementById("progress-bar-"+this.id).style.color = "#FFF";
      document.getElementById("progress-bar-"+this.id).style.width = String((this.valorSaldo/2)+"%");
      document.getElementById("progress-bar-"+this.id).style.paddingRight = "8px";
      document.getElementById("card-"+this.id).style.borderRadius = "5px";//String("R$ "+this.valorSaldo+",00");
      this.mostrarSaldoAdicionado = true;
      this.modalSaldo.close();
    } else {
      alert("O saldo total não pode ser maior que 200!");
    }
  }



}

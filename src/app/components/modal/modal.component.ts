import { Component, OnInit, Input } from '@angular/core';
import { fadeIn, fadeOut } from '../animations/animation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class ModalComponent implements OnInit {

  public isOpen: boolean;
  public animationOpen2: boolean;
  @Input() public nome: string;
  
  constructor() {
    this.nome = "";
  }

  public ngOnInit() {}
  public open() {
    this.isOpen = true;
    this.animationOpen2 = true;
  }
  public toggle() {
    this.isOpen = !this.isOpen;
    this.animationOpen2 = !this.animationOpen2;
  }
  public close() {
    this.animationOpen2 = false;
    setTimeout(() => {
      this.isOpen = false;
    }, 150);
  }

}

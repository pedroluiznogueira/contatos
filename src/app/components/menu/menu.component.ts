import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // @Output() vai do filho pro pai, @Input() do pai pro filho
  @Output() onAddContatoClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  
  ngOnInit(): void {
  }

  // emite o sinal, avisando do evento
  mostrarModalClick() {
    console.log("Cliquei para aparecer o modal!")
    this.onAddContatoClick.emit();
  }

  sair() {
    console.log("Cliquei para sair!")
    this.onAddContatoClick.emit();
  }
  
}

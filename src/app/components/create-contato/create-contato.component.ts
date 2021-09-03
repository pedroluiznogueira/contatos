import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter;
  
  // two data biding com ngModel, cujo campo precisa de um atributo "name"
  novoContato: Contato = {
    // criando esses campos vazios
    nome: "",
    email: "",
    telefone:["", "", ""]
  }

  ver!: boolean;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  cancelar() {
    console.log("saindo do Modal")
    this.onCancelarClick.emit();
  }

  // faz com que o ngFor gerencie por um auxiliar, não direto pelo valor que sempre é mudado, ela é um callback, não preciso do retorno apenas da execução da função
  track(index: number, value: string) {
    return index;
  }

  addClassText(): void {
    let a = document.querySelector("a")!;
    a.classList.add("remove");

    let icon = document.querySelector("i")!;
    icon.innerText = "remove_circle";
  }

}

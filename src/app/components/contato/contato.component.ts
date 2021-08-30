import { Component, Input, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  // importa a função input, para poder levar dados para essa variavel, decorador "@Input()"
  @Input("a") registro!: Contato;

  constructor() { }

  ngOnInit(): void {
  }

}

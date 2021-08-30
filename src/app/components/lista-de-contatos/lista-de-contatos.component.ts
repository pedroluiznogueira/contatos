import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})

export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    {
      nome: "Mariana 1", 
      email: "mariana@teste.com",
      telefone: ["1111 - 1111"]  
    },
    {
      nome: "Mariana 2", 
      email: "mariana@teste.com",
      telefone: ["2222 - 2222"]  
    },
    {
      nome: "Mariana 3", 
      email: "mariana@teste.com",
      telefone: ["3333 - 3333"]  
    },
    {
      nome: "Mariana 4", 
      email: "mariana@teste.com",
      telefone: ["4444 - 4444"]  
    },
    {
      nome: "Mariana 5", 
      email: "mariana@teste.com",
      telefone: ["5555 - 5555"]  
    },
    {
      nome: "Mariana 6", 
      email: "mariana@teste.com",
      telefone: ["6666 - 6666"]  
    },
    {
      nome: "Mariana 7", 
      email: "mariana@teste.com",
      telefone: ["7777 - 7777"]  
    },
    {
      nome: "Mariana 8", 
      email: "mariana@teste.com",
      telefone: ["8888 - 8888"]  
    },
    {
      nome: "Mariana 9", 
      email: "mariana@teste.com",
      telefone: ["9999 - 9999"]  
    },
    {
      nome: "Mariana 10", 
      email: "mariana@teste.com",
      telefone: ["1010 - 1010"]  
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

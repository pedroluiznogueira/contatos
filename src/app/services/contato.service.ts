import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS: Contato[] = [
  // {
  //   nome: "Mariana 1", 
  //   email: "mariana@teste.com",
  //   telefone: ["1111 - 1111", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 2", 
  //   email: "mariana@teste.com",
  //   telefone: ["2222 - 2222", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 3", 
  //   email: "mariana@teste.com",
  //   telefone: ["3333 - 3333", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 4", 
  //   email: "mariana@teste.com",
  //   telefone: ["4444 - 4444", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 5", 
  //   email: "mariana@teste.com",
  //   telefone: ["5555 - 5555", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 6", 
  //   email: "mariana@teste.com",
  //   telefone: ["6666 - 6666", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 7", 
  //   email: "mariana@teste.com",
  //   telefone: ["7777 - 7777", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 8", 
  //   email: "mariana@teste.com",
  //   telefone: ["8888 - 8888", "2222 - 2222", "2222 - 2222"]  
  // },
  // {
  //   nome: "Mariana 9", 
  //   email: "mariana@teste.com",
  //   telefone: ["9999 - 9999", ]  
  // },
  // {
  //   nome: "Mariana 10", 
  //   email: "mariana@teste.com",
  //   telefone: ["1010 - 1010", "2222 - 2222", "2222 - 2222"]  
  // },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos: Contato[];
  private chave: string = "CONTATOS";

  constructor() {
    // guardando novos contatos no local storage
    let dados = window.localStorage.getItem(this.chave);
    if (dados) {
      // transforma uma string JSON em um array
      this.baseDeContatos = JSON.parse(dados);
    } else {
      window.localStorage.setItem(this.chave, "[]");
      this.baseDeContatos = [];
    }
   }

  getContatos(): Contato[] {
    return this.baseDeContatos;
  }

  addContato(c: Contato):void {
    this.baseDeContatos.push(c);
    // transforma um array baseDeContatos em string
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));   
  }
}

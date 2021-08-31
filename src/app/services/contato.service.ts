import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS: Contato[] = [
  {
    nome: "Mariana 1", 
    email: "mariana@teste.com",
    telefone: ["1111 - 1111", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 2", 
    email: "mariana@teste.com",
    telefone: ["2222 - 2222", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 3", 
    email: "mariana@teste.com",
    telefone: ["3333 - 3333", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 4", 
    email: "mariana@teste.com",
    telefone: ["4444 - 4444", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 5", 
    email: "mariana@teste.com",
    telefone: ["5555 - 5555", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 6", 
    email: "mariana@teste.com",
    telefone: ["6666 - 6666", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 7", 
    email: "mariana@teste.com",
    telefone: ["7777 - 7777", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 8", 
    email: "mariana@teste.com",
    telefone: ["8888 - 8888", "2222 - 2222", "2222 - 2222"]  
  },
  {
    nome: "Mariana 9", 
    email: "mariana@teste.com",
    telefone: ["9999 - 9999", ]  
  },
  {
    nome: "Mariana 10", 
    email: "mariana@teste.com",
    telefone: ["1010 - 1010", "2222 - 2222", "2222 - 2222"]  
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos(): Contato[] {
    return BASE_DE_CONTATOS;
  }

  addContatos(c: Contato):void {
    BASE_DE_CONTATOS.push(c);
  }
}

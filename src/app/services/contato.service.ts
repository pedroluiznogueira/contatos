import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave: string = "CONTATOS";

  // carregando um array de Contato em "[]", agora onContatoService é um objeto da classe ContatoService
  // static faz com que um atributo de uma classe possa ser usado sem criarmos um objeto dessa classe
  static onContatosMudaram: EventEmitter<Contato[]> = new EventEmitter();

  constructor() { }

  getContatos():Contato[] {
      // tentar carregar os dados da local storage
      let dados = window.localStorage.getItem(this.chave);

      // verificar se havia dados na local storage
      if (dados) {
        // se houver => (transformar dados em array; retornar o array de contatos)
        let contatosCarregados: Contato[] = JSON.parse(dados);
        return contatosCarregados;
      } else {
        // se não houver dadosa => (guardo um array vazio no local storage; retorna o array vazio)
        window.localStorage.setItem(this.chave, "[]");
        return [];
      }
  }

  addContato(c:Contato): void {
    // levantar os contatos do local storage para um array de contatos
    let contatos = this.getContatos();

    // adicionar o contato c ao final do array
    contatos.push(c);

    // salvar o array de volta no local storage
    window.localStorage.setItem(this.chave, JSON.stringify(contatos));

    // emitindo o evento que "contatos" mudaram
    // agora não emitimos com o cs mas sim com ContatoService
    ContatoService.onContatosMudaram.emit(contatos);
  }
}

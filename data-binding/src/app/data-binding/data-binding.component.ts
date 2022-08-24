import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com';
  urlImagem: string = 'https://picsum.photos/id/237/200/300';

  pessoa = {
    nome: 'Isaias',
    idade: 500
  }

  getValor() {
    return 1;
  }

  cliqueBotao(){
    alert('clicou');
  }

  constructor() { }

  ngOnInit(): void {
  }

}

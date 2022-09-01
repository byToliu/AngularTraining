import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Macaco. Uma Jornada Para o Oeste",
    estrelas: 4.65454,
    paginas: 290,
    preco: 18.32,
    data: new Date(2003, 9, 10),
    url: "https://www.amazon.com.br/dp/8588023393/?coliid=I2A86H492NQJK0&colid=2UN6B67H0LGL1&psc=1&ref_=lv_ov_lig_dp_it"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

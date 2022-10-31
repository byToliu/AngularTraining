import { Component, OnInit } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  nomeDoItem: string;

  verduras: string[];

  constructor(private ServicoService: ServicoService) { 
    this.nomeDoItem = "beterraba";
    this.verduras = this.ServicoService.getVerduras();
  }

  ngOnInit(): void {
  }

}

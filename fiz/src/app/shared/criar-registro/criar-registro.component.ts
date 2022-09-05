import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/registros.service';


@Component({
  selector: 'app-criar-registro',
  templateUrl: './criar-registro.component.html',
  styleUrls: ['./criar-registro.component.scss']
})
export class CriarRegistroComponent implements OnInit {

  registros: any;

  btnCorSelected: string = '';

  registrosSet: any = {
    colors: ['yellow', 'pink', 'blue'],
    icons: ['light', 'cat', 'pill'],
    frequencia: ['uma vez', 'diaria', 'semanal', 'mensal']
  }
  
  novoRegistro: any = {
    
      id: 0,
      titulo: "",
      icone: "light",
      cor: "yellow",
      data: new Date(2003, 9, 10),
      frequencia: "diaria",
      status: "created",
      selected: false,
      complete: false
    
  }

  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.registros = this.registrosService.registros;
    this.btnCorSelected = this.novoRegistro.cor;
  }

  createRegistro(){

   
    this.novoRegistro.id = this.registros.length;
    

    if (this.novoRegistro.titulo == '') {
      this.novoRegistro.titulo = 'Novo registro';
    }

    this.registros.push(this.novoRegistro);

  }


}

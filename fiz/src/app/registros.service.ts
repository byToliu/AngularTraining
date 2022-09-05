import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

 registros: any =  [
    
      {
        id: 0,
        titulo: "Apagar as luzes",
        icone: "light",
        cor: "yellow",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "created",
        selected: false,
        complete: false
      },
      {
        id: 1,
        titulo: "Colocar comida pro xane",
        icone: "cat",
        cor: "blue",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "created",
        selected: false,
        complete: true
      },
      {
        id: 2,
        titulo: "Colocar água pro xane",
        icone: "cat",
        cor: "blue",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "check",
        selected: false,
        complete: false
      },
      {
        id: 3,
        titulo: "Tomei o remédio",
        icone: "pill",
        cor: "pink",
        data: new Date(2003, 9, 10),
        frequencia: "diaria",
        status: "created",
        selected: false,
        complete: false
      }
    ]
  

  

  constructor() { }
}

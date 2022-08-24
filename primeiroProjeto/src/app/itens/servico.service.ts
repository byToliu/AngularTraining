import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor() { }

  getVerduras(){
    return ['batata', 'cenoura', 'abóbora'];
  }
}

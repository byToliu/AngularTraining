import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { petType } from '../models/pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  private readonly API = `${environment.API}/pets`;

  constructor(private http: HttpClient) { }


  getListagem(){
    return this.http.get<petType[]>(this.API);
  }
}

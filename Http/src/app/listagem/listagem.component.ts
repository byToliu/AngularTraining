import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { petType } from '../models/pet';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  // pets!: petType[];

  pets$!: Observable<petType[]>;

  constructor(private service: ListagemService) { }

  ngOnInit(): void {
    // this.service.getListagem().subscribe(resultado => this.pets = resultado);

    this.pets$ = this.service.getListagem();
  }

}

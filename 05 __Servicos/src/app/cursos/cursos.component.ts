import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(cursosService: CursosService) {
    // this.cursosService = new CursosService();
    this.cursosService = cursosService;
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}

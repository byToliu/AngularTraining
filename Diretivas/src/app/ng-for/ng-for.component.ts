import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  verduras: string[] = ['acabaxi', 'nabana', 'césio']

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.verduras.length; i++) {
      let verdura = this.verduras[i];
    }
  }

}

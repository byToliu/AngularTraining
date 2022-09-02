import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

    constructor(){
        console.log('o');
    }

    getCursos(){
        return ['Angular', 'SASS', "JS"];
    }

}
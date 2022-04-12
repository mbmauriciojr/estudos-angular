import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['JavaScript', 'Angular', 'React.Js', 'Node.Js'];
  };

};

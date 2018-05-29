import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  get students() {
    return [
      {name: 'Alain', age: 26},
      {name: 'Hélène', age: 28},
      {name: 'Pierre', age: 29}
    ];
  }
}

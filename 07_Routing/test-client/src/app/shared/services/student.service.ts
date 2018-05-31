import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { from, Observable } from 'rxjs';
import { first, filter, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students = [
    {name: 'Alain', age: 26},
    {name: 'Hélène', age: 28},
    {name: 'Pierre', age: 29}
  ];

  constructor() { }

  get students(): Array<Student> {
    return this._students;
  }

  student(name: string): Observable<Student> {
    return from(this._students)
      .pipe(
        first(student => student.name.toLocaleLowerCase() === name.toLowerCase())
      );
  }
}

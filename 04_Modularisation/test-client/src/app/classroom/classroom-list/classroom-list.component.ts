import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {
  students: any;

  constructor() { }

  ngOnInit() {
    this.students = [
      {name: 'Alain', age: 26},
      {name: 'Hélène', age: 28}
    ]
  }

}

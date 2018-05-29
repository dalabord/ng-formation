import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {
  @Input() students: any;

  constructor() { }

  ngOnInit() {
  }

}

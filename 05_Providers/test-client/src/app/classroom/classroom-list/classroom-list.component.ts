import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { Student } from '../../core/models/student';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
      this.students = <Student[]>this.studentService.students;
  }

}

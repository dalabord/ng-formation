import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { Student } from '../../shared/models/student';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {
  students: Student[];
  sortAsc = true;
  searchInput = '';

  constructor(private studentService: StudentService) { }

  ngOnInit() {
      this.students = this.studentService.students;
  }

}

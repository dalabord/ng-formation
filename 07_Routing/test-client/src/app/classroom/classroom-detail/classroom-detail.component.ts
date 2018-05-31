import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../shared/models/student';
import { Subscription, Observable } from 'rxjs';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-classroom-detail',
  templateUrl: './classroom-detail.component.html',
  styleUrls: ['./classroom-detail.component.scss']
})
export class ClassroomDetailComponent implements OnInit {
  private sub: Subscription;
  student: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.student = this.studentService.student(params['name']);
   });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

}

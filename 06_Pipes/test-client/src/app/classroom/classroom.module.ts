import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClassroomListComponent
  ],
  exports: [
    ClassroomListComponent
  ]
})
export class ClassroomModule { }

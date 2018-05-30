import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from '../shared/pipe/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ClassroomListComponent,
  ],
  exports: [
    ClassroomListComponent
  ]
})
export class ClassroomModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from '../shared/pipe/order-by.pipe';
import { ClassroomRoutingModule } from './classroom-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClassroomRoutingModule,
  ],
  declarations: [
    ClassroomListComponent,
  ]
})
export class ClassroomModule { }

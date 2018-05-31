import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomDetailComponent } from './classroom-detail/classroom-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClassroomListComponent
  },
  { 
    path: 'student/:name', 
    component: ClassroomDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
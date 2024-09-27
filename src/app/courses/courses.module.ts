import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-course', component: AddCourseComponent },
  { path: 'edit-course', component: EditCourseComponent },
  { path: 'show-courses', component: ShowCoursesComponent },
];

@NgModule({
  declarations: [
    AddCourseComponent,
    ShowCoursesComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoursesModule { }

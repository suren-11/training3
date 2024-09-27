import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';



@NgModule({
  declarations: [
    AddCourseComponent,
    ShowCoursesComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }

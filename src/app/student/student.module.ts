import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    ShowStudentsComponent,
    EditStudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }

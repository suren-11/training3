import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentsComponent },
  { path: 'show-students', component: ShowStudentsComponent },
];

@NgModule({
  declarations: [
    AddStudentComponent,
    ShowStudentsComponent,
    EditStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class StudentModule { }

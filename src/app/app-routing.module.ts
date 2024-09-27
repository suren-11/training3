import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './public-base/public-base.component';
import { LoginComponent } from './login/login.component';
import { PrivateBaseComponent } from './private-base/private-base.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { MyTestingComponent } from './my-testing/my-testing/my-testing.component';

const routes: Routes = [
  { path: 'dashboard', component: PrivateBaseComponent, children: [
    { path: 'student', loadChildren: ()=> import('../app/student/student.module').then(m=> m.StudentModule)},
    { path: 'course', component: AddCourseComponent},
    { path: 'my-testing', component: MyTestingComponent},
  ] },
  { path: 'login', component: PublicBaseComponent, children: [{ path: '', component: LoginComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

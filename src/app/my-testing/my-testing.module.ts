import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestingComponent } from './my-testing/my-testing.component';
import { InputDecoratorChildComponent } from './childs/input-decorator-child/input-decorator-child.component';
import { ViewChildComponent } from './childs/view-child/view-child.component';
import { ParantComponent } from './parant/parant.component';
import { RouterModule, Routes } from '@angular/router';
import { EventEmmitterChildComponent } from './childs/event-emmitter-child/event-emmitter-child.component';
import { SibilingComponent } from './childs/sibiling/sibiling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './reusable/date-picker/date-picker.component';
import { ReusableParentComponent } from './reusable/reusable-parent/reusable-parent.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectStreamService } from '../services/subject-stream.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AddStudentBackendComponent } from './add-student-backend/add-student-backend.component';


const routes: Routes = [
  { path: '', component: MyTestingComponent },
  { path: 'testing2', component: ReusableParentComponent },
  { path: 'subject-list', component: SubjectListComponent },
  { path: 'add-student', component: AddStudentBackendComponent }
];

@NgModule({
  declarations: [
    MyTestingComponent,
    InputDecoratorChildComponent,
    ViewChildComponent,
    ParantComponent,
    EventEmmitterChildComponent,
    SibilingComponent,
    DatePickerComponent,
    ReusableParentComponent,
    SubjectListComponent,
    AddStudentBackendComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [SubjectStreamService, provideHttpClient(withFetch())],
})
export class MyTestingModule { }

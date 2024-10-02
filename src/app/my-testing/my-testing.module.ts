import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestingComponent } from './my-testing/my-testing.component';
import { InputDecoratorChildComponent } from './childs/input-decorator-child/input-decorator-child.component';
import { ViewChildComponent } from './childs/view-child/view-child.component';
import { ParantComponent } from './parant/parant.component';
import { RouterModule, Routes } from '@angular/router';
import { EventEmmitterChildComponent } from './childs/event-emmitter-child/event-emmitter-child.component';
import { SibilingComponent } from './childs/sibiling/sibiling.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'', component:MyTestingComponent},
  { path: 'view-child', component: ViewChildComponent },
];

@NgModule({
  declarations: [
    MyTestingComponent,
    InputDecoratorChildComponent,
    ViewChildComponent,
    ParantComponent,
    EventEmmitterChildComponent,
    SibilingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  
  exports:[RouterModule]
})
export class MyTestingModule { }

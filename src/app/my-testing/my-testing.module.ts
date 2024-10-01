import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestingComponent } from './my-testing/my-testing.component';
import { InputDecoratorChildComponent } from './childs/input-decorator-child/input-decorator-child.component';
import { ViewChildComponent } from './childs/view-child/view-child.component';
import { ParantComponent } from './parant/parant.component';




@NgModule({
  declarations: [
    MyTestingComponent,
    InputDecoratorChildComponent,
    ViewChildComponent,
    ParantComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyTestingModule { }

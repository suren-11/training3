import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../childs/view-child/view-child.component';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrl: './parant.component.scss'
})
export class ParantComponent implements AfterViewInit {
  parentMessage = 'This is from Parent component'

  @ViewChild(ViewChildComponent) child: any;
  
  constructor(){}

   viewChildMessage!: string;

  ngAfterViewInit(): void {
    this.viewChildMessage = this.child.message;
  }
}

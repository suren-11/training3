import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../childs/view-child/view-child.component';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrl: './parant.component.scss'
})
export class ParantComponent implements AfterViewInit, OnInit, OnDestroy {
  parentMessage = 'This is from Parent component'

  @ViewChild(ViewChildComponent) child: any;
  
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

   viewChildMessage!: string;

  ngAfterViewInit(): void {
    this.viewChildMessage = this.child.message;
  }

  outPutEmmitterMessage!:string;

  receiveMessage($event: string){
    this.outPutEmmitterMessage = $event;
  }
}

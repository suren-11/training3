import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../childs/view-child/view-child.component';
import { Subscription } from 'rxjs';
import { DataService } from '../childs/data.service';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrl: './parant.component.scss'
})
export class ParantComponent implements AfterViewInit, OnInit, OnDestroy {
  parentMessage = 'This is from Parent component'

  @ViewChild(ViewChildComponent) child: any;
  
  constructor(private data: DataService) { }


  viewChildMessage!: string;

  ngAfterViewInit(): void {
    this.viewChildMessage = this.child.message;
  }

  outPutEmmitterMessage!: string;

  receiveMessage($event: string) {
    this.outPutEmmitterMessage = $event;
  }

  sibilingMessage!: string;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(msg => this.sibilingMessage = msg);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  // 

  


}

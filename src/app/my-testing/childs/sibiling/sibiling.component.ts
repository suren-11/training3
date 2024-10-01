import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibiling',
  templateUrl: './sibiling.component.html',
  styleUrl: './sibiling.component.scss'
})
export class SibilingComponent implements OnInit, OnDestroy{

  message!: string;
  subscription!: Subscription;

  constructor(private data: DataService) {
    
  }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(msg => this.message = msg);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  newMessage(){
    this.data.changeMessage('Hello This is different message from sibiling')
  }

}

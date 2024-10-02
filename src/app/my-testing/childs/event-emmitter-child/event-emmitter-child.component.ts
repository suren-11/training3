import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-emmitter-child',
  templateUrl: './event-emmitter-child.component.html',
  styleUrl: './event-emmitter-child.component.scss'
})
export class EventEmmitterChildComponent {
  message: string = "This is from Event Emmitter";

  @Output() messageEvent = new EventEmitter<string>();

  constructor(){}

  sendMessage(){
    this.messageEvent.emit(this.message);
  }
} 

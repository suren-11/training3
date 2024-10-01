import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-decorator-child',
  templateUrl: './input-decorator-child.component.html',
  styleUrl: './input-decorator-child.component.scss'
})
export class InputDecoratorChildComponent {
  @Input() childMessage!: string;

  constructor() {  }
}

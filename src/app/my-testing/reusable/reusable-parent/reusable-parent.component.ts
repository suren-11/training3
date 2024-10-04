import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-parent',
  templateUrl: './reusable-parent.component.html',
  styleUrl: './reusable-parent.component.scss'
})
export class ReusableParentComponent {
  selectedDate: string = '';
}

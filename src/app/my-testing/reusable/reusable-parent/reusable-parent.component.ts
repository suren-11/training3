import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-parent',
  templateUrl: './reusable-parent.component.html',
  styleUrl: './reusable-parent.component.scss'
})
export class ReusableParentComponent {
  selectedDate!: string;
  isValidDate: boolean = true;

  onDateChange(date: string): void {
    this.selectedDate = date;
    this.isValidDate = this.validateDate(date);
  }

  validateDate(date: string): boolean {
    const [day, month, year] = date.split('-').map(Number);
    const parsedDate = new Date(year, month - 1, day);
    
    return parsedDate.getFullYear() === year &&
           parsedDate.getMonth() === month - 1 &&
           parsedDate.getDate() === day;
  }
}

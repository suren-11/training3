import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent{

  dateForm :FormGroup;

  @Output() dateChange = new EventEmitter<string>();

  constructor(private fb:FormBuilder) {
    this.dateForm = this.fb.group({
      day: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(12)]],
      year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    });
  }

  onDateChange(): void {
    if (this.dateForm.valid) {
     const formattedDate = `${this.dateForm.get('day')?.value}-${this.dateForm.get('month')?.value}-${this.dateForm.get('year')?.value}`;
      this.dateChange.emit(formattedDate);
    }else{
      this.dateChange.emit('Invalid date')
    }
  }

}

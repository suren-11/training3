import { Component } from '@angular/core';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.scss'
})
export class ShowCoursesComponent {
  courses = [
    {
      'id': 1,
      'name': 'Java',
      'fees': '100000',
      'duration': '4 Months',
    },
    {
      'id': 2,
      'name': 'C#',
      'fees': '200000',
      'duration': '5 Months',
    },
    {
      'id': 3,
      'name': 'Angular',
      'fees': '300000',
      'duration': '3 Months',
    },
  ];

}

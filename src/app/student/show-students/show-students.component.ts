import { Component } from '@angular/core';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.scss'
})
export class ShowStudentsComponent {

  students = [
    {
      'id': 1,
      'name': 'suren',
      'address': 'colombo',
      'dob': '11.09.1992',
      'course': 'java',
      'tel': '0752314569'
    },
    {
      'id': 2,
      'name': 'kamal',
      'address': 'jaffna',
      'dob': '11.09.1992',
      'course': 'C#',
      'tel': '0745614577'
    },
    {
      'id': 3,
      'name': 'bandula',
      'address': 'kandy',
      'dob': '11.09.1994',
      'course': 'Angular',
      'tel': '0745612486'
    },
  ];

}

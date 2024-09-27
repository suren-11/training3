import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private students: any[] = [];

  students1 =
    {
      'name': 'suren',
      'address': 'colombo',
      'dob': '11.09.1992',
      'course': 'java',
      'tel': '0752314569'
    };

    student2 = {
      'name': 'kamal',
      'address': 'jaffna',
      'dob': '11.09.1992',
      'course': 'C#',
      'tel': '0745614577'
    };

    student3 = {
      'name': 'bandula',
      'address': 'kandy',
      'dob': '11.09.1994',
      'course': 'Angular',
      'tel': '0745612486'
    };

  constructor() { 
    this.students.push(this.students1)
    this.students.push(this.student2)
    this.students.push(this.student3)
  }

  saveStudent(student:any){
    this.students.push(student);
  }

  getStudents(){
    return this.students;
  }
}

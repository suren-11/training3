import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private students: any[] = [];
  private selectedStudent: any;

  students1 =
    {
      'name': 'suren',
      'address': 'colombo',
      'dob': '1992-11-09',
      'course': 'Software Engineering',
      'tel': '0752314569',
      'regNum': 'SE202400001',
      pk: '202400001'
    };

  student2 = {
    'name': 'kamal',
    'address': 'jaffna',
    'dob': '1994-10-10',
    'course': 'Computer System',
    'tel': '0745614577',
    'regNum': 'CS202400002',
    pk: '202400002'
  };

  student3 = {
    'name': 'bandula',
    'address': 'kandy',
    'dob': '1994-08-06',
    'course': 'Information System',
    'tel': '0745612486',
    'regNum': 'IS202400003',
    pk: '202400003'
  };

  constructor() {
    this.students.push(this.students1)
    this.students.push(this.student2)
    this.students.push(this.student3)
  }

  saveStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  getSelectedStudent() {
    return this.selectedStudent;
  }

  updateStudent(updatedStudent: any) {
    const index = this.students.findIndex(s => s.pk === updatedStudent.pk);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
}

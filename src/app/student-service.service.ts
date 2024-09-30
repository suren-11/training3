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
      'course': 'Java',
      'tel': '0752314569',
      'regNum':'SE-2024-001',
      'pk':'2024-001'
    };

    student2 = {
      'name': 'kamal',
      'address': 'jaffna',
      'dob': '1994-10-10',
      'course': 'C#',
      'tel': '0745614577',
      'regNum':'CS-2024-002',
      'pk':'2024-002'
    };

    student3 = {
      'name': 'bandula',
      'address': 'kandy',
      'dob': '1994-08-86',
      'course': 'Angular',
      'tel': '0745612486',
      'regNum':'IS-2024-003',
      'pk':'2024-003'
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

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  getSelectedStudent() {
    return this.selectedStudent;
  }

  updateStudent(updatedStudent: any) {
    const index = this.students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
}

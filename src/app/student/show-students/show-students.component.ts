import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';
import { Student } from '../../entities/student';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.scss'
})
export class ShowStudentsComponent implements OnInit {

  students: any[] = [];
  students2: Student[] = [];

  constructor(private router: Router, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.loadStudents();
    this.loadAllStudents();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  editStudent(student: any) {
    this.studentService.selectStudent(student);
    this.router.navigate(['/dashboard/student/edit-student']);
  }

  loadAllStudents(){
    this.studentService.getAllStudents().subscribe({
      next:(data)=>{
        this.students2 = data
      },
      error:(error)=>{
        console.error("Fetching Error ", error);
        
      }
    });
  }
}

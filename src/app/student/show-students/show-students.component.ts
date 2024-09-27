import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.scss'
})
export class ShowStudentsComponent implements OnInit {

  students: any[] = [];

  constructor(private router: Router, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  editStudent(student: any) {
    this.studentService.selectStudent(student);
    this.router.navigate(['/dashboard/student/edit-student']);
  }

}

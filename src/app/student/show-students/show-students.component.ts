import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.scss'
})
export class ShowStudentsComponent implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.loadStudents(); 
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

}

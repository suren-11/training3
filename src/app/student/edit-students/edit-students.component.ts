import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss'
})
export class EditStudentsComponent implements OnInit {
  student: any = {};

  constructor(private studentService: StudentServiceService, private router: Router) {}

  ngOnInit(): void {
    this.student = this.studentService.getSelectedStudent();
  }

  save() {
    this.studentService.updateStudent(this.student);
    this.router.navigate(['/dashboard/student/show-students']);
  }
}

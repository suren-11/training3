import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss'
})
export class EditStudentsComponent implements OnInit {
  student: any = {};
  courses: any = {};

  constructor(private studentService: StudentServiceService, private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.student = this.studentService.getSelectedStudent();
    this.loadCourses();
  }

  loadCourses(){
    this.courses = this.courseService.getCourses();
  }

  save() {
    this.studentService.updateStudent(this.student);
    this.router.navigate(['/dashboard/student/show-students']);
  }
}

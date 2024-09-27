import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit {
  student: any = {
    name: '',
    address: '',
    dob: '',
    course: '',
    tel: '',
  };

  courses: any = [];

  constructor(private studentService: StudentServiceService, private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  save() {
    this.studentService.saveStudent(this.student);
    this.router.navigate(['/dashboard/student/show-students'])
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

}

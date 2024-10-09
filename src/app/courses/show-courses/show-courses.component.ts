import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.scss'
})
export class ShowCoursesComponent implements OnInit{
  courses: any[] = [];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

  editCourse(course: any) {
    this.courseService.selectCourse(course);
    this.router.navigate(['/dashboard/course/edit-course']);
  }
}

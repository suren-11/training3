import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})
export class EditCourseComponent implements OnInit {
  course: any = {};

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.course = this.courseService.getSelectedCourse();
  }

  save() {
    this.courseService.updateCourse(this.course)
    this.router.navigate(['/dashboard/course/show-courses']);
  }
}

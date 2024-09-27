import { Component } from '@angular/core';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  course: any = {
    name: '',
    fees:'',
    duration:'',
  };

  constructor(private courseService: CourseService, private router: Router){}

  save(){
    this.courseService.saveCourse(this.course);
    this.router.navigate(['/dashboard/course/show-courses'])
  }
}

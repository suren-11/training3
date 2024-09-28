import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  courseForm: FormGroup;

  constructor(private courseService: CourseService, private router: Router, private fb: FormBuilder){
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      fees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      duration: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  save(){
    if(this.courseForm.valid){
      this.courseService.saveCourse(this.course);
      this.router.navigate(['/dashboard/course/show-courses']);
    }else{
      this.courseForm.markAllAsTouched();
    }
  }

}

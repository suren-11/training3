import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})
export class EditCourseComponent implements OnInit {
  course: any = {
    name: '',
    fees:'',
    duration:'',
  };

  courseForm: FormGroup;
  
  constructor(private courseService: CourseService, private router: Router, private fb: FormBuilder) { 
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      fees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      duration: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.course = this.courseService.getSelectedCourse();
  }

  save() {
    if (this.courseForm.valid) {
      this.courseService.updateCourse(this.course)
      this.router.navigate(['/dashboard/course/show-courses']);
    }else{
      this.courseForm.markAllAsTouched();
    }
  }
}

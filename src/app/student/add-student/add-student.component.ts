import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  studentForm: FormGroup;

  constructor(
    private studentService: StudentServiceService,
    private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      dob: ['',[Validators.required]],
      course: ['',[Validators.required]],
      tel: ['',[Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  save() {
    if (this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value);
      this.router.navigate(['/dashboard/student/show-students'])
    }else{
      this.studentForm.markAllAsTouched();
    }
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

}

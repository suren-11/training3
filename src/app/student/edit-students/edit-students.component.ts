import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss'
})
export class EditStudentsComponent implements OnInit {
  student: any = {
    name: '',
    address: '',
    dob: '',
    course: '',
    tel: '',
  };
  courses: any = {};

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
    this.student = this.studentService.getSelectedStudent();
    this.loadCourses();
  }

  loadCourses(){
    this.courses = this.courseService.getCourses();
  }

  save() {
    if (this.studentForm.valid) {
      this.studentService.updateStudent(this.student);
      this.router.navigate(['/dashboard/student/show-students']);
    }else{
      this.studentForm.markAllAsTouched();
    }
  }
}

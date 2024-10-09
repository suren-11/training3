import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../../services/student-service.service';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { Student } from '../../entities/student';
import { SubjectStreamService } from '../../services/subject-stream.service';
import { SubjectStream } from '../../entities/subjects';
import { response } from 'express';

@Component({
  selector: 'app-add-student-backend',
  templateUrl: './add-student-backend.component.html',
  styleUrl: './add-student-backend.component.scss'
})
export class AddStudentBackendComponent implements OnInit {

  student: Student = new Student('', '', '', '', new Date(), '', 0n, '', new Date());


  year = new Date().getFullYear().toString();
  newPk = '';

  courses: SubjectStream[] = [];

  studentForm: FormGroup;

  constructor(
    private studentService: StudentServiceService,
    private courseService: SubjectStreamService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      "id": [""],
      "firstName": ['', [Validators.required, Validators.minLength(5)]],
      "secondName": ['', [Validators.required, Validators.minLength(5)]],
      "lastName": ['', [Validators.required, Validators.minLength(5)]],
      "dateOfBirth": ['', [Validators.required]],
      "gender": ['', Validators.required],
      "streamId": 0,
      "registrationNumber": "",
      "registrationDate": ""
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  save() {
    if (this.studentForm.valid) {
      this.student.firstName = this.studentForm.get('firstName')?.value;
      this.student.secondName = this.studentForm.get('secondName')?.value;
      this.student.lastName = this.studentForm.get('lastName')?.value;
      this.student.dateOfBirth = this.studentForm.get('dateOfBirth')?.value;
      this.student.gender = this.studentForm.get('gender')?.value;
      this.student.streamId = this.studentForm.get('streamId')?.value;

      this.studentService.saveStudentBackend(this.student).subscribe(
        response =>{
          this.router.navigate(['/dashboard/student/show-students'])
        }
      );
    
  } else {
    this.studentForm.markAllAsTouched();
    }
  }

  loadCourses() {

    this.courseService.getStrems().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.log("Error ", error);

      }
    });
  }


}

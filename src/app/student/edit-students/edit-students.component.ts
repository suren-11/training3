import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'node:console';

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
    pk:'',
    regNum: '',
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
      pk:[''],
      regNum:[''],
    });
  }

  ngOnInit(): void {
    this.student = this.studentService.getSelectedStudent();
    this.loadCourses();
  }

  loadCourses(){
    this.courses = this.courseService.getCourses();
  }


  generatedReg(){
    const pk = this.student.pk
    const course = this.studentForm.get('course')?.value;
    
    const selectedCourse = this.courses.filter( (c:any) => c.name == course);
    
    const code = selectedCourse[0].code ;

    const regNum = `${code}${pk}`;
    console.log(regNum);
    this.studentForm.get('pk')?.setValue(pk);
    this.studentForm.get('regNum')?.setValue(regNum);
  }

  save() {
    this.generatedReg(); 
    if (this.studentForm.valid) {
        const updatedStudent = this.studentForm.value; 
        this.studentService.updateStudent(updatedStudent); 
        this.router.navigate(['/dashboard/student/show-students']);
    } else {
        this.studentForm.markAllAsTouched();
    }
}

}

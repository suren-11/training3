import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
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
    regNum: '',
  };

  students: any = [];

  year = new Date().getFullYear().toString();
  newPk = '';

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
      dob: ['', [Validators.required]],
      course: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      pk: [''],
      regNum: [''],
    });
  }

  ngOnInit(): void {
    this.loadCourses();
    this.students = this.studentService.getStudents();
  }

  generateId() {
    const lastStudent = this.students[this.students.length - 1];
    this.newPk = '00001';

    if (lastStudent) {
      const lastPk = lastStudent.pk;
      const lastYear = lastPk.substring(0, 4);

      if (lastYear === this.year) {

        const lastPkNumber = lastPk.substring(4);
        this.newPk = (parseInt(lastPkNumber, 10) + 1).toString().padStart(5, '0');

      } else {
        this.newPk = '00001';
      }
    }

    const updatedPk = `${this.year}${this.newPk}`;

    this.studentForm.get('pk')?.setValue(updatedPk);
  }

  generatedReg() {
    this.generateId();
    const course = this.studentForm.get('course')?.value;
    const selectedCourse = this.courses.filter((c: any) => c.name == course);

    const code = selectedCourse[0].code;

    const regNum = `${code}${this.studentForm.get('pk')?.value}`;
    this.studentForm.get('regNum')?.setValue(regNum);
  }

  save() {
    this.generatedReg();
    if (this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value);
      this.router.navigate(['/dashboard/student/show-students'])
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

}

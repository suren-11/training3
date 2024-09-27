import { Component } from '@angular/core';
import { StudentServiceService } from '../../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  student: any = {
    name: '',
    address:'',
    dob:'',
    course:'',
    tel:'',
  };

  constructor(private studentService: StudentServiceService, private router: Router){}

  save(){
    this.studentService.saveStudent(this.student);
    this.router.navigate(['/dashboard/student/show-students'])
  }

}

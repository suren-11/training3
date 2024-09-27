import { Component } from '@angular/core';

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

}

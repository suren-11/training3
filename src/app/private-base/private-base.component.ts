import { Component } from '@angular/core';

@Component({
  selector: 'app-private-base',
  templateUrl: './private-base.component.html',
  styleUrl: './private-base.component.scss'
})
export class PrivateBaseComponent {

isStudentDropdownOpen = false;
isCourseDropdownOpen = false;


toggleStudentDropdown() {
  this.isStudentDropdownOpen = !this.isStudentDropdownOpen;
}

toggleCourseDropdown() {
  this.isCourseDropdownOpen = !this.isCourseDropdownOpen;
}

}

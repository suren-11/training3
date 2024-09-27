import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: any[] = [];
  private selectedCourse: any;

  courses1 ={
    'id': 1,
    'name': 'Java',
    'fees': '100000',
    'duration': '4 Months',
  };

    course2 = {
      'id': 2,
      'name': 'C#',
      'fees': '200000',
      'duration': '5 Months',
    };

    course3 = {
      'id': 3,
      'name': 'Angular',
      'fees': '300000',
      'duration': '3 Months',
    };

  constructor() { 
    this.courses.push(this.courses1)
    this.courses.push(this.course2)
    this.courses.push(this.course3)
  }

  saveCourse(course:any){
    this.courses.push(course);
  }

  getCourses(){
    return this.courses;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  getSelectedCourse() {
    return this.selectedCourse;
  }

  updateCourse(updatedCourse: any) {
    const index = this.courses.findIndex(s => s.id === updatedCourse.id);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }
}

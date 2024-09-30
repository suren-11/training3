import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: any[] = [];
  private selectedCourse: any;

  courses1 = {
    'id': 1,
    'name': 'Information Technology',
    'fees': '100000',
    'duration': '4 Months',
    'code' : 'IT'
  };
  
  course2 = {
    'id': 2,
    'name': 'Computer System',
    'fees': '200000',
    'duration': '5 Months',
    'code' : 'CS'
  };
  
  course3 = {
    'id': 3,
    'name': 'Information System',
    'fees': '300000',
    'duration': '3 Months',
    'code' : 'IS'
  };
  
  course4 = {
    'id': 4,
    'name': 'Software Engineering',
    'fees': '300000',
    'duration': '3 Months',
    'code' : 'SE'
  };

  constructor() {
    this.courses.push(this.courses1)
    this.courses.push(this.course2)
    this.courses.push(this.course3)
    this.courses.push(this.course4)
  }

  saveCourse(course: any) {
    this.courses.push(course);
  }

  getCourses() {
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

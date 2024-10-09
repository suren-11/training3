import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentBackendComponent } from './add-student-backend.component';

describe('AddStudentBackendComponent', () => {
  let component: AddStudentBackendComponent;
  let fixture: ComponentFixture<AddStudentBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

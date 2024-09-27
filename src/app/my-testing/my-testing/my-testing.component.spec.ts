import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestingComponent } from './my-testing.component';

describe('MyTestingComponent', () => {
  let component: MyTestingComponent;
  let fixture: ComponentFixture<MyTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmmitterChildComponent } from './event-emmitter-child.component';

describe('EventEmmitterChildComponent', () => {
  let component: EventEmmitterChildComponent;
  let fixture: ComponentFixture<EventEmmitterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventEmmitterChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEmmitterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableParentComponent } from './reusable-parent.component';

describe('ReusableParentComponent', () => {
  let component: ReusableParentComponent;
  let fixture: ComponentFixture<ReusableParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfInstructorComponent } from './lf-instructor.component';

describe('LfInstructorComponent', () => {
  let component: LfInstructorComponent;
  let fixture: ComponentFixture<LfInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

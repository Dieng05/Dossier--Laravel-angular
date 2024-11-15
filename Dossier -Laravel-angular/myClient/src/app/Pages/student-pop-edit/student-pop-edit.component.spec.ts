import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopEditComponent } from './student-pop-edit.component';

describe('StudentPopEditComponent', () => {
  let component: StudentPopEditComponent;
  let fixture: ComponentFixture<StudentPopEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPopEditComponent]
    });
    fixture = TestBed.createComponent(StudentPopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

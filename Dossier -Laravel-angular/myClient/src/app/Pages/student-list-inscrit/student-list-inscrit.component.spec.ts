import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListInscritComponent } from './student-list-inscrit.component';

describe('StudentListInscritComponent', () => {
  let component: StudentListInscritComponent;
  let fixture: ComponentFixture<StudentListInscritComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListInscritComponent]
    });
    fixture = TestBed.createComponent(StudentListInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAfficherComponent } from './student-afficher.component';

describe('StudentAfficherComponent', () => {
  let component: StudentAfficherComponent;
  let fixture: ComponentFixture<StudentAfficherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAfficherComponent]
    });
    fixture = TestBed.createComponent(StudentAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCandidatComponent } from './formation-candidat.component';

describe('FormationCandidatComponent', () => {
  let component: FormationCandidatComponent;
  let fixture: ComponentFixture<FormationCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

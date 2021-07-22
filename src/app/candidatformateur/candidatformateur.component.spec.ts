import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatformateurComponent } from './candidatformateur.component';

describe('CandidatformateurComponent', () => {
  let component: CandidatformateurComponent;
  let fixture: ComponentFixture<CandidatformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

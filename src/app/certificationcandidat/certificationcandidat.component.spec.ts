import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationcandidatComponent } from './certificationcandidat.component';

describe('CertificationcandidatComponent', () => {
  let component: CertificationcandidatComponent;
  let fixture: ComponentFixture<CertificationcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

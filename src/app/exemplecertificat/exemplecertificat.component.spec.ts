import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplecertificatComponent } from './exemplecertificat.component';

describe('ExemplecertificatComponent', () => {
  let component: ExemplecertificatComponent;
  let fixture: ComponentFixture<ExemplecertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplecertificatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplecertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

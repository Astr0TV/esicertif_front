import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationformateurComponent } from './attestationformateur.component';

describe('AttestationformateurComponent', () => {
  let component: AttestationformateurComponent;
  let fixture: ComponentFixture<AttestationformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttestationformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

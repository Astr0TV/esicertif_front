import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichepresenceformateurComponent } from './fichepresenceformateur.component';

describe('FichepresenceformateurComponent', () => {
  let component: FichepresenceformateurComponent;
  let fixture: ComponentFixture<FichepresenceformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichepresenceformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichepresenceformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfformateurComponent } from './pdfformateur.component';

describe('PdfformateurComponent', () => {
  let component: PdfformateurComponent;
  let fixture: ComponentFixture<PdfformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

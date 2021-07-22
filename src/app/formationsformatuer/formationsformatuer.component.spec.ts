import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsformatuerComponent } from './formationsformatuer.component';

describe('FormationsformatuerComponent', () => {
  let component: FormationsformatuerComponent;
  let fixture: ComponentFixture<FormationsformatuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsformatuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsformatuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

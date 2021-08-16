import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmsuppleformateurComponent } from './confirmsuppleformateur.component';

describe('ConfirmsuppleformateurComponent', () => {
  let component: ConfirmsuppleformateurComponent;
  let fixture: ComponentFixture<ConfirmsuppleformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmsuppleformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmsuppleformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

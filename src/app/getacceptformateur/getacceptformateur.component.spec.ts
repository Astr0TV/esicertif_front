import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetacceptformateurComponent } from './getacceptformateur.component';

describe('GetacceptformateurComponent', () => {
  let component: GetacceptformateurComponent;
  let fixture: ComponentFixture<GetacceptformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetacceptformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetacceptformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

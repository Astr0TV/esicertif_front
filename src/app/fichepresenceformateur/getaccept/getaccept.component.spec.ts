import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetacceptComponent } from './getaccept.component';

describe('GetacceptComponent', () => {
  let component: GetacceptComponent;
  let fixture: ComponentFixture<GetacceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetacceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

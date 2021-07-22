import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeformateurComponent } from './homeformateur.component';

describe('HomeformateurComponent', () => {
  let component: HomeformateurComponent;
  let fixture: ComponentFixture<HomeformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformationformateurComponent } from './updateformationformateur.component';

describe('UpdateformationformateurComponent', () => {
  let component: UpdateformationformateurComponent;
  let fixture: ComponentFixture<UpdateformationformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateformationformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateformationformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

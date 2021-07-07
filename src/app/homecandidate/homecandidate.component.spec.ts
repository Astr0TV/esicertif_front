import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecandidateComponent } from './homecandidate.component';

describe('HomecandidateComponent', () => {
  let component: HomecandidateComponent;
  let fixture: ComponentFixture<HomecandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

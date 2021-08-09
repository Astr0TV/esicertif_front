import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandidatComponentComponent } from './createcandidat-component.component';

describe('CreatecandidatComponentComponent', () => {
  let component: CreatecandidatComponentComponent;
  let fixture: ComponentFixture<CreatecandidatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecandidatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecandidatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

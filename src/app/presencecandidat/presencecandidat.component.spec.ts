import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencecandidatComponent } from './presencecandidat.component';

describe('PresencecandidatComponent', () => {
  let component: PresencecandidatComponent;
  let fixture: ComponentFixture<PresencecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresencecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

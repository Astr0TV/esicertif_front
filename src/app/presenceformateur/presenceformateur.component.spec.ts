import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceformateurComponent } from './presenceformateur.component';

describe('PresenceformateurComponent', () => {
  let component: PresenceformateurComponent;
  let fixture: ComponentFixture<PresenceformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

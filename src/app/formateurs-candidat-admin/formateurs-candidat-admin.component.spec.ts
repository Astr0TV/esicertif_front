import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursCandidatAdminComponent } from './formateurs-candidat-admin.component';

describe('FormateursCandidatAdminComponent', () => {
  let component: FormateursCandidatAdminComponent;
  let fixture: ComponentFixture<FormateursCandidatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateursCandidatAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateursCandidatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

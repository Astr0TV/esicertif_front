import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidatadminComponent } from './listecandidatadmin.component';

describe('ListecandidatadminComponent', () => {
  let component: ListecandidatadminComponent;
  let fixture: ComponentFixture<ListecandidatadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecandidatadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecandidatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetformationgoogleheetComponent } from './getformationgoogleheet.component';

describe('GetformationgoogleheetComponent', () => {
  let component: GetformationgoogleheetComponent;
  let fixture: ComponentFixture<GetformationgoogleheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetformationgoogleheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetformationgoogleheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

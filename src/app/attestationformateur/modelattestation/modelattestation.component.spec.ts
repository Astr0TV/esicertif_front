import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelattestationComponent } from './modelattestation.component';

describe('ModelattestationComponent', () => {
  let component: ModelattestationComponent;
  let fixture: ComponentFixture<ModelattestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelattestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelattestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

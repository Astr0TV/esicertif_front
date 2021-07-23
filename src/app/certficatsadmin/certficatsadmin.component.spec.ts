import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertficatsadminComponent } from './certficatsadmin.component';

describe('CertficatsadminComponent', () => {
  let component: CertficatsadminComponent;
  let fixture: ComponentFixture<CertficatsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertficatsadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertficatsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

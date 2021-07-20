import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageevalcandidatComponent } from './pageevalcandidat.component';

describe('PageevalcandidatComponent', () => {
  let component: PageevalcandidatComponent;
  let fixture: ComponentFixture<PageevalcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageevalcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageevalcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

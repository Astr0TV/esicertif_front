import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeformateuradminComponent } from './listeformateuradmin.component';

describe('ListeformateuradminComponent', () => {
  let component: ListeformateuradminComponent;
  let fixture: ComponentFixture<ListeformateuradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeformateuradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeformateuradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

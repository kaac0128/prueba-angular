import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditosComponent } from './list-creditos.component';

describe('ListCreditosComponent', () => {
  let component: ListCreditosComponent;
  let fixture: ComponentFixture<ListCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

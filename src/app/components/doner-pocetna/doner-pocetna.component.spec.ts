import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerPocetnaComponent } from './doner-pocetna.component';

describe('DonerPocetnaComponent', () => {
  let component: DonerPocetnaComponent;
  let fixture: ComponentFixture<DonerPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerPocetnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

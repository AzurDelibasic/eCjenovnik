import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecijalnaPonudaKafanaComponent } from './specijalna-ponuda-kafana.component';

describe('SpecijalnaPonudaKafanaComponent', () => {
  let component: SpecijalnaPonudaKafanaComponent;
  let fixture: ComponentFixture<SpecijalnaPonudaKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecijalnaPonudaKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecijalnaPonudaKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

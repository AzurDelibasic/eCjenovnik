import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecijalnaPonudaComponent } from './specijalna-ponuda.component';

describe('SpecijalnaPonudaComponent', () => {
  let component: SpecijalnaPonudaComponent;
  let fixture: ComponentFixture<SpecijalnaPonudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecijalnaPonudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecijalnaPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

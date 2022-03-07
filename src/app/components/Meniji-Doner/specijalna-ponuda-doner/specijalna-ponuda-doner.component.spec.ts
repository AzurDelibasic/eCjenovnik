import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecijalnaPonudaDonerComponent } from './specijalna-ponuda-doner.component';

describe('SpecijalnaPonudaDonerComponent', () => {
  let component: SpecijalnaPonudaDonerComponent;
  let fixture: ComponentFixture<SpecijalnaPonudaDonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecijalnaPonudaDonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecijalnaPonudaDonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

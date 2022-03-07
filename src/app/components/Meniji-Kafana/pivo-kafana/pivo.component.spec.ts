import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivoKafanaComponent } from './pivo-kafana.component';

describe('PivoComponent', () => {
  let component: PivoKafanaComponent;
  let fixture: ComponentFixture<PivoKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivoKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivoKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

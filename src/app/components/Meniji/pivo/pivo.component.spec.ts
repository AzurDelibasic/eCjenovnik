import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivoComponent } from './pivo.component';

describe('PivoComponent', () => {
  let component: PivoComponent;
  let fixture: ComponentFixture<PivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrirodniSokoviComponent } from './prirodni-sokovi.component';

describe('PrirodniSokoviComponent', () => {
  let component: PrirodniSokoviComponent;
  let fixture: ComponentFixture<PrirodniSokoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrirodniSokoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrirodniSokoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

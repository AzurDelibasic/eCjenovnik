import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafanaPocetnaComponent } from './kafana-pocetna.component';

describe('KafanaPocetnaComponent', () => {
  let component: KafanaPocetnaComponent;
  let fixture: ComponentFixture<KafanaPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KafanaPocetnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KafanaPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

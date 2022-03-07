import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkoholnaPicaKafanaComponent } from './alkoholna-pica-kafana.component';

describe('AlkoholnaPicaComponent', () => {
  let component: AlkoholnaPicaKafanaComponent;
  let fixture: ComponentFixture<AlkoholnaPicaKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkoholnaPicaKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkoholnaPicaKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

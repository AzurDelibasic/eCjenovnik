import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkoholnaPicaComponent } from './alkoholna-pica.component';

describe('AlkoholnaPicaComponent', () => {
  let component: AlkoholnaPicaComponent;
  let fixture: ComponentFixture<AlkoholnaPicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkoholnaPicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkoholnaPicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

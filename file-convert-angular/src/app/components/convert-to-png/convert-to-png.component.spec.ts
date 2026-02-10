import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverToPngComponent } from './convert-to-png.component';

describe('ConverToPngComponent', () => {
  let component: ConverToPngComponent;
  let fixture: ComponentFixture<ConverToPngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverToPngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverToPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

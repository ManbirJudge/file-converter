import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToTiffComponent } from './convert-to-tiff.component';

describe('ConvertToTiffComponent', () => {
  let component: ConvertToTiffComponent;
  let fixture: ComponentFixture<ConvertToTiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToTiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToTiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

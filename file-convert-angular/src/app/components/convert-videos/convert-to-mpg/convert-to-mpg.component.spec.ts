import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToMpgComponent } from './convert-to-mpg.component';

describe('ConvertToMpgComponent', () => {
  let component: ConvertToMpgComponent;
  let fixture: ComponentFixture<ConvertToMpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToMpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToMpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

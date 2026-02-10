import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToAviComponent } from './convert-to-avi.component';

describe('ConvertToAviComponent', () => {
  let component: ConvertToAviComponent;
  let fixture: ComponentFixture<ConvertToAviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToAviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToAviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

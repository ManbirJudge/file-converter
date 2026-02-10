import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToFlvComponent } from './convert-to-flv.component';

describe('ConvertToFlvComponent', () => {
  let component: ConvertToFlvComponent;
  let fixture: ComponentFixture<ConvertToFlvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToFlvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToFlvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

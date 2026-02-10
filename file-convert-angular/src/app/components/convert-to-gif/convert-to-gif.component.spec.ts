import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToGifComponent } from './convert-to-gif.component';

describe('ConvertToGifComponent', () => {
  let component: ConvertToGifComponent;
  let fixture: ComponentFixture<ConvertToGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

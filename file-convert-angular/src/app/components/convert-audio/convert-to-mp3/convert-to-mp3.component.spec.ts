import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToMp3Component } from './convert-to-mp3.component';

describe('ConvertToMp3Component', () => {
  let component: ConvertToMp3Component;
  let fixture: ComponentFixture<ConvertToMp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToMp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

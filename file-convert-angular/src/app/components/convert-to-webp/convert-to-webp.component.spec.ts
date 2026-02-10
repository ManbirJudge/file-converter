import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToWebpComponent } from './convert-to-webp.component';

describe('ConvertToWebpComponent', () => {
  let component: ConvertToWebpComponent;
  let fixture: ComponentFixture<ConvertToWebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToWebpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToWebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

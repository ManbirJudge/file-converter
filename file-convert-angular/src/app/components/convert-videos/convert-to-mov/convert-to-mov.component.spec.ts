import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToMovComponent } from './convert-to-mov.component';

describe('ConvertToMovComponent', () => {
  let component: ConvertToMovComponent;
  let fixture: ComponentFixture<ConvertToMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToMovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

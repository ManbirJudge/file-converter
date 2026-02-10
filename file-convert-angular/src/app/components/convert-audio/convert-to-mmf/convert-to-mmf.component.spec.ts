import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToMmfComponent } from './convert-to-mmf.component';

describe('ConvertToMmfComponent', () => {
  let component: ConvertToMmfComponent;
  let fixture: ComponentFixture<ConvertToMmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToMmfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToMmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

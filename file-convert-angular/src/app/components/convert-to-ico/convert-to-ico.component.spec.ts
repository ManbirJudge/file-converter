import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToIcoComponent } from './convert-to-ico.component';

describe('ConvertToIcoComponent', () => {
  let component: ConvertToIcoComponent;
  let fixture: ComponentFixture<ConvertToIcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToIcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

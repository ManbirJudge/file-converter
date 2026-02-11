import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToWavComponent } from "./convert-to-wav.component";

describe("ConvertToWavComponent", () => {
  let component: ConvertToWavComponent;
  let fixture: ComponentFixture<ConvertToWavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToWavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToWavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

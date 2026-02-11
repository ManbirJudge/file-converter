import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToThreeg2Component } from "./convert-to-threeg2.component";

describe("ConvertToThreeg2Component", () => {
  let component: ConvertToThreeg2Component;
  let fixture: ComponentFixture<ConvertToThreeg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToThreeg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToThreeg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

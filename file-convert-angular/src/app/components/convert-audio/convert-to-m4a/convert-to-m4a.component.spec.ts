import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToM4aComponent } from "./convert-to-m4a.component";

describe("ConvertToM4aComponent", () => {
  let component: ConvertToM4aComponent;
  let fixture: ComponentFixture<ConvertToM4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToM4aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToM4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

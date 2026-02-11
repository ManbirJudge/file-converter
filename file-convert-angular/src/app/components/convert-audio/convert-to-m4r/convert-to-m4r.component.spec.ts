import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToM4rComponent } from "./convert-to-m4r.component";

describe("ConvertToM4rComponent", () => {
  let component: ConvertToM4rComponent;
  let fixture: ComponentFixture<ConvertToM4rComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToM4rComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToM4rComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

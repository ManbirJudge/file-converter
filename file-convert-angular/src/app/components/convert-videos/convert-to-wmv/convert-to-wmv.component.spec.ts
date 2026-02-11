import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToWmvComponent } from "./convert-to-wmv.component";

describe("ConvertToWmvComponent", () => {
  let component: ConvertToWmvComponent;
  let fixture: ComponentFixture<ConvertToWmvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToWmvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToWmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

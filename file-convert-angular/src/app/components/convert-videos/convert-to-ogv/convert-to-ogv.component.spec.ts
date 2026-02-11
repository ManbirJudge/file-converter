import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToOgvComponent } from "./convert-to-ogv.component";

describe("ConvertToOgvComponent", () => {
  let component: ConvertToOgvComponent;
  let fixture: ComponentFixture<ConvertToOgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToOgvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToOgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

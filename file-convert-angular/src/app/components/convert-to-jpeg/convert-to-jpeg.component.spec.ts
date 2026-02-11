import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToJpegComponent } from "./convert-to-jpeg.component";

describe("ConvertToJpegComponent", () => {
  let component: ConvertToJpegComponent;
  let fixture: ComponentFixture<ConvertToJpegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToJpegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToJpegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

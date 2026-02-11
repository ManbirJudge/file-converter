import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToBmpComponent } from "./convert-to-bmp.component";

describe("ConvertToBmpComponent", () => {
  let component: ConvertToBmpComponent;
  let fixture: ComponentFixture<ConvertToBmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToBmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToBmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

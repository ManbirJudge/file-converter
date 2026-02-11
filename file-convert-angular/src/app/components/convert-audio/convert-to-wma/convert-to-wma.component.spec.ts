import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToWmaComponent } from "./convert-to-wma.component";

describe("ConvertToWmaComponent", () => {
  let component: ConvertToWmaComponent;
  let fixture: ComponentFixture<ConvertToWmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToWmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToWmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

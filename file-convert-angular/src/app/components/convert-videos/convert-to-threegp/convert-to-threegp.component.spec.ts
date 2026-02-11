import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToThreegpComponent } from "./convert-to-threegp.component";

describe("ConvertToThreegpComponent", () => {
  let component: ConvertToThreegpComponent;
  let fixture: ComponentFixture<ConvertToThreegpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToThreegpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToThreegpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToAiffComponent } from "./convert-to-aiff.component";

describe("ConvertToAiffComponent", () => {
  let component: ConvertToAiffComponent;
  let fixture: ComponentFixture<ConvertToAiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToAiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToAiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

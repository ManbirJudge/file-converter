import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToAacComponent } from "./convert-to-aac.component";

describe("ConvertToAacComponent", () => {
  let component: ConvertToAacComponent;
  let fixture: ComponentFixture<ConvertToAacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToAacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToAacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

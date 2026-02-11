import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToOggComponent } from "./convert-to-ogg.component";

describe("ConvertToOggComponent", () => {
  let component: ConvertToOggComponent;
  let fixture: ComponentFixture<ConvertToOggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToOggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToOggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

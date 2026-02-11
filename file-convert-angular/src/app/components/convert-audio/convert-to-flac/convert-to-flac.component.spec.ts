import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToFlacComponent } from "./convert-to-flac.component";

describe("ConvertToFlacComponent", () => {
  let component: ConvertToFlacComponent;
  let fixture: ComponentFixture<ConvertToFlacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToFlacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToFlacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

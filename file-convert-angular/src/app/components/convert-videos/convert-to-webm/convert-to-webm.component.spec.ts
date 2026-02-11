import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToWebmComponent } from "./convert-to-webm.component";

describe("ConvertToWebmComponent", () => {
  let component: ConvertToWebmComponent;
  let fixture: ComponentFixture<ConvertToWebmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToWebmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToWebmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToTgaComponent } from "./convert-to-tga.component";

describe("ConvertToTgaComponent", () => {
  let component: ConvertToTgaComponent;
  let fixture: ComponentFixture<ConvertToTgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToTgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToTgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

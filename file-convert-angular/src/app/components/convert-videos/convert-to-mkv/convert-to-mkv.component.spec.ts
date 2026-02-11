import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToMkvComponent } from "./convert-to-mkv.component";

describe("ConvertToMkvComponent", () => {
  let component: ConvertToMkvComponent;
  let fixture: ComponentFixture<ConvertToMkvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToMkvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToMkvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

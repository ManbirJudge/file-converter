import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertToOpusComponent } from "./convert-to-opus.component";

describe("ConvertToOpusComponent", () => {
  let component: ConvertToOpusComponent;
  let fixture: ComponentFixture<ConvertToOpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToOpusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToOpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-tga",
  templateUrl: "./convert-to-tga.component.html",
  styleUrls: ["./convert-to-tga.component.css"]
})
export class ConvertToTgaComponent extends ConvertToBaseComponent {
	convertToType: string = "tga";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-bmp",
  templateUrl: "./convert-to-bmp.component.html",
  styleUrls: ["./convert-to-bmp.component.css"]
})
export class ConvertToBmpComponent extends ConvertToBaseComponent {
	convertToType: string = "bmp";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}


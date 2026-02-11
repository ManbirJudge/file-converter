import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-mpg",
  templateUrl: "./convert-to-mpg.component.html",
  styleUrls: ["./convert-to-mpg.component.css"]
})
export class ConvertToMpgComponent extends ConvertToBaseComponent {
	convertToType: string = "mpg";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-avi",
  templateUrl: "./convert-to-avi.component.html",
  styleUrls: ["./convert-to-avi.component.css"]
})
export class ConvertToAviComponent extends ConvertToBaseComponent {
	convertToType: string = "avi";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

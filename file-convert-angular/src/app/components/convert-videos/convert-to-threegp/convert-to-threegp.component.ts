import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-threegp",
  templateUrl: "./convert-to-threegp.component.html",
  styleUrls: ["./convert-to-threegp.component.css"]
})
export class ConvertToThreegpComponent extends ConvertToBaseComponent {
	convertToType: string = "3gp";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}


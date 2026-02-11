import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-webm",
  templateUrl: "./convert-to-webm.component.html",
  styleUrls: ["./convert-to-webm.component.css"]
})
export class ConvertToWebmComponent extends ConvertToBaseComponent {
	convertToType: string = "webm";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-mp4",
  templateUrl: "./convert-to-mp4.component.html",
  styleUrls: ["./convert-to-mp4.component.css"]
})
export class ConvertToMp4Component extends ConvertToBaseComponent {
	convertToType: string = "mp4";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

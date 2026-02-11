import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-mkv",
  templateUrl: "./convert-to-mkv.component.html",
  styleUrls: ["./convert-to-mkv.component.css"]
})
export class ConvertToMkvComponent extends ConvertToBaseComponent {
	convertToType: string = "mkv";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

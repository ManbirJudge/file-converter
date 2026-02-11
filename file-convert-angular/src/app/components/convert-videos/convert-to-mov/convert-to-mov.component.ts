import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-mov",
  templateUrl: "./convert-to-mov.component.html",
  styleUrls: ["./convert-to-mov.component.css"]
})
export class ConvertToMovComponent extends ConvertToBaseComponent {
	convertToType: string = "mov";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

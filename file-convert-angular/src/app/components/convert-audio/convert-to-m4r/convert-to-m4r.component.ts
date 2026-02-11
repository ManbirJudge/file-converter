import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-m4r",
  templateUrl: "./convert-to-m4r.component.html",
  styleUrls: ["./convert-to-m4r.component.css"]
})
export class ConvertToM4rComponent extends ConvertToBaseComponent {
	convertToType: string = "m4r";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

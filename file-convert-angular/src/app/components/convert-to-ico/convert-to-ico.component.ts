import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-ico",
  templateUrl: "./convert-to-ico.component.html",
  styleUrls: ["./convert-to-ico.component.css"]
})
export class ConvertToIcoComponent extends ConvertToBaseComponent {
	convertToType: string = "ico";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

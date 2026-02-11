import { Component, OnInit } from "@angular/core";
import { ConvertToBaseComponent } from "../convert-to-base/convert-to-base.component";

@Component({
  selector: "app-convert-to-gif",
  templateUrl: "./convert-to-gif.component.html",
  styleUrls: ["./convert-to-gif.component.css"]
})
export class ConvertToGifComponent extends ConvertToBaseComponent {
	convertToType: string = "gif";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

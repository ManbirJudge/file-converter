import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-webp',
  templateUrl: './convert-to-webp.component.html',
  styleUrls: ['./convert-to-webp.component.css']
})
export class ConvertToWebpComponent extends ConvertToBaseComponent {
	convertToType: string = "webp";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

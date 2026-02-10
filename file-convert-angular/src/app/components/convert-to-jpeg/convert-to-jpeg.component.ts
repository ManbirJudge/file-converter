import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-jpeg',
  templateUrl: './convert-to-jpeg.component.html',
  styleUrls: ['./convert-to-jpeg.component.css']
})
export class ConvertToJpegComponent extends ConvertToBaseComponent {
	convertToType: string = "jpeg";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

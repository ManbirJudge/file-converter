import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-tiff',
  templateUrl: './convert-to-tiff.component.html',
  styleUrls: ['./convert-to-tiff.component.css']
})
export class ConvertToTiffComponent extends ConvertToBaseComponent {
	convertToType: string = "tiff";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

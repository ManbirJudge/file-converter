import { Component } from '@angular/core';
import { ConvertToBaseComponent } from '../convert-to-base/convert-to-base.component';

class ConvertRequest {
	id: number;
	name: string;
	status: string;
	type: string;
	convert_to: string;
}

@Component({
	selector: 'app-conver-to-png',
	templateUrl: './convert-to-png.component.html',
	styleUrls: ['./convert-to-png.component.css']
})
export class ConvertToPngComponent extends ConvertToBaseComponent {
	convertToType: string = "png";
	type_: string = "IMG";
	namePrefixFile: string = "img-";
}

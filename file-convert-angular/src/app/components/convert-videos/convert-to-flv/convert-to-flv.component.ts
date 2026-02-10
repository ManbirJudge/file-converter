import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-flv',
  templateUrl: './convert-to-flv.component.html',
  styleUrls: ['./convert-to-flv.component.css']
})
export class ConvertToFlvComponent extends ConvertToBaseComponent {
	convertToType: string = "flv";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

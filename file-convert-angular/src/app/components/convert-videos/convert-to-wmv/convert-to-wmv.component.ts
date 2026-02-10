import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-wmv',
  templateUrl: './convert-to-wmv.component.html',
  styleUrls: ['./convert-to-wmv.component.css']
})
export class ConvertToWmvComponent extends ConvertToBaseComponent {
	convertToType: string = "wmv";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}


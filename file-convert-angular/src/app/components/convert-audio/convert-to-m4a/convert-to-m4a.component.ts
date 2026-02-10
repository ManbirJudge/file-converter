import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-m4a',
  templateUrl: './convert-to-m4a.component.html',
  styleUrls: ['./convert-to-m4a.component.css']
})
export class ConvertToM4aComponent extends ConvertToBaseComponent {
	convertToType: string = "aac";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-wma',
  templateUrl: './convert-to-wma.component.html',
  styleUrls: ['./convert-to-wma.component.css']
})
export class ConvertToWmaComponent extends ConvertToBaseComponent {
	convertToType: string = "wma";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

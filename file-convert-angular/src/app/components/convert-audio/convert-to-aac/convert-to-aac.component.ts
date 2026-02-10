import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-aac',
  templateUrl: './convert-to-aac.component.html',
  styleUrls: ['./convert-to-aac.component.css']
})
export class ConvertToAacComponent extends ConvertToBaseComponent {
	convertToType: string = "aac";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

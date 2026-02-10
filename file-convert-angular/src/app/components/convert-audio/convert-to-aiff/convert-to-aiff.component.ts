import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-aiff',
  templateUrl: './convert-to-aiff.component.html',
  styleUrls: ['./convert-to-aiff.component.css']
})
export class ConvertToAiffComponent extends ConvertToBaseComponent {
	convertToType: string = "aiff";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}
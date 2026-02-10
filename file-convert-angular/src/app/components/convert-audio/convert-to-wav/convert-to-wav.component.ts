import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-wav',
  templateUrl: './convert-to-wav.component.html',
  styleUrls: ['./convert-to-wav.component.css']
})
export class ConvertToWavComponent extends ConvertToBaseComponent {
	convertToType: string = "wav";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

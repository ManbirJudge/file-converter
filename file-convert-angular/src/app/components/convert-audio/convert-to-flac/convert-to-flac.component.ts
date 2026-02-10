import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-flac',
  templateUrl: './convert-to-flac.component.html',
  styleUrls: ['./convert-to-flac.component.css']
})
export class ConvertToFlacComponent extends ConvertToBaseComponent {
	convertToType: string = "flac";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}


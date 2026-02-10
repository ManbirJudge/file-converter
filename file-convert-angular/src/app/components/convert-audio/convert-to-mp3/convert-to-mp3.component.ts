import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-mp3',
  templateUrl: './convert-to-mp3.component.html',
  styleUrls: ['./convert-to-mp3.component.css']
})
export class ConvertToMp3Component extends ConvertToBaseComponent {
	convertToType: string = "mp3";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

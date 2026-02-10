import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-ogg',
  templateUrl: './convert-to-ogg.component.html',
  styleUrls: ['./convert-to-ogg.component.css']
})
export class ConvertToOggComponent extends ConvertToBaseComponent {
	convertToType: string = "ogg";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

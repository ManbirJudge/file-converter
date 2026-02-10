import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-ogv',
  templateUrl: './convert-to-ogv.component.html',
  styleUrls: ['./convert-to-ogv.component.css']
})
export class ConvertToOgvComponent extends ConvertToBaseComponent {
	convertToType: string = "ogv";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

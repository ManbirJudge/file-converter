import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-threeg2',
  templateUrl: './convert-to-threeg2.component.html',
  styleUrls: ['./convert-to-threeg2.component.css']
})
export class ConvertToThreeg2Component extends ConvertToBaseComponent {
	convertToType: string = "3g2";
	type_: string = "VID";
	namePrefixFile: string = "vid-";
}

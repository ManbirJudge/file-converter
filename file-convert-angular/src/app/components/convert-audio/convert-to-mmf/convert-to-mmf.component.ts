import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-mmf',
  templateUrl: './convert-to-mmf.component.html',
  styleUrls: ['./convert-to-mmf.component.css']
})
export class ConvertToMmfComponent extends ConvertToBaseComponent {
	convertToType: string = "mmf";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}
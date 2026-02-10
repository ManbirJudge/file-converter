import { Component, OnInit } from '@angular/core';
import { ConvertToBaseComponent } from '../../convert-to-base/convert-to-base.component';

@Component({
  selector: 'app-convert-to-opus',
  templateUrl: './convert-to-opus.component.html',
  styleUrls: ['./convert-to-opus.component.css']
})
export class ConvertToOpusComponent extends ConvertToBaseComponent {
	convertToType: string = "opus";
	type_: string = "AUD";
	namePrefixFile: string = "aud-";
}

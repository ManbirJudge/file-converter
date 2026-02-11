import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-home-component",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	selectedImgFormat: string = "default";
	selectedVidFormat: string = "default";
	selectedAudioFormat: string = "default";

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	onImgConvertPressed() {
		if (this.selectedImgFormat !== "default") {
			this.router.navigate([`/convert-to-${this.selectedImgFormat}`]);
		}
	}

	onVidConvertPressed() {
		if (this.selectedVidFormat !== "default") {
			this.router.navigate([`/convert-to-${this.selectedVidFormat}`]);
		}
	}

	onAudioConvertPressed() {
		if (this.selectedAudioFormat !== "default") {
			this.router.navigate([`/convert-to-${this.selectedAudioFormat}`]);
		}
	}
}

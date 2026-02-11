import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ConvertToPngComponent } from "./components/convert-to-png/convert-to-png.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { ConvertToBaseComponent } from "./components/convert-to-base/convert-to-base.component";
import { RequestResultComponent } from "./components/request-result/request-result.component";

import { DragDirective } from "./drapDrop.directive";

import { ConvertToBmpComponent } from "./components/convert-to-bmp/convert-to-bmp.component";
import { ConvertToGifComponent } from "./components/convert-to-gif/convert-to-gif.component";
import { ConvertToIcoComponent } from "./components/convert-to-ico/convert-to-ico.component";
import { ConvertToJpegComponent } from "./components/convert-to-jpeg/convert-to-jpeg.component";
import { ConvertToTgaComponent } from "./components/convert-to-tga/convert-to-tga.component";
import { ConvertToTiffComponent } from "./components/convert-to-tiff/convert-to-tiff.component";
import { ConvertToWebpComponent } from "./components/convert-to-webp/convert-to-webp.component";

import { ConvertToThreeg2Component } from "./components/convert-videos/convert-to-threeg2/convert-to-threeg2.component";
import { ConvertToThreegpComponent } from "./components/convert-videos/convert-to-threegp/convert-to-threegp.component";
import { ConvertToAviComponent } from "./components/convert-videos/convert-to-avi/convert-to-avi.component";
import { ConvertToFlvComponent } from "./components/convert-videos/convert-to-flv/convert-to-flv.component";
import { ConvertToMkvComponent } from "./components/convert-videos/convert-to-mkv/convert-to-mkv.component";
import { ConvertToMovComponent } from "./components/convert-videos/convert-to-mov/convert-to-mov.component";
import { ConvertToMp4Component } from "./components/convert-videos/convert-to-mp4/convert-to-mp4.component";
import { ConvertToMpgComponent } from "./components/convert-videos/convert-to-mpg/convert-to-mpg.component";
import { ConvertToOgvComponent } from "./components/convert-videos/convert-to-ogv/convert-to-ogv.component";
import { ConvertToWebmComponent } from "./components/convert-videos/convert-to-webm/convert-to-webm.component";
import { ConvertToWmvComponent } from "./components/convert-videos/convert-to-wmv/convert-to-wmv.component";
import { ConvertToAacComponent } from "./components/convert-audio/convert-to-aac/convert-to-aac.component";
import { ConvertToAiffComponent } from "./components/convert-audio/convert-to-aiff/convert-to-aiff.component";
import { ConvertToFlacComponent } from "./components/convert-audio/convert-to-flac/convert-to-flac.component";
import { ConvertToM4aComponent } from "./components/convert-audio/convert-to-m4a/convert-to-m4a.component";
import { ConvertToM4rComponent } from "./components/convert-audio/convert-to-m4r/convert-to-m4r.component";
import { ConvertToMmfComponent } from "./components/convert-audio/convert-to-mmf/convert-to-mmf.component";
import { ConvertToMp3Component } from "./components/convert-audio/convert-to-mp3/convert-to-mp3.component";
import { ConvertToOggComponent } from "./components/convert-audio/convert-to-ogg/convert-to-ogg.component";
import { ConvertToOpusComponent } from "./components/convert-audio/convert-to-opus/convert-to-opus.component";
import { ConvertToWavComponent } from "./components/convert-audio/convert-to-wav/convert-to-wav.component";
import { ConvertToWmaComponent } from "./components/convert-audio/convert-to-wma/convert-to-wma.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ConvertToPngComponent,
		ConvertToBaseComponent,
		RequestResultComponent,
		DragDirective,

		ConvertToBmpComponent,
		ConvertToGifComponent,
		ConvertToIcoComponent,
		ConvertToJpegComponent,
		ConvertToTgaComponent,
		ConvertToTiffComponent,
		ConvertToWebpComponent,

		ConvertToThreeg2Component,
		ConvertToThreegpComponent,
		ConvertToAviComponent,
		ConvertToFlvComponent,
		ConvertToMkvComponent,
		ConvertToMovComponent,
		ConvertToMp4Component,
		ConvertToMpgComponent,
		ConvertToOgvComponent,
		ConvertToWebmComponent,
		ConvertToWmvComponent,
		ConvertToAacComponent,
		ConvertToAiffComponent,
		ConvertToFlacComponent,
		ConvertToM4aComponent,
		ConvertToM4rComponent,
		ConvertToMmfComponent,
		ConvertToMp3Component,
		ConvertToOggComponent,
		ConvertToOpusComponent,
		ConvertToWavComponent,
		ConvertToWmaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,

		MatIconModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

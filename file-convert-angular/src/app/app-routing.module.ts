import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RequestResultComponent } from './components/request-result/request-result.component';

import { ConvertToBmpComponent } from './components/convert-to-bmp/convert-to-bmp.component';
import { ConvertToGifComponent } from './components/convert-to-gif/convert-to-gif.component';
import { ConvertToIcoComponent } from './components/convert-to-ico/convert-to-ico.component';
import { ConvertToJpegComponent } from './components/convert-to-jpeg/convert-to-jpeg.component';
import { ConvertToPngComponent } from './components/convert-to-png/convert-to-png.component';
import { ConvertToTgaComponent } from './components/convert-to-tga/convert-to-tga.component';
import { ConvertToTiffComponent } from './components/convert-to-tiff/convert-to-tiff.component';
import { ConvertToWebpComponent } from './components/convert-to-webp/convert-to-webp.component';

import { ConvertToThreeg2Component } from './components/convert-videos/convert-to-threeg2/convert-to-threeg2.component';
import { ConvertToThreegpComponent } from './components/convert-videos/convert-to-threegp/convert-to-threegp.component';
import { ConvertToAviComponent } from './components/convert-videos/convert-to-avi/convert-to-avi.component';
import { ConvertToFlvComponent } from './components/convert-videos/convert-to-flv/convert-to-flv.component';
import { ConvertToMkvComponent } from './components/convert-videos/convert-to-mkv/convert-to-mkv.component';
import { ConvertToMovComponent } from './components/convert-videos/convert-to-mov/convert-to-mov.component';
import { ConvertToMp4Component } from './components/convert-videos/convert-to-mp4/convert-to-mp4.component';
import { ConvertToMpgComponent } from './components/convert-videos/convert-to-mpg/convert-to-mpg.component';
import { ConvertToOgvComponent } from './components/convert-videos/convert-to-ogv/convert-to-ogv.component';
import { ConvertToWebmComponent } from './components/convert-videos/convert-to-webm/convert-to-webm.component';
import { ConvertToWmvComponent } from './components/convert-videos/convert-to-wmv/convert-to-wmv.component';

import { ConvertToAacComponent } from './components/convert-audio/convert-to-aac/convert-to-aac.component';
import { ConvertToAiffComponent } from './components/convert-audio/convert-to-aiff/convert-to-aiff.component';
import { ConvertToFlacComponent } from './components/convert-audio/convert-to-flac/convert-to-flac.component';
import { ConvertToM4aComponent } from './components/convert-audio/convert-to-m4a/convert-to-m4a.component';
import { ConvertToM4rComponent } from './components/convert-audio/convert-to-m4r/convert-to-m4r.component';
import { ConvertToMmfComponent } from './components/convert-audio/convert-to-mmf/convert-to-mmf.component';
import { ConvertToMp3Component } from './components/convert-audio/convert-to-mp3/convert-to-mp3.component';
import { ConvertToOggComponent } from './components/convert-audio/convert-to-ogg/convert-to-ogg.component';
import { ConvertToOpusComponent } from './components/convert-audio/convert-to-opus/convert-to-opus.component';
import { ConvertToWavComponent } from './components/convert-audio/convert-to-wav/convert-to-wav.component';
import { ConvertToWmaComponent } from './components/convert-audio/convert-to-wma/convert-to-wma.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	
	{ path: 'convert-to-bmp', component: ConvertToBmpComponent },
	{ path: 'convert-to-gif', component: ConvertToGifComponent },
	{ path: 'convert-to-ico', component: ConvertToIcoComponent },
	{ path: 'convert-to-jpeg', component: ConvertToJpegComponent },
	{ path: 'convert-to-png', component: ConvertToPngComponent },
	{ path: 'convert-to-tga', component: ConvertToTgaComponent },
	{ path: 'convert-to-tiff', component: ConvertToTiffComponent },
	{ path: 'convert-to-webp', component: ConvertToWebpComponent },
	
	{ path: 'convert-to-3g2', component: ConvertToThreeg2Component },
	{ path: 'convert-to-3gp', component: ConvertToThreegpComponent },
	{ path: 'convert-to-avi', component: ConvertToAviComponent },
	{ path: 'convert-to-flv', component: ConvertToFlvComponent },
	{ path: 'convert-to-mkv', component: ConvertToMkvComponent },
	{ path: 'convert-to-mov', component: ConvertToMovComponent },
	{ path: 'convert-to-mp4', component: ConvertToMp4Component },
	{ path: 'convert-to-mpg', component: ConvertToMpgComponent },
	{ path: 'convert-to-ogv', component: ConvertToOgvComponent },
	{ path: 'convert-to-webm', component:ConvertToWebmComponent },
	{ path: 'convert-to-wmv', component: ConvertToWmvComponent },
	{ path: 'convert-to-webp', component: ConvertToWebpComponent },
	
	{ path: 'convert-to-aac', component: ConvertToAacComponent },
	{ path: 'convert-to-aiff', component: ConvertToAiffComponent },
	{ path: 'convert-to-flac', component: ConvertToFlacComponent },
	{ path: 'convert-to-m4a', component: ConvertToM4aComponent },
	{ path: 'convert-to-m4r', component: ConvertToM4rComponent },
	{ path: 'convert-to-mmf', component: ConvertToMmfComponent },
	{ path: 'convert-to-mp3', component: ConvertToMp3Component },
	{ path: 'convert-to-ogg', component: ConvertToOggComponent },
	{ path: 'convert-to-opus', component: ConvertToOpusComponent },
	{ path: 'convert-to-wav', component: ConvertToWavComponent },
	{ path: 'convert-to-wma', component: ConvertToWmaComponent },

	{ path: 'result', component: RequestResultComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

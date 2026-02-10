import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ConvertRequest } from 'src/app/ConvertRequest';
import { DownloadService } from 'src/app/FileDownlaodService';
import { saveAs } from 'file-saver';

import { UploadedFile } from '../../UploadedFile';

@Component({
	selector: 'app-request-result',
	templateUrl: './request-result.component.html',
	styleUrls: ['./request-result.component.css']
})
export class RequestResultComponent implements OnInit {
	reqFiles: UploadedFile[];
	req: ConvertRequest;

	timer: Subscription;

	apiHost: string = "http://localhost:8000";

	constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private downloads: DownloadService) {
		this.activatedRoute.queryParams.subscribe(params => {
			let reqID = params['req_id'];

			const get$ = this.http.get(this.apiHost + "/api/convert-requests/" + reqID, {
				observe: 'events'
			});

			get$.subscribe(event => {
				if (event.type == HttpEventType.Response) {
					this.req = event.body as ConvertRequest;
					this.timer = interval(1000).subscribe(x => {
						this.checkRequest();
					});
				};
			});
		});
	};

	ngOnInit(): void { };

	getRequest() {
		const get$ = this.http.get(this.apiHost + "/api/convert-requests/" + this.req.id, {
			observe: 'events'
		});

		get$.subscribe(event => {
			if (event.type == HttpEventType.Response) {
				this.req = event.body as ConvertRequest;
			};
		});
	};

	checkRequest() {
		if (this.req.status == "P") {
			this.getRequest();
		} else if (this.req.status == "C") {
			this.timer.unsubscribe();
			this.loadFiles();
		};
		console.log("checked!");
	};

	loadFiles() {
		const upload$ = this.http.get(this.apiHost + "/api/convert-requests/" + this.req.id + "/result-files", {
			observe: 'events'
		});

		upload$.subscribe(event => {
			if (event.type == HttpEventType.Response) {
				this.reqFiles = event.body as UploadedFile[];
			};
		});
	};

	onDownloadClick(index: number) {
		this.downloads
			.download(this.apiHost + this.reqFiles[index].file)
			.subscribe(blob => {
				saveAs(blob, this.reqFiles[index].file.split('/')[2]);
			});
	};
};
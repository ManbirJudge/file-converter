import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ConvertRequest } from 'src/app/ConvertRequest';
import { v4 as uuidv4 } from 'uuid';

import { UploadedFile } from '../../UploadedFile';
import { FileHandle } from '../../drapDrop.directive';

@Component({
	selector: 'app-convert-to-base',
	templateUrl: './convert-to-base.component.html',
	styleUrls: ['./convert-to-base.component.css']
})
export class ConvertToBaseComponent implements OnInit {
	@Input()
	requiredFileType: string;

	// required for uploading file
	fileName = '';
	uploadProgress: number;
	uploadSub: Subscription;

	uploadedFilesList: UploadedFile[] = [];

	convertRequest: ConvertRequest;;
	ranOneTime: boolean = false;

	// to make the class flexible
	convertToType: string = "";
	type_: string = "";
	namePrefixFile: string = "";


	files: FileHandle[] = [];

	// api host:
	apiHost: string = "http://localhost:8000";


	constructor(public http: HttpClient, public router: Router) { }

	ngOnInit(): void { }

	uploadFile(file: File) {
		this.fileName = file.name;

		const formData = new FormData();

		formData.append("name", this.fileName);
		formData.append("file", file);
		formData.append("request", this.convertRequest.id.toString());
		formData.append("use", "C");
		formData.append("type", this.type_);
		formData.append("file_type", file.type);

		const upload$ = this.http.post(this.apiHost + "/api/upload-file", formData, {
			reportProgress: true,
			observe: 'events'
		})
			.pipe(
				finalize(() => this.reset())
			);

		this.uploadSub = upload$.subscribe(event => {
			if (event.type == HttpEventType.UploadProgress) {
				this.uploadProgress = Math.round(100 * (event.loaded / event.total));
			};
			if (event.type == HttpEventType.Response) {
				const body = event.body as UploadedFile;
				console.log(body)
				this.uploadedFilesList.push(body);
			}
		});
	}

	onFileSelected(event: Event) {
		const element = event.currentTarget as HTMLInputElement;
		const file: File = element.files[0];

		if (file) {
			if (!this.ranOneTime) {
				const formData = new FormData();

				formData.append("name", "req-" + uuidv4());
				formData.append("status", "S");
				formData.append("type", this.type_);
				formData.append("convert_to", this.convertToType);

				const upload$ = this.http.post(this.apiHost + "/api/convert-requests", formData, {
					observe: 'events'
				});

				upload$.subscribe(event => {
					if (event.type == HttpEventType.Response) {
						this.convertRequest = event.body as ConvertRequest;
						this.ranOneTime = true;

						this.uploadFile(file);
					};
				});
			}
			else {
				this.uploadFile(file);
			}
		};
	};

	onConvertBtnClick() {
		const formData = new FormData();

		formData.append("name", this.convertRequest.name);
		formData.append("status", "PE");
		formData.append("type", this.convertRequest.type);
		formData.append("convert_to", this.convertRequest.convert_to);

		const upload$ = this.http.put(this.apiHost + "/api/convert-requests/" + this.convertRequest.id, formData, {
			observe: 'events'
		});

		upload$.subscribe(event => {
			if (event.type == HttpEventType.Response) {
				this.router.navigate([`/result`], {
					queryParams: {
						req_id: this.convertRequest.id
					},
					queryParamsHandling: 'merge',
					// skipLocationChange: true
				});
			};
		});
	}

	cancelUpload() {
		this.uploadSub.unsubscribe();
		this.reset();
	};

	reset() {
		this.uploadProgress = null;
		this.uploadSub = null;
	};

	// ---------------------------------------------
	filesDropped(files: FileHandle[]): void {
		this.files = files;

		this.files.forEach(file => {
			if (file) {
				if (!this.ranOneTime) {
					const formData = new FormData();

					formData.append("name", "req-" + uuidv4());
					formData.append("status", "S");
					formData.append("type", this.type_);
					formData.append("convert_to", this.convertToType);

					const upload$ = this.http.post(this.apiHost + "/api/convert-requests", formData, {
						observe: 'events'
					});

					upload$.subscribe(event => {
						if (event.type == HttpEventType.Response) {
							this.convertRequest = event.body as ConvertRequest;
							this.ranOneTime = true;

							this.uploadFile(file.file);
						};
					});
				}
				else {
					this.uploadFile(file.file);
				}
			};
		});
	}
}

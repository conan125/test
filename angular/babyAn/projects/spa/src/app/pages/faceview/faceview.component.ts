import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DocType } from '../face-api/dto/document.model';
import { FaceApiService } from '../face-api/face-api.service';

@Component({
  selector: 'app-faceview',
  templateUrl: './faceview.component.html',
  styleUrls: ['./faceview.component.scss'],
})
export class FaceviewComponent implements OnInit {
  document!: DocType;
  private _docSub!: Subscription;

  constructor(private faceApiService: FaceApiService) {}

  ngOnInit() {
    this._docSub = this.faceApiService.currentDocument
      .pipe(
        startWith({
          id: '',
          doc: 'Select an existing document or create a new one to get started',
        })
      )
      .subscribe((document) => (this.document = document));
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.faceApiService.editDocument(this.document);
  }
}

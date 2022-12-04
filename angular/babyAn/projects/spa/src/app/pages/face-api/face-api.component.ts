import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Peer from 'skyway-js';
import { FaceApiService } from './face-api.service';

@Component({
  selector: 'app-face-api',
  templateUrl: './face-api.component.html',
  styleUrls: ['./face-api.component.scss'],
})
export class FaceApiComponent implements OnInit {
  documents!: Observable<string[]>;
  currentDocument?: string;
  private _docSub!: Subscription;
  public srcobj: any;
  constructor(private faceApiService: FaceApiService) {}

  async ngOnInit() {
    // this.documents = this.faceApiService.documents;
    // this._docSub = this.faceApiService.currentDocument.subscribe(
    //   (doc) => (
    //     console.log(this.currentDocument), (this.currentDocument = doc.id)
    //   )
    // );
    // let peer = new Peer('mypeerid', {
    //   key: '9c56df95-1351-4d3d-8404-4577c96af972',
    //   debug: 3,
    // });
    // peer.on('open', function (id) {
    //   console.log('My peer ID is: ' + id);
    // });
    // peer.on('connection', function (conn) {
    //   console.log('connected');
    // });
    // let conn = peer.connect('dest-peer-id');
    // conn.on('open', function () {
    //   // Receive messages
    //   conn.on('data', function (data) {
    //     console.log('Received', data);
    //   });
    //   // Send messages
    //   conn.send('Hello!');
    // });
    // const mediaStream = await navigator.mediaDevices.getUserMedia({
    //   audio: true,
    //   video: true,
    // });
    // console.log(mediaStream);
    // let call = peer.call('dest-peer-id', mediaStream);
    // peer.on('call', function (call) {
    //   // Answer the call, providing our mediaStream
    //   call.answer(mediaStream);
    // });
    // call.on('stream', (stream) => {
    //   // `stream` is the MediaStream of the remote peer.
    //   // Here you'd add it to an HTML video/canvas element.
    //   this.srcobj = stream;
    // });
    // conn.send({
    //   strings: 'hi!',
    //   numbers: 150,
    //   arrays: [1, 2, 3],
    //   evenBinary: new Blob(['1', '2', '3']),
    //   andMore: { bool: true },
    // });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    this.faceApiService.getDocument(id);
    console.log('this.faceApiService.getDocument()');
  }

  newDoc() {
    this.faceApiService.newDocument();
    console.log('this.faceApiService.newDocument()');
  }
}

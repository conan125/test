import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { DocType } from './dto/document.model';
@Injectable({
  providedIn: 'root',
})
export class FaceApiService {
  currentDocument = this.socket.fromEvent<DocType>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  constructor(private socket: Socket) {}

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }

  editDocument(document: DocType) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

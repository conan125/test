import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'ws://localhost:4000'; // 后台服务端口
  private socket: any;
  constructor() {
    // let host = 'ws://localhost:4000';
    // const socket = new WebSocket(host);
    // try {
    //   socket.onopen = function (msg) {
    //     alert('连接成功！');
    //   };
    //   socket.onmessage = function (msg) {
    //     if (typeof msg.data == 'string') {
    //       console.log(msg.data);
    //     } else {
    //       alert('非文本消息');
    //     }
    //   };
    //   socket.onclose = function (msg) {
    //     alert('socket closed!');
    //   };
    // } catch (ex) {
    //   console.log(ex);
    // }
  }

  sendMessage(message: any) {
    this.socket.emit('add-message', message);
    console.log('add-message', message);
  }

  getMessages() {
    let observable = new Observable((observer) => {
      this.socket = io(this.url, { withCredentials: true });
      console.log(this.socket, 'mesage');
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}

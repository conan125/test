import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './char.service';

@Component({
  selector: 'test-chat',
  templateUrl: './socket.component.html',
})
export class SocketComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  connection: any;
  message: any;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe((msg) => {
      // 组件初始化时订阅信息
      this.messages.push(msg);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe(); // 组件销毁取消订阅
  }
}

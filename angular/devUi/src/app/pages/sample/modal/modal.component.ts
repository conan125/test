import { ModalService } from './../modal.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.modalState.subscribe((x) => {
      this.open_close = x;
    });
  }
  public open_close = 'modal fade';
  @Input()
  isFooter;

  // 关闭modal框的事件
  hideModal() {
    this.modalService.modalState.emit('modal fade');
  }
}

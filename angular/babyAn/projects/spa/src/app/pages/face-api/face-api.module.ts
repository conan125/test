import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaceApiRoutingModule } from './face-api-routing.module';
import { FaceApiComponent } from './face-api.component';
import { FaceviewComponent } from '../faceview/faceview.component';
import { DevUIModule } from 'ng-devui';
import { SocketComponent } from './socket/socket.component';
import { ChatService } from './socket/char.service';
@NgModule({
  declarations: [FaceApiComponent, FaceviewComponent, SocketComponent],
  imports: [
    CommonModule,
    FormsModule,
    DevUIModule,
    ReactiveFormsModule,
    FaceApiRoutingModule,
  ],
  providers: [ChatService],
})
export class FaceApiModule {}

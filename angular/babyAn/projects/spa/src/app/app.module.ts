import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevUIModule } from 'ng-devui';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceApiService } from './pages/face-api/face-api.service';
const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    DevUIModule,
    AppRoutingModule,
  ],
  providers: [FaceApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

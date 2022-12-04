import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    /** import ng-zorro-antd-mobile root module，you should import NgZorroAntdModule instead in sub module **/
    NgZorroAntdMobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PagesRoutingModule } from './pages-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { MyInterceptor } from '../my.interceptor';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { ModalDirective } from '../fw/modal.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormDirective } from '../fw/myform.directive';
import { DomDirective } from '../fw/dom.directive';
import { MainComponent } from '../components/main/main.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo067Component } from './demo067/demo067.component';
import { Demo07Component } from './demo07/demo07.component';
import { Demo08Component } from './demo08/demo08.component';
import { PagesComponent } from './pages.component';
import { SelectDirective } from '../fw/select.directive';
import { DialogComponent } from './dialog/dialog.component';
import {
  DialogContentDirective,
  DialogFooterDirective,
  DialogHeaderDirective,
} from './dialog/dialog';
import { HelloComponent } from './dialog/hello/hello.component';

@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    ModalDirective,
    MyFormDirective,
    DomDirective,
    MainComponent,
    Demo05Component,
    Demo06Component,
    Demo067Component,
    Demo07Component,
    Demo08Component,
    PagesComponent,
    SelectDirective,
    DialogComponent,
    DialogContentDirective,
    DialogFooterDirective,
    DialogHeaderDirective,
    HelloComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
})
export class PagesModule {}

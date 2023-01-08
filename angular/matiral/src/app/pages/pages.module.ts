import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo01Component } from './demo01/demo01.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { RefreshDirective } from './refresh.directive';
import { TestComponent } from './demo06/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo07Component } from './demo07/demo07.component';

@NgModule({
  declarations: [
    Demo01Component,
    PagesComponent,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    RefreshDirective,
    TestComponent,
    Demo07Component,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PagesRoutingModule],
})
export class PagesModule {}

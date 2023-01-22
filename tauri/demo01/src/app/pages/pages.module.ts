/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 19:08:11
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:12:08
 * @FilePath: /demo01/src/app/pages/pages.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { Demo01Component } from "./demo01/demo01.component";
import { Demo02Component } from "./demo02/demo02.component";
import { Demo03Component } from "./demo03/demo03.component";
import { Demo04Component } from "./demo04/demo04.component";
import { Demo05Component } from "./demo05/demo05.component";

@NgModule({
  declarations: [
    PagesComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
  ],
  imports: [CommonModule, PagesRoutingModule],
  exports: [
    PagesComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
  ],
})
export class PagesModule {}

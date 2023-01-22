import { PagesModule } from "./pages/pages.module";
/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 19:08:07
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:11:42
 * @FilePath: /demo01/src/app/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxEchartsModule, PagesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 22:37:18
 * @LastEditors: matu-lgs
 * @LastEditTime: 2023-03-08 19:51:49
 * @FilePath: /pwa/src/app/pages/pages-routing.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Demo01Component } from './demo01/demo01.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo03', pathMatch: 'full' },
  { path: 'demo01', component: Demo01Component },
  { path: 'demo02', component: Demo02Component },
  { path: 'demo03', component: Demo03Component },
  { path: 'demo04', component: Demo04Component },
  { path: 'demo05', component: Demo05Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

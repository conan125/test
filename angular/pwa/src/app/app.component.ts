/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 00:12:38
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:44:58
 * @FilePath: /pwa/src/app/app.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { TitleComponent, TitleComponentOption } from 'echarts/components';
import { SunburstChart, SunburstSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  title = 'pwa';
}

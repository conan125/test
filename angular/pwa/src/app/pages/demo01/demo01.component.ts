/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 22:37:35
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:55:00
 * @FilePath: /pwa/src/app/pages/demo01/demo01.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { SunburstChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css'],
})
export class Demo01Component implements OnInit {
  ngOnInit(): void {
    echarts.use([SunburstChart, CanvasRenderer]);

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option;

    var data = [
      {
        name: 'Grandpa',
        children: [
          {
            name: 'Uncle Leo',
            value: 15,
            children: [
              {
                name: 'Cousin Jack',
                value: 2,
              },
              {
                name: 'Cousin Mary',
                value: 5,
                children: [
                  {
                    name: 'Jackson',
                    value: 2,
                  },
                ],
              },
              {
                name: 'Cousin Ben',
                value: 4,
              },
            ],
          },
          {
            name: 'Father',
            value: 10,
            children: [
              {
                name: 'Me',
                value: 5,
              },
              {
                name: 'Brother Peter',
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: 'Nancy',
        children: [
          {
            name: 'Uncle Nike',
            children: [
              {
                name: 'Cousin Betty',
                value: 1,
              },
              {
                name: 'Cousin Jenny',
                value: 2,
              },
            ],
          },
        ],
      },
    ];
    option = {
      series: {
        type: 'sunburst',
        // emphasis: {
        //     focus: 'ancestor'
        // },
        data: data,
        radius: [0, '90%'],
        label: {
          rotate: 'radial',
        },
      },
    };

    option && myChart.setOption(option);
  }
}

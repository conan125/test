/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 18:42:31
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:13:35
 * @FilePath: /demo01/src/app/pages/demo01/demo01.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import * as echarts from "echarts";

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: "app-demo01",
  templateUrl: "./demo01.component.html",
  styleUrls: ["./demo01.component.css"],
})
export class Demo01Component implements OnInit {
  ngOnInit(): void {
    var chartDom = document.getElementById("main")!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };

    option && myChart.setOption(option);
    console.log(222);
  }
}

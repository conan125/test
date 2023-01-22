import { OnInit } from "@angular/core";
/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 22:37:38
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-10 00:19:40
 * @FilePath: /pwa/src/app/pages/demo02/demo02.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component } from "@angular/core";
import * as echarts from "echarts/core";
import { SunburstChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TitleComponent } from "echarts/components";
@Component({
  selector: "app-demo02",
  templateUrl: "./demo02.component.html",
  styleUrls: ["./demo02.component.css"],
})
export class Demo02Component implements OnInit {
  ngOnInit(): void {
    echarts.use([TitleComponent, SunburstChart, CanvasRenderer]);

    var app = {};

    var chartDom = document.getElementById("main")!;
    var myChart = echarts.init(chartDom);
    var option;

    var data = [
      {
        name: "认识孩子",
        itemStyle: {
          color: "#da0d68",
        },
        children: [
          {
            name: "心善",
            value: 1,
            itemStyle: {
              color: "#975e6d",
            },
            children: [
              {
                name: "优势",
                value: 1,
                itemStyle: {
                  color: "#f99e1c",
                },
              },
            ],
          },
          {
            name: "劣势",
            itemStyle: {
              color: "#e0719c",
            },
            children: [
              {
                name: "困难",
                value: 1,
                itemStyle: {
                  color: "#f99e1c",
                },
              },
              {
                name: "助法",
                value: 1,
                itemStyle: {
                  color: "#ef5a78",
                },
              },
            ],
          },
        ],
      },

      {
        name: "Roasted",
        itemStyle: {
          color: "#c94930",
        },
        children: [
          {
            name: "Pipe Tobacco",
            value: 1,
            itemStyle: {
              color: "#caa465",
            },
          },
          {
            name: "Tobacco",
            value: 1,
            itemStyle: {
              color: "#dfbd7e",
            },
          },
          {
            name: "Burnt",
            itemStyle: {
              color: "#be8663",
            },
            children: [
              {
                name: "Acrid",
                value: 1,
                itemStyle: {
                  color: "#b9a449",
                },
              },
              {
                name: "Ashy",
                value: 1,
                itemStyle: {
                  color: "#899893",
                },
              },
              {
                name: "Smoky",
                value: 1,
                itemStyle: {
                  color: "#a1743b",
                },
              },
              {
                name: "Brown, Roast",
                value: 1,
                itemStyle: {
                  color: "#894810",
                },
              },
            ],
          },
          {
            name: "Cereal",
            itemStyle: {
              color: "#ddaf61",
            },
            children: [
              {
                name: "Grain",
                value: 1,
                itemStyle: {
                  color: "#b7906f",
                },
              },
              {
                name: "Malt",
                value: 1,
                itemStyle: {
                  color: "#eb9d5f",
                },
              },
            ],
          },
        ],
      },
    ];
    option = {
      title: {
        text: "思维导图 ",
        subtext: "新的灵感",
        textStyle: {
          fontSize: 14,
          align: "center",
        },
        subtextStyle: {
          align: "center",
        },
      },
      series: {
        type: "sunburst",
        data: data,
        radius: [0, "95%"],
        sort: undefined,
        emphasis: {
          focus: "ancestor",
        },
        levels: [
          {},
          {
            r0: "15%",
            r: "35%",
            itemStyle: {
              borderWidth: 2,
            },
            label: {
              rotate: "tangential",
            },
          },
          {
            r0: "35%",
            r: "70%",
            label: {
              align: "right",
            },
          },
          {
            r0: "70%",
            r: "72%",
            label: {
              position: "outside",
              padding: 3,
              silent: false,
            },
            itemStyle: {
              borderWidth: 3,
            },
          },
        ],
      },
    };

    option && myChart.setOption(option);
  }
}

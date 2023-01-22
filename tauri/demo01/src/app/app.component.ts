/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 18:42:31
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-09 22:01:50
 * @FilePath: /demo01/src/app/app.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";
import { Observable, switchMap, take, timer } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let name = "whon";
    let b;
    const bb = new Observable((observer) => {
      const res = fetch("assets/aa.txt");
      res.then((reader) => {
        reader?.body
          ?.getReader()
          .read()
          .then(({ done, value }) => {
            if (!done) {
              observer.next(value);
            } else {
              observer.complete();
            }
          })
          .catch((err) => {
            observer.error(err);
          });
      });
    });
    bb.subscribe((x) => {
      name = "I am " + x;
      invoke<string>("greet", { name }).then((text) => {
        this.greetingMessage = text;
      });
    });
  }

  greetingMessage = "";

  greet(name: string): void {
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
  onclickpage() {}
}
if (typeof Worker !== "undefined") {
  // Create a new
  const worker = new Worker(new URL("./app.worker", import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage("hello");
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}

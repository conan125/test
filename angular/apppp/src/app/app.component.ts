import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { interval } from 'rxjs';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'apppp';
  constructor(private router: Router, private ac: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => this.ac),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        // map((x) => x.data)
        mergeMap((x) => x.queryParams)
      )
      .subscribe(console.log);
  }
  ngOnInit() {
    // const js = document.createElement('script');
    // js.setAttribute('src', 'assets/work/sound.js');
    // document.body.appendChild(js);
    // const speech = (text: string) => {
    //   const msg = new SpeechSynthesisUtterance();
    //   msg.text = text; //播放文案
    //   msg.volume = 1; // 声音的音量，区间范围是0到1，默认是1。
    //   msg.rate = 1; // 语速，数值，默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍。
    //   msg.pitch = 0; // 表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1。
    //   msg.lang = 'zh-cn'; // 使用的语言，字符串， 例如："zh-cn"
    //   return msg;
    // };
    // //播放
    // const play = (text: string) => {
    //   speechSynthesis.speak(speech(text));
    // };
    // //停止
    // const stop = (text: string) => {
    //   speechSynthesis.cancel();
    // };
    //直接调用即可
    // play('你好');
    // speechSynthesis.onvoiceschanged = () => {
    //   let voices = speechSynthesis
    //     .getVoices()
    //     .filter((i) => i.lang.includes('zh'));
    //   let sayer = new SpeechSynthesisUtterance(
    //     'Chrome 中的自动播放策略&如何设置自动播放12345'
    //   );
    //   sayer.voice = voices[0];
    //   interval(6000)
    //     .pipe(tap(console.warn), take(voices.length))
    //     .subscribe((x) => {
    //       sayer.voice = voices[x];
    //       sayer.volume = 4;
    //       speechSynthesis.speak(sayer);
    //     });
    // };
  }
}

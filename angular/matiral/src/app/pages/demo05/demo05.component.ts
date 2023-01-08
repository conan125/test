import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.css'],
})
export class Demo05Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const synth = window.speechSynthesis;
    // console.log(synth);
    // synth.onvoiceschanged = () => {
    //   const utterThis = new SpeechSynthesisUtterance('王侯将相,宁有种乎？');
    //   // utterThis.voice = voices[0];
    //   console.log(utterThis);
    //   synth.speak(utterThis);
    // };
    /**
     * @author BlueSkyCaps
     * @description
     * 本示例使用Web Speech API中的speechSynthesis, 非第三方语音合成接口
     * */

    // 获取Web_Speech_API语音合成接口
    var synthesis = window.speechSynthesis;
    // 控制当正在发音时, 避免连续按下按钮使之后队列继续发音
    let IS_SPEAKING = false;
    // 用户设备是否有en-us语音包(默认的cn-zh能够中英文混音, 但英文发音不标准)
    let IS_HAVE_EN_US = false;

    function initVoicesObj() {
      console.log('onvoiceschanged');
      var obj_voices = synthesis.getVoices();
      console.log(obj_voices);
      console.log(obj_voices.length);
      // 如果带有en-us语音包, 英文发音可以首选它
      for (let i = 0; i < obj_voices.length; i++) {
        if (obj_voices[i].lang === 'en-us') {
          IS_HAVE_EN_US = true;
        }
      }
    }
    initVoicesObj();

    /**
     * 注: chrome需要触发onvoiceschanged事件时, getVoices()才会返回对象,
     * 所以在chrome首次调用时initVoicesObj()函数会执行两次.
     */
    if (synthesis.onvoiceschanged !== undefined) {
      synthesis.onvoiceschanged = initVoicesObj;
    }
    let origin_textarea = document.querySelector('#original');

    function speakBtnClicked() {
      /**
       * 当语言选择项过多时不建议获取用户选择的select值赋值给SpeechSynthesisUtterance.voice
       * 因为js SpeechSynthesis接口存在许多本地化问题(依据设备的默认语音),
       * 即使SpeechSynthesis.getVoices()方法返回SpeechSynthesisVoice代表当前设备上所有可用语音的对象列表，
       * 但非设备默认语音被设置, 可能会使程序产生无错误输出的问题(如果用户设备语音包并没有正常安装).例如,
       * 桌面chrome浏览器会返回除默认语音(zh-cn)和en-us之外的语言包, 而edge只有zh-cn
       * 国产浏览器均不支持Web_Speech_API语音合成接口, 请使用其他第三方API.
       *
       * Web_Speech_API(Speech recognition and synthesis)目前处于实验性阶段,
       * 使用它, 建议使用其默认语音(例如忽略SpeechSynthesisUtterance.voice)
       */

      // 初始化SpeechSynthesisUtterance实例, 用于绑定合成的文本
      var synthesisUtterance = new SpeechSynthesisUtterance();
      function startSpeak() {
        if (IS_SPEAKING) return;
        // 传入要发声的文本
        synthesisUtterance.text =
          '依据不同桌面设备而定, 测试在手机上以下浏览器都可以中英文混音';

        /**
         * (依据不同桌面设备而定, 测试在手机上以下浏览器都可以中英文混音:)
         * 当不设置lang属性时, 桌面chrome和Edge均支持中英文混音, firefox只能说英文
         * 若设置lang = 'zh-cn', edge会失效, firefox可以中英文混音
         * 通过UserAgent判断浏览器类型(注: 此方式不可靠)
         * */
        synthesisUtterance.lang = 'zh-cn';

        // 建议忽略synthesisUtterance.voice, 将采取设备默认语音
        // 发声, 忽略rate, volume等属性, 其将采取默认值.
        synthesis.speak(synthesisUtterance);
        IS_SPEAKING = true;
      }
      startSpeak();

      // 当前发音结束时触发
      synthesisUtterance.onend = function () {
        // 当前发音结束后重置标志
        IS_SPEAKING = false;
        console.log('this once speak end.');
      };

      // 可控制暂停(自行添加代码), 当暂停时触发
      synthesisUtterance.onpause = function (event) {
        var pause_index_char = event.utterance.text.charAt(event.charIndex);
        console.log('Speech paused char is ' + pause_index_char + '.');
      };
    }
  }
}

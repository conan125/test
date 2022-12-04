import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spa';
  logoSrc =
    'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  menu = [
    {
      title: 'webVR',
      open: true,
      children: [
        { title: 'faceview', link: '/pages/faceapi/faceview' },
        { title: 'faceApi', link: '/pages/faceapi' },
        { title: 'socket', link: '/pages/faceapi/socket' },
      ],
    },
    {
      title: 'vr',
      children: [
        { title: 'vr', link: '/pages/vr' },
        { title: '子内容2' },
        { title: '子内容3' },
      ],
    },
    {
      title: '内容三（默认展开）',
      open: true,
      children: [
        { title: '子内容1(禁用)', disabled: true },
        { title: '子内容2(默认激活)', active: true },
        { title: '子内容3' },
      ],
    },
  ];
}

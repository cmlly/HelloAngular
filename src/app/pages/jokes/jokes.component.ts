import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2';
import Player from 'xgplayer';
import Music from 'xgplayer-music'

// @ts-ignore
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.less']
})


export class JokesComponent implements OnInit {

  data = [
    { month: '一月', city: '东京', temperature: 7 },
    { month: '一月', city: '伦敦', temperature: 3.9 },
    { month: '二月', city: '东京', temperature: 6.9 },
    { month: '二月', city: '伦敦', temperature: 4.2 },
    { month: '三月', city: '东京', temperature: 9.5 },
    { month: '三月', city: '伦敦', temperature: 5.7 },
    { month: '四月', city: '东京', temperature: 14.5 },
    { month: '四月', city: '伦敦', temperature: 8.5 },
    { month: '五月', city: '东京', temperature: 18.4 },
    { month: '五月', city: '伦敦', temperature: 11.9 },
    { month: '六月', city: '东京', temperature: 21.5 },
    { month: '六月', city: '伦敦', temperature: 15.2 },
    { month: '七月', city: '东京', temperature: 25.2 },
    { month: '七月', city: '伦敦', temperature: 17 },
    { month: '八月', city: '东京', temperature: 26.5 },
    { month: '八月', city: '伦敦', temperature: 16.6 },
    { month: '九月', city: '东京', temperature: 23.3 },
    { month: '九月', city: '伦敦', temperature: 14.2 },
    { month: '十月', city: '东京', temperature: 18.3 },
    { month: '十月', city: '伦敦', temperature: 10.3 },
    { month: '十一月', city: '东京', temperature: 13.9 },
    { month: '十一月', city: '伦敦', temperature: 6.6 },
    { month: '十二月', city: '东京', temperature: 9.6 },
    { month: '十二月', city: '伦敦', temperature: 4.8 }
];

  constructor() { }

  ngOnInit(): void {
    let player = new Player({
      id: 'mse',
      url: '../../../assets/videos/big_buck_bunny.mp4',
      videoInit: true,
      playbackRate: [0.5, 0.75, 1, 1.5, 2],
      defaultPlaybackRate: 1,
      screenShot: true,
      progressDot: [{time: 10}, {time: 22}, {time: 56}],
      keyShortcut: 'on',
      lang: 'zh-cn'
    });

    this.chartData();
  }

  chartData(): void {
    const chart = new G2.Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });

    chart.data(this.data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.render();
  }


}

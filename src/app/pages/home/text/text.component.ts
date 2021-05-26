import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 0.8,
        backgroundColor: 'orange'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('closed <=> open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class TextComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}

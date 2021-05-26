import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PublicService} from '../../services/public.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  num: string;

  @Input()
  public panelTitle: string;
  @Output()
  public follow = new EventEmitter();

  addNewItem(value: string): void {
    this.follow.emit(value);
  }

  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.num = '123';
  }

}

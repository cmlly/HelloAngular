import { Component, OnInit } from '@angular/core';
import {UserList} from '../../interfaces/user-info/user-info.type';
import {UserInfoService} from '../../services/user-info/user-info.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})

export class WelcomeComponent implements OnInit {

  listData: UserList = {
    current_page: 1,
    per_page: 5,
    last_page: 1,
    total: 0,
    data: []
  };
  currentPage = 1;
  total = 0;
  loading = true;

  constructor(private userInfoService: UserInfoService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void{
    this.loading = true;
    this.userInfoService.getUserList(this.currentPage).subscribe(res => {
      this.loading = false;
      this.listData = res;
      this.total = res.total;
    });
  }

  changePageIndex(pageIndex): void {
    this.currentPage = pageIndex;
    this.getUserList();
  }
}

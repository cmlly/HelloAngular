import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../services/user-info/user-info.service';
import {UserInfo} from '../interfaces/user-info/user-info.type';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  userInfo: UserInfo = {
    id: null,
    username: ''
  };

  constructor(private userInfoService: UserInfoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userInfoService.getUserInfo().subscribe(res => {
      this.userInfo = res;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}

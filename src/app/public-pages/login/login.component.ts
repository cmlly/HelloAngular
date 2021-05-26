import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  registerEmail: string;
  registerPassword: string;

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private router: Router, private message: NzMessageService) {
  }

  ngOnInit(): void {

  }

  changeRegister(): void {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  changeLogin(): void {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.message.create('success', '登录成功');
        this.authService.isLoggedIn = true;
        localStorage.setItem('token', res.token);
        const redirectUrl = '/';
        this.router.navigate([redirectUrl]);
      }
    });
  }

  // 注册
  register(): void {

  }
}

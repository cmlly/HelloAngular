import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    // @ts-ignore
    state: RouterStateSnapshot): true|UrlTree {
      const url: string = state.url;
      return this.checkLogin(url);
  }
  checkLogin(url: string): true|UrlTree {
    if (this.authService.isLoggedIn){ return true; }
    // 保存原始的请求地址,登录后跳转到该地址
    this.authService.redirectUrl = url;
    // 未登录,跳转到登录页面
    return this.router.parseUrl('/login');
  }

}

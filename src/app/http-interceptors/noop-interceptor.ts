import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd';


@Injectable()
// @ts-ignore
export class NoopInterceptor implements HttpInterceptor {

  constructor(private router: Router, private message: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;
    const token = localStorage.getItem('token') || '';

    req = req.clone({
      url,
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (event.body.code !== 200) {
              this.message.create('error', event.body.message);
            }
          }
        }
      )
    );
  }
}

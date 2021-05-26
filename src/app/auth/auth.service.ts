import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PublicService} from '../services/public.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient, private publicService: PublicService, private router: Router) {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  // tslint:disable-next-line:ban-types
  login(username, password): Observable<any> {
    return this.http.post(this.publicService.baseUrl + 'login', {email: username, password})
      .pipe(map(res => res));
  }

  logout(): void {
    this.isLoggedIn  = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}

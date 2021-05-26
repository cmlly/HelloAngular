import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfo, UserList} from '../../interfaces/user-info/user-info.type';
import {PublicService} from '../public.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserInfoService {
  constructor(private http: HttpClient, private publicService: PublicService) { }

  getUserInfo(): Observable<UserInfo> {
    return this.http.post(`${this.publicService.baseUrl}admin/adminInfo`, {})
      .pipe(map((res: { data: UserInfo }) => res.data ));
  }

  getUserList(page): Observable<UserList> {
    return this.http.post(`${this.publicService.baseUrl}admin/userIndex`, {page, limit: 5})
      .pipe(map((res: { data: UserList }) => res.data ));
  }
}

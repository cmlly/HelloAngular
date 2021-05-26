import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PublicService} from './public.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ConfigService {

  constructor(private http: HttpClient, private publicService: PublicService) { }

  getConfig(): Observable<any> {
    return this.http.post(`${this.publicService.baseUrl}config`, {})
      .pipe(map((res: { data: any }) => res.data.language));
}
}

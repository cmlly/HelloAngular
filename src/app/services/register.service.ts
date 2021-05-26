import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PublicService} from './public.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class RegisterService {
  constructor(private http: HttpClient, private publicService: PublicService) {
  }

  fetchRegister(email, password): Observable<any> {
    return this.http.post(`${this.publicService.baseUrl}config`, {email, password}).pipe(
      map(res => res)
    );
  }

}

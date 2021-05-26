import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  baseUrl = 'http://localhost:3000/';

  constructor() { }
}

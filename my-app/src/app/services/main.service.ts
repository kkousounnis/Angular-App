import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  URL = "https://gorest.co.in/public-api/users";

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.URL);
  }
  
}
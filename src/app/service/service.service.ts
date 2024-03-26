import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url: string = "";
  getPostData():Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(url)
  }
}

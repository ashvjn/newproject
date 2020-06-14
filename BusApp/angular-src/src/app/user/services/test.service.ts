import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http: HttpClient) { }

register(user) {
  // alert('in sample');
  // return this._http.get('https://jsonplaceholder.typicode.com/todos/uesr=sdjfgkjshd', {} , );
  const myHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer token dsfsdfsdfsffd'
  });
  const postHeader: any = { headers: myHeaders, responseType: 'json', observe: 'response' };

  // return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
  return this._http.post('http://localhost:3000/test/register', user);
  // return this._http.get('http://localhost:3000/test');
}
auth(user) {
  // alert('in sample');
  // return this._http.get('https://jsonplaceholder.typicode.com/todos/uesr=sdjfgkjshd', {} , );
  const myHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer token dsfsdfsdfsffd'
  });
  const postHeader: any = { headers: myHeaders, responseType: 'json', observe: 'response' };

  // return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
  return this._http.post('http://localhost:3000/test/login', user);
  // return this._http.get('http://localhost:3000/test');
 }
}
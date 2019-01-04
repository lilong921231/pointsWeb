/**
 * @author lilong 2018-12-10
 * http 共通请求
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  //存入token
  setToken(value) {
    window.localStorage.token = value;
  }
  //取出token
  getToken() {
    if (window.localStorage.token == null) {
      window.localStorage.token = '';
    }
    return window.localStorage.token;
  }

  setId(value) {
    window.localStorage.id = value;
  }
  //取出token
  getId() {
    if (window.localStorage.id == null) {
      window.localStorage.id = '';
    }
    return window.localStorage.id;
  }

  /**
   * psotLogin请求
   */
  postloginData(url: string, data: any) {
    return this.http.post(url, data, {headers: {
        'Content-Type': 'application/json'}
    })
  }
  /**
   * psot请求
   */
  postData(url: string, data: any) {

    return this.http.post(url, data, {headers: {
      'Content-Type': 'application/json','Authorization': this.getToken(), '_current_id': this.getId()}
    })
  }
  /**
   * get请求
   */
  getData(url: string) {
    return this.http.get(url, {headers: {
       'Authorization': this.getToken(), '_current_id': this.getId()}
    });
  }

  /**
   * get带参请求
   */
  getCodeData(url: string, data?: any) {
    return this.http.get(url, data);
  }
}

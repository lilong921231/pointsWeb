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

  token: any;
  currentId: any;

  constructor(private http: HttpClient) { }

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
      'Content-Type': 'application/json','Authorization': this.token, '_current_id': this.currentId}
    })
  }
  /**
   * get请求
   */
  getData(url: string) {
    alert(this.token);
    alert(this.currentId);
    return this.http.get(url, {headers: {
       'Authorization': this.token, '_current_id': this.currentId}
    });
  }

  /**
   * get带参请求
   */
  getCodeData(url: string, data?: any) {
    return this.http.get(url, data);
  }
}

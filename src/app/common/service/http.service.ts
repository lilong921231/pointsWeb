/**
 * @author lilong 2018-12-10
 * http 共通请求
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public listData: any;

  constructor(private http: HttpClient) { }
  /**
   * psot请求
   */
  postData(url: string, data: any) {
    const options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json;'}
      )
    };
    return this.http.post(url, data, options);
  }
  /**
   * get请求
   */
  getData(url: string) {
    return this.http.get(url);
  }

  /**
   * get带参请求
   */
  getParamData(url: string, data?: any) {
    return this.http.get(url, data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

/**
 * @desc http 共通请求
 * @author lilong
 * @date 2018-12-10
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  ceshi = false;
  // adminUrl = 'http://47.91.230.177:8001';
  adminUrl = 'http://localhost:8001';

  constructor(
    private router: Router, // 引入Router路由组件
    private http: HttpClient,  // 引入http组件
  ) { }

  setCookie(value) {
    this.ceshi = value;
  }
  getCookie() {
    return this.ceshi;
  }

  /**
   * 在storage处存入用户token
   * @param value token的值
   */
  setToken(value) {
    window.localStorage.token = value;
  }
  /**
   * 从storage处取出用户token
   */
  getToken() {
    if (window.localStorage.token == null) {
      window.localStorage.token = '';
    }
    setTimeout(() => {
      alert('账号过期，请重新登陆');
      if (this.getUser() === 'user') {
        this.router.navigate(['']); // 跳转到用户登陆界面
      } else if (this.getAdmin() === 'admin') {
        alert('账号过期，请重新登陆');
        this.router.navigate(['/admin']); // 跳转到admin登陆界面
      }
    }, 1000 * 60 * 60 * 4);
    return window.localStorage.token;
  }

  getTokenCode() {
    if (window.localStorage.token == null) {
      window.localStorage.token = '';
    }
    return window.localStorage.token;
  }

  /**
   * 在storage处存入用户id
   * @param value id的值
   */
  setUser(value) {
    window.localStorage.user = value;
  }

  /**
   * 从storage处取出用户id
   */
  getUser() {
    if (window.localStorage.user == null) {
      window.localStorage.user = '';
    }
    return window.localStorage.user;
  }
  setAdmin(value) {
    window.localStorage.admin = value;
  }

  getAdmin() {
    if (window.localStorage.admin == null) {
      window.localStorage.admin = '';
    }
    return window.localStorage.admin;
  }


  /**
   * 在storage处存入用户id
   * @param value id的值
   */
  setId(value) {
    window.localStorage.id = value;
  }

  /**
   * 从storage处取出用户id
   */
  getId() {
    if (window.localStorage.id == null) {
      window.localStorage.id = '';
    }
    return window.localStorage.id;
  }

  /**
   * 在storage处存入用户角色名字
   * @param value id的值
   */
  setName(value) {
    window.localStorage.Name = value;
  }

  /**
   * 从storage处取出用户角色名字
   */
  getName() {
    if (window.localStorage.Name == null) {
      window.localStorage.Name = '';
    }
    return window.localStorage.Name;
  }

  /**
   * psot请求
   * @param url api接口地址
   * @param data 传入JSON数据
   */
  postData(url: string, data: any) {
    // headers请求参数头
    return this.http.post(url, data, {headers: {
      'Content-Type': 'application/json', 'Authorization': this.getToken(), '_current_id': this.getId()}
    });
  }
  /**
   * get请求
   * @param url api接口地址
   */
  getData(url: string) {
    // headers请求参数头
    return this.http.get(url, {headers: {
       'Authorization': this.getToken(), '_current_id': this.getId()}
    });
  }
  /**
   * code
   * get请求
   * @param url api接口地址
   */
  getDataCode(url: string) {
    // headers请求参数头
    return this.http.get(url, {headers: {
        'Authorization': this.getTokenCode(), '_current_id': this.getId()}
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/service/http.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public tbUpdata: any;
  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  /**
   * 个人档案
   */
  myinfoService() {
    const url = environment.apiUrl + '/admin/personal/info';
    return this.httpService.getData(url);
  }

  /**
   * 修改管理员用户的密码
   * post请求
   * @param data 请求密码数据Json
   */
  repassService(data) {
    const url = environment.apiUrl + '/admin/personal/password';
    return this.httpService.postData(url, data);
  }

  /**
   * 修改管理员用户的超级密码
   * post请求
   * @param data 请求密码数据Json
   */
  repassSuperService(data) {
    const url = environment.apiUrl + '/admin/personal/super/password';
    return this.httpService.postData(url, data);
  }

  /**
   * 显示天宝指数
   * @param pageData 显示的页数和页面显示数量
   * @returns {Observable<ArrayBuffer>} 返回数据结果
   */
  tbIndexService(pageData) {
    const url = environment.apiUrl + '/stock/list/page';
    return this.httpService.getParamData(url, pageData);
  }

  /**
   * 添加天宝指数
   * @param tbAddData 添加天宝指数的数据
   */
  tbIndexAddService(tbAddData) {
    const url = environment.apiUrl + '/stock/save';
    return this.httpService.postData(url, tbAddData);
  }

  /**
   * 查询天宝指数
   * @param tbExponentId 根据id查询结果
   */
  tbIndexIdService(tbExponentId) {
    const url = environment.apiUrl + '/stock/get/' + tbExponentId;
    return this.httpService.getData(url);
  }

  /**
   * 跳入修改页面
   * 并返回id查询数据
   */
  tbUpdataIdService(response) {
    this.tbUpdata = response;
    this.router.navigateByUrl('/admin/tb-index-updata');
  }

  /**
   * 删除天宝指数
   */
  tbDeleteService(tbExponentId) {
    const url = environment.apiUrl + '/stock/delete/' + tbExponentId;
    return this.httpService.getData(url);
  }
}

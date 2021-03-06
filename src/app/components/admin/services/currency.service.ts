import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/service/http.service';
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
   * 首页公告
   */
  newService() {
    const url = this.httpService.adminUrl + '/announcement/list/page?pageSize=10&pageNo=1';
    return this.httpService.getData(url);
  }

  /**
   * 个人档案
   */
  myinfoService() {
    const url = this.httpService.adminUrl + '/admin/personal/info';
    return this.httpService.getData(url);
  }

  /**
   * 修改管理员用户的密码
   * post请求
   * @param data 请求密码数据Json
   */
  repassService(data) {
    const url = this.httpService.adminUrl + '/admin/personal/password';
    return this.httpService.postData(url, data);
  }

  /**
   * 修改管理员用户的超级密码
   * post请求
   * @param data 请求密码数据Json
   */
  repassSuperService(data) {
    const url = this.httpService.adminUrl + '/admin/personal/super/password';
    return this.httpService.postData(url, data);
  }

  /**
   * 显示天宝指数
   * @param pageNo 显示的页数
   * @pagem pageSize 页面显示数量
   */
  tbIndexService(pageSize, pageNo) {
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = this.httpService.adminUrl + '/stock/list/page?' + size + '&' + pageno;
    return this.httpService.getData(url);
  }

  /**
   * 添加天宝指数
   * @param tbAddData 添加天宝指数的数据
   */
  tbIndexAddService(tbAddData) {
    const url = this.httpService.adminUrl + '/stock/save';
    return this.httpService.postData(url, tbAddData);
  }

  /**
   * 查询天宝指数
   * @param tbExponentId 根据id查询结果
   */
  tbIndexIdService(tbExponentId) {
    const url = this.httpService.adminUrl + '/stock/get/' + tbExponentId;
    return this.httpService.getData(url);
  }

  /**
   * 跳入修改页面
   * 并返回id查询数据
   */
  tbIdSkip(id) {
    this.router.navigateByUrl('/admin/tb-index-updata/' + id);
  }

  /**
   * 删除天宝指数
   */
  tbDeleteService(tbExponentId) {
    const url = this.httpService.adminUrl + '/stock/delete/' + tbExponentId;
    return this.httpService.getData(url);
  }
  /**
   * 修改天宝指数
   */
  tbIndexUpdateService(data) {
    const url = this.httpService.adminUrl + '/stock/update';
    return this.httpService.postData(url, data);
  }

  /**
   * admin K线图
   * 获取num指数数据
   * @param num 传入的数值
   */
  exponentsService(num) {
    const url = this.httpService.adminUrl + '/stock/list/' + num;
    return this.httpService.getData(url);
  }

  currencyCode(code, response) {
    this.httpService.codeSelect(code, response);
  }
}

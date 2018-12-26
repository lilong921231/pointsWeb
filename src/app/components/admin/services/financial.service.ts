import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../common/service/http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  /**
   * 显示总积分和权重比例
   */
 pointBalance () {
    const url = environment.apiUrl + '/system/bonus/balance';
    return this.httpService.getData(url);
 }

  /**
   * 结算当日系统总积分和个人积分
   * @param urlParam 权重比例（百分比）
   */
  pointSystemRatio(urlParam) {
    const url = environment.apiUrl + '/system/bonus/checkout' + urlParam;
    return this.httpService.getData(url);
  }

  /**
   * 显示用户积分信息
   * @param pageSize 分页页数
   * @param pageNo 分页数据数量
   */
  pointList(pageSize, pageNo) {
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = environment.apiUrl + '/system/bonus/list/page?' + size + '&' + pageno;
    return this.httpService.getData(url);
  }

  /**
   * 前台隐藏系统id信息
   * @param pointId 系统id
   */
  pointVisibleService(pointId) {
    const url = environment.apiUrl + '/system/bonus/visible/' + pointId;
    return this.httpService.getData(url);
  }

  /**
   * 根据id强行清空积分数据
   * @param pointId 要清空积分的id
   */
  pointDelete(pointId) {
    const url = environment.apiUrl + '/system/bonus/delete/' + pointId;
    return this.httpService.getData(url);
  }

  /**
   * 传输要查看明细的id
   * @param pointId 查看明细的id
   */
  pointInfoId(pointId) {
    this.router.navigateByUrl('/admin/pointinfo/' + pointId);
  }

  /**
   * 根据id查询增值积分的明细
   * @param pointId 查询的id
   * @param pointInfoPageData 分页的数据
   */
  pointInfo(pointId, size, pageNo) {
    const pageSize = 'pageSize=' + size;
    const pageno = 'pageNo=' + pageNo;
    const url = environment.apiUrl + '/personal/bonus/list/page/' + pointId + '?' + pageSize + '&' + pageno;
    return this.httpService.getData(url);
  }

  /**
   * 显示隐藏个人id
   * @param id 个人id
   */
  pointIdVisibleService(id) {
    const url = environment.apiUrl + '/personal/bonus/visible/' + id;
    return this.httpService.getData(url);
  }

  /**
   * 个人积分查询
   * @param sysBonusId 系统积分id
   * @param keyword 搜索的关键字
   * @param pageSize 页面显示数量
   * @param pageNo 当前页面
   */
  pointSearchService(sysBonusId, keyword, pageSize, pageNo) {
    const keyWord = 'keyword=' + keyword;
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = environment.apiUrl + '/personal/bonus/list/page/' + sysBonusId + '/condition/?' + keyWord + '&' + size + '&' + pageno;
    return this.httpService.getData(url);
  }
}

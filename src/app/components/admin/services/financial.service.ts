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
   * @param data 分页数据Json
   */
  pointList(data) {
    const url = environment.apiUrl + '/system/bonus/list/page';
    return this.httpService.getParamData(url, data);
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
  pointInfo(pointId, pointInfoPageData) {
    const url = environment.apiUrl + '/personal/bonus/list/page/' + pointId;
    console.log(url);
    return this.httpService.getParamData(url, pointInfoPageData);
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
   * 工人积分查询
   * @param data 数据集合
   */
  pointSearchService(sysBonusId, data) {
    const url = environment.apiUrl + '/personal/bonus/list/page /condition/' + sysBonusId;
    return this.httpService.getParamData(url, data);
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/service/http.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  userId: any;
  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  /**
   * 显示管理员信息
   */
  adminInfo() {
    const url = environment.apiUrl + '/admin/personal/info';
    return this.httpService.getData(url);
  }

  /**
   * 显示已审核的会员
   * @param pageSize 显示的页数
   * @pagem pageNo 页面显示数量
   */
  userInfo(pageSize, pageNo) {
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = environment.apiUrl + '/user/list/page/audited?' + size + '&' + pageno;
    return this.httpService.getData(url);
  }

  /**
   * 传输要查看明细的id
   * @param userId 查看明细的id
   */
  userIdInfo(userId) {
    this.router.navigateByUrl('/admin/usershow/' + userId);
  }

  /**
   * 传输要修改的会员id
   * @param userId 要修改的id
   */
  userIdUpdata(userId) {
    this.router.navigateByUrl('/admin/userUpdata/' + userId);
  }

  /**
   * 显示查看id的明细
   */
  userShowId(userId) {
    const url = environment.apiUrl + '/user/get/' + userId;
    return this.httpService.getData(url);
  }

  /**
   * 保存修改后的会员档案
   */
  updataUser(data) {
    const url = environment.apiUrl + '/user/update';
    return this.httpService.postData(url, data);
  }

  /**
   * 重置用户的密码
   */
  userResetService(userId) {
    const url = environment.apiUrl + '/user/reset/password/' + userId;
    return this.httpService.getData(url);
  }

  /**
   * 显示会员等级数据
   */
  levelInfoServie(pageData) {
    const url = environment.apiUrl + '/rank/list/page';
    return this.httpService.getParamData(url, pageData);
  }

  /**
   * 添加会员等级
   * @param data 会员信息的集合
   */
  levelAddService(data) {
    const url = environment.apiUrl + '/rank/save';
    return this.httpService.postData(url, data);
  }

  /**
   * 根据id跳转到修改页面
   * @param levelId 要修改的id
   */
  levelIdInfoService(levelId) {
    this.router.navigateByUrl('/admin/levelUpdata/' + levelId);
  }

  /**
   * 根据id查询会员等级信息
   */
  levelIdIService(levelId) {
    const url = environment.apiUrl + '/rank/get/' + levelId;
    return this.httpService.getData(url);
  }


  /**
   * 修改会员等级信息
   * @param data 要修改的参数
   */
  levelUpdataService(data) {
    const url = environment.apiUrl + '/rank/update';
    return this.httpService.postData(url, data);
  }

  /**
   * 管理角色
   * @param pageData 页数和显示数量
   */
  admingroupService(pageData) {
    const url = environment.apiUrl + '/role/list/page';
    return this.httpService.getParamData(url, pageData);
  }

  /**
   * 根据id跳转到管理角色修改页面
   * @param admingroupId 要修改的id
   */
  admingroupId(admingroupId) {
    this.router.navigateByUrl('/admin/admingroupUpdata/' + admingroupId);
  }

  /**
   * 管理角色页面显示id信息
   * @param admingroupId 显示信息的id
   */
  admingroupInfoId(admingroupId) {
    const url = environment.apiUrl + '/role/get/' + admingroupId;
    return this.httpService.getData(url);
  }

  /**
   * 修改管理角色信息
   * @param data 修改角色信息的参数
   */
  admingroupUpdata(data) {
    const url = environment.apiUrl + '/role/update';
    return this.httpService.postData(url, data);
  }

  /**
   * 显示管理用户
   * @param pageData 分页数据
   */
  adminService(pageData) {
    const url = environment.apiUrl + '/admin/list/page';
    return this.httpService.getParamData(url, pageData);
  }

  /**
   * 添加管理用户界面
   */
  adminAddUrl() {
    this.router.navigateByUrl('/admin/adminAdd');
  }

  /**
   * 添加管理用户信息
   * @param data 添加信息的数据
   */
  adminAddService(data) {
    const url = environment.apiUrl + '/admin/save';
    return this.httpService.postData(url, data);
  }

  /**
   * 根据传入的id，跳到修改页面
   * @param adminId 传入的id
   */
  adminUpdataId(adminId) {
    this.router.navigateByUrl('/admin/adminUpdata/' + adminId);
  }

  /**
   * 显示要修改的id
   * @param adminId 需要修改的id
   */
  adminUpdataIdInfo(adminId) {
    const url = environment.apiUrl + '/admin/get/' + adminId;
    return this.httpService.getData(url);
  }

  /**
   * 根据搜索类型和关键字，搜索用户
   * @param typeId 搜索类型，关键字等
   * @param keyWord 关键字
   */
  conditionService(typeId, keyWord) {
    const type = 'type=' + typeId;
    const keyword = 'keyword=' + keyWord;
    const url = environment.apiUrl + '/user/list/page/condition?' + type + '&' + keyword;
    return this.httpService.getData(url);
  }

  /**
   * 根据userId跳转到会员档案界面
   * @param userId 会员ID
   */
  userIdSkip(userId) {
    alert(userId);
    this.router.navigateByUrl('/admin/user/' + userId);
  }

  // 未使用
  /**
   * 删除选中的会员留言
   * @param ids 选中的会员
   */
  userMessageDeleteIds(ids) {
    const userMessageIdsDelete = confirm('确认删除？');
    if (userMessageIdsDelete) {
      const url = environment.apiUrl + '/user/message/delete';
      return this.httpService.postData(url, ids);
    } else {
    return false;
    }
  }
  // 未使用
  /**
   * 根据会员id，屏蔽其登陆
   * @param ids 会员id
   */
  userIdsDelete(ids) {
    const userIdsDelete = confirm('确认删除？');
    if (userIdsDelete) {
      const url = environment.apiUrl + '';
      return this.httpService.getParamData(url, ids);
    } else {
      return false;
    }
  }

  /**
   * 删除管理用户
   * @param adminId 管理用户id
   */
  adminDeleteService(adminId) {
    const url = environment.apiUrl + '/admin/delete/' + adminId;
    return this.httpService.getData(url);
  }
}

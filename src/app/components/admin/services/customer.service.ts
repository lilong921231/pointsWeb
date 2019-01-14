import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/service/http.service';
import { environment } from '../../../../environments/environment';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  /**
   * 获取留言信息
   * @param typeId 查询类型 0 表示未处理和已处理均查询，1 表示查询未处理，2 表示查询已处理
   */
  messageListService(typeId) {
    const type = 'type=' + typeId;
    const url = this.httpService.adminUrl + '/user/message/list/page/condition?' + type;
    return this.httpService.getData(url);
  }

  /**
   * 根据留言ID跳转
   */
  messageIdSkip(messageId) {
    this.router.navigateByUrl('/admin/messageinfo/' + messageId);
  }

  /**
   * 获取公告信息列表
   */
  newInfo(pageSize, pageNo) {
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = this.httpService.adminUrl + '/announcement/list/page?' + size + '&' + pageno;
    return this.httpService.getData(url);
  }

  /**
   * 查询留言历史
   */
  messageHistoryService() {
    const type = 'type=' + 2;
    const url = this.httpService.adminUrl + '/user/message/list/page/condition?' + type;
    return this.httpService.getData(url);
  }

  /**
   * 删除留言信息（单条）
   * @param data 留言信息id
   */
  userIdDeleteService(data) {
    const url = this.httpService.adminUrl + '/user/message/delete';
    return this.httpService.postData(url, data);
  }

  /**
   * 恢复用户留言信息
   * @param userid 留言用户id
   * @param reply 回复信息
   * @param status 状态
   */
  messageUpdataService(userid, reply, status) {
    const id = 'id=' + userid;
    const rep = 'reply=' + reply;
    const statu = 'status=' + status;
    const url = this.httpService.adminUrl + '/user/message/reply?' + id + '&' + rep + '&' + statu;
    return this.httpService.getData(url);
  }

  /**
   * 留言信息页面根据keyword来搜索
   * @param typeId 留言信息类型
   * @param keyword 关键字
   */
  messsageSearchService(typeId, keyword) {
    const type = 'type=' + typeId;
    const keyWord = 'keyword=' + keyword;
    const url = this.httpService.adminUrl + '/user/message/list/page/condition?' + type + '&' + keyWord;
    return this.httpService.getData(url);
  }


  /**
   * 根据id删除公告信息
   * @param newId 公告信息id
   */
  newIdDeleteService(newId) {
   const url = this.httpService.adminUrl + '/announcement/delete';
   return this.httpService.postData(url, newId);
  }


  /**
   * 根据id跳转到修改公告的界面
   * @param newId 查询公告的Id
   */
  newUpdataSkip(newId) {
    this.router.navigateByUrl('/admin/newinfo_updata/' + newId);
  }

  /**
   * 根据id修改公告信息
   * @param data 修改后的参数
   */
  newUpdataService(data) {
    const url = this.httpService.adminUrl + '/announcement/update';
    return this.httpService.postData(url, data);
  }

  /**
   * 根据id查询一条公告
   * @param newId 查询公告id
   */
  newIdService(newId) {
    const url = this.httpService.adminUrl + '/announcement/get/' + newId;
    return this.httpService.getData(url);
  }

  /**
   * 添加新公告
   */
  newAdd(data) {
    const url =  this.httpService.adminUrl + '/announcement/save';
    return this.httpService.postData(url, data);
  }

  /**
   * 查询留言id实情
   * @param messageId 留言id
   */
  messageInfoService(messageId) {
    const url =  this.httpService.adminUrl + '/user/message/get/' + messageId;
    return this.httpService.getData(url);
  }

  /**
   * 删除选中的多条留言信息
   * @param messages 留言信息id的数组
   */
  messagesDeleteService(messages) {
    const url = this.httpService.adminUrl + '/user/message/delete';
    return this.httpService.postData(url, messages);
  }
}

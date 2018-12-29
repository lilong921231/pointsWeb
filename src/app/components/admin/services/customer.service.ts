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
    private httpServer: HttpService
  ) { }

  /**
   * 获取留言信息
   * @param typeId 查询类型 0 表示未处理和已处理均查询，1 表示查询未处理，2 表示查询已处理
   */
  messageListService(typeId) {
    const type = 'type=' + typeId;
    const url = environment.apiUrl + '/user/message/list/page/condition?' + type;
    return this.httpServer.getData(url);
  }

  /**
   * 根据留言ID跳转
   */
  messageIdSkip(messageId) {
    this.router.navigateByUrl('/admin/messageinfo/' + messageId);
  }
  /**
   * 根据留言ID查看详情
   */
  /**
   * 获取公告信息列表
   */
  newInfo(pageSize, pageNo) {
    const size = 'pageSize=' + pageSize;
    const pageno = 'pageNo=' + pageNo;
    const url = environment.apiUrl + '/announcement/list/page?' + size + '&' + pageno;
    return this.httpServer.getData(url);
  }

  /**
   * 查询留言历史
   */
  messageHistoryService() {
    const type = 'type=' + 2;
    const url = environment.apiUrl + '/user/message/list/page/condition?' + type;
    return this.httpServer.getData(url);
  }

  /**
   * 删除留言信息（单条）
   * @param data 留言信息id
   */
  userIdDeleteService(data){
    const url = environment.apiUrl + '/user/message/delete';
    return this.httpServer.postData(url, data);
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
    const url = environment.apiUrl + '/user/message/reply?' + id + '&' + rep + '&' + statu;
    return this.httpServer.getData(url);
  }





  // 未使用
  /**
   * 根据id跳转到查询公告的界面
   * @param newId 查询公告的Id
   */
  newUpdataId(newId) {
    this.router.navigateByUrl('/admin/newinfo_updata/' + newId);
  }
  // 未使用
  /**
   * 根据id查询一条公告
   * @param newId 查询公告id
   */
  newIdService(newId) {
    const url = environment.apiUrl + '/announcement/get/' + newId;
    return this.httpServer.getData(url);
  }

  /**
   * 添加新公告
   */
  newAdd(data) {
    const url = environment.apiUrl + 'announcement/sage';
    return this.httpServer.postData(url, data);
  }

  /**
   * 查询留言id实情
   * @param messageId 留言id
   */
  messageInfoService(messageId) {
    const url = environment.apiUrl + '/user/message/get/' + messageId;
    return this.httpServer.getData(url);
  }

  /**
  * 删除公告消息
  */
  new_del(newId) {
    const new_select = confirm('确认删除？');
    if (new_select) {
      alert('您选择了确认删除信息');
    } else {
      return false;
    }
  }

  /**
   * 删除选定的公告消息
   */
  del_news(newId) {
    const message = '确认删除以上1条记录？';
    const new_selects = confirm(message);
    if (new_selects) {
      alert('您选择了删除好几条信息');
    } else {
      return false;
    }
  }

  /**
   * 删除留言消息
   */
  del_meg() {
    const new_select = confirm('确认删除？');
    if (new_select) {
      alert('您选择了确认删除信息');
    } else {
      return false;
    }
  }

  /**
   * 删除选定的留言消息
   */
  del_megs() {
    const message = '确认删除以上1条记录？';
    const new_selects = confirm(message);
    if (new_selects) {
      alert('您选择了删除好几条信息');
    } else {
      return false;
    }
  }



  /**
   * 修改公告
   */
  new_updata() {
    alert('保存成功');
    // console.log(this.httpServer.getData(url));

  }

  /**
   * 修改管理员回复
   */
  meg_updata() {
    alert('保存成功');
  }

  /**
   * 清空单个input框按钮
   */
  button_empty(div_id) {
    //  清空标题
    $(div_id).prop('value', '');
  }

}

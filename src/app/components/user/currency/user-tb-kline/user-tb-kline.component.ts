import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';
import {DatePipe} from "@angular/common";

/**
 * @desc 用户K线图界面
 * @author lilong
 * @date 2019-1-5
 */

@Component({
  selector: 'app-user-tb-kline',
  templateUrl: './user-tb-kline.component.html',
  styleUrls: ['./user-tb-kline.component.css'],
  providers: [DatePipe]
})
export class UserTbKlineComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  exponentData: any[] = []; // 指数数据
  exponentDate: any[] = []; // 天宝和上证指数日期数组
  shExponentData: Array<Array<number>> = new Array<Array<number>>();  // 上证指数数据二维数组
  shdata: Array<number> = new Array<number>();  // 上证指数数据一维数组，为了存入到二维数组里
  tbExponentData: Array<Array<number>> = new Array<Array<number>>();  // 天宝指数数据二维数组
  tbdata: Array<number> = new Array<number>();  // 天宝指数数据一维数组，为了存入到二维数组里
  shExponent: any;  // 上证指数K线图
  tbExponent: any;  // 天宝指数K线图

  constructor(
    private userCommon: UserCommonService,  // 引入UserCommonService服务
    private datePipe: DatePipe  // 日期格式化组件
  ) { }

  ngOnInit() {
    this.userKline(); // 初始化数据
  }

  /**
   * 获取K线图显示数据
   */
  userKline() {
    // 访问userTbKlineService请求方法
    this.userCommon.userTbKlineService(132) // 显示数据条数，以最近半年为时间段大约132条左右
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.exponentData = response.data;  // 取得数据赋值给定义变量，为处理数据用
          // 循环赋值指数日期和获取指数数据
          for (let i = 0; i < this.exponentData.length; i++) {
            this.shExponentData[i] = []; // 上证指数初始数据赋值空值
            this.tbExponentData[i] = []; // 天宝指数初始数据赋值空值
            // 格式化获取的日期格式，用组件DatePipe进行格式化
            this.exponentDate[i] = this.datePipe.transform(this.exponentData[i].createTime, 'yyyy-MM-dd');
            // 上证开盘指数先循环赋值给shdata一维数组，并同时把shdata一维数组赋值给shExponentData二维数组
            this.shExponentData[i].push(this.shdata[0] = this.exponentData[i].shOpenExponent);
            // 上证收盘指数先循环赋值给shdata一维数组，并同时把shdata一维数组赋值给shExponentData二维数组
            this.shExponentData[i].push(this.shdata[1] = this.exponentData[i].shCloseExponent);
            // 上证最低指数先循环赋值给shdata一维数组，并同时把shdata一维数组赋值给shExponentData二维数组
            this.shExponentData[i].push(this.shdata[2] = this.exponentData[i].shMinExponent);
            // 上证最高指数先循环赋值给shdata一维数组，并同时把shdata一维数组赋值给shExponentData二维数组
            this.shExponentData[i].push(this.shdata[3] = this.exponentData[i].shMaxExponent);
            // 天宝开盘指数先循环赋值给tbdata一维数组，并同时把tbdata一维数组赋值给tbExponentData二维数组
            this.tbExponentData[i].push(this.tbdata[0] = this.exponentData[i].tbOpenExponent);
            // 天宝收盘指数先循环赋值给tbdata一维数组，并同时把tbdata一维数组赋值给tbExponentData二维数组
            this.tbExponentData[i].push(this.tbdata[1] = this.exponentData[i].tbCloseExponent);
            // 天宝最低指数先循环赋值给tbdata一维数组，并同时把tbdata一维数组赋值给tbExponentData二维数组
            this.tbExponentData[i].push(this.tbdata[2] = this.exponentData[i].tbMinExponent);
            // 天宝最高指数先循环赋值给tbdata一维数组，并同时把tbdata一维数组赋值给tbExponentData二维数组
            this.tbExponentData[i].push(this.tbdata[3] = this.exponentData[i].tbMaxExponent);
          }
          /**
           * 上证指数k线图
           * 控件格式
           */
          this.shExponent = {
            title : {
              text: '近半年上证指数'
            },
            tooltip : {
              trigger: 'axis',
              formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[1] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[2] + '  最低 : ' + params[0].value[4];
                return res;
              }
            },
            legend: {
              data:['上证指数']
            },
            toolbox: {
              show : true,
              feature : {
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            dataZoom : {
              show : true,
              realtime: true,
              start : 50,
              end : 100
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : this.exponentDate
              }
            ],
            yAxis : [
              {
                type : 'value',
                scale:true,
                boundaryGap: [0.01, 0.01]
              }
            ],
            series : [
              {
                name: '上证指数',
                type: 'k',
                data: this.shExponentData
              }
            ]
          };

          /**
           * 天宝指数k线图
           * 控件格式
           */
          this.tbExponent = {
            title : {
              text: '近半年天宝指数'
            },
            tooltip : {
              trigger: 'axis',
              formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[1] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[2] + '  最低 : ' + params[0].value[4];
                return res;
              }
            },
            legend: {
              data:['天宝指数']
            },
            toolbox: {
              show : true,
              feature : {
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            dataZoom : {
              show : true,
              realtime: true,
              start : 50,
              end : 100
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : this.exponentDate
              }
            ],
            yAxis : [
              {
                type : 'value',
                scale:true,
                boundaryGap: [0.01, 0.01]
              }
            ],
            series : [
              {
                name: '上证指数',
                type: 'k',
                data: this.tbExponentData
              }
            ]
          };

        } else { // 没有正确取到值
          this.userCommon.userCommonCode(response.code, response);  // 从后台报错误信息
            return false; // 不跳转页面
          }
      });
  }
}

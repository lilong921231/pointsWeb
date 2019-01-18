// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // 服务器url
 // apiUrl: 'http://192.168.249.110:8001',
 // apiUrl: 'http://47.91.230.177:8001',
 //  apiUserUrl: 'http://47.91.230.177:8002',
  apiUserUrl: 'http://localhost:8002',
 // apiUrl: 'http://localhost:8001',
  // 首页公告url
 // announcement: this.apiUrl + 'announcement/',
  //adminInfo: this.apiUrl + 'admin/personal/info',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

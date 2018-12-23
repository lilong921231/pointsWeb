// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 服务器url
 // apiUrl: 'http://192.168.249.110:8001',
  apiUrl: 'http://localhost:8001'
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

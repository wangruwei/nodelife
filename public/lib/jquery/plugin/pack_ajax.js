!function(){"use strict";var a=window,b=function(){},c=a.log||b,d=(a._17M||{}).doExternal||b,e=function(b){b.ajaxSetup({cache:!1,timeout:25e3});var e={};return function(f,g,h,i){var j,k,l;if(h=(h||"GET").toUpperCase(),j=b.extend({url:f,data:g,type:h,seq:"POST"===h,dataType:"json"},i),j.freeze_ms){if(k=(new Date).getTime(),l=f+"freeze_ms",k-e[l]<j.freeze_ms)return console.log("两次请求间隔太短\n url : %s \n opts: %j ",f,j),void 0;e[l]=k}if(j.seq){if("loading"===e[f])return console.log("请等待相同url的上一个请求结束\n url : %s \n opts: %j ",f,j),void 0;e[f]="loading"}return b.ajax(j).done(function(b){var e="success"in b?b.success:"success"===b.result;return e||(c({logs:["ajax 返回逻辑出错 调用参数 %j, 出错信息 %j",j,arguments],op:"ajax"},"error"),900!==+b.errorCode)?void 0:(d("redirectLogin","")||(a.location.href="/"),void 0)}).fail(function(b,d,e){c({logs:["ajax 物理出错 调用参数 %j, 出错信息 %j",j,arguments],op:"ajax"},"error"),"timeout"===e&&a.alert("服务器正忙，请稍后重试!")}).always(function(){j.seq&&(e[f]=null)})}};"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):a.io=e(a.jQuery)}();
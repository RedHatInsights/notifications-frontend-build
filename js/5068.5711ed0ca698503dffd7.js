"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[5068],{5068:(t,r,n)=>{n.r(r),n.d(r,{FULFILLED:()=>f,PENDING:()=>u,REJECTED:()=>l,default:()=>y});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(t){return null!==t&&"object"===(void 0===t?"undefined":o(t))&&t&&"function"==typeof t.then}var i=function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var n=[],o=!0,e=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);o=!0);}catch(t){e=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(e)throw i}}return n}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u="PENDING",f="FULFILLED",l="REJECTED",p=[u,f,l];function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.promiseTypeSuffixes||p,n=t.promiseTypeDelimiter||"_";return function(t){var o=t.dispatch;return function(t){return function(u){var f=void 0,l=void 0;if(!u.payload)return t(u);var p=u.payload;if(e(p))f=p;else if(e(p.promise))f=p.promise,l=p.data;else{if("function"!=typeof p&&"function"!=typeof p.promise)return t(u);if(f=p.promise?p.promise():p(),l=p.promise?p.data:void 0,!e(f))return t(a({},u,{payload:f}))}var y=u.type,c=u.meta,s=i(r,3),d=s[0],v=s[1],m=s[2],b=function(t,r){return a({type:[y,r?m:v].join(n)},null==t?{}:{payload:t},void 0!==c?{meta:c}:{},r?{error:!0}:{})};return t(a({type:[y,d].join(n)},void 0!==l?{payload:l}:{},void 0!==c?{meta:c}:{})),f.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=b(t,!1);return o(r),{value:t,action:r}}),(function(t){var r=b(t,!0);throw o(r),t}))}}}}}}]);
//# sourceMappingURL=../sourcemaps/5068.fe5e17a217d21d0b9d7de3cccbe128e0.js.map
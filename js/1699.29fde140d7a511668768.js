(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[1699,4155],{34663:(r,t,n)=>{"use strict";n.d(t,{Cs:()=>a,RM:()=>f,ZP:()=>p,_s:()=>u,lo:()=>l,wP:()=>s});var e=n(93264),o=function(r,t,n,e){return new(n||(n=Promise))((function(o,i){function u(r){try{a(e.next(r))}catch(r){i(r)}}function c(r){try{a(e.throw(r))}catch(r){i(r)}}function a(r){var t;r.done?o(r.value):(t=r.value,t instanceof n?t:new n((function(r){r(t)}))).then(u,c)}a((e=e.apply(r,t||[])).next())}))},i=function(r,t){var n,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,e=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],e=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function u(r,t){var n,e,u,c,a;return void 0===r&&(r=""),void 0===t&&(t=!1),o(this,void 0,void 0,(function(){var o,s,l;return i(this,(function(i){switch(i.label){case 0:return o=window.insights,[4,null===(e=null===(n=null==o?void 0:o.chrome)||void 0===n?void 0:n.auth)||void 0===e?void 0:e.getUser()];case 1:return s=i.sent(),l={isOrgAdmin:(null===(c=null===(u=null==s?void 0:s.identity)||void 0===u?void 0:u.user)||void 0===c?void 0:c.is_org_admin)||!1},[4,null===(a=null==o?void 0:o.chrome)||void 0===a?void 0:a.getUserPermissions(r,t)];case 2:return[2,(l.permissions=i.sent()||null,l)]}}))}))}function c(r){return"object"==typeof r}function a(r,t){return!!r&&r.some((function(r){return t.includes(c(r)?null==r?void 0:r.permission:r)}))}function s(r,t){return!!r&&t.every((function(t){return r.some((function(r){var n,e=(null===(n=c(r)?null==r?void 0:r.permission:r)||void 0===n?void 0:n.split(":"))||[],o=t.split(":");return e.slice(0).reduce((function(r,t,n,e){return!1===r?(e.splice(n),r):"*"===t||t===(null==o?void 0:o[n])}),!0)||e.join(":")===t}))}))}var l={isLoading:!0,isOrgAdmin:!1,permissions:[]},f=(0,e.createContext)(l);const p=u},96874:r=>{r.exports=function(r,t,n){switch(n.length){case 0:return r.call(t);case 1:return r.call(t,n[0]);case 2:return r.call(t,n[0],n[1]);case 3:return r.call(t,n[0],n[1],n[2])}return r.apply(t,n)}},34865:(r,t,n)=>{var e=n(89465),o=n(77813),i=Object.prototype.hasOwnProperty;r.exports=function(r,t,n){var u=r[t];i.call(r,t)&&o(u,n)&&(void 0!==n||t in r)||e(r,t,n)}},3118:(r,t,n)=>{var e=n(13218),o=Object.create,i=function(){function r(){}return function(t){if(!e(t))return{};if(o)return o(t);r.prototype=t;var n=new r;return r.prototype=void 0,n}}();r.exports=i},10313:(r,t,n)=>{var e=n(13218),o=n(25726),i=n(33498),u=Object.prototype.hasOwnProperty;r.exports=function(r){if(!e(r))return i(r);var t=o(r),n=[];for(var c in r)("constructor"!=c||!t&&u.call(r,c))&&n.push(c);return n}},56560:(r,t,n)=>{var e=n(75703),o=n(38777),i=n(6557),u=o?function(r,t){return o(r,"toString",{configurable:!0,enumerable:!1,value:e(t),writable:!0})}:i;r.exports=u},74318:(r,t,n)=>{var e=n(11149);r.exports=function(r){var t=new r.constructor(r.byteLength);return new e(t).set(new e(r)),t}},64626:(r,t,n)=>{r=n.nmd(r);var e=n(55639),o=t&&!t.nodeType&&t,i=o&&r&&!r.nodeType&&r,u=i&&i.exports===o?e.Buffer:void 0,c=u?u.allocUnsafe:void 0;r.exports=function(r,t){if(t)return r.slice();var n=r.length,e=c?c(n):new r.constructor(n);return r.copy(e),e}},77133:(r,t,n)=>{var e=n(74318);r.exports=function(r,t){var n=t?e(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.length)}},278:r=>{r.exports=function(r,t){var n=-1,e=r.length;for(t||(t=Array(e));++n<e;)t[n]=r[n];return t}},98363:(r,t,n)=>{var e=n(34865),o=n(89465);r.exports=function(r,t,n,i){var u=!n;n||(n={});for(var c=-1,a=t.length;++c<a;){var s=t[c],l=i?i(n[s],r[s],s,n,r):void 0;void 0===l&&(l=r[s]),u?o(n,s,l):e(n,s,l)}return n}},85924:(r,t,n)=>{var e=n(5569)(Object.getPrototypeOf,Object);r.exports=e},38517:(r,t,n)=>{var e=n(3118),o=n(85924),i=n(25726);r.exports=function(r){return"function"!=typeof r.constructor||i(r)?{}:e(o(r))}},33498:r=>{r.exports=function(r){var t=[];if(null!=r)for(var n in Object(r))t.push(n);return t}},45357:(r,t,n)=>{var e=n(96874),o=Math.max;r.exports=function(r,t,n){return t=o(void 0===t?r.length-1:t,0),function(){for(var i=arguments,u=-1,c=o(i.length-t,0),a=Array(c);++u<c;)a[u]=i[t+u];u=-1;for(var s=Array(t+1);++u<t;)s[u]=i[u];return s[t]=n(a),e(r,this,s)}}},30061:(r,t,n)=>{var e=n(56560),o=n(21275)(e);r.exports=o},21275:r=>{var t=Date.now;r.exports=function(r){var n=0,e=0;return function(){var o=t(),i=16-(o-e);if(e=o,i>0){if(++n>=800)return arguments[0]}else n=0;return r.apply(void 0,arguments)}}},75703:r=>{r.exports=function(r){return function(){return r}}},18446:(r,t,n)=>{var e=n(90939);r.exports=function(r,t){return e(r,t)}},68630:(r,t,n)=>{var e=n(44239),o=n(85924),i=n(37005),u=Function.prototype,c=Object.prototype,a=u.toString,s=c.hasOwnProperty,l=a.call(Object);r.exports=function(r){if(!i(r)||"[object Object]"!=e(r))return!1;var t=o(r);if(null===t)return!0;var n=s.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==l}},81704:(r,t,n)=>{var e=n(14636),o=n(10313),i=n(98612);r.exports=function(r){return i(r)?e(r,!0):o(r)}},34155:r=>{var t,n,e=r.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(r){if(t===setTimeout)return setTimeout(r,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(r,0);try{return t(r,0)}catch(n){try{return t.call(null,r,0)}catch(n){return t.call(this,r,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(r){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(r){n=i}}();var c,a=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!s){var r=u(f);s=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,s=!1,function(r){if(n===clearTimeout)return clearTimeout(r);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(r);try{return n(r)}catch(t){try{return n.call(null,r)}catch(t){return n.call(this,r)}}}(r)}}function v(r,t){this.fun=r,this.array=t}function h(){}e.nextTick=function(r){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new v(r,t)),1!==a.length||s||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.prependListener=h,e.prependOnceListener=h,e.listeners=function(r){return[]},e.binding=function(r){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(r){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}}}]);
//# sourceMappingURL=../sourcemaps/1699.b7ed73a291cdf92c5e85c521912da102.js.map
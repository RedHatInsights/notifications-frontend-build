/*! For license information please see 8935.202b3872ae916bc39fa7.js.LICENSE.txt */
(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[8935,4155],{34663:(r,t,e)=>{"use strict";e.d(t,{Cs:()=>a,RM:()=>f,ZP:()=>p,_s:()=>u,lo:()=>l,wP:()=>s});var n=e(93264),o=function(r,t,e,n){return new(e||(e=Promise))((function(o,i){function u(r){try{a(n.next(r))}catch(r){i(r)}}function c(r){try{a(n.throw(r))}catch(r){i(r)}}function a(r){var t;r.done?o(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(u,c)}a((n=n.apply(r,t||[])).next())}))},i=function(r,t){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function u(r,t){var e,n,u,c,a;return void 0===r&&(r=""),void 0===t&&(t=!1),o(this,void 0,void 0,(function(){var o,s,l;return i(this,(function(i){switch(i.label){case 0:return o=window.insights,[4,null===(n=null===(e=null==o?void 0:o.chrome)||void 0===e?void 0:e.auth)||void 0===n?void 0:n.getUser()];case 1:return s=i.sent(),l={isOrgAdmin:(null===(c=null===(u=null==s?void 0:s.identity)||void 0===u?void 0:u.user)||void 0===c?void 0:c.is_org_admin)||!1},[4,null===(a=null==o?void 0:o.chrome)||void 0===a?void 0:a.getUserPermissions(r,t)];case 2:return[2,(l.permissions=i.sent()||null,l)]}}))}))}function c(r){return"object"==typeof r}function a(r,t){return!!r&&r.some((function(r){return t.includes(c(r)?null==r?void 0:r.permission:r)}))}function s(r,t){return!!r&&t.every((function(t){return r.some((function(r){var e,n=(null===(e=c(r)?null==r?void 0:r.permission:r)||void 0===e?void 0:e.split(":"))||[],o=t.split(":");return n.slice(0).reduce((function(r,t,e,n){return!1===r?(n.splice(e),r):"*"===t||t===(null==o?void 0:o[e])}),!0)||n.join(":")===t}))}))}var l={isLoading:!0,isOrgAdmin:!1,permissions:[]},f=(0,n.createContext)(l);const p=u},96874:r=>{r.exports=function(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}},34865:(r,t,e)=>{var n=e(89465),o=e(77813),i=Object.prototype.hasOwnProperty;r.exports=function(r,t,e){var u=r[t];i.call(r,t)&&o(u,e)&&(void 0!==e||t in r)||n(r,t,e)}},3118:(r,t,e)=>{var n=e(13218),o=Object.create,i=function(){function r(){}return function(t){if(!n(t))return{};if(o)return o(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}}();r.exports=i},10313:(r,t,e)=>{var n=e(13218),o=e(25726),i=e(33498),u=Object.prototype.hasOwnProperty;r.exports=function(r){if(!n(r))return i(r);var t=o(r),e=[];for(var c in r)("constructor"!=c||!t&&u.call(r,c))&&e.push(c);return e}},56560:(r,t,e)=>{var n=e(75703),o=e(38777),i=e(6557),u=o?function(r,t){return o(r,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:i;r.exports=u},74318:(r,t,e)=>{var n=e(11149);r.exports=function(r){var t=new r.constructor(r.byteLength);return new n(t).set(new n(r)),t}},64626:(r,t,e)=>{r=e.nmd(r);var n=e(55639),o=t&&!t.nodeType&&t,i=o&&r&&!r.nodeType&&r,u=i&&i.exports===o?n.Buffer:void 0,c=u?u.allocUnsafe:void 0;r.exports=function(r,t){if(t)return r.slice();var e=r.length,n=c?c(e):new r.constructor(e);return r.copy(n),n}},77133:(r,t,e)=>{var n=e(74318);r.exports=function(r,t){var e=t?n(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}},278:r=>{r.exports=function(r,t){var e=-1,n=r.length;for(t||(t=Array(n));++e<n;)t[e]=r[e];return t}},98363:(r,t,e)=>{var n=e(34865),o=e(89465);r.exports=function(r,t,e,i){var u=!e;e||(e={});for(var c=-1,a=t.length;++c<a;){var s=t[c],l=i?i(e[s],r[s],s,e,r):void 0;void 0===l&&(l=r[s]),u?o(e,s,l):n(e,s,l)}return e}},85924:(r,t,e)=>{var n=e(5569)(Object.getPrototypeOf,Object);r.exports=n},38517:(r,t,e)=>{var n=e(3118),o=e(85924),i=e(25726);r.exports=function(r){return"function"!=typeof r.constructor||i(r)?{}:n(o(r))}},33498:r=>{r.exports=function(r){var t=[];if(null!=r)for(var e in Object(r))t.push(e);return t}},45357:(r,t,e)=>{var n=e(96874),o=Math.max;r.exports=function(r,t,e){return t=o(void 0===t?r.length-1:t,0),function(){for(var i=arguments,u=-1,c=o(i.length-t,0),a=Array(c);++u<c;)a[u]=i[t+u];u=-1;for(var s=Array(t+1);++u<t;)s[u]=i[u];return s[t]=e(a),n(r,this,s)}}},30061:(r,t,e)=>{var n=e(56560),o=e(21275)(n);r.exports=o},21275:r=>{var t=Date.now;r.exports=function(r){var e=0,n=0;return function(){var o=t(),i=16-(o-n);if(n=o,i>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}},75703:r=>{r.exports=function(r){return function(){return r}}},18446:(r,t,e)=>{var n=e(90939);r.exports=function(r,t){return n(r,t)}},68630:(r,t,e)=>{var n=e(44239),o=e(85924),i=e(37005),u=Function.prototype,c=Object.prototype,a=u.toString,s=c.hasOwnProperty,l=a.call(Object);r.exports=function(r){if(!i(r)||"[object Object]"!=n(r))return!1;var t=o(r);if(null===t)return!0;var e=s.call(t,"constructor")&&t.constructor;return"function"==typeof e&&e instanceof e&&a.call(e)==l}},81704:(r,t,e)=>{var n=e(14636),o=e(10313),i=e(98612);r.exports=function(r){return i(r)?n(r,!0):o(r)}},27418:r=>{"use strict";var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(r){return t[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,o){for(var i,u,c=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),a=1;a<arguments.length;a++){for(var s in i=Object(arguments[a]))e.call(i,s)&&(c[s]=i[s]);if(t){u=t(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(c[u[l]]=i[u[l]])}}return c}},34155:r=>{var t,e,n=r.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(r){if(t===setTimeout)return setTimeout(r,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(r,0);try{return t(r,0)}catch(e){try{return t.call(null,r,0)}catch(e){return t.call(this,r,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(r){t=o}try{e="function"==typeof clearTimeout?clearTimeout:i}catch(r){e=i}}();var c,a=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!s){var r=u(f);s=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,s=!1,function(r){if(e===clearTimeout)return clearTimeout(r);if((e===i||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(r);try{return e(r)}catch(t){try{return e.call(null,r)}catch(t){return e.call(this,r)}}}(r)}}function v(r,t){this.fun=r,this.array=t}function h(){}n.nextTick=function(r){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];a.push(new v(r,t)),1!==a.length||s||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(r){return[]},n.binding=function(r){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(r){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},75251:(r,t,e)=>{"use strict";e(27418);var n=e(93264),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(r,t,e){var n,i={},s=null,l=null;for(n in void 0!==e&&(s=""+e),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:r,key:s,ref:l,props:i,_owner:u.current}}t.jsx=s,t.jsxs=s},85893:(r,t,e)=>{"use strict";r.exports=e(75251)}}]);
//# sourceMappingURL=../sourcemaps/8935.99323cbbb3b160d7c446fcb4f84d066f.js.map
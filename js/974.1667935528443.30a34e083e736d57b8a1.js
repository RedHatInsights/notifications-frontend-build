(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[974],{28483:(r,t,n)=>{var e=n(25063)();r.exports=e},47816:(r,t,n)=>{var e=n(28483),o=n(3674);r.exports=function(r,t){return r&&e(r,t,o)}},13:r=>{r.exports=function(r,t){return null!=r&&t in Object(r)}},2958:(r,t,n)=>{var e=n(46384),o=n(90939);r.exports=function(r,t,n,i){var u=n.length,c=u,f=!i;if(null==r)return!c;for(r=Object(r);u--;){var a=n[u];if(f&&a[2]?a[1]!==r[a[0]]:!(a[0]in r))return!1}for(;++u<c;){var l=(a=n[u])[0],s=r[l],p=a[1];if(f&&a[2]){if(void 0===s&&!(l in r))return!1}else{var v=new e;if(i)var y=i(s,p,l,r,t,v);if(!(void 0===y?o(p,s,3,i,v):y))return!1}}return!0}},67206:(r,t,n)=>{var e=n(91573),o=n(16432),i=n(6557),u=n(1469),c=n(39601);r.exports=function(r){return"function"==typeof r?r:null==r?i:"object"==typeof r?u(r)?o(r[0],r[1]):e(r):c(r)}},91573:(r,t,n)=>{var e=n(2958),o=n(1499),i=n(42634);r.exports=function(r){var t=o(r);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===r||e(n,r,t)}}},16432:(r,t,n)=>{var e=n(90939),o=n(27361),i=n(79095),u=n(15403),c=n(89162),f=n(42634),a=n(40327);r.exports=function(r,t){return u(r)&&c(t)?f(a(r),t):function(n){var u=o(n,r);return void 0===u&&u===t?i(n,r):e(t,u,3)}}},40371:r=>{r.exports=function(r){return function(t){return null==t?void 0:t[r]}}},79152:(r,t,n)=>{var e=n(97786);r.exports=function(r){return function(t){return e(t,r)}}},25063:r=>{r.exports=function(r){return function(t,n,e){for(var o=-1,i=Object(t),u=e(t),c=u.length;c--;){var f=u[r?c:++o];if(!1===n(i[f],f,i))break}return t}}},1499:(r,t,n)=>{var e=n(89162),o=n(3674);r.exports=function(r){for(var t=o(r),n=t.length;n--;){var i=t[n],u=r[i];t[n]=[i,u,e(u)]}return t}},222:(r,t,n)=>{var e=n(71811),o=n(35694),i=n(1469),u=n(65776),c=n(41780),f=n(40327);r.exports=function(r,t,n){for(var a=-1,l=(t=e(t,r)).length,s=!1;++a<l;){var p=f(t[a]);if(!(s=null!=r&&n(r,p)))break;r=r[p]}return s||++a!=l?s:!!(l=null==r?0:r.length)&&c(l)&&u(p,l)&&(i(r)||o(r))}},89162:(r,t,n)=>{var e=n(13218);r.exports=function(r){return r==r&&!e(r)}},42634:r=>{r.exports=function(r,t){return function(n){return null!=n&&n[r]===t&&(void 0!==t||r in Object(n))}}},27361:(r,t,n)=>{var e=n(97786);r.exports=function(r,t,n){var o=null==r?void 0:e(r,t);return void 0===o?n:o}},79095:(r,t,n)=>{var e=n(13),o=n(222);r.exports=function(r,t){return null!=r&&o(r,t,e)}},67523:(r,t,n)=>{var e=n(89465),o=n(47816),i=n(67206);r.exports=function(r,t){var n={};return t=i(t,3),o(r,(function(r,o,i){e(n,t(r,o,i),r)})),n}},39601:(r,t,n)=>{var e=n(40371),o=n(79152),i=n(15403),u=n(40327);r.exports=function(r){return i(r)?e(u(r)):o(r)}},76:(r,t,n)=>{"use strict";n.r(t),n.d(t,{BrowserRouter:()=>p,HashRouter:()=>v,Link:()=>O,MemoryRouter:()=>e.VA,NavLink:()=>m,Prompt:()=>e.NL,Redirect:()=>e.l_,Route:()=>e.AW,Router:()=>e.F0,StaticRouter:()=>e.gx,Switch:()=>e.rs,generatePath:()=>e.Gn,matchPath:()=>e.LX,useHistory:()=>e.k6,useLocation:()=>e.TH,useParams:()=>e.UO,useRouteMatch:()=>e.$B,withRouter:()=>e.EN});var e=n(15137);function o(r,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},o(r,t)}function i(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,o(r,t)}var u=n(93264),c=n.n(u),f=n(68389);function a(){return a=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},a.apply(this,arguments)}function l(r,t){if(null==r)return{};var n,e,o={},i=Object.keys(r);for(e=0;e<i.length;e++)n=i[e],t.indexOf(n)>=0||(o[n]=r[n]);return o}n(45697);var s=n(38776),p=function(r){function t(){for(var t,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(t=r.call.apply(r,[this].concat(e))||this).history=(0,f.lX)(t.props),t}return i(t,r),t.prototype.render=function(){return c().createElement(e.F0,{history:this.history,children:this.props.children})},t}(c().Component),v=function(r){function t(){for(var t,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(t=r.call.apply(r,[this].concat(e))||this).history=(0,f.q_)(t.props),t}return i(t,r),t.prototype.render=function(){return c().createElement(e.F0,{history:this.history,children:this.props.children})},t}(c().Component),y=function(r,t){return"function"==typeof r?r(t):r},h=function(r,t){return"string"==typeof r?(0,f.ob)(r,null,null,t):r},d=function(r){return r},b=c().forwardRef;void 0===b&&(b=d);var w=b((function(r,t){var n=r.innerRef,e=r.navigate,o=r.onClick,i=l(r,["innerRef","navigate","onClick"]),u=i.target,f=a({},i,{onClick:function(r){try{o&&o(r)}catch(t){throw r.preventDefault(),t}r.defaultPrevented||0!==r.button||u&&"_self"!==u||function(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}(r)||(r.preventDefault(),e())}});return f.ref=d!==b&&t||n,c().createElement("a",f)})),O=b((function(r,t){var n=r.component,o=void 0===n?w:n,i=r.replace,u=r.to,p=r.innerRef,v=l(r,["component","replace","to","innerRef"]);return c().createElement(e.s6.Consumer,null,(function(r){r||(0,s.Z)(!1);var n=r.history,e=h(y(u,r.location),r.location),l=e?n.createHref(e):"",w=a({},v,{href:l,navigate:function(){var t=y(u,r.location),e=(0,f.Ep)(r.location)===(0,f.Ep)(h(t));(i||e?n.replace:n.push)(t)}});return d!==b?w.ref=t||p:w.innerRef=p,c().createElement(o,w)}))})),g=function(r){return r},E=c().forwardRef;void 0===E&&(E=g);var m=E((function(r,t){var n=r["aria-current"],o=void 0===n?"page":n,i=r.activeClassName,u=void 0===i?"active":i,f=r.activeStyle,p=r.className,v=r.exact,d=r.isActive,b=r.location,w=r.sensitive,m=r.strict,j=r.style,x=r.to,R=r.innerRef,P=l(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c().createElement(e.s6.Consumer,null,(function(r){r||(0,s.Z)(!1);var n=b||r.location,i=h(y(x,n),n),l=i.pathname,N=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=N?(0,e.LX)(n.pathname,{path:N,exact:v,sensitive:w,strict:m}):null,k=!!(d?d(_,n):_),C="function"==typeof p?p(k):p,A="function"==typeof j?j(k):j;k&&(C=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.filter((function(r){return r})).join(" ")}(C,u),A=a({},A,f));var S=a({"aria-current":k&&o||null,className:C,style:A,to:i},P);return g!==E?S.ref=t||R:S.innerRef=R,c().createElement(O,S)}))}))},23828:(r,t,n)=>{"use strict";function e(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function o(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function i(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){e(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}function u(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}n.r(t),n.d(t,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>b,bindActionCreators:()=>h,combineReducers:()=>v,compose:()=>d,createStore:()=>s,legacy_createStore:()=>p});var c="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function l(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function s(r,t,n){var e;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(u(1));return n(s)(r,t)}if("function"!=typeof r)throw new Error(u(2));var o=r,i=t,f=[],p=f,v=!1;function y(){p===f&&(p=f.slice())}function h(){if(v)throw new Error(u(3));return i}function d(r){if("function"!=typeof r)throw new Error(u(4));if(v)throw new Error(u(5));var t=!0;return y(),p.push(r),function(){if(t){if(v)throw new Error(u(6));t=!1,y();var n=p.indexOf(r);p.splice(n,1),f=null}}}function b(r){if(!l(r))throw new Error(u(7));if(void 0===r.type)throw new Error(u(8));if(v)throw new Error(u(9));try{v=!0,i=o(i,r)}finally{v=!1}for(var t=f=p,n=0;n<t.length;n++)(0,t[n])();return r}function w(r){if("function"!=typeof r)throw new Error(u(10));o=r,b({type:a.REPLACE})}function O(){var r,t=d;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(u(11));function n(){r.next&&r.next(h())}return n(),{unsubscribe:t(n)}}})[c]=function(){return this},r}return b({type:a.INIT}),(e={dispatch:b,subscribe:d,getState:h,replaceReducer:w})[c]=O,e}var p=s;function v(r){for(var t=Object.keys(r),n={},e=0;e<t.length;e++){var o=t[e];"function"==typeof r[o]&&(n[o]=r[o])}var i,c=Object.keys(n);try{!function(r){Object.keys(r).forEach((function(t){var n=r[t];if(void 0===n(void 0,{type:a.INIT}))throw new Error(u(12));if(void 0===n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(n)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var e=!1,o={},f=0;f<c.length;f++){var a=c[f],l=n[a],s=r[a],p=l(s,t);if(void 0===p)throw t&&t.type,new Error(u(14));o[a]=p,e=e||p!==s}return(e=e||c.length!==Object.keys(r).length)?o:r}}function y(r,t){return function(){return t(r.apply(this,arguments))}}function h(r,t){if("function"==typeof r)return y(r,t);if("object"!=typeof r||null===r)throw new Error(u(16));var n={};for(var e in r){var o=r[e];"function"==typeof o&&(n[e]=y(o,t))}return n}function d(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function b(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(r){return function(){var n=r.apply(void 0,arguments),e=function(){throw new Error(u(15))},o={getState:n.getState,dispatch:function(){return e.apply(void 0,arguments)}},c=t.map((function(r){return r(o)}));return e=d.apply(void 0,c)(n.dispatch),i(i({},n),{},{dispatch:e})}}}}}]);
//# sourceMappingURL=../sourcemaps/974.d2a9a16e5512be9c2c7476802916905b.js.map
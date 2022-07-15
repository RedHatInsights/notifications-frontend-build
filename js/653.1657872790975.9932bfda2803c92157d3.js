/*! For license information please see 653.1657872790975.9932bfda2803c92157d3.js.LICENSE.txt */
(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[653,697],{40688:function(t,e){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.processManifest=e.injectScript=e.getAppsByRootLocation=e.getAppData=e.getApp=e.initializeApp=e.unmountAll=e.unmountAppsFromRoute=e.removeActiveApp=e.setActiveApp=e.initialize=e.setPendingInjection=e.getScalprum=e.GLOBAL_NAMESPACE=void 0,e.GLOBAL_NAMESPACE="__scalprum__",e.getScalprum=function(){return window[e.GLOBAL_NAMESPACE]};var i=function(t){var e={};return Object.values(t).forEach((function(t){var n=t.rootLocation,r=t.name;n&&e[n]?e[n].push(r):n&&(e[n]=[r])})),e};e.setPendingInjection=function(t,n){window[e.GLOBAL_NAMESPACE].pendingInjections[t]=n},e.initialize=function(t){var r=t.scalpLets,o=t.api;window[e.GLOBAL_NAMESPACE]=n({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},e.setActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!0},e.removeActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!1},e.unmountAppsFromRoute=function(t){var n;null===(n=window[e.GLOBAL_NAMESPACE].scalpletRoutes[t])||void 0===n||n.forEach((function(t){return window[e.GLOBAL_NAMESPACE].apps[t].unmount()}))},e.unmountAll=function(){Object.entries(window[e.GLOBAL_NAMESPACE].activeApps).filter((function(t){var n=t[0];t[1]&&window[e.GLOBAL_NAMESPACE].apps[n].unmount()}))},e.initializeApp=function(t){if(void 0===window[e.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[e.GLOBAL_NAMESPACE].apps[t.name]={mount:function(r){var o=n(n({},r),window[e.GLOBAL_NAMESPACE]);return e.setActiveApp(t.name),t.mount(o)},unmount:function(){e.removeActiveApp(t.name),t.unmount()},update:t.update,nodeId:t.id},window[e.GLOBAL_NAMESPACE].pendingInjections[t.name]()},e.getApp=function(t){return window[e.GLOBAL_NAMESPACE].apps[t]},e.getAppData=function(t){return window[e.GLOBAL_NAMESPACE].appsMetaData[t]},e.getAppsByRootLocation=function(t){return Object.keys(window[e.GLOBAL_NAMESPACE].appsMetaData).filter((function(n){return window[e.GLOBAL_NAMESPACE].appsMetaData[n].rootLocation===t})).map((function(t){return n(n({},window[e.GLOBAL_NAMESPACE].appsMetaData[t]),{name:t})}))},e.injectScript=function(t,n,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,a){(o=document.createElement("script")).src=n,o.id=t,r?o.onload=function(){i([name,o])}:e.setPendingInjection(t,(function(){return i([name,o])})),o.onerror=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];console.log(n),r?a([n,o]):e.setPendingInjection(t,(function(){return a([n,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},e.processManifest=function(t,n,i,a){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(t)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(t){var e=t[0];return!i||e===i})).flatMap(a||function(t){return t[1].entry||t}).map((function(t){return e.injectScript(n,t,!0)})))]}}))}))}},35092:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadComponent=void 0;var a=i(n(93264)),c=function(){return a.default.createElement("span",null,"Error while loading component!")};e.loadComponent=function(t,e,i){var a=this;return void 0===i&&(i=c),function(){return r(a,void 0,void 0,(function(){var r,a,c;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,n.I("default")];case 1:return o.sent(),[4,window[t].init(n.S.default)];case 2:return o.sent(),[4,window[t].get(e)];case 3:return a=o.sent(),r=a(),[3,5];case 4:return c=o.sent(),console.error(c),r={default:i},[3,5];case 5:return[2,r]}}))}))}}},45370:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.useScalprum=void 0;var a=n(93264),c=n(40688);i(n(115),e),i(n(49518),e),i(n(44368),e),e.useScalprum=function(t,e){var n=a.useState({initialized:!1,config:{},api:e}),o=n[0],i=n[1];return a.useEffect((function(){"object"==typeof t&&(c.initialize({scalpLets:t,api:e}),i((function(e){return r(r({},e),{initialized:!0,config:t})}))),"function"==typeof t&&Promise.resolve(t()).then((function(t){i((function(e){return r(r({},e),{initialized:!0,config:t})})),c.initialize({scalpLets:t,api:e})}))}),[t]),o}},44368:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),c=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&a(e,t,n);return c(e,t),e},s=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumComponent=void 0;var f=u(n(93264)),p=n(40688),d=l(n(18446)),y=n(35092),m=function(){return f.default.createElement("span",null,"Error while loading component!")},h=function(t){var e=t.fallback,n=void 0===e?"loading":e,r=t.appName,o=t.api,a=t.scope,c=t.module,u=t.ErrorComponent,l=t.processor,d=t.innerRef,m=s(t,["fallback","appName","api","scope","module","ErrorComponent","processor","innerRef"]),h=p.getAppData(r),v=h.scriptLocation,b=h.manifestLocation,_=f.useState(void 0),O=_[0],w=_[1],g=f.useState(),A=g[0],E=g[1];return f.useEffect((function(){var t=p.getApp(r);return t?(null==t||t.mount(o),w((function(){return f.default.lazy(y.loadComponent(a,c,u))}))):v?p.injectScript(r,v).then((function(t){var e=t[1],n=p.getApp(r);null==n||n.mount(o),w((function(){return f.default.lazy(y.loadComponent(a,c,u))})),E((function(){return e}))})).catch((function(){w((function(){return u}))})):b&&p.processManifest(b,r,a,l).then((function(t){E((function(){return t.map((function(t){return t[1]}))}));var e=p.getApp(r);null==e||e.mount(o),w((function(){return f.default.lazy(y.loadComponent(a,c,u))}))})).catch((function(){w((function(){return u}))})),function(){var t=p.getApp(r);null==t||t.unmount(),A&&(Array.isArray(A)?A.forEach((function(t){return document.body.removeChild(t)})):document.body.removeChild(A))}}),[]),f.default.createElement(f.Suspense,{fallback:n},O?f.default.createElement(O,i({ref:d},m)):n)},v=function(t){function e(e){var n=t.call(this,e)||this;return n.state={hasError:!1},n}return o(e,t),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.hasError!==e.hasError||!d.default(t,this.props)},e.prototype.render=function(){var t=this.props,e=t.ErrorComponent,n=void 0===e?f.default.createElement(m,null):e,r=s(t,["ErrorComponent"]);return this.state.hasError?n:f.default.createElement(h,i({},r,{ErrorComponent:function(){return f.default.createElement(f.Fragment,null,n)}}))},e.defaultProps={ErrorComponent:f.default.createElement(m,null)},e}(f.default.Component);e.ScalprumComponent=f.default.forwardRef((function(t,e){return f.default.createElement(v,i({},t,{innerRef:e}))}))},49518:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumLink=void 0;var a=i(n(93264)),c=(n(40688),n(31815));e.ScalprumLink=function(t){var e=t.to,n=t.onClick,i=t.shouldUnmount,u=(t.unmount,o(t,["to","onClick","shouldUnmount","unmount"])),s=c.useLocation().pathname;return a.default.createElement(c.Link,r({onClick:function(t){void 0===i?"string"==typeof e&&s!==e||"object"==typeof e&&e.pathname:"boolean"==typeof i||"function"==typeof i&&i(s,e),n&&n(t)},to:e},u))}},115:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},c=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumRoute=void 0;var u=n(40688),s=a(n(93264)),l=n(3644),f=n(31815);e.ScalprumRoute=function(t){var e,n=t.Placeholder,o=void 0===n?s.Fragment:n,i=t.elementId,a=t.appName,p=t.path,d=t.api,y=c(t,["Placeholder","elementId","appName","path","api"]),m=(null===(e=u.getAppsByRootLocation(p))||void 0===e?void 0:e[0]).scriptLocation;return s.useEffect((function(){var t=u.getApp(a),e=document.getElementById(i);if(t){var n=t.mount(d);l.render(n,e)}else u.injectScript(a,m).then((function(){var t=u.getApp(a).mount(d);l.render(t,e)}));return function(){u.getApp(a).unmount(),l.unmountComponentAtNode(e)}}),[p]),s.default.createElement(f.Route,r({},y,{path:p}),s.default.createElement("div",{id:i},s.default.createElement(o,null)))}},8679:(t,e,n)=>{"use strict";var r=n(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(y){var o=d(n);o&&o!==y&&t(e,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(e),m=u(n),h=0;h<a.length;++h){var v=a[h];if(!(i[v]||r&&r[v]||m&&m[v]||c&&c[v])){var b=p(n,v);try{s(e,v,b)}catch(t){}}}}return e}},18446:(t,e,n)=>{var r=n(90939);t.exports=function(t,e){return r(t,e)}},92703:(t,e,n)=>{"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:(t,e,n)=>{t.exports=n(92703)()},50414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},69921:(t,e)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case l:case f:case i:case c:case a:case d:return t;default:switch(t=t&&t.$$typeof){case s:case p:case h:case m:case u:return t;default:return e}}case o:return e}}}function g(t){return w(t)===f}e.AsyncMode=l,e.ConcurrentMode=f,e.ContextConsumer=s,e.ContextProvider=u,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isAsyncMode=function(t){return g(t)||w(t)===l},e.isConcurrentMode=g,e.isContextConsumer=function(t){return w(t)===s},e.isContextProvider=function(t){return w(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return w(t)===p},e.isFragment=function(t){return w(t)===i},e.isLazy=function(t){return w(t)===h},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===o},e.isProfiler=function(t){return w(t)===c},e.isStrictMode=function(t){return w(t)===a},e.isSuspense=function(t){return w(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===f||t===c||t===a||t===d||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===m||t.$$typeof===u||t.$$typeof===s||t.$$typeof===p||t.$$typeof===b||t.$$typeof===_||t.$$typeof===O||t.$$typeof===v)},e.typeOf=w},59864:(t,e,n)=>{"use strict";t.exports=n(69921)},31815:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BrowserRouter:()=>f,HashRouter:()=>p,Link:()=>b,MemoryRouter:()=>r.VA,NavLink:()=>w,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(38022);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var i=n(93264),a=n.n(i),c=n(68389);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n(45697);var l=n(2177),f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.lX)(e.props),e}return o(e,t),e.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},e}(a().Component),p=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.q_)(e.props),e}return o(e,t),e.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},e}(a().Component),d=function(t,e){return"function"==typeof t?t(e):t},y=function(t,e){return"string"==typeof t?(0,c.ob)(t,null,null,e):t},m=function(t){return t},h=a().forwardRef;void 0===h&&(h=m);var v=h((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,i=s(t,["innerRef","navigate","onClick"]),c=i.target,l=u({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=m!==h&&e||n,a().createElement("a",l)})),b=h((function(t,e){var n=t.component,o=void 0===n?v:n,i=t.replace,c=t.to,f=t.innerRef,p=s(t,["component","replace","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(t){t||(0,l.Z)(!1);var n=t.history,r=y(d(c,t.location),t.location),s=r?n.createHref(r):"",v=u({},p,{href:s,navigate:function(){var e=d(c,t.location);(i?n.replace:n.push)(e)}});return m!==h?v.ref=e||f:v.innerRef=f,a().createElement(o,v)}))})),_=function(t){return t},O=a().forwardRef;void 0===O&&(O=_);var w=O((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,f=t.activeStyle,p=t.className,m=t.exact,h=t.isActive,v=t.location,w=t.sensitive,g=t.strict,A=t.style,E=t.to,P=t.innerRef,S=s(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(t){t||(0,l.Z)(!1);var n=v||t.location,i=y(d(E,n),n),s=i.pathname,j=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=j?(0,r.LX)(n.pathname,{path:j,exact:m,sensitive:w,strict:g}):null,L=!!(h?h(C,n):C),M=L?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(p,c):p,R=L?u({},A,{},f):A,x=u({"aria-current":L&&o||null,className:M,style:R,to:i},S);return _!==O?x.ref=e||P:x.innerRef=P,a().createElement(b,x)}))}))}}]);
//# sourceMappingURL=../sourcemaps/653.c220996845bcb4f695e4c0c4b8568276.js.map
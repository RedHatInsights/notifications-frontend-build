/*! For license information please see 895.877510ef1c901ae3b318.js.LICENSE.txt */
(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[895],{68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var r="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(r,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(r,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(r,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=r(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:n({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},8679:(e,t,r)=>{"use strict";var n=r(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function i(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var a=f(r);p&&(a=a.concat(p(r)));for(var c=i(t),v=i(r),m=0;m<a.length;++m){var O=a[m];if(!(u[O]||n&&n[O]||v&&v[O]||c&&c[O])){var b=l(r,O);try{s(t,O,b)}catch(e){}}}}return t}},92703:(e,t,r)=>{"use strict";var n=r(50414);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},69921:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,O=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function N(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case p:case u:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case l:case m:case v:case i:return e;default:return t}}case o:return t}}}function C(e){return N(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=i,t.Element=n,t.ForwardRef=l,t.Fragment=u,t.Lazy=m,t.Memo=v,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||N(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return N(e)===s},t.isContextProvider=function(e){return N(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return N(e)===l},t.isFragment=function(e){return N(e)===u},t.isLazy=function(e){return N(e)===m},t.isMemo=function(e){return N(e)===v},t.isPortal=function(e){return N(e)===o},t.isProfiler=function(e){return N(e)===c},t.isStrictMode=function(e){return N(e)===a},t.isSuspense=function(e){return N(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===a||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===i||e.$$typeof===s||e.$$typeof===l||e.$$typeof===b||e.$$typeof===h||e.$$typeof===S||e.$$typeof===O)},t.typeOf=N},59864:(e,t,r)=>{"use strict";e.exports=r(69921)},28216:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Provider:()=>p,ReactReduxContext:()=>u,batch:()=>ee.unstable_batchedUpdates,connect:()=>U,connectAdvanced:()=>I,createDispatchHook:()=>K,createSelectorHook:()=>J,createStoreHook:()=>W,shallowEqual:()=>E,useDispatch:()=>G,useSelector:()=>X,useStore:()=>z});var n=r(10756),o=r.n(n),u=(r(45697),o().createContext(null)),a=function(e){e()},c=function(){return a},i={notify:function(){},get:function(){return[]}};function s(e,t){var r,n=i;function o(){a.onStateChange&&a.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=c(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var a={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=i)},getListeners:function(){return n}};return a}var f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;const p=function(e){var t=e.store,r=e.context,a=e.children,c=(0,n.useMemo)((function(){var e=s(t);return{store:t,subscription:e}}),[t]),i=(0,n.useMemo)((function(){return t.getState()}),[t]);f((function(){var e=c.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,i]);var p=r||u;return o().createElement(p.Provider,{value:c},a)};var l=r(87462),d=r(63366),y=r(8679),v=r.n(y),m=r(72973),O=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],b=["reactReduxForwardedRef"],h=[],S=[null,null];function N(e,t){var r=e[1];return[t.payload,r+1]}function C(e,t,r){f((function(){return e.apply(void 0,t)}),r)}function P(e,t,r,n,o,u,a){e.current=n,t.current=o,r.current=!1,u.current&&(u.current=null,a())}function g(e,t,r,n,o,u,a,c,i,s){if(e){var f=!1,p=null,l=function(){if(!f){var e,r,l=t.getState();try{e=n(l,o.current)}catch(e){r=e,p=e}r||(p=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:r}}))}};return r.onStateChange=l,r.trySubscribe(),l(),function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var T=function(){return[null,0]};function I(e,t){void 0===t&&(t={});var r=t,a=r.getDisplayName,c=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,i=r.methodName,f=void 0===i?"connectAdvanced":i,p=r.renderCountProp,y=void 0===p?void 0:p,I=r.shouldHandleStateChanges,w=void 0===I||I,E=r.storeKey,_=void 0===E?"store":E,R=(r.withRef,r.forwardRef),x=void 0!==R&&R,M=r.context,A=void 0===M?u:M,F=(0,d.Z)(r,O),$=A;return function(t){var r=t.displayName||t.name||"Component",u=c(r),a=(0,l.Z)({},F,{getDisplayName:c,methodName:f,renderCountProp:y,shouldHandleStateChanges:w,storeKey:_,displayName:u,wrappedComponentName:r,WrappedComponent:t}),i=F.pure,p=i?n.useMemo:function(e){return e()};function O(r){var u=(0,n.useMemo)((function(){var e=r.reactReduxForwardedRef,t=(0,d.Z)(r,b);return[r.context,e,t]}),[r]),c=u[0],i=u[1],f=u[2],y=(0,n.useMemo)((function(){return c&&c.Consumer&&(0,m.isContextConsumer)(o().createElement(c.Consumer,null))?c:$}),[c,$]),v=(0,n.useContext)(y),O=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(v)&&Boolean(v.store);var I=O?r.store:v.store,E=(0,n.useMemo)((function(){return function(t){return e(t.dispatch,a)}(I)}),[I]),_=(0,n.useMemo)((function(){if(!w)return S;var e=s(I,O?null:v.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[I,O,v]),R=_[0],x=_[1],M=(0,n.useMemo)((function(){return O?v:(0,l.Z)({},v,{subscription:R})}),[O,v,R]),A=(0,n.useReducer)(N,h,T),F=A[0][0],D=A[1];if(F&&F.error)throw F.error;var j=(0,n.useRef)(),k=(0,n.useRef)(f),q=(0,n.useRef)(),L=(0,n.useRef)(!1),Z=p((function(){return q.current&&f===k.current?q.current:E(I.getState(),f)}),[I,F,f]);C(P,[k,j,L,f,Z,q,x]),C(g,[w,I,R,E,k,j,L,q,x,D],[I,R,E]);var H=(0,n.useMemo)((function(){return o().createElement(t,(0,l.Z)({},Z,{ref:i}))}),[i,t,Z]);return(0,n.useMemo)((function(){return w?o().createElement(y.Provider,{value:M},H):H}),[y,H,M])}var I=i?o().memo(O):O;if(I.WrappedComponent=t,I.displayName=O.displayName=u,x){var E=o().forwardRef((function(e,t){return o().createElement(I,(0,l.Z)({},e,{reactReduxForwardedRef:t}))}));return E.displayName=u,E.WrappedComponent=t,v()(E,t)}return v()(I,t)}}function w(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function E(e,t){if(w(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!w(e[r[o]],t[r[o]]))return!1;return!0}function _(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function R(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function x(e,t){return function(t,r){r.displayName;var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=R(e);var o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=R(o),o=n(t,r)),o},n}}const M=[function(e){return"function"==typeof e?x(e):void 0},function(e){return e?void 0:_((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?_((function(t){return function(e,t){var r={},n=function(n){var o=e[n];"function"==typeof o&&(r[n]=function(){return t(o.apply(void 0,arguments))})};for(var o in e)n(o);return r}(e,t)})):void 0}],A=[function(e){return"function"==typeof e?x(e):void 0},function(e){return e?void 0:_((function(){return{}}))}];function F(e,t,r){return(0,l.Z)({},r,e,t)}const $=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,u=r.areMergedPropsEqual,a=!1;return function(t,r,c){var i=e(t,r,c);return a?o&&u(i,n)||(n=i):(a=!0,n=i),n}}}(e):void 0},function(e){return e?void 0:function(){return F}}];var D=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function j(e,t,r,n){return function(o,u){return r(e(o,u),t(n,u),u)}}function k(e,t,r,n,o){var u,a,c,i,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;return function(o,y){return d?function(o,d){var y,v,m=!p(d,a),O=!f(o,u,d,a);return u=o,a=d,m&&O?(c=e(u,a),t.dependsOnOwnProps&&(i=t(n,a)),s=r(c,i,a)):m?(e.dependsOnOwnProps&&(c=e(u,a)),t.dependsOnOwnProps&&(i=t(n,a)),s=r(c,i,a)):O?(y=e(u,a),v=!l(y,c),c=y,v&&(s=r(c,i,a)),s):s}(o,y):(c=e(u=o,a=y),i=t(n,a),s=r(c,i,a),d=!0,s)}}function q(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,u=(0,d.Z)(t,D),a=r(e,u),c=n(e,u),i=o(e,u);return(u.pure?k:j)(a,c,i,e,u)}var L=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Z(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function H(e,t){return e===t}function B(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?I:r,o=t.mapStateToPropsFactories,u=void 0===o?A:o,a=t.mapDispatchToPropsFactories,c=void 0===a?M:a,i=t.mergePropsFactories,s=void 0===i?$:i,f=t.selectorFactory,p=void 0===f?q:f;return function(e,t,r,o){void 0===o&&(o={});var a=o,i=a.pure,f=void 0===i||i,y=a.areStatesEqual,v=void 0===y?H:y,m=a.areOwnPropsEqual,O=void 0===m?E:m,b=a.areStatePropsEqual,h=void 0===b?E:b,S=a.areMergedPropsEqual,N=void 0===S?E:S,C=(0,d.Z)(a,L),P=Z(e,u,"mapStateToProps"),g=Z(t,c,"mapDispatchToProps"),T=Z(r,s,"mergeProps");return n(p,(0,l.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:P,initMapDispatchToProps:g,initMergeProps:T,pure:f,areStatesEqual:v,areOwnPropsEqual:O,areStatePropsEqual:h,areMergedPropsEqual:N},C))}}const U=B();function V(){return(0,n.useContext)(u)}function W(e){void 0===e&&(e=u);var t=e===u?V:function(){return(0,n.useContext)(e)};return function(){return t().store}}var z=W();function K(e){void 0===e&&(e=u);var t=e===u?z:W(e);return function(){return t().dispatch}}var G=K(),Y=function(e,t){return e===t};function J(e){void 0===e&&(e=u);var t=e===u?V:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=Y);var o=t(),u=function(e,t,r,o){var u,a=(0,n.useReducer)((function(e){return e+1}),0)[1],c=(0,n.useMemo)((function(){return s(r,o)}),[r,o]),i=(0,n.useRef)(),p=(0,n.useRef)(),l=(0,n.useRef)(),d=(0,n.useRef)(),y=r.getState();try{if(e!==p.current||y!==l.current||i.current){var v=e(y);u=void 0!==d.current&&t(v,d.current)?d.current:v}else u=d.current}catch(e){throw i.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+i.current.stack+"\n\n"),e}return f((function(){p.current=e,l.current=y,d.current=u,i.current=void 0})),f((function(){function e(){try{var e=r.getState();if(e===l.current)return;var n=p.current(e);if(t(n,d.current))return;d.current=n,l.current=e}catch(e){i.current=e}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[r,c]),u}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(u),u}}var Q,X=J(),ee=r(25131);Q=ee.unstable_batchedUpdates,a=Q},88359:(e,t)=>{"use strict";var r=60103,n=60106,o=60107,u=60108,a=60114,c=60109,i=60110,s=60112,f=60113,p=60120,l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;r=y("react.element"),n=y("react.portal"),o=y("react.fragment"),u=y("react.strict_mode"),a=y("react.profiler"),c=y("react.provider"),i=y("react.context"),s=y("react.forward_ref"),f=y("react.suspense"),p=y("react.suspense_list"),l=y("react.memo"),d=y("react.lazy"),y("react.block"),y("react.server.block"),y("react.fundamental"),y("react.debug_trace_mode"),y("react.legacy_hidden")}t.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case i:case s:case d:case l:case c:return e;default:return t}}case n:return t}}}(e)===i}},72973:(e,t,r)=>{"use strict";e.exports=r(88359)},87462:(e,t,r)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},63366:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=../sourcemaps/895.5ca382bf9900055e1c77bb273b09f10c.js.map
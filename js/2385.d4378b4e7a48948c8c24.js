/*! For license information please see 2385.d4378b4e7a48948c8c24.js.LICENSE.txt */
(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[2385,6864],{29932:e=>{e.exports=function(e,r){for(var n=-1,t=null==e?0:e.length,o=Array(t);++n<t;)o[n]=r(e[n],n,e);return o}},97786:(e,r,n)=>{var t=n(71811),o=n(40327);e.exports=function(e,r){for(var n=0,u=(r=t(r,e)).length;null!=e&&n<u;)e=e[o(r[n++])];return n&&n==u?e:void 0}},80531:(e,r,n)=>{var t=n(62705),o=n(29932),u=n(1469),a=n(33448),c=t?t.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(u(r))return o(r,e)+"";if(a(r))return i?i.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n}},71811:(e,r,n)=>{var t=n(1469),o=n(15403),u=n(55514),a=n(79833);e.exports=function(e,r){return t(e)?e:o(e,r)?[e]:u(a(e))}},222:(e,r,n)=>{var t=n(71811),o=n(35694),u=n(1469),a=n(65776),c=n(41780),i=n(40327);e.exports=function(e,r,n){for(var s=-1,f=(r=t(r,e)).length,p=!1;++s<f;){var l=i(r[s]);if(!(p=null!=e&&n(e,l)))break;e=e[l]}return p||++s!=f?p:!!(f=null==e?0:e.length)&&c(f)&&a(l,f)&&(u(e)||o(e))}},15403:(e,r,n)=>{var t=n(1469),o=n(33448),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,r){if(t(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||a.test(e)||!u.test(e)||null!=r&&e in Object(r)}},24523:(e,r,n)=>{var t=n(88306);e.exports=function(e){var r=t(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r}},55514:(e,r,n)=>{var t=n(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,a=t((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(o,(function(e,n,t,o){r.push(t?o.replace(u,"$1"):n||e)})),r}));e.exports=a},40327:(e,r,n)=>{var t=n(33448);e.exports=function(e){if("string"==typeof e||t(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},27361:(e,r,n)=>{var t=n(97786);e.exports=function(e,r,n){var o=null==e?void 0:t(e,r);return void 0===o?n:o}},33448:(e,r,n)=>{var t=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},88306:(e,r,n)=>{var t=n(83369);function o(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],u=n.cache;if(u.has(o))return u.get(o);var a=e.apply(this,t);return n.cache=u.set(o,a)||u,a};return n.cache=new(o.Cache||t),n}o.Cache=t,e.exports=o},79833:(e,r,n)=>{var t=n(80531);e.exports=function(e){return null==e?"":t(e)}},27418:e=>{"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var u,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in u=Object(arguments[i]))n.call(u,s)&&(c[s]=u[s]);if(r){a=r(u);for(var f=0;f<a.length;f++)t.call(u,a[f])&&(c[a[f]]=u[a[f]])}}return c}},28216:(e,r,n)=>{"use strict";n.r(r),n.d(r,{Provider:()=>p,ReactReduxContext:()=>u,batch:()=>ee.unstable_batchedUpdates,connect:()=>L,connectAdvanced:()=>E,createDispatchHook:()=>V,createSelectorHook:()=>J,createStoreHook:()=>K,shallowEqual:()=>j,useDispatch:()=>Y,useSelector:()=>X,useStore:()=>z});var t=n(93264),o=n.n(t),u=(n(45697),o().createContext(null)),a=function(e){e()},c=function(){return a},i={notify:function(){},get:function(){return[]}};function s(e,r){var n,t=i;function o(){a.onStateChange&&a.onStateChange()}function u(){n||(n=r?r.addNestedSub(o):e.subscribe(o),t=function(){var e=c(),r=null,n=null;return{clear:function(){r=null,n=null},notify:function(){e((function(){for(var e=r;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=r;n;)e.push(n),n=n.next;return e},subscribe:function(e){var t=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:r=o,function(){t&&null!==r&&(t=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:r=o.next)}}}}())}var a={addNestedSub:function(e){return u(),t.subscribe(e)},notifyNestedSubs:function(){t.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:u,tryUnsubscribe:function(){n&&(n(),n=void 0,t.clear(),t=i)},getListeners:function(){return t}};return a}var f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect;const p=function(e){var r=e.store,n=e.context,a=e.children,c=(0,t.useMemo)((function(){var e=s(r);return{store:r,subscription:e}}),[r]),i=(0,t.useMemo)((function(){return r.getState()}),[r]);f((function(){var e=c.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,i]);var p=n||u;return o().createElement(p.Provider,{value:c},a)};var l=n(87462),d=n(63366),v=n(8679),y=n.n(v),m=n(72973),h=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],b=["reactReduxForwardedRef"],g=[],w=[null,null];function S(e,r){var n=e[1];return[r.payload,n+1]}function P(e,r,n){f((function(){return e.apply(void 0,r)}),n)}function O(e,r,n,t,o,u,a){e.current=t,r.current=o,n.current=!1,u.current&&(u.current=null,a())}function x(e,r,n,t,o,u,a,c,i,s){if(e){var f=!1,p=null,l=function(){if(!f){var e,n,l=r.getState();try{e=t(l,o.current)}catch(e){n=e,p=e}n||(p=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:n}}))}};return n.onStateChange=l,n.trySubscribe(),l(),function(){if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}}var C=function(){return[null,0]};function E(e,r){void 0===r&&(r={});var n=r,a=n.getDisplayName,c=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,i=n.methodName,f=void 0===i?"connectAdvanced":i,p=n.renderCountProp,v=void 0===p?void 0:p,E=n.shouldHandleStateChanges,R=void 0===E||E,j=n.storeKey,N=void 0===j?"store":j,_=(n.withRef,n.forwardRef),M=void 0!==_&&_,T=n.context,k=void 0===T?u:T,q=(0,d.Z)(n,h),D=k;return function(r){var n=r.displayName||r.name||"Component",u=c(n),a=(0,l.Z)({},q,{getDisplayName:c,methodName:f,renderCountProp:v,shouldHandleStateChanges:R,storeKey:N,displayName:u,wrappedComponentName:n,WrappedComponent:r}),i=q.pure,p=i?t.useMemo:function(e){return e()};function h(n){var u=(0,t.useMemo)((function(){var e=n.reactReduxForwardedRef,r=(0,d.Z)(n,b);return[n.context,e,r]}),[n]),c=u[0],i=u[1],f=u[2],v=(0,t.useMemo)((function(){return c&&c.Consumer&&(0,m.isContextConsumer)(o().createElement(c.Consumer,null))?c:D}),[c,D]),y=(0,t.useContext)(v),h=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(y)&&Boolean(y.store);var E=h?n.store:y.store,j=(0,t.useMemo)((function(){return function(r){return e(r.dispatch,a)}(E)}),[E]),N=(0,t.useMemo)((function(){if(!R)return w;var e=s(E,h?null:y.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[E,h,y]),_=N[0],M=N[1],T=(0,t.useMemo)((function(){return h?y:(0,l.Z)({},y,{subscription:_})}),[h,y,_]),k=(0,t.useReducer)(S,g,C),q=k[0][0],F=k[1];if(q&&q.error)throw q.error;var Z=(0,t.useRef)(),B=(0,t.useRef)(f),U=(0,t.useRef)(),$=(0,t.useRef)(!1),H=p((function(){return U.current&&f===B.current?U.current:j(E.getState(),f)}),[E,q,f]);P(O,[B,Z,$,f,H,U,M]),P(x,[R,E,_,j,B,Z,$,U,M,F],[E,_,j]);var A=(0,t.useMemo)((function(){return o().createElement(r,(0,l.Z)({},H,{ref:i}))}),[i,r,H]);return(0,t.useMemo)((function(){return R?o().createElement(v.Provider,{value:T},A):A}),[v,A,T])}var E=i?o().memo(h):h;if(E.WrappedComponent=r,E.displayName=h.displayName=u,M){var j=o().forwardRef((function(e,r){return o().createElement(E,(0,l.Z)({},e,{reactReduxForwardedRef:r}))}));return j.displayName=u,j.WrappedComponent=r,y()(j,r)}return y()(E,r)}}function R(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function j(e,r){if(R(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(r,n[o])||!R(e[n[o]],r[n[o]]))return!1;return!0}function N(e){return function(r,n){var t=e(r,n);function o(){return t}return o.dependsOnOwnProps=!1,o}}function _(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function M(e,r){return function(r,n){n.displayName;var t=function(e,r){return t.dependsOnOwnProps?t.mapToProps(e,r):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(r,n){t.mapToProps=e,t.dependsOnOwnProps=_(e);var o=t(r,n);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=_(o),o=t(r,n)),o},t}}const T=[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:N((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?N((function(r){return function(e,r){var n={},t=function(t){var o=e[t];"function"==typeof o&&(n[t]=function(){return r(o.apply(void 0,arguments))})};for(var o in e)t(o);return n}(e,r)})):void 0}],k=[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:N((function(){return{}}))}];function q(e,r,n){return(0,l.Z)({},n,e,r)}const D=[function(e){return"function"==typeof e?function(e){return function(r,n){n.displayName;var t,o=n.pure,u=n.areMergedPropsEqual,a=!1;return function(r,n,c){var i=e(r,n,c);return a?o&&u(i,t)||(t=i):(a=!0,t=i),t}}}(e):void 0},function(e){return e?void 0:function(){return q}}];var F=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Z(e,r,n,t){return function(o,u){return n(e(o,u),r(t,u),u)}}function B(e,r,n,t,o){var u,a,c,i,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;return function(o,v){return d?function(o,d){var v,y,m=!p(d,a),h=!f(o,u,d,a);return u=o,a=d,m&&h?(c=e(u,a),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):m?(e.dependsOnOwnProps&&(c=e(u,a)),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):h?(v=e(u,a),y=!l(v,c),c=v,y&&(s=n(c,i,a)),s):s}(o,v):(c=e(u=o,a=v),i=r(t,a),s=n(c,i,a),d=!0,s)}}function U(e,r){var n=r.initMapStateToProps,t=r.initMapDispatchToProps,o=r.initMergeProps,u=(0,d.Z)(r,F),a=n(e,u),c=t(e,u),i=o(e,u);return(u.pure?B:Z)(a,c,i,e,u)}var $=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function H(e,r,n){for(var t=r.length-1;t>=0;t--){var o=r[t](e);if(o)return o}return function(r,t){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+t.wrappedComponentName+".")}}function A(e,r){return e===r}function I(e){var r=void 0===e?{}:e,n=r.connectHOC,t=void 0===n?E:n,o=r.mapStateToPropsFactories,u=void 0===o?k:o,a=r.mapDispatchToPropsFactories,c=void 0===a?T:a,i=r.mergePropsFactories,s=void 0===i?D:i,f=r.selectorFactory,p=void 0===f?U:f;return function(e,r,n,o){void 0===o&&(o={});var a=o,i=a.pure,f=void 0===i||i,v=a.areStatesEqual,y=void 0===v?A:v,m=a.areOwnPropsEqual,h=void 0===m?j:m,b=a.areStatePropsEqual,g=void 0===b?j:b,w=a.areMergedPropsEqual,S=void 0===w?j:w,P=(0,d.Z)(a,$),O=H(e,u,"mapStateToProps"),x=H(r,c,"mapDispatchToProps"),C=H(n,s,"mergeProps");return t(p,(0,l.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:O,initMapDispatchToProps:x,initMergeProps:C,pure:f,areStatesEqual:y,areOwnPropsEqual:h,areStatePropsEqual:g,areMergedPropsEqual:S},P))}}const L=I();function W(){return(0,t.useContext)(u)}function K(e){void 0===e&&(e=u);var r=e===u?W:function(){return(0,t.useContext)(e)};return function(){return r().store}}var z=K();function V(e){void 0===e&&(e=u);var r=e===u?z:K(e);return function(){return r().dispatch}}var Y=V(),G=function(e,r){return e===r};function J(e){void 0===e&&(e=u);var r=e===u?W:function(){return(0,t.useContext)(e)};return function(e,n){void 0===n&&(n=G);var o=r(),u=function(e,r,n,o){var u,a=(0,t.useReducer)((function(e){return e+1}),0)[1],c=(0,t.useMemo)((function(){return s(n,o)}),[n,o]),i=(0,t.useRef)(),p=(0,t.useRef)(),l=(0,t.useRef)(),d=(0,t.useRef)(),v=n.getState();try{if(e!==p.current||v!==l.current||i.current){var y=e(v);u=void 0!==d.current&&r(y,d.current)?d.current:y}else u=d.current}catch(e){throw i.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+i.current.stack+"\n\n"),e}return f((function(){p.current=e,l.current=v,d.current=u,i.current=void 0})),f((function(){function e(){try{var e=n.getState();if(e===l.current)return;var t=p.current(e);if(r(t,d.current))return;d.current=t,l.current=e}catch(e){i.current=e}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),u}(e,n,o.store,o.subscription);return(0,t.useDebugValue)(u),u}}var Q,X=J(),ee=n(3644);Q=ee.unstable_batchedUpdates,a=Q},88359:(e,r)=>{"use strict";var n=60103,t=60106,o=60107,u=60108,a=60114,c=60109,i=60110,s=60112,f=60113,p=60120,l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;n=v("react.element"),t=v("react.portal"),o=v("react.fragment"),u=v("react.strict_mode"),a=v("react.profiler"),c=v("react.provider"),i=v("react.context"),s=v("react.forward_ref"),f=v("react.suspense"),p=v("react.suspense_list"),l=v("react.memo"),d=v("react.lazy"),v("react.block"),v("react.server.block"),v("react.fundamental"),v("react.debug_trace_mode"),v("react.legacy_hidden")}r.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case i:case s:case d:case l:case c:return e;default:return r}}case t:return r}}}(e)===i}},72973:(e,r,n)=>{"use strict";e.exports=n(88359)},75251:(e,r,n)=>{"use strict";n(27418);var t=n(93264),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,u={},s=null,f=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(u[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===u[t]&&(u[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:a.current}}r.jsx=s,r.jsxs=s},85893:(e,r,n)=>{"use strict";e.exports=n(75251)}}]);
//# sourceMappingURL=../sourcemaps/2385.9791f732bc8031b2cf81bdd85b54adff.js.map
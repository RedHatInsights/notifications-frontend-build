(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[276],{276:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Provider:()=>f,ReactReduxContext:()=>u,batch:()=>Y.unstable_batchedUpdates,connect:()=>_,connectAdvanced:()=>O,createDispatchHook:()=>V,createSelectorHook:()=>J,createStoreHook:()=>I,shallowEqual:()=>x,useDispatch:()=>z,useSelector:()=>X,useStore:()=>L});var r=t(93264),o=t.n(r),u=(t(45697),o().createContext(null)),i=function(e){e()},a=function(){return i},s={notify:function(){}},c=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=a(),n=null,t=null;return{clear:function(){n=null,t=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],t=n;t;)e.push(t),t=t.next;return e},subscribe:function(e){var r=!0,o=t={callback:e,next:null,prev:t};return o.prev?o.prev.next=o:n=o,function(){r&&null!==n&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}();const f=function(e){var n=e.store,t=e.context,i=e.children,a=(0,r.useMemo)((function(){var e=new c(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),s=(0,r.useMemo)((function(){return n.getState()}),[n]);(0,r.useEffect)((function(){var e=a.subscription;return e.trySubscribe(),s!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,s]);var f=t||u;return o().createElement(f.Provider,{value:a},i)};function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var l=t(8679),v=t.n(l),h=t(59864),b="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,m=[],y=[null,null];function P(e,n){var t=e[1];return[n.payload,t+1]}function S(e,n,t){b((function(){return e.apply(void 0,n)}),t)}function g(e,n,t,r,o,u,i){e.current=r,n.current=o,t.current=!1,u.current&&(u.current=null,i())}function w(e,n,t,r,o,u,i,a,s,c){if(e){var f=!1,p=null,d=function(){if(!f){var e,t,d=n.getState();try{e=r(d,o.current)}catch(e){t=e,p=e}t||(p=null),e===u.current?i.current||s():(u.current=e,a.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:t}}))}};return t.onStateChange=d,t.trySubscribe(),d(),function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,p)throw p}}}var C=function(){return[null,0]};function O(e,n){void 0===n&&(n={});var t=n,i=t.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=t.methodName,f=void 0===s?"connectAdvanced":s,l=t.renderCountProp,b=void 0===l?void 0:l,O=t.shouldHandleStateChanges,E=void 0===O||O,x=t.storeKey,M=void 0===x?"store":x,R=(t.withRef,t.forwardRef),N=void 0!==R&&R,T=t.context,q=void 0===T?u:T,D=d(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),k=q;return function(n){var t=n.displayName||n.name||"Component",u=a(t),i=p({},D,{getDisplayName:a,methodName:f,renderCountProp:b,shouldHandleStateChanges:E,storeKey:M,displayName:u,wrappedComponentName:t,WrappedComponent:n}),s=D.pure,l=s?r.useMemo:function(e){return e()};function O(t){var u=(0,r.useMemo)((function(){var e=t.reactReduxForwardedRef,n=d(t,["reactReduxForwardedRef"]);return[t.context,e,n]}),[t]),a=u[0],s=u[1],f=u[2],v=(0,r.useMemo)((function(){return a&&a.Consumer&&(0,h.isContextConsumer)(o().createElement(a.Consumer,null))?a:k}),[a,k]),b=(0,r.useContext)(v),O=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch);Boolean(b)&&Boolean(b.store);var x=O?t.store:b.store,M=(0,r.useMemo)((function(){return function(n){return e(n.dispatch,i)}(x)}),[x]),R=(0,r.useMemo)((function(){if(!E)return y;var e=new c(x,O?null:b.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[x,O,b]),N=R[0],T=R[1],q=(0,r.useMemo)((function(){return O?b:p({},b,{subscription:N})}),[O,b,N]),D=(0,r.useReducer)(P,m,C),j=D[0][0],B=D[1];if(j&&j.error)throw j.error;var H=(0,r.useRef)(),W=(0,r.useRef)(f),F=(0,r.useRef)(),U=(0,r.useRef)(!1),A=l((function(){return F.current&&f===W.current?F.current:M(x.getState(),f)}),[x,j,f]);S(g,[W,H,U,f,A,F,T]),S(w,[E,x,N,M,W,H,U,F,T,B],[x,N,M]);var _=(0,r.useMemo)((function(){return o().createElement(n,p({},A,{ref:s}))}),[s,n,A]);return(0,r.useMemo)((function(){return E?o().createElement(v.Provider,{value:q},_):_}),[v,_,q])}var x=s?o().memo(O):O;if(x.WrappedComponent=n,x.displayName=u,N){var R=o().forwardRef((function(e,n){return o().createElement(x,p({},e,{reactReduxForwardedRef:n}))}));return R.displayName=u,R.WrappedComponent=n,v()(R,n)}return v()(x,n)}}function E(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function x(e,n){if(E(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var o=0;o<t.length;o++)if(!Object.prototype.hasOwnProperty.call(n,t[o])||!E(e[t[o]],n[t[o]]))return!1;return!0}var M=t(97625);function R(e){return function(n,t){var r=e(n,t);function o(){return r}return o.dependsOnOwnProps=!1,o}}function N(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function T(e,n){return function(n,t){t.displayName;var r=function(e,n){return r.dependsOnOwnProps?r.mapToProps(e,n):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,t){r.mapToProps=e,r.dependsOnOwnProps=N(e);var o=r(n,t);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=N(o),o=r(n,t)),o},r}}const q=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:R((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?R((function(n){return(0,M.bindActionCreators)(e,n)})):void 0}],D=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:R((function(){return{}}))}];function k(e,n,t){return p({},t,e,n)}const j=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var r,o=t.pure,u=t.areMergedPropsEqual,i=!1;return function(n,t,a){var s=e(n,t,a);return i?o&&u(s,r)||(r=s):(i=!0,r=s),r}}}(e):void 0},function(e){return e?void 0:function(){return k}}];function B(e,n,t,r){return function(o,u){return t(e(o,u),n(r,u),u)}}function H(e,n,t,r,o){var u,i,a,s,c,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,h,b=!p(l,i),m=!f(o,u);return u=o,i=l,b&&m?(a=e(u,i),n.dependsOnOwnProps&&(s=n(r,i)),c=t(a,s,i)):b?(e.dependsOnOwnProps&&(a=e(u,i)),n.dependsOnOwnProps&&(s=n(r,i)),c=t(a,s,i)):m?(v=e(u,i),h=!d(v,a),a=v,h&&(c=t(a,s,i)),c):c}(o,v):(a=e(u=o,i=v),s=n(r,i),c=t(a,s,i),l=!0,c)}}function W(e,n){var t=n.initMapStateToProps,r=n.initMapDispatchToProps,o=n.initMergeProps,u=d(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=t(e,u),a=r(e,u),s=o(e,u);return(u.pure?H:B)(i,a,s,e,u)}function F(e,n,t){for(var r=n.length-1;r>=0;r--){var o=n[r](e);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+r.wrappedComponentName+".")}}function U(e,n){return e===n}function A(e){var n=void 0===e?{}:e,t=n.connectHOC,r=void 0===t?O:t,o=n.mapStateToPropsFactories,u=void 0===o?D:o,i=n.mapDispatchToPropsFactories,a=void 0===i?q:i,s=n.mergePropsFactories,c=void 0===s?j:s,f=n.selectorFactory,l=void 0===f?W:f;return function(e,n,t,o){void 0===o&&(o={});var i=o,s=i.pure,f=void 0===s||s,v=i.areStatesEqual,h=void 0===v?U:v,b=i.areOwnPropsEqual,m=void 0===b?x:b,y=i.areStatePropsEqual,P=void 0===y?x:y,S=i.areMergedPropsEqual,g=void 0===S?x:S,w=d(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=F(e,u,"mapStateToProps"),O=F(n,a,"mapDispatchToProps"),E=F(t,c,"mergeProps");return r(l,p({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:O,initMergeProps:E,pure:f,areStatesEqual:h,areOwnPropsEqual:m,areStatePropsEqual:P,areMergedPropsEqual:g},w))}}const _=A();function K(){return(0,r.useContext)(u)}function I(e){void 0===e&&(e=u);var n=e===u?K:function(){return(0,r.useContext)(e)};return function(){return n().store}}var L=I();function V(e){void 0===e&&(e=u);var n=e===u?L:I(e);return function(){return n().dispatch}}var z=V(),G=function(e,n){return e===n};function J(e){void 0===e&&(e=u);var n=e===u?K:function(){return(0,r.useContext)(e)};return function(e,t){void 0===t&&(t=G);var o=n(),u=function(e,n,t,o){var u,i=(0,r.useReducer)((function(e){return e+1}),0)[1],a=(0,r.useMemo)((function(){return new c(t,o)}),[t,o]),s=(0,r.useRef)(),f=(0,r.useRef)(),p=(0,r.useRef)(),d=(0,r.useRef)(),l=t.getState();try{u=e!==f.current||l!==p.current||s.current?e(l):d.current}catch(e){throw s.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),e}return b((function(){f.current=e,p.current=l,d.current=u,s.current=void 0})),b((function(){function e(){try{var e=f.current(t.getState());if(n(e,d.current))return;d.current=e}catch(e){s.current=e}i()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[t,a]),u}(e,t,o.store,o.subscription);return(0,r.useDebugValue)(u),u}}var Q,X=J(),Y=t(3644);Q=Y.unstable_batchedUpdates,i=Q}}]);
//# sourceMappingURL=../sourcemaps/276.73f89c88595f1e1eb263.js.map
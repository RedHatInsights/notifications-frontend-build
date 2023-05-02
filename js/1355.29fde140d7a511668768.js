"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[1355],{60817:function(t,e,n){var i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},r=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Portal=e.NotificationPortal=e.NotificationPortalBase=void 0;var a=n(85893),c=n(28216),s=o(n(72837)),l=n(53446),u=n(79206);e.NotificationPortalBase=function(t){var e=t.clearNotifications,n=r(t,["clearNotifications"]),o=(0,c.useSelector)((function(t){return t.notifications})),u=(0,c.useDispatch)();return(0,a.jsx)(s.default,i({notifications:o,removeNotification:function(t){return u((0,l.removeNotification)(t))},onClearAll:e||function(){return u((0,l.clearNotifications)())}},n))},e.NotificationPortal=function(t){var n=t.silent,o=void 0===n||n,c=r(t,["silent"]);return(0,a.jsx)(u.ErrorBoundary,i({headerTitle:"Notifications portal",silent:o},{children:(0,a.jsx)(e.NotificationPortalBase,i({},c))}))};var f=n(72837);Object.defineProperty(e,"Portal",{enumerable:!0,get:function(){return o(f).default}}),e.default=e.NotificationPortal},72871:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,r)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(60817);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(a).default}}),r(n(60817),e)},72837:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var i=n(85893),r=n(93264),o=n(3644),a=n(21242),c=n(43551),s=function(){return s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)};const l=function(t){var e=t.description,n=t.dismissable,o=void 0===n||n,l=t.onDismiss,u=t.dismissDelay,f=void 0===u?8e3:u,d=t.title,p=t.sentryId,O=t.requestId,I=t.autoDismiss,y=void 0===I||I,N=t.id,v=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}(t,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),T=(0,r.useRef)(),m=function(){l(N)},h=function(){y&&(T.current=setTimeout((function(){return m()}),f))},g=function(){T.current&&clearTimeout(T.current)};return(0,r.useEffect)((function(){return h(),function(){g()}}),[]),(0,i.jsxs)(a.Alert,s({className:"notification-item",id:"".concat(N),title:"string"==typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d},v,{actionClose:o?(0,i.jsx)(a.AlertActionCloseButton,s({"aria-label":"close-notification",variant:"plain",onClick:m},{children:(0,i.jsx)(c.CloseIcon,{})})):null,onMouseEnter:g,onMouseLeave:h},{children:[(0,i.jsx)(a.TextContent,{children:(0,i.jsx)(a.Text,s({className:"sentry-mask data-hj-suppress",component:a.TextVariants.small},{children:"string"==typeof e?e.replace(/<\/?[^>]+(>|$)/g,""):e}))}),p&&(0,i.jsx)(a.TextContent,{children:(0,i.jsxs)(a.Text,s({component:a.TextVariants.small},{children:["Tracking Id: ",p]}))}),O&&(0,i.jsx)(a.TextContent,{children:(0,i.jsxs)(a.Text,s({component:a.TextVariants.small},{children:["Request Id: ",O]}))})]}))};var u=function(){return u=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},u.apply(this,arguments)};const f=function(t){var e=t.page,n=void 0===e?1:e,r=t.onSetPage,o=t.onClearAll,c=t.count,s=void 0===c?0:c;return(0,i.jsx)(a.Card,u({className:"notification-item"},{children:(0,i.jsx)(a.CardBody,{children:(0,i.jsxs)(a.Level,{children:[(0,i.jsx)(a.LevelItem,{children:(0,i.jsx)(a.Button,u({variant:a.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:o},{children:"Clear all"}))}),(0,i.jsx)(a.LevelItem,{children:(0,i.jsx)(a.Pagination,{itemCount:s,variant:a.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:n,onSetPage:r})})]})})}))};var d=function(){return d=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},d.apply(this,arguments)};const p=function(t){var e=t.notifications,n=void 0===e?[]:e,a=t.removeNotification,c=void 0===a?function(){}:a,s=t.rootId,u=t.onClearAll,p=(0,r.useState)({page:1}),O=p[0],I=p[1],y=O.page,N=n&&n.length<=5?n:n&&n.slice(5*(y-1),5*y);return 0===n.length?null:(0,o.createPortal)((0,i.jsxs)("div",d({className:"notifications-portal"},{children:[n.length>5&&(0,i.jsx)(f,{onSetPage:function(t,e){I((function(t){return d(d({},t),{page:e})}))},count:n.length,page:y,onClearAll:u}),N.map((function(t){return(0,i.jsx)(l,d({onDismiss:c},t),"".concat(t.id))}))]})),s&&document.getElementById(s)||document.body)}},51712:(t,e,n)=>{n.r(e),n.d(e,{createNotificationsMiddleware:()=>O,default:()=>I,notificationsMiddleware:()=>I});var i=n(27361),r=n.n(i),o=n(18721),a=n.n(o),c="@@INSIGHTS-CORE/NOTIFICATIONS/",s="".concat(c,"ADD_NOTIFICATION");"".concat(c,"REMOVE_NOTIFICATION"),"".concat(c,"CLEAR_NOTIFICATIONS");var l=function(){return l=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},l.apply(this,arguments)},u=function(t){return{type:s,payload:l({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},t)}},f=n(21242),d=function(){return d=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},d.apply(this,arguments)},p=function(t,e,n){if("string"==typeof t)return{title:"Error",description:t};var i=e;Array.isArray(e)&&(i=e.find((function(e){return a()(t,e)})));var o=n;return Array.isArray(n)&&(o=n.find((function(e){return a()(t,e)}))),{title:r()(t,i)||"Error",description:r()(t,o),sentryId:null==t?void 0:t.sentryId,requestId:null==t?void 0:t.requestId}},O=function(t){var e=d(d({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),t),n=function(t){return Boolean(t.match(new RegExp("^.*".concat(e.rejectedSuffix,"$"))))},i={dismissable:!e.autoDismiss,dismissDelay:e.dismissDelay};return function(t){var o=t.dispatch;return function(t){return function(c){var s=c.meta,l=c.type;if(s&&s.notifications){var O=s.notifications;(function(t){return Boolean(t.match(new RegExp("^.*".concat(e.pendingSuffix,"$"))))})(l)&&O.pending?("function"==typeof O.pending&&(O.pending=O.pending(c.payload)),o(u(d(d({},i),O.pending)))):function(t){return Boolean(t.match(new RegExp("^.*".concat(e.fulfilledSuffix,"$"))))}(l)&&O.fulfilled?("function"==typeof O.fulfilled&&(O.fulfilled=O.fulfilled(c.payload)),o(u(d(d({},i),O.fulfilled)))):n(l)&&O.rejected&&("function"==typeof O.rejected&&(O.rejected=O.rejected(c.payload)),o(u(d(d(d({},i),O.rejected),{sentryId:c.payload&&c.payload.sentryId,requestId:c.payload&&c.payload.requestId}))))}if(function(t){return t.isRejected&&!t.hasCustomNotification&&!t.noErrorOverride&&t.dispatchDefaultFailure}({isRejected:n(l),hasCustomNotification:s&&s.notifications&&s.notifications.rejected,noErrorOverride:s&&s.noError,dispatchDefaultFailure:e.dispatchDefaultFailure}))if(e.useStatusText)o(u(d({variant:f.AlertVariant.danger,dismissable:!0},p(c.payload,e.errorTitleKey,"statusText"))));else{var I=Array.isArray(e.errorNamespaceKey)&&e.errorNamespaceKey.find((function(t){return a()(c.payload,t)}));I?r()(c.payload,I).map((function(t){o(u(d({variant:f.AlertVariant.danger,dismissable:!0},p(t,e.errorTitleKey,e.errorDescriptionKey))))})):Array.isArray(c.payload)?c.payload.map((function(t){o(u(d({variant:f.AlertVariant.danger,dismissable:!0},p(t,e.errorTitleKey,e.errorDescriptionKey))))})):o(u(d({variant:f.AlertVariant.danger,dismissable:!0},p(c.payload,e.errorTitleKey,e.errorDescriptionKey))))}t(c)}}}};const I=O},71355:function(t,e,n){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.notificationsMiddleware=e.clearNotifications=e.removeNotification=e.addNotification=e.CLEAR_NOTIFICATIONS=e.REMOVE_NOTIFICATION=e.ADD_NOTIFICATION=e.notificationsReducers=e.notifications=e.NotificationsPortal=void 0;var r=n(72871);Object.defineProperty(e,"NotificationsPortal",{enumerable:!0,get:function(){return i(r).default}});var o=n(24778);Object.defineProperty(e,"notifications",{enumerable:!0,get:function(){return i(o).default}}),Object.defineProperty(e,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var a=n(68129);Object.defineProperty(e,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return a.ADD_NOTIFICATION}}),Object.defineProperty(e,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return a.REMOVE_NOTIFICATION}}),Object.defineProperty(e,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return a.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(e,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(e,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(e,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var s=n(51712);Object.defineProperty(e,"notificationsMiddleware",{enumerable:!0,get:function(){return i(s).default}})},68129:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CLEAR_NOTIFICATIONS=e.REMOVE_NOTIFICATION=e.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";e.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),e.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),e.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),e.default={ADD_NOTIFICATION:e.ADD_NOTIFICATION,REMOVE_NOTIFICATION:e.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:e.CLEAR_NOTIFICATIONS}},53446:function(t,e,n){var i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.clearNotifications=e.removeNotification=e.addNotification=void 0;var r=n(68129);e.addNotification=function(t){return{type:r.ADD_NOTIFICATION,payload:i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},t)}},e.removeNotification=function(t){return{type:r.REMOVE_NOTIFICATION,payload:t}},e.clearNotifications=function(){return{type:r.CLEAR_NOTIFICATIONS}},e.default={addNotification:e.addNotification,removeNotification:e.removeNotification,clearNotifications:e.clearNotifications}},24778:function(t,e,n){var i=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.notifications=e.notificationsReducers=e.defaultState=void 0;var r=n(68129);e.defaultState=[],e.notificationsReducers=function(t,n){switch(void 0===t&&(t=e.defaultState),n.type){case r.ADD_NOTIFICATION:return o=t,a=n.payload,i(i([],o,!0),[a],!1);case r.REMOVE_NOTIFICATION:return function(t,e){var n=e.payload,r=t.findIndex((function(t){return t.id===n}));return i(i([],t.slice(0,r),!0),t.slice(r+1),!0)}(t,n);case r.CLEAR_NOTIFICATIONS:return[];default:return t}var o,a},e.notifications=e.notificationsReducers,e.default=e.notifications},79206:(t,e,n)=>{n.r(e),n.d(e,{ErrorBoundary:()=>i.Z,default:()=>i.Z});var i=n(11047)}}]);
//# sourceMappingURL=../sourcemaps/1355.25b41544eefd0e9bc5957c0312bb126f.js.map
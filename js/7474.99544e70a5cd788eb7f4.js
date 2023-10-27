"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[7474],{18126:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(78655),i=t(55128),l=t(18172),s=t(52890),o=t(93264),a=t.n(o),u=t(94782),c=t(28216),d=t(83130),p=t(21242),v=t(42150),E=t(98673),_=t(84456),m=t(56335),f=t(3121);const b=()=>{const{rbac:e,server:n,isOrgAdmin:t}=(0,f.q)();return e&&n?o.createElement(_.I.Provider,{value:{rbac:e,server:n,isOrgAdmin:!!t}},o.createElement(m.d,null,o.createElement(v.q,null),o.createElement(E.Z,null))):o.createElement(p.Bullseye,null,o.createElement(p.Spinner,{size:"xl"}))};var g=t(9241);(0,l.MD)();const y=e=>{const n=a().useMemo((()=>(0,i.createFetchingClient)(i.getInsights,{responseInterceptors:[s.validateSchemaResponseInterceptor]})),[]),t=a().useMemo((()=>(e.logger?(0,g.b)(e.logger):(0,g.b)()).getStore()),[e.logger]);return a().createElement(r.Pj,{locale:navigator.language.slice(0,2),messages:d,onError:console.log},a().createElement(c.Provider,{store:t},a().createElement(u.ClientContextProvider,{client:n},a().createElement(b,null))))}},56437:(e,n,t)=>{t.d(n,{K4:()=>s,L6:()=>o,VL:()=>u,Yh:()=>r,_f:()=>i,k$:()=>l});const r=e=>e.type===l.EMAIL_SUBSCRIPTION||e.type===l.DRAWER,i=e=>e.type===l.INTEGRATION;var l;function s(e){return e.type===l.EMAIL_SUBSCRIPTION}function o(e){return e.type===l.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(l||(l={}));const a=e=>e.map((e=>void 0===e?[void 0]:e.type===l.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),u=(e,n)=>{if(e.length!==n.length)return!1;const t=a(e),r=a(n);return t.length===r.length&&t.every(((e,n)=>e===r[n]))}},77836:(e,n,t)=>{t.d(n,{LW:()=>s,WX:()=>u,iv:()=>p,u3:()=>c});var r=t(46242),i=t(45295),l=t(73091);const s=e=>{for(const n of Object.values(l.WN))if(e.sub_type){if(n===`${e.type}:${e.sub_type}`)return n}else if(n===e.type)return n;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},o=(e,n)=>null===e?n:e,a=e=>""===e?void 0:o(e),u=e=>{var n,t;const u={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:s(e),status:null!==(n=e.status)&&void 0!==n?n:"UNKNOWN",serverErrors:null!==(t=e.server_errors)&&void 0!==t?t:0};if((0,l.cd)(u.type))return((e,n)=>{var t,r,i,l;return{...e,url:null!==(t=null==n?void 0:n.url)&&void 0!==t?t:"",sslVerificationEnabled:null!==(r=!(null==n?void 0:n.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==n?void 0:n.secret_token),basicAuth:null===(null==n?void 0:n.basic_authentication)?void 0:{user:o(null===(i=null==n?void 0:n.basic_authentication)||void 0===i?void 0:i.username,""),pass:o(null===(l=null==n?void 0:n.basic_authentication)||void 0===l?void 0:l.password,"")},extras:o(null==n?void 0:n.extras)}})(u,e.properties);switch(u.type){case l.WN.WEBHOOK:return((e,n)=>{var t,r,l;return{...e,url:null!==(t=null==n?void 0:n.url)&&void 0!==t?t:"",sslVerificationEnabled:null!==(r=!(null==n?void 0:n.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==n?void 0:n.secret_token),method:null!==(l=null==n?void 0:n.method)&&void 0!==l?l:i.l.HttpType.Enum.GET}})(u,e.properties);case l.WN.ANSIBLE:return((e,n)=>{var t,r,l;return{...e,url:null!==(t=null==n?void 0:n.url)&&void 0!==t?t:"",sslVerificationEnabled:null!==(r=!(null==n?void 0:n.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==n?void 0:n.secret_token),method:null!==(l=null==n?void 0:n.method)&&void 0!==l?l:i.l.HttpType.Enum.POST}})(u,e.properties);case l.WN.EMAIL_SUBSCRIPTION:case l.WN.DRAWER:return((e,n)=>({...e,ignorePreferences:n.ignore_preferences,groupId:null===n.group_id?void 0:n.group_id,onlyAdmin:n.only_admins}))(u,e.properties);default:(0,r.vE)(u.type)}},c=e=>e.map(u),d=e=>{const n=e.type;if((0,l.cd)(n)){const n=e;return{url:n.url,disable_ssl_verification:!n.sslVerificationEnabled,secret_token:a(n.secretToken),basic_authentication:n.basicAuth?{username:n.basicAuth.user,password:n.basicAuth.pass}:void 0,extras:n.extras}}switch(n){case l.WN.WEBHOOK:const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:a(t.secretToken)};case l.WN.ANSIBLE:const i=e;return{url:i.url,disable_ssl_verification:!i.sslVerificationEnabled,secret_token:a(i.secretToken),method:i.method};case l.WN.EMAIL_SUBSCRIPTION:const s=e;return{only_admins:s.onlyAdmin,group_id:s.groupId,ignore_preferences:s.ignorePreferences};case l.WN.DRAWER:const o=e;return{only_admins:o.onlyAdmin,group_id:o.groupId,ignore_preferences:o.ignorePreferences};default:(0,r.vE)(n)}},p=e=>{const{type:n,subType:t}=(e=>{const n=e.split(":",2);return{type:n[0],subType:2===n.length?n[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:n,sub_type:t,description:"",properties:d(e)}}}}]);
//# sourceMappingURL=../sourcemaps/7474.1711b30956d78c6d561ed17c8409bb36.js.map
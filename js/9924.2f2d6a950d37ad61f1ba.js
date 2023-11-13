"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[9924],{18126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(10090),i=n(55128),s=n(18172),o=n(52890),l=n(93264),a=n.n(l),u=n(94782),c=n(28216),d=n(83130),p=n(21242),v=n(42150),E=n(37725),_=n(73091),m=n(84456),f=n(56335),b=n(3121);const g=({activeCategory:e,...t})=>{const{rbac:n,server:r,isOrgAdmin:i}=(0,b.q)(),s=e&&Object.values(_.Es).includes(e)?e:void 0;return n&&r?l.createElement(m.I.Provider,{value:{rbac:n,server:r,isOrgAdmin:!!i}},l.createElement(f.d,null,l.createElement(v.q,null),l.createElement(E.Z,{category:s,...t}))):l.createElement(p.Bullseye,null,l.createElement(p.Spinner,{size:"xl"}))};var y=n(9241);(0,s.MD)();const I=e=>{const t=a().useMemo((()=>(0,i.createFetchingClient)(i.getInsights,{responseInterceptors:[o.validateSchemaResponseInterceptor]})),[]),n=a().useMemo((()=>(e.logger?(0,y.b)(e.logger):(0,y.b)()).getStore()),[e.logger]);return a().createElement(r.Z,{locale:navigator.language.slice(0,2),messages:d,onError:console.log},a().createElement(c.Provider,{store:n},a().createElement(u.ClientContextProvider,{client:t},a().createElement(g,{...e}))))}},56437:(e,t,n)=>{n.d(t,{K4:()=>o,L6:()=>l,VL:()=>u,Yh:()=>r,_f:()=>i,k$:()=>s});const r=e=>e.type===s.EMAIL_SUBSCRIPTION||e.type===s.DRAWER,i=e=>e.type===s.INTEGRATION;var s;function o(e){return e.type===s.EMAIL_SUBSCRIPTION}function l(e){return e.type===s.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(s||(s={}));const a=e=>e.map((e=>void 0===e?[void 0]:e.type===s.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),u=(e,t)=>{if(e.length!==t.length)return!1;const n=a(e),r=a(t);return n.length===r.length&&n.every(((e,t)=>e===r[t]))}},77836:(e,t,n)=>{n.d(t,{LW:()=>o,WX:()=>u,iv:()=>p,u3:()=>c});var r=n(46242),i=n(45295),s=n(73091);const o=e=>{for(const t of Object.values(s.WN))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},l=(e,t)=>null===e?t:e,a=e=>""===e?void 0:l(e),u=e=>{var t,n;const u={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:o(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,s.cd)(u.type))return((e,t)=>{var n,r,i,s;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(r=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:l(null===(i=null==t?void 0:t.basic_authentication)||void 0===i?void 0:i.username,""),pass:l(null===(s=null==t?void 0:t.basic_authentication)||void 0===s?void 0:s.password,"")},extras:l(null==t?void 0:t.extras)}})(u,e.properties);switch(u.type){case s.WN.WEBHOOK:return((e,t)=>{var n,r,s;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(r=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==t?void 0:t.secret_token),method:null!==(s=null==t?void 0:t.method)&&void 0!==s?s:i.l.HttpType.Enum.GET}})(u,e.properties);case s.WN.ANSIBLE:return((e,t)=>{var n,r,s;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(r=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==r&&r,secretToken:a(null==t?void 0:t.secret_token),method:null!==(s=null==t?void 0:t.method)&&void 0!==s?s:i.l.HttpType.Enum.POST}})(u,e.properties);case s.WN.EMAIL_SUBSCRIPTION:case s.WN.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(u,e.properties);default:(0,r.vE)(u.type)}},c=e=>e.map(u),d=e=>{const t=e.type;if((0,s.cd)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:a(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case s.WN.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:a(t.secretToken)}}case s.WN.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:a(t.secretToken),method:t.method}}case s.WN.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case s.WN.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,r.vE)(t)}},p=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:d(e)}}}}]);
//# sourceMappingURL=../sourcemaps/9924.6e2b0209e92d86032bc7960ee0640d7c.js.map
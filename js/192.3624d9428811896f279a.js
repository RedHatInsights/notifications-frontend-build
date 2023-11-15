"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[192],{55730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(10090),l=n(55128),a=n(18172),o=n(52890),r=n(93264),s=n.n(r),c=n(94782),u=n(28216),d=n(83130),m=n(45362),p=n(9241);(0,a.MD)();const v=e=>{const t=s().useMemo((()=>(0,l.createFetchingClient)(l.getInsights,{responseInterceptors:[o.validateSchemaResponseInterceptor]})),[]),n=s().useMemo((()=>(e.logger?(0,p.b)(e.logger):(0,p.b)()).getStore()),[e.logger]);return s().createElement(i.Z,{locale:navigator.language.slice(0,2),messages:d,onError:console.log},s().createElement(u.Provider,{store:n},s().createElement(c.ClientContextProvider,{client:t},s().createElement(m.Z,null))))}},91654:(e,t,n)=>{n.r(t),n.d(t,{TimeConfigComponent:()=>v,default:()=>g});var i=n(21242),l=n(43551),a=n(78343),o=n(93264),r=n.n(o),s=n(65326),c=n(8813),u=n(2412),d=n(60207),m=n(21503);const p=(0,c.style)({width:"280px"}),v=()=>{var e,t;const[n,c]=r().useState(!1),[v,g]=r().useState(),[E,T]=(0,o.useState)(!1),f=(0,u.Y)(),b=(0,d.I)(),{addSuccessNotification:y,addDangerNotification:h}=(0,m.l)(),I=(0,o.useMemo)((()=>{var e;if(200===f.status)return null===(e=f.payload)||void 0===e?void 0:e.value}),[null===(e=f.payload)||void 0===e?void 0:e.value,f.status]);(0,o.useEffect)((()=>{I&&(g({baseCustomTime:I,utcTime:I,timezoneText:void 0}),c("00:00:00"!==I))}),[I]);const C=r().useCallback((()=>{c(!1),g({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[_,k]=r().useState(!1),S=s.map((e=>r().createElement(i.DropdownItem,{key:e.text},e.text))),N=r().useCallback((()=>{c(!0)}),[]),A=r().useCallback((e=>{g({baseCustomTime:e,utcTime:e,timezoneText:void 0})}),[]),x=r().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=s.find((e=>e.text===t));n&&g((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const l=(0,a.Z)(i,-n.offset),o=l.getUTCHours().toString().padStart(2,"0"),r=l.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${o}:${r}`,timezoneText:n.text}}return e}))}k(!1)}),[]),R=r().useCallback((()=>{v&&(0,b.mutate)({body:v.utcTime}).then((e=>{204===e.status?y("Action settings saved",""):h("Failed to save action settings","")})),T(!1)}),[h,y,b.mutate,v]),O=b.loading||f.loading,W=()=>{T(!E)};return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement(l.OutlinedClockIcon,{color:"var(--pf-v5-global--palette--cyan-200)"})," ",`Any daily digest emails you've opted into will be sent at ${I||"00:00"} UTC`),r().createElement(i.Button,{variant:"link",onClick:W,ouiaId:"TimeConfigModal"},"Edit time settings"),r().createElement(i.Modal,{className:"pf-v5-u-pl-xl",variant:i.ModalVariant.small,isOpen:E,onClose:W,actions:[r().createElement(i.Button,{key:"save",variant:"primary",type:"submit",isLoading:O,isDisabled:O,onClick:R},O?"Loading":"Save"),r().createElement(i.Button,{key:"cancel",variant:"link",onClick:W},"Cancel")],ouiaId:"TimeConfigModal"},r().createElement(i.Stack,{hasGutter:!0},r().createElement(i.StackItem,null,r().createElement(i.Title,{headingLevel:"h2"},"Action settings")),r().createElement(i.StackItem,null,r().createElement(i.Text,{component:i.TextVariants.p},"Daily digest email receipt"),r().createElement(i.HelperText,null,r().createElement(i.HelperTextItem,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),r().createElement("br",null),r().createElement(i.Split,null,r().createElement(i.SplitItem,{isFilled:!0},r().createElement(i.Stack,{hasGutter:!0},r().createElement(i.StackItem,null,f.loading?r().createElement(i.Skeleton,null):r().createElement(i.Radio,{isChecked:!n,onChange:C,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),r().createElement(i.StackItem,null,f.loading?r().createElement(i.Skeleton,null):r().createElement(i.Radio,{isChecked:n,onChange:N,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&r().createElement(r().Fragment,null,r().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},r().createElement(i.Text,{component:i.TextVariants.h6},"Time"),r().createElement(i.TimePicker,{onChange:A,time:null==v?void 0:v.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),r().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},r().createElement(i.Text,{component:i.TextVariants.h6},"Time zone"),r().createElement(i.Dropdown,{className:p,toggle:r().createElement(i.DropdownToggle,{isOpen:_,id:"timezone",onToggle:()=>k(!_)},null!==(t=null==v?void 0:v.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),isOpen:_,onSelect:x,menuAppendTo:()=>document.body,dropdownItems:S}))))))))},g=v},56437:(e,t,n)=>{n.d(t,{K4:()=>o,L6:()=>r,VL:()=>c,Yh:()=>i,_f:()=>l,k$:()=>a});const i=e=>e.type===a.EMAIL_SUBSCRIPTION||e.type===a.DRAWER,l=e=>e.type===a.INTEGRATION;var a;function o(e){return e.type===a.EMAIL_SUBSCRIPTION}function r(e){return e.type===a.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(a||(a={}));const s=e=>e.map((e=>void 0===e?[void 0]:e.type===a.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),c=(e,t)=>{if(e.length!==t.length)return!1;const n=s(e),i=s(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},77836:(e,t,n)=>{n.d(t,{LW:()=>o,WX:()=>c,iv:()=>m,u3:()=>u});var i=n(46242),l=n(45295),a=n(73091);const o=e=>{for(const t of Object.values(a.WN))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},r=(e,t)=>null===e?t:e,s=e=>""===e?void 0:r(e),c=e=>{var t,n;const c={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:o(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,a.cd)(c.type))return((e,t)=>{var n,i,l,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:r(null===(l=null==t?void 0:t.basic_authentication)||void 0===l?void 0:l.username,""),pass:r(null===(a=null==t?void 0:t.basic_authentication)||void 0===a?void 0:a.password,"")},extras:r(null==t?void 0:t.extras)}})(c,e.properties);switch(c.type){case a.WN.WEBHOOK:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:l.l.HttpType.Enum.GET}})(c,e.properties);case a.WN.ANSIBLE:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:l.l.HttpType.Enum.POST}})(c,e.properties);case a.WN.EMAIL_SUBSCRIPTION:case a.WN.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(c,e.properties);default:(0,i.vE)(c.type)}},u=e=>e.map(c),d=e=>{const t=e.type;if((0,a.cd)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case a.WN.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken)}}case a.WN.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),method:t.method}}case a.WN.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case a.WN.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,i.vE)(t)}},m=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:d(e)}}}}]);
//# sourceMappingURL=../sourcemaps/192.65ad91396877dc438a3d34c713df4f12.js.map
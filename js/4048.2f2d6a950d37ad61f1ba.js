"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[4048],{55730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(10090),l=n(55128),a=n(18172),o=n(52890),r=n(93264),s=n.n(r),c=n(94782),u=n(28216),d=n(83130),m=n(21059),p=n(9241);(0,a.MD)();const v=e=>{const t=s().useMemo((()=>(0,l.createFetchingClient)(l.getInsights,{responseInterceptors:[o.validateSchemaResponseInterceptor]})),[]),n=s().useMemo((()=>(e.logger?(0,p.b)(e.logger):(0,p.b)()).getStore()),[e.logger]);return s().createElement(i.Z,{locale:navigator.language.slice(0,2),messages:d,onError:console.log},s().createElement(u.Provider,{store:n},s().createElement(c.ClientContextProvider,{client:t},s().createElement(m.Z,null))))}},91654:(e,t,n)=>{n.r(t),n.d(t,{TimeConfigComponent:()=>T,default:()=>f});var i=n(21242),l=n(43551),a=n(28551),o=n(78343),r=n(93264),s=n.n(r),c=n(65326),u=n(8813),d=n(2412),m=n(60207),p=n(21503);const v=(0,u.style)({width:"280px"}),g=(0,u.style)({paddingLeft:a.J.value}),E=(0,u.style)({paddingLeft:"36px"}),T=()=>{var e,t;const[n,a]=s().useState(!1),[u,T]=s().useState(),[f,b]=(0,r.useState)(!1),y=(0,d.Y)(),h=(0,m.I)(),{addSuccessNotification:I,addDangerNotification:C}=(0,p.l)(),_=(0,r.useMemo)((()=>{var e;if(200===y.status)return null===(e=y.payload)||void 0===e?void 0:e.value}),[null===(e=y.payload)||void 0===e?void 0:e.value,y.status]);(0,r.useEffect)((()=>{_&&(T({baseCustomTime:_,utcTime:_,timezoneText:void 0}),a("00:00:00"!==_))}),[_]);const k=s().useCallback((()=>{a(!1),T({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[S,N]=s().useState(!1),A=c.map((e=>s().createElement(i.DropdownItem,{key:e.text},e.text))),x=s().useCallback((()=>{a(!0)}),[]),R=s().useCallback((e=>{T({baseCustomTime:e,utcTime:e,timezoneText:void 0})}),[]),O=s().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=c.find((e=>e.text===t));n&&T((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const l=(0,o.Z)(i,-n.offset),a=l.getUTCHours().toString().padStart(2,"0"),r=l.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${a}:${r}`,timezoneText:n.text}}return e}))}N(!1)}),[]),W=s().useCallback((()=>{u&&(0,h.mutate)({body:u.utcTime}).then((e=>{204===e.status?I("Action settings saved",""):C("Failed to save action settings","")})),b(!1)}),[C,I,h.mutate,u]),w=h.loading||y.loading,D=()=>{b(!f)};return s().createElement(s().Fragment,null,s().createElement("p",null,s().createElement(l.OutlinedClockIcon,{color:"var(--pf-v5-global--palette--cyan-200)"})," ",`Any daily digest emails you've opted into will be sent at ${_||"00:00"} UTC`),s().createElement(i.Button,{variant:"link",onClick:D,ouiaId:"TimeConfigModal"},"Edit time settings"),s().createElement(i.Modal,{className:E,variant:i.ModalVariant.small,isOpen:f,onClose:D,actions:[s().createElement(i.Button,{key:"save",variant:"primary",type:"submit",isLoading:w,isDisabled:w,onClick:W},w?"Loading":"Save"),s().createElement(i.Button,{key:"cancel",variant:"link",onClick:D},"Cancel")],ouiaId:"TimeConfigModal"},s().createElement(i.Stack,{hasGutter:!0},s().createElement(i.StackItem,null,s().createElement(i.Title,{headingLevel:"h2"},"Action settings")),s().createElement(i.StackItem,null,s().createElement(i.Text,{component:i.TextVariants.p},"Daily digest email receipt"),s().createElement(i.HelperText,null,s().createElement(i.HelperTextItem,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),s().createElement("br",null),s().createElement(i.Split,null,s().createElement(i.SplitItem,{isFilled:!0},s().createElement(i.Stack,{hasGutter:!0},s().createElement(i.StackItem,null,y.loading?s().createElement(i.Skeleton,null):s().createElement(i.Radio,{isChecked:!n,onChange:k,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),s().createElement(i.StackItem,null,y.loading?s().createElement(i.Skeleton,null):s().createElement(i.Radio,{isChecked:n,onChange:x,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&s().createElement(s().Fragment,null,s().createElement(i.StackItem,{className:g},s().createElement(i.Text,{component:i.TextVariants.h6},"Time"),s().createElement(i.TimePicker,{onChange:R,time:null==u?void 0:u.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),s().createElement(i.StackItem,{className:g},s().createElement(i.Text,{component:i.TextVariants.h6},"Time zone"),s().createElement(i.Dropdown,{className:v,toggle:s().createElement(i.DropdownToggle,{isOpen:S,id:"timezone",onToggle:()=>N(!S)},null!==(t=null==u?void 0:u.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),isOpen:S,onSelect:O,menuAppendTo:()=>document.body,dropdownItems:A}))))))))},f=T},56437:(e,t,n)=>{n.d(t,{K4:()=>o,L6:()=>r,VL:()=>c,Yh:()=>i,_f:()=>l,k$:()=>a});const i=e=>e.type===a.EMAIL_SUBSCRIPTION||e.type===a.DRAWER,l=e=>e.type===a.INTEGRATION;var a;function o(e){return e.type===a.EMAIL_SUBSCRIPTION}function r(e){return e.type===a.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(a||(a={}));const s=e=>e.map((e=>void 0===e?[void 0]:e.type===a.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),c=(e,t)=>{if(e.length!==t.length)return!1;const n=s(e),i=s(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},77836:(e,t,n)=>{n.d(t,{LW:()=>o,WX:()=>c,iv:()=>m,u3:()=>u});var i=n(46242),l=n(45295),a=n(73091);const o=e=>{for(const t of Object.values(a.WN))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},r=(e,t)=>null===e?t:e,s=e=>""===e?void 0:r(e),c=e=>{var t,n;const c={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:o(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,a.cd)(c.type))return((e,t)=>{var n,i,l,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:r(null===(l=null==t?void 0:t.basic_authentication)||void 0===l?void 0:l.username,""),pass:r(null===(a=null==t?void 0:t.basic_authentication)||void 0===a?void 0:a.password,"")},extras:r(null==t?void 0:t.extras)}})(c,e.properties);switch(c.type){case a.WN.WEBHOOK:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:l.l.HttpType.Enum.GET}})(c,e.properties);case a.WN.ANSIBLE:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:l.l.HttpType.Enum.POST}})(c,e.properties);case a.WN.EMAIL_SUBSCRIPTION:case a.WN.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(c,e.properties);default:(0,i.vE)(c.type)}},u=e=>e.map(c),d=e=>{const t=e.type;if((0,a.cd)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case a.WN.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken)}}case a.WN.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),method:t.method}}case a.WN.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case a.WN.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,i.vE)(t)}},m=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:d(e)}}}}]);
//# sourceMappingURL=../sourcemaps/4048.6bc38aa923c9b2d3860f0ddcae095436.js.map
"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[5216,6675],{8473:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(74848),a=n(32485),r=n.n(a),s=n(95010),l=n(34400),o=n(90695),c=n.n(o),m=function(){return m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)};const u=function(e){var t=e.utcStartTime,n=void 0===t?"10am":t,a=e.utcEndTime,o=void 0===a?"12am":a,u=e.startTime,d=void 0===u?"6am":u,g=e.endTime,p=void 0===g?"8am":g,E=e.timeZone,h=void 0===E?"EST":E,v=e.description,f=e.redirectLink,T=void 0===f?"https://status.redhat.com/incidents":f,y=e.className,C=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["utcStartTime","utcEndTime","startTime","endTime","timeZone","description","redirectLink","className"]),b=r()(y,"ins-c-empty-state__maintenance");return(0,i.jsxs)(s.EmptyState,m({className:b},C,{children:[(0,i.jsx)(s.EmptyStateHeader,{titleText:"Maintenance in progress",icon:(0,i.jsx)(s.EmptyStateIcon,{icon:c()}),headingLevel:"h4"}),(0,i.jsx)(s.EmptyStateBody,{children:v||(0,i.jsxs)(l.Stack,{children:[(0,i.jsx)(l.StackItem,{children:"We are currently undergoing scheduled maintenance and will be"}),(0,i.jsxs)(l.StackItem,{children:["unavailable from ",n," to ",o," UTC (",d,"-",p," ",h,")."]}),(0,i.jsxs)(l.StackItem,{children:["For more information please visit ",(0,i.jsx)("a",{href:T,children:"status.redhat.com"}),"."]})]})})]}))}},44748:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(35637),a=n(5864),r=n(41261),s=n(80578),l=n(47503),o=n.n(l),c=n(20269),m=n(49924),u=n(85110),d=n(77002),g=n(42338);(0,r.IP)();const p=e=>{const t=o().useMemo((()=>(0,a.createFetchingClient)(a.getInsights,{responseInterceptors:[s.validateSchemaResponseInterceptor]})),[]),n=o().useMemo((()=>(e.logger?(0,g.g)(e.logger):(0,g.g)()).getStore()),[e.logger]);return o().createElement(i.A,{locale:navigator.language.slice(0,2),messages:u,onError:console.log},o().createElement(m.Provider,{store:n},o().createElement(c.ClientContextProvider,{client:t},o().createElement(d.A,null))))}},77002:(e,t,n)=>{n.d(t,{A:()=>T});var i=n(25211),a=n(8473),r=n(20881),s=n(5864),l=n(72374),o=n(47503),c=n(12178),m=n(68185),u=n(17933),d=n(40564),g=n(66245),p=n(81923),E=n(86594),h=n(36516);const v="HH:mm",f="hh:mma",T=()=>{const{updateDocumentTitle:e}=(0,r.A)();null==e||e("Notifications");const{rbac:t,server:n,isOrgAdmin:T}=(0,h.n)(),y=(0,s.getInsights)(),[C,b]=o.useState(!1),A=o.useCallback((e=>{e?(y.chrome.getEnvironmentOriginal=y.chrome.getEnvironment,y.chrome.getEnvironment=()=>"ci"):y.chrome.getEnvironment=y.chrome.getEnvironmentOriginal,b(e)}),[y]);if(!t||!n)return o.createElement(p.z,null);if(n.status===d.S.MAINTENANCE){const e=(0,l.A)((0,s.toUtc)(n.from),v),t=(0,l.A)((0,s.toUtc)(n.to),v),i=(0,l.A)(n.from,f),r=(0,l.A)(n.to,f),c=(0,l.A)(n.to,"O");return o.createElement(a.A,{utcStartTime:e,utcEndTime:t,startTime:i,endTime:r,timeZone:c})}return o.createElement(g.B.Provider,{value:{rbac:t,server:n,isOrgAdmin:!!T}},o.createElement(E.O,null,o.createElement(c.P,null),o.createElement(s.InsightsEnvDetector,{insights:y,onEnvironment:u.mr},o.createElement(s.RenderIfTrue,null,o.createElement(i.d,{className:"pf-v5-u-p-sm",isChecked:C,onChange:A,labelOff:"Enable experimental features",label:"Disable experimental features"}))),o.createElement(m.B,null)))}},40874:(e,t,n)=>{n.r(t),n.d(t,{TimeConfigComponent:()=>w,default:()=>D});var i=n(30155),a=n(16165),r=n(72583),s=n(90678),l=n(73113),o=n(60316),c=n(22069),m=n(59257),u=n(49318),d=n(30666),g=n(93973),p=n(71906),E=n(73539),h=n(14243),v=n(76774),f=n(74225),T=n(94494),y=n(75797),C=n(64361),b=n(17661),A=n(89915),I=n(21524),S=n(47503),x=n.n(S),k=n(77621),O=n(90682),N=n(17368),R=n(30679);const j=(0,O.style)({marginTop:"12px"}),P=(0,O.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),w=()=>{var e;const[t,n]=x().useState(!1),[O,w]=x().useState(),[D,M]=x().useState(null),[U,L]=(0,S.useState)(!1),z=x().useRef(null),_=x().useRef(null),{addSuccessNotification:F,addDangerNotification:B}=(0,N.h)();x().useEffect((()=>{(async()=>{w(await(0,R.C)())})()}),[]);const W=(0,S.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==D?void 0:D.utcTime)?null==D?void 0:D.utcTime:"00:00"} UTC`),[null==D?void 0:D.utcTime]);(0,S.useEffect)((()=>{O&&(M({baseCustomTime:O,utcTime:O,timezoneText:void 0}),n("00:00:00"!==O))}),[O]);const $=x().useCallback((()=>{n(!1),M({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[H,G]=x().useState(!1),q=x().useCallback((()=>{n(!0)}),[]),Y=x().useCallback(((e,t)=>{M({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),K=x().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=k.find((e=>e.text===t));n&&M((e=>{const t=((null==e?void 0:e.baseCustomTime)||"00:00").split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const a=(0,I.A)(i,-n.offset),r=a.getUTCHours().toString().padStart(2,"0"),s=a.getUTCMinutes().toString().padStart(2,"0");return{baseCustomTime:(null==e?void 0:e.baseCustomTime)||"00:00",utcTime:`${r}:${s}`,timezoneText:n.text}}))}G(!1)}),[]),Z=x().useCallback((()=>{D&&(0,R.S)(`${D.utcTime}:00`).then((async()=>{F("Action settings saved",""),w(await(0,R.C)())})).catch((()=>{B("Failed to save action settings","")})),L(!1)}),[B,F,D]),J=null===D||null===O,V=()=>{L(!U),O&&M({baseCustomTime:O,utcTime:O,timezoneText:void 0})};return x().createElement(x().Fragment,null,x().createElement(A.F,{className:j,isInline:!0,title:W,actionLinks:x().createElement(i.v,{onClick:V,ouiaId:"TimeConfigModal"},"Edit time settings")}),x().createElement(a.a,{className:"pf-v5-u-pl-xl",variant:a.d.small,isOpen:U,onClose:V,actions:[x().createElement(r.$n,{key:"save",variant:"primary",type:"submit",isLoading:J,isDisabled:J,onClick:Z},J?"Loading":"Save"),x().createElement(r.$n,{key:"cancel",variant:"link",onClick:V},"Cancel")],ouiaId:"TimeConfigModal"},x().createElement(s.B,{hasGutter:!0},x().createElement(l.a,null,x().createElement(o.h,{headingLevel:"h2"},"Action settings")),x().createElement(l.a,null,x().createElement(c.E,{component:c.Y.p},"Daily digest email receipt"),x().createElement(m.E,null,x().createElement(u.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),x().createElement("br",null),x().createElement(d.B,null,x().createElement(g.o,{isFilled:!0},x().createElement(s.B,{hasGutter:!0},x().createElement(l.a,null,null===O?x().createElement(p.E,null):x().createElement(E.s,{isChecked:!t,onChange:$,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),x().createElement(l.a,null,null===O?x().createElement(p.E,null):x().createElement(E.s,{isChecked:t,onChange:q,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),t&&x().createElement(x().Fragment,null,x().createElement(l.a,{className:"pf-v5-u-pl-lg"},x().createElement(c.E,{component:c.Y.h6},"Time"),x().createElement(h.A,{onChange:Y,time:null==D?void 0:D.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),x().createElement(l.a,{className:"pf-v5-u-pl-lg"},x().createElement(c.E,{component:c.Y.h6},"Time zone"),x().createElement(v.$,{isOpen:H,onOpenChange:e=>G(e),menu:x().createElement(f.W,{ref:_,isPlain:!1},x().createElement(T.r,{id:"timezoneMenu"},x().createElement(y.c,{className:P},k.map((e=>x().createElement(C.D,{onClick:K,key:e.text},e.text)))))),menuRef:_,toggle:x().createElement(b.S,{id:"timezone",ref:z,onClick:()=>{G(!H)},isExpanded:H},null!==(e=null==D?void 0:D.timezoneText)&&void 0!==e?e:"(UTC-00:00) Universal Time"),toggleRef:z}))))))))},D=w},64428:(e,t,n)=>{n.r(t),n.d(t,{IntegrationWizard:()=>f,default:()=>T});var i=n(49405),a=n(63537),r=n(97744),s=n(47503),l=n(15039),o=n(87677),c=n(1384),m=n(85433),u=n(64118),d=n(91360),g=n(61674),p=n(70910),E=n(75045),h=n(17368),v=n(49924);const f=({isOpen:e,isEdit:t,template:n,afterSubmit:v,closeModal:f,category:T})=>{const y={[d.nb]:l.A,[d.c5]:o.A,[d.Lh]:c.A,[d.AU]:m.A,[d.pJ]:g.A},C=(0,p.useFlag)("platform.integrations.behavior-groups-move"),b=(0,p.useFlag)("platform.integrations.pager-duty"),A=(0,h.h)(),[I,S]=s.useState(e);return s.useEffect((()=>{S(e)}),[e]),s.createElement(s.Fragment,null,I&&s.createElement(r.A,{schema:(0,u.w)(T,t,C,b),componentMapper:{...i.Ay,...y},onSubmit:({url:e,[d.Iq]:i,name:a,"secret-token":r,"event-types-table":s,severity:l})=>{const[o,c]=(null==i?void 0:i.split(":"))||["webhook"],m={name:a,enabled:!0,type:o,...c&&{sub_type:c},description:"",properties:{method:"POST",url:e,disable_ssl_verification:!1,secret_token:r,severity:l},...C&&{event_types:s?Object.values(s).flatMap(Object.keys):[]}};t&&(null==n?void 0:n.id)?(0,E.lg)(null==n?void 0:n.id,m,void 0,A,v):(0,E.UD)(m,A,v),f()},initialValues:t?{...n,"secret-token":null==n?void 0:n.secretToken}:{},onCancel:f},(e=>s.createElement(a.Ay,{...e,showFormControls:!1}))))},T=({store:e,...t})=>e?s.createElement(v.Provider,{store:e},s.createElement(f,{...t})):s.createElement(f,{...t})},33408:(e,t,n)=>{n.d(t,{D:()=>a,Ij:()=>l,K0:()=>c,_n:()=>r,ij:()=>i,tr:()=>s});const i=e=>e.type===r.EMAIL_SUBSCRIPTION||e.type===r.DRAWER,a=e=>e.type===r.INTEGRATION;var r;function s(e){return e.type===r.EMAIL_SUBSCRIPTION}function l(e){return e.type===r.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(r||(r={}));const o=e=>e.map((e=>void 0===e?[void 0]:e.type===r.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),c=(e,t)=>{if(e.length!==t.length)return!1;const n=o(e),i=o(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},92200:(e,t,n)=>{n.d(t,{AJ:()=>s,cx:()=>l,sT:()=>a});class i{constructor(e){this.displayName=e}}class a extends i{constructor(e){super(e.name+(e.isEnabled?"":" - Disabled")),this.integration=e}getKey(){return this.integration.id}equals(e){return e instanceof a&&e.integration.id===this.integration.id}}class r extends i{constructor(e,t,n,i){super(e),this.key=i,this.description=t,this.integrationId=n}getKey(){return this.key}}class s extends r{constructor(e,t,n){let i,a;t?(i="Admins",a="Organization administrators for your account"):(i="All",a="All users in your organization who subscribed to this email in their Notification Preferences"),super(i,a,e,t?"users-admin":"users-all"),this.sendToAdmin=t,this.ignorePreferences=n}equals(e){return e instanceof s&&e.sendToAdmin===this.sendToAdmin&&e.ignorePreferences===this.ignorePreferences}}class l extends r{constructor(e,t,n){let i,a,r;"string"==typeof n?(i=n,a=!1,r=!1):(i="Loading",a=n,r=!n),super(i,void 0,e,`rbac-group-${t}`),this.groupId=t,this.isLoading=a,this.hasError=r}equals(e){return e instanceof l&&e.groupId===this.groupId}}}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RootApp.355405df3d8149224aad39e8cc38ff84.js.map
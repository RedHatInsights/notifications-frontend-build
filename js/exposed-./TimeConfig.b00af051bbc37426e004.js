(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[3290],{40874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TimeConfigComponent:()=>$,default:()=>F});var i=n(30155),a=n(16165),l=n(72583),o=n(90678),s=n(73113),c=n(60316),r=n(22069),m=n(59257),u=n(49318),d=n(30666),g=n(93973),f=n(71906),p=n(73539),v=n(14243),C=n(76774),E=n(74225),T=n(94494),h=n(75797),b=n(64361),y=n(17661),k=n(89915),x=n(21524),N=n(47503),S=n.n(N),D=n(77621),w=n(90682),M=n(2173),z=n(15640),U=n(17368),I=n(51237),A=n.n(I);const L=(0,w.style)({marginTop:"12px"}),R=(0,w.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),$=()=>{var e,t;const[n,w]=S().useState(!1),[I,$]=S().useState(),[F,O]=(0,N.useState)(!1),P=S().useRef(null),H=S().useRef(null),Y=(0,M.I)(),B=(0,z.L)(),{addSuccessNotification:G,addDangerNotification:W}=(0,U.h)(),j=(0,N.useMemo)((()=>{var e;if(!Y.error)return null===(e=Y.payload)||void 0===e?void 0:e.value}),[null===(e=Y.payload)||void 0===e?void 0:e.value,Y.error]),Q=(0,N.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==I?void 0:I.utcTime)?null==I?void 0:I.utcTime:"00:00"} UTC`),[null==I?void 0:I.utcTime]);(0,N.useEffect)((()=>{j&&($({baseCustomTime:j,utcTime:j,timezoneText:void 0}),w("00:00:00"!==j))}),[j]);const q=S().useCallback((()=>{w(!1),$({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[J,K]=S().useState(!1),V=S().useCallback((()=>{w(!0)}),[]),X=S().useCallback(((e,t)=>{$({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),Z=S().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=D.find((e=>e.text===t));n&&$((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const a=(0,x.A)(i,-n.offset),l=a.getUTCHours().toString().padStart(2,"0"),o=a.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${l}:${o}`,timezoneText:n.text}}return e}))}K(!1)}),[]),_=S().useCallback((()=>{if(I){const e=I.utcTime;A().put("/api/notifications/v1.0/org-config/daily-digest/time-preference",e,{headers:{"Content-Type":"application/json"}}).then((()=>{G("Action settings saved","")})).catch((()=>{W("Failed to save action settings","")}))}O(!1)}),[W,G,I]),ee=B.loading||Y.loading,te=()=>{O(!F)};return S().createElement(S().Fragment,null,S().createElement(k.F,{className:L,isInline:!0,title:Q,actionLinks:S().createElement(i.v,{onClick:te,ouiaId:"TimeConfigModal"},"Edit time settings")}),S().createElement(a.a,{className:"pf-v5-u-pl-xl",variant:a.d.small,isOpen:F,onClose:te,actions:[S().createElement(l.$n,{key:"save",variant:"primary",type:"submit",isLoading:ee,isDisabled:ee,onClick:_},ee?"Loading":"Save"),S().createElement(l.$n,{key:"cancel",variant:"link",onClick:te},"Cancel")],ouiaId:"TimeConfigModal"},S().createElement(o.B,{hasGutter:!0},S().createElement(s.a,null,S().createElement(c.h,{headingLevel:"h2"},"Action settings")),S().createElement(s.a,null,S().createElement(r.E,{component:r.Y.p},"Daily digest email receipt"),S().createElement(m.E,null,S().createElement(u.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),S().createElement("br",null),S().createElement(d.B,null,S().createElement(g.o,{isFilled:!0},S().createElement(o.B,{hasGutter:!0},S().createElement(s.a,null,Y.loading?S().createElement(f.E,null):S().createElement(p.s,{isChecked:!n,onChange:q,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),S().createElement(s.a,null,Y.loading?S().createElement(f.E,null):S().createElement(p.s,{isChecked:n,onChange:V,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&S().createElement(S().Fragment,null,S().createElement(s.a,{className:"pf-v5-u-pl-lg"},S().createElement(r.E,{component:r.Y.h6},"Time"),S().createElement(v.A,{onChange:X,time:null==I?void 0:I.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),S().createElement(s.a,{className:"pf-v5-u-pl-lg"},S().createElement(r.E,{component:r.Y.h6},"Time zone"),S().createElement(C.$,{isOpen:J,onOpenChange:e=>K(e),menu:S().createElement(E.W,{ref:H,isPlain:!1},S().createElement(T.r,{id:"timezoneMenu"},S().createElement(h.c,{className:R},D.map((e=>S().createElement(b.D,{onClick:Z,key:e.text},e.text)))))),menuRef:H,toggle:S().createElement(y.S,{id:"timezone",ref:P,onClick:()=>{K(!J)},isExpanded:J},null!==(t=null==I?void 0:I.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),toggleRef:P}))))))))},F=$},2173:(e,t,n)=>{"use strict";n.d(t,{I:()=>l});var i=n(20269),a=n(96787);const l=()=>(0,i.useQuery)(a.P.OrgConfigResourceGetDailyDigestTimePreference.actionCreator())},15640:(e,t,n)=>{"use strict";n.d(t,{L:()=>o});var i=n(20269),a=n(96787);const l=e=>a.P.OrgConfigResourceSaveDailyDigestTimePreference.actionCreator({body:e.body}),o=()=>(0,i.useMutation)(l)},17368:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var i=n(58274),a=n(47503),l=n(61225);const o=()=>{const e=(0,l.useDispatch)();return(0,a.useMemo)((()=>{const t=(t,n,a,l)=>e((0,i.addNotification)({variant:t,title:n,description:a,dismissable:l}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}},61858:()=>{},71036:()=>{},5637:()=>{},83696:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./TimeConfig.b891b4be55e8e5d5d0761ebae20bd385.js.map
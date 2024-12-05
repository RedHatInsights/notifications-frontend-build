(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[3290],{14128:(e,t,n)=>{"use strict";n.d(t,{O:()=>v,R:()=>C});var i=n(51237),a=n.n(i),l=n(6923),s=n(63105),o=n(57356),c=n(40807),r=n(80666),u=n(86855),m=n(19091),d=n(19128),p=n(75446);const f=a().create();f.interceptors.response.use(l.bl),f.interceptors.response.use(null,l.Xy),f.interceptors.response.use(null,l.u2);const g=new p.APIFactory("/api/notifications/v1",{getBundleFacets:s.Ay,getEventTypes:o.Ay,getTimePreference:m.Ay,putTimePreference:d.Ay},{axios:f}),E=new p.APIFactory("/api/integrations/v2",{createEndpoint:c.Ay,updateEndpoint:r.Ay,getEndpoint:u.Ay},{axios:f});function C(){return g}function v(){return E}},30679:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,S:()=>l});const i=(0,n(14128).R)();async function a(){return await i.getTimePreference()}async function l(e){return await i.putTimePreference({body:e})}},40874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TimeConfigComponent:()=>I,default:()=>M});var i=n(30155),a=n(16165),l=n(72583),s=n(90678),o=n(73113),c=n(60316),r=n(22069),u=n(59257),m=n(49318),d=n(30666),p=n(93973),f=n(71906),g=n(73539),E=n(14243),C=n(76774),v=n(74225),T=n(94494),h=n(75797),y=n(64361),b=n(17661),k=n(89915),x=n(21524),S=n(47503),A=n.n(S),N=n(77621),w=n(90682),D=n(17368),z=n(30679);const F=(0,w.style)({marginTop:"12px"}),U=(0,w.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),I=()=>{var e;const[t,n]=A().useState(!1),[w,I]=A().useState(),[M,P]=A().useState(null),[$,R]=(0,S.useState)(!1),B=A().useRef(null),H=A().useRef(null),{addSuccessNotification:L,addDangerNotification:O}=(0,D.h)();A().useEffect((()=>{(async()=>{I(await(0,z.C)())})()}),[]);const Y=(0,S.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==M?void 0:M.utcTime)?null==M?void 0:M.utcTime:"00:00"} UTC`),[null==M?void 0:M.utcTime]);(0,S.useEffect)((()=>{w&&(P({baseCustomTime:w,utcTime:w,timezoneText:void 0}),n("00:00:00"!==w))}),[w]);const W=A().useCallback((()=>{n(!1),P({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[G,j]=A().useState(!1),X=A().useCallback((()=>{n(!0)}),[]),q=A().useCallback(((e,t)=>{P({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),J=A().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=N.find((e=>e.text===t));n&&P((e=>{const t=((null==e?void 0:e.baseCustomTime)||"00:00").split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const a=(0,x.A)(i,-n.offset),l=a.getUTCHours().toString().padStart(2,"0"),s=a.getUTCMinutes().toString().padStart(2,"0");return{baseCustomTime:(null==e?void 0:e.baseCustomTime)||"00:00",utcTime:`${l}:${s}`,timezoneText:n.text}}))}j(!1)}),[]),K=A().useCallback((()=>{M&&(0,z.S)(`${M.utcTime}:00`).then((()=>{L("Action settings saved","")})).catch((()=>{O("Failed to save action settings","")})),R(!1)}),[O,L,M]),Q=null===M||null===w,V=()=>{R(!$)};return A().createElement(A().Fragment,null,A().createElement(k.F,{className:F,isInline:!0,title:Y,actionLinks:A().createElement(i.v,{onClick:V,ouiaId:"TimeConfigModal"},"Edit time settings")}),A().createElement(a.a,{className:"pf-v5-u-pl-xl",variant:a.d.small,isOpen:$,onClose:V,actions:[A().createElement(l.$n,{key:"save",variant:"primary",type:"submit",isLoading:Q,isDisabled:Q,onClick:K},Q?"Loading":"Save"),A().createElement(l.$n,{key:"cancel",variant:"link",onClick:V},"Cancel")],ouiaId:"TimeConfigModal"},A().createElement(s.B,{hasGutter:!0},A().createElement(o.a,null,A().createElement(c.h,{headingLevel:"h2"},"Action settings")),A().createElement(o.a,null,A().createElement(r.E,{component:r.Y.p},"Daily digest email receipt"),A().createElement(u.E,null,A().createElement(m.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),A().createElement("br",null),A().createElement(d.B,null,A().createElement(p.o,{isFilled:!0},A().createElement(s.B,{hasGutter:!0},A().createElement(o.a,null,null===w?A().createElement(f.E,null):A().createElement(g.s,{isChecked:!t,onChange:W,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),A().createElement(o.a,null,null===w?A().createElement(f.E,null):A().createElement(g.s,{isChecked:t,onChange:X,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),t&&A().createElement(A().Fragment,null,A().createElement(o.a,{className:"pf-v5-u-pl-lg"},A().createElement(r.E,{component:r.Y.h6},"Time"),A().createElement(E.A,{onChange:q,time:null==M?void 0:M.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),A().createElement(o.a,{className:"pf-v5-u-pl-lg"},A().createElement(r.E,{component:r.Y.h6},"Time zone"),A().createElement(C.$,{isOpen:G,onOpenChange:e=>j(e),menu:A().createElement(v.W,{ref:H,isPlain:!1},A().createElement(T.r,{id:"timezoneMenu"},A().createElement(h.c,{className:U},N.map((e=>A().createElement(y.D,{onClick:J,key:e.text},e.text)))))),menuRef:H,toggle:A().createElement(b.S,{id:"timezone",ref:B,onClick:()=>{j(!G)},isExpanded:G},null!==(e=null==M?void 0:M.timezoneText)&&void 0!==e?e:"(UTC-00:00) Universal Time"),toggleRef:B}))))))))},M=I},17368:(e,t,n)=>{"use strict";n.d(t,{h:()=>s});var i=n(58274),a=n(47503),l=n(61225);const s=()=>{const e=(0,l.useDispatch)();return(0,a.useMemo)((()=>{const t=(t,n,a,l)=>e((0,i.addNotification)({variant:t,title:n,description:a,dismissable:l}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}},79826:()=>{},16789:()=>{},95067:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},56905:()=>{},29697:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},26078:()=>{},5637:()=>{},13409:()=>{},97553:()=>{},98469:()=>{},27077:()=>{},2580:()=>{},83696:()=>{},82804:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./TimeConfig.1f7fc1bba78d0a54842c915f840456e0.js.map
(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[2101,3290],{49924:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Provider:()=>a.Kq,ReactReduxContext:()=>a.ty,batch:()=>i.r,connect:()=>a.Ng,connectAdvanced:()=>a.H_,createDispatchHook:()=>a.iI,createSelectorHook:()=>a.jO,createStoreHook:()=>a.Nk,shallowEqual:()=>a.bN,useDispatch:()=>a.wA,useSelector:()=>a.d4,useStore:()=>a.Pj});var a=n(7963),i=n(42724);(0,n(38298).d)(i.r)},14128:(e,t,n)=>{"use strict";n.d(t,{O:()=>v,R:()=>C});var a=n(51237),i=n.n(a),l=n(6923),o=n(63105),s=n(57356),c=n(40807),r=n(80666),u=n(86855),m=n(19091),d=n(19128),p=n(75446);const f=i().create();f.interceptors.response.use(l.bl),f.interceptors.response.use(null,l.Xy),f.interceptors.response.use(null,l.u2);const g=new p.APIFactory("/api/notifications/v1",{getBundleFacets:o.Ay,getEventTypes:s.Ay,getTimePreference:m.Ay,putTimePreference:d.Ay},{axios:f}),E=new p.APIFactory("/api/integrations/v2",{createEndpoint:c.Ay,updateEndpoint:r.Ay,getEndpoint:u.Ay},{axios:f});function C(){return g}function v(){return E}},30679:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,S:()=>l});const a=(0,n(14128).R)();async function i(){return await a.getTimePreference()}async function l(e){return await a.putTimePreference({body:e})}},5143:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ConnectedTimeConfig:()=>s,default:()=>c});var a=n(47503),i=n.n(a),l=n(49924),o=n(40874);const s=({store:e})=>i().createElement(l.Provider,{store:e},i().createElement(o.TimeConfigComponent,null)),c=s},40874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TimeConfigComponent:()=>H,default:()=>I});var a=n(30155),i=n(16165),l=n(72583),o=n(90678),s=n(73113),c=n(60316),r=n(22069),u=n(59257),m=n(49318),d=n(30666),p=n(93973),f=n(71906),g=n(73539),E=n(14243),C=n(76774),v=n(74225),T=n(94494),h=n(75797),y=n(64361),b=n(17661),k=n(89915),x=n(21524),S=n(47503),N=n.n(S),A=n(77621),w=n(90682),D=n(17368),P=n(30679);const z=(0,w.style)({marginTop:"12px"}),F=(0,w.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),H=()=>{var e;const[t,n]=N().useState(!1),[w,H]=N().useState(),[I,R]=N().useState(null),[U,M]=(0,S.useState)(!1),$=N().useRef(null),O=N().useRef(null),{addSuccessNotification:B,addDangerNotification:L}=(0,D.h)();N().useEffect((()=>{(async()=>{H(await(0,P.C)())})()}),[]);const Y=(0,S.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==I?void 0:I.utcTime)?null==I?void 0:I.utcTime:"00:00"} UTC`),[null==I?void 0:I.utcTime]);(0,S.useEffect)((()=>{w&&(R({baseCustomTime:w,utcTime:w,timezoneText:void 0}),n("00:00:00"!==w))}),[w]);const j=N().useCallback((()=>{n(!1),R({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[W,q]=N().useState(!1),G=N().useCallback((()=>{n(!0)}),[]),K=N().useCallback(((e,t)=>{R({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),X=N().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=A.find((e=>e.text===t));n&&R((e=>{const t=((null==e?void 0:e.baseCustomTime)||"00:00").split(":").map((e=>parseInt(e))),a=new Date;a.setUTCHours(t[0],t[1]);const i=(0,x.A)(a,-n.offset),l=i.getUTCHours().toString().padStart(2,"0"),o=i.getUTCMinutes().toString().padStart(2,"0");return{baseCustomTime:(null==e?void 0:e.baseCustomTime)||"00:00",utcTime:`${l}:${o}`,timezoneText:n.text}}))}q(!1)}),[]),_=N().useCallback((()=>{I&&(0,P.S)(`${I.utcTime}:00`).then((()=>{B("Action settings saved","")})).catch((()=>{L("Failed to save action settings","")})),M(!1)}),[L,B,I]),J=null===I||null===w,Q=()=>{M(!U)};return N().createElement(N().Fragment,null,N().createElement(k.F,{className:z,isInline:!0,title:Y,actionLinks:N().createElement(a.v,{onClick:Q,ouiaId:"TimeConfigModal"},"Edit time settings")}),N().createElement(i.a,{className:"pf-v5-u-pl-xl",variant:i.d.small,isOpen:U,onClose:Q,actions:[N().createElement(l.$n,{key:"save",variant:"primary",type:"submit",isLoading:J,isDisabled:J,onClick:_},J?"Loading":"Save"),N().createElement(l.$n,{key:"cancel",variant:"link",onClick:Q},"Cancel")],ouiaId:"TimeConfigModal"},N().createElement(o.B,{hasGutter:!0},N().createElement(s.a,null,N().createElement(c.h,{headingLevel:"h2"},"Action settings")),N().createElement(s.a,null,N().createElement(r.E,{component:r.Y.p},"Daily digest email receipt"),N().createElement(u.E,null,N().createElement(m.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),N().createElement("br",null),N().createElement(d.B,null,N().createElement(p.o,{isFilled:!0},N().createElement(o.B,{hasGutter:!0},N().createElement(s.a,null,null===w?N().createElement(f.E,null):N().createElement(g.s,{isChecked:!t,onChange:j,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),N().createElement(s.a,null,null===w?N().createElement(f.E,null):N().createElement(g.s,{isChecked:t,onChange:G,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),t&&N().createElement(N().Fragment,null,N().createElement(s.a,{className:"pf-v5-u-pl-lg"},N().createElement(r.E,{component:r.Y.h6},"Time"),N().createElement(E.A,{onChange:K,time:null==I?void 0:I.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),N().createElement(s.a,{className:"pf-v5-u-pl-lg"},N().createElement(r.E,{component:r.Y.h6},"Time zone"),N().createElement(C.$,{isOpen:W,onOpenChange:e=>q(e),menu:N().createElement(v.W,{ref:O,isPlain:!1},N().createElement(T.r,{id:"timezoneMenu"},N().createElement(h.c,{className:F},A.map((e=>N().createElement(y.D,{onClick:X,key:e.text},e.text)))))),menuRef:O,toggle:N().createElement(b.S,{id:"timezone",ref:$,onClick:()=>{q(!W)},isExpanded:W},null!==(e=null==I?void 0:I.timezoneText)&&void 0!==e?e:"(UTC-00:00) Universal Time"),toggleRef:$}))))))))},I=H},17368:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var a=n(58274),i=n(47503),l=n(49924);const o=()=>{const e=(0,l.useDispatch)();return(0,i.useMemo)((()=>{const t=(t,n,i,l)=>e((0,a.addNotification)({variant:t,title:n,description:i,dismissable:l}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),clearNotifications:()=>e((0,a.clearNotifications)())}}),[e])}},79826:()=>{},16789:()=>{},95067:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},56905:()=>{},29697:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},26078:()=>{},5637:()=>{},13409:()=>{},97553:()=>{},98469:()=>{},27077:()=>{},2580:()=>{},83696:()=>{},82804:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./ConnectedTimeConfig.379b2d8ca377c68eb5ad62354839193a.js.map
(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[2101,3290],{5143:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ConnectedTimeConfig:()=>s,default:()=>c});var a=n(47503),i=n.n(a),l=n(61225),o=n(40874);const s=({store:e})=>i().createElement(l.Provider,{store:e},i().createElement(o.TimeConfigComponent,null)),c=s},40874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TimeConfigComponent:()=>P,default:()=>R});var a=n(30155),i=n(16165),l=n(72583),o=n(90678),s=n(73113),c=n(60316),r=n(22069),m=n(59257),u=n(49318),d=n(30666),g=n(93973),C=n(71906),v=n(73539),E=n(14243),p=n(76774),f=n(74225),T=n(94494),h=n(75797),b=n(64361),y=n(17661),k=n(89915),x=n(21524),S=n(47503),D=n.n(S),w=n(77621),z=n(90682),M=n(2173),U=n(15640),$=n(17368),N=n(51237),A=n.n(N);const I=(0,z.style)({marginTop:"12px"}),L=(0,z.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),P=()=>{var e,t;const[n,z]=D().useState(!1),[N,P]=D().useState(),[R,F]=(0,S.useState)(!1),O=D().useRef(null),H=D().useRef(null),Y=(0,M.I)(),B=(0,U.L)(),{addSuccessNotification:G,addDangerNotification:j}=(0,$.h)(),W=(0,S.useMemo)((()=>{var e;if(!Y.error)return null===(e=Y.payload)||void 0===e?void 0:e.value}),[null===(e=Y.payload)||void 0===e?void 0:e.value,Y.error]),Q=(0,S.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==N?void 0:N.utcTime)?null==N?void 0:N.utcTime:"00:00"} UTC`),[null==N?void 0:N.utcTime]);(0,S.useEffect)((()=>{W&&(P({baseCustomTime:W,utcTime:W,timezoneText:void 0}),z("00:00:00"!==W))}),[W]);const q=D().useCallback((()=>{z(!1),P({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[J,K]=D().useState(!1),V=D().useCallback((()=>{z(!0)}),[]),X=D().useCallback(((e,t)=>{P({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),Z=D().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=w.find((e=>e.text===t));n&&P((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),a=new Date;a.setUTCHours(t[0],t[1]);const i=(0,x.A)(a,-n.offset),l=i.getUTCHours().toString().padStart(2,"0"),o=i.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${l}:${o}`,timezoneText:n.text}}return e}))}K(!1)}),[]),_=D().useCallback((()=>{if(N){const e=N.utcTime;A().put("/api/notifications/v1.0/org-config/daily-digest/time-preference",e,{headers:{"Content-Type":"application/json"}}).then((()=>{G("Action settings saved","")})).catch((()=>{j("Failed to save action settings","")}))}F(!1)}),[j,G,N]),ee=B.loading||Y.loading,te=()=>{F(!R)};return D().createElement(D().Fragment,null,D().createElement(k.F,{className:I,isInline:!0,title:Q,actionLinks:D().createElement(a.v,{onClick:te,ouiaId:"TimeConfigModal"},"Edit time settings")}),D().createElement(i.a,{className:"pf-v5-u-pl-xl",variant:i.d.small,isOpen:R,onClose:te,actions:[D().createElement(l.$n,{key:"save",variant:"primary",type:"submit",isLoading:ee,isDisabled:ee,onClick:_},ee?"Loading":"Save"),D().createElement(l.$n,{key:"cancel",variant:"link",onClick:te},"Cancel")],ouiaId:"TimeConfigModal"},D().createElement(o.B,{hasGutter:!0},D().createElement(s.a,null,D().createElement(c.h,{headingLevel:"h2"},"Action settings")),D().createElement(s.a,null,D().createElement(r.E,{component:r.Y.p},"Daily digest email receipt"),D().createElement(m.E,null,D().createElement(u.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),D().createElement("br",null),D().createElement(d.B,null,D().createElement(g.o,{isFilled:!0},D().createElement(o.B,{hasGutter:!0},D().createElement(s.a,null,Y.loading?D().createElement(C.E,null):D().createElement(v.s,{isChecked:!n,onChange:q,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),D().createElement(s.a,null,Y.loading?D().createElement(C.E,null):D().createElement(v.s,{isChecked:n,onChange:V,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&D().createElement(D().Fragment,null,D().createElement(s.a,{className:"pf-v5-u-pl-lg"},D().createElement(r.E,{component:r.Y.h6},"Time"),D().createElement(E.A,{onChange:X,time:null==N?void 0:N.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),D().createElement(s.a,{className:"pf-v5-u-pl-lg"},D().createElement(r.E,{component:r.Y.h6},"Time zone"),D().createElement(p.$,{isOpen:J,onOpenChange:e=>K(e),menu:D().createElement(f.W,{ref:H,isPlain:!1},D().createElement(T.r,{id:"timezoneMenu"},D().createElement(h.c,{className:L},w.map((e=>D().createElement(b.D,{onClick:Z,key:e.text},e.text)))))),menuRef:H,toggle:D().createElement(y.S,{id:"timezone",ref:O,onClick:()=>{K(!J)},isExpanded:J},null!==(t=null==N?void 0:N.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),toggleRef:O}))))))))},R=P},2173:(e,t,n)=>{"use strict";n.d(t,{I:()=>l});var a=n(20269),i=n(96787);const l=()=>(0,a.useQuery)(i.P.OrgConfigResource$v1GetDailyDigestTimePreference.actionCreator())},15640:(e,t,n)=>{"use strict";n.d(t,{L:()=>o});var a=n(20269),i=n(96787);const l=e=>i.P.OrgConfigResource$v1SaveDailyDigestTimePreference.actionCreator({body:e.body}),o=()=>(0,a.useMutation)(l)},95067:()=>{},61858:()=>{},71036:()=>{},26078:()=>{},5637:()=>{},83696:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./ConnectedTimeConfig.04976be7e5a7e1f39759570e6278ec7a.js.map
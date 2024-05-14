(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[1157,3290],{5338:(e,t,n)=>{"use strict";var i=n(25686);t.H=i.createRoot,i.hydrateRoot},45438:(e,t,n)=>{"use strict";n.r(t);var i=n(97656),o=n.n(i),a=n(5338),l=n(35637),r=n(5864),s=n(41261),u=n(80578),c=n(20269),p=n(61225),d=n(85110),m=n(25211),f=n(74848),v=n(32485),y=n.n(v),_=n(95010),b=n(34400),E=n(90695),g=n.n(E),T=function(){return T=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},T.apply(this,arguments)};const h=function(e){var t=e.utcStartTime,n=void 0===t?"10am":t,i=e.utcEndTime,o=void 0===i?"12am":i,a=e.startTime,l=void 0===a?"6am":a,r=e.endTime,s=void 0===r?"8am":r,u=e.timeZone,c=void 0===u?"EST":u,p=e.description,d=e.redirectLink,m=void 0===d?"https://status.redhat.com/incidents":d,v=e.className,E=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}(e,["utcStartTime","utcEndTime","startTime","endTime","timeZone","description","redirectLink","className"]),h=y()(v,"ins-c-empty-state__maintenance");return(0,f.jsxs)(_.EmptyState,T({className:h},E,{children:[(0,f.jsx)(_.EmptyStateHeader,{titleText:"Maintenance in progress",icon:(0,f.jsx)(_.EmptyStateIcon,{icon:g()}),headingLevel:"h4"}),(0,f.jsx)(_.EmptyStateBody,{children:p||(0,f.jsxs)(b.Stack,{children:[(0,f.jsx)(b.StackItem,{children:"We are currently undergoing scheduled maintenance and will be"}),(0,f.jsxs)(b.StackItem,{children:["unavailable from ",n," to ",o," UTC (",l,"-",s," ",c,")."]}),(0,f.jsxs)(b.StackItem,{children:["For more information please visit ",(0,f.jsx)("a",{href:m,children:"status.redhat.com"}),"."]})]})})]}))};var R=n(20881),I=n(72374),N=n(12178),Y=n(69760),k=n(17933),j=n(40564),B=n(66245),G=n(81923),C=n(86594),S=n(36516);const A="HH:mm",w="hh:mma",P=()=>{const{updateDocumentTitle:e}=(0,R.A)();null==e||e("Notifications");const{rbac:t,server:n,isOrgAdmin:o}=(0,S.n)(),a=(0,r.getInsights)(),[l,s]=i.useState(!1),u=i.useCallback((e=>{e?(a.chrome.getEnvironmentOriginal=a.chrome.getEnvironment,a.chrome.getEnvironment=()=>"ci"):a.chrome.getEnvironment=a.chrome.getEnvironmentOriginal,s(e)}),[a]);if(!t||!n)return i.createElement(G.z,null);if(n.status===j.S.MAINTENANCE){const e=(0,I.A)((0,r.toUtc)(n.from),A),t=(0,I.A)((0,r.toUtc)(n.to),A),o=(0,I.A)(n.from,w),a=(0,I.A)(n.to,w),l=(0,I.A)(n.to,"O");return i.createElement(h,{utcStartTime:e,utcEndTime:t,startTime:o,endTime:a,timeZone:l})}return i.createElement(B.B.Provider,{value:{rbac:t,server:n,isOrgAdmin:!!o}},i.createElement(C.O,null,i.createElement(N.P,null),i.createElement(r.InsightsEnvDetector,{insights:a,onEnvironment:k.mr},i.createElement(r.RenderIfTrue,null,i.createElement(m.d,{className:"pf-v5-u-p-sm",isChecked:l,onChange:u,labelOff:"Enable experimental features",label:"Disable experimental features"}))),i.createElement(Y.B,null)))};var O=n(42338);(0,s.IP)();const V=document.getElementById("root");(0,a.H)(V).render(o().createElement((e=>{const t=o().useMemo((()=>(0,r.createFetchingClient)(r.getInsights,{responseInterceptors:[u.validateSchemaResponseInterceptor]})),[]),n=o().useMemo((()=>(e.logger?(0,O.g)(e.logger):(0,O.g)()).getStore()),[e.logger]);return o().createElement(l.A,{locale:navigator.language.slice(0,2),messages:d,onError:console.log},o().createElement(p.Provider,{store:n},o().createElement(c.ClientContextProvider,{client:t},o().createElement(P,null))))}),null))},54866:(e,t,n)=>{"use strict";n.d(t,{TimeConfigComponent:()=>V});var i=n(30155),o=n(16165),a=n(72583),l=n(90678),r=n(73113),s=n(60316),u=n(22069),c=n(59257),p=n(49318),d=n(30666),m=n(93973),f=n(71906),v=n(73539),y=n(14243),_=n(76774),b=n(74225),E=n(94494),g=n(75797),T=n(64361),h=n(17661),R=n(89915),I=n(21524),N=n(97656),Y=n.n(N),k=n(77621),j=n(90682),B=n(20269),G=n(96787);const C=e=>G.P.OrgConfigResourceSaveDailyDigestTimePreference.actionCreator({body:e.body});var S=n(17368),A=n(51237),w=n.n(A);const P=(0,j.style)({marginTop:"12px"}),O=(0,j.style)({maxHeight:"200px",maxWidth:"400px",overflowY:"auto"}),V=()=>{var e,t;const[n,j]=Y().useState(!1),[A,V]=Y().useState(),[D,U]=(0,N.useState)(!1),M=Y().useRef(null),x=Y().useRef(null),L=(0,B.useQuery)(G.P.OrgConfigResourceGetDailyDigestTimePreference.actionCreator()),q=(0,B.useMutation)(C),{addSuccessNotification:z,addDangerNotification:F}=(0,S.h)(),W=(0,N.useMemo)((()=>{var e;if(!L.error)return null===(e=L.payload)||void 0===e?void 0:e.value}),[null===(e=L.payload)||void 0===e?void 0:e.value,L.error]),H=(0,N.useMemo)((()=>`Any daily digest emails you've opted into will be sent at ${(null==A?void 0:A.utcTime)?null==A?void 0:A.utcTime:"00:00"} UTC`),[null==A?void 0:A.utcTime]);(0,N.useEffect)((()=>{W&&(V({baseCustomTime:W,utcTime:W,timezoneText:void 0}),j("00:00:00"!==W))}),[W]);const $=Y().useCallback((()=>{j(!1),V({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[K,Z]=Y().useState(!1),J=Y().useCallback((()=>{j(!0)}),[]),Q=Y().useCallback(((e,t)=>{V({baseCustomTime:t,utcTime:t,timezoneText:void 0})}),[]),X=Y().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=k.find((e=>e.text===t));n&&V((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const o=(0,I.A)(i,-n.offset),a=o.getUTCHours().toString().padStart(2,"0"),l=o.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${a}:${l}`,timezoneText:n.text}}return e}))}Z(!1)}),[]),ee=Y().useCallback((()=>{if(A){const e=A.utcTime;w().put("/api/notifications/v1.0/org-config/daily-digest/time-preference",e,{headers:{"Content-Type":"application/json"}}).then((()=>{z("Action settings saved","")})).catch((()=>{F("Failed to save action settings","")}))}U(!1)}),[F,z,A]),te=q.loading||L.loading,ne=()=>{U(!D)};return Y().createElement(Y().Fragment,null,Y().createElement(R.F,{className:P,isInline:!0,title:H,actionLinks:Y().createElement(i.v,{onClick:ne,ouiaId:"TimeConfigModal"},"Edit time settings")}),Y().createElement(o.a,{className:"pf-v5-u-pl-xl",variant:o.d.small,isOpen:D,onClose:ne,actions:[Y().createElement(a.$n,{key:"save",variant:"primary",type:"submit",isLoading:te,isDisabled:te,onClick:ee},te?"Loading":"Save"),Y().createElement(a.$n,{key:"cancel",variant:"link",onClick:ne},"Cancel")],ouiaId:"TimeConfigModal"},Y().createElement(l.B,{hasGutter:!0},Y().createElement(r.a,null,Y().createElement(s.h,{headingLevel:"h2"},"Action settings")),Y().createElement(r.a,null,Y().createElement(u.E,{component:u.Y.p},"Daily digest email receipt"),Y().createElement(c.E,null,Y().createElement(p.j,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),Y().createElement("br",null),Y().createElement(d.B,null,Y().createElement(m.o,{isFilled:!0},Y().createElement(l.B,{hasGutter:!0},Y().createElement(r.a,null,L.loading?Y().createElement(f.E,null):Y().createElement(v.s,{isChecked:!n,onChange:$,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),Y().createElement(r.a,null,L.loading?Y().createElement(f.E,null):Y().createElement(v.s,{isChecked:n,onChange:J,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&Y().createElement(Y().Fragment,null,Y().createElement(r.a,{className:"pf-v5-u-pl-lg"},Y().createElement(u.E,{component:u.Y.h6},"Time"),Y().createElement(y.A,{onChange:Q,time:null==A?void 0:A.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),Y().createElement(r.a,{className:"pf-v5-u-pl-lg"},Y().createElement(u.E,{component:u.Y.h6},"Time zone"),Y().createElement(_.$,{isOpen:K,onOpenChange:e=>Z(e),menu:Y().createElement(b.W,{ref:x,isPlain:!1},Y().createElement(E.r,{id:"timezoneMenu"},Y().createElement(g.c,{className:O},k.map((e=>Y().createElement(T.D,{onClick:X,key:e.text},e.text)))))),menuRef:x,toggle:Y().createElement(h.S,{id:"timezone",ref:M,onClick:()=>{Z(!K)},isExpanded:K},null!==(t=null==A?void 0:A.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),toggleRef:M}))))))))}},96787:(e,t,n)=>{"use strict";n.d(t,{P:()=>o,n:()=>i});var i,o,a=n(92164),l=n(80578),r=n(30589);!function(e){function t(){return r.Ik({bundle_id:B(),created:I().optional().nullable(),display_name:r.Yj(),id:B().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function n(){return r.Ik({display_name:r.Yj(),id:B()}).nonstrict()}function i(){return r.Ik({hasForcedEmail:r.zM().optional().nullable(),notifications:r.g1(r.zM()).optional().nullable()}).nonstrict()}function o(){return r.Ik({password:r.Yj().optional().nullable(),username:r.Yj().optional().nullable()}).nonstrict()}function a(){return r.Ik({created:I().optional().nullable(),endpoint:m().optional().nullable(),id:l().optional().nullable()}).nonstrict()}function l(){return r.Ik({behaviorGroupId:B(),endpointId:B()}).nonstrict()}function s(){return r.Ik({created:I().optional().nullable(),display_name:r.Yj(),id:B().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function u(){return r.Ik({applications:r.g1(i()).optional().nullable()}).nonstrict()}function c(){return r.Ik({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.zM(),extras:r.g1(r.Yj()).optional().nullable(),secret_token:r.Yj().optional().nullable(),url:r.Yj()}).nonstrict()}function p(){return r.Ik({group_id:B().optional().nullable(),ignore_preferences:r.zM(),only_admins:r.zM()}).nonstrict()}function d(){return r.k5(["INSTANT","DAILY"])}function m(){return r.Ik({created:I().optional().nullable(),description:r.Yj(),enabled:r.zM().optional().nullable(),id:B().optional().nullable(),name:r.Yj(),properties:r.KC([G(),p(),c()]).optional().nullable(),server_errors:r.ai().int().optional().nullable(),status:f().optional().nullable(),sub_type:r.Yj().optional().nullable(),type:v(),updated:I().optional().nullable()}).nonstrict()}function f(){return r.k5(["READY","UNKNOWN","NEW","PROVISIONING","DELETING","FAILED"])}function v(){return r.k5(["webhook","email_subscription","camel","ansible","drawer"])}function y(){return r.k5(["PROD","STAGE","EPHEMERAL","LOCAL_SERVER"])}function _(){return r.Ik({actions:r.YO(b()),application:r.Yj(),bundle:r.Yj(),created:I(),event_type:r.Yj(),id:B(),payload:r.Yj().optional().nullable()}).nonstrict()}function b(){return r.Ik({details:r.g1(r.L5()).optional().nullable(),endpoint_id:B().optional().nullable(),endpoint_sub_type:r.Yj().optional().nullable(),endpoint_type:v(),id:B(),status:E()}).nonstrict()}function E(){return r.k5(["SENT","SUCCESS","PROCESSING","FAILED","UNKNOWN"])}function g(){return r.Ik({application:t().optional().nullable(),application_id:B(),description:r.Yj().optional().nullable(),display_name:r.Yj(),fully_qualified_name:r.Yj().optional().nullable(),id:B().optional().nullable(),name:r.Yj()}).nonstrict()}function T(){return r.Ik({created:I().optional().nullable(),event_type:g().optional().nullable(),id:h().optional().nullable()}).nonstrict()}function h(){return r.Ik({behaviorGroupId:B(),eventTypeId:B()}).nonstrict()}function R(){return r.k5(["GET","POST","PUT"])}function I(){return r.Yj()}function N(){return r.Ik({count:r.ai().int()}).nonstrict()}function Y(){return r.k5(["FAILED_INTERNAL","FAILED_EXTERNAL","PROCESSING","SENT","SUCCESS"])}function k(){return r.k5(["UP","MAINTENANCE"])}function j(){return r.Ik({created:I().optional().nullable(),data:r.Yj(),description:r.Yj(),id:B().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function B(){return r.Yj()}function G(){return r.Ik({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.zM(),method:R(),secret_token:r.Yj().optional().nullable(),url:r.Yj()}).nonstrict()}e.AddAccessRequest=r.Ik({application_id:B().optional().nullable(),role:r.Yj().optional().nullable()}).nonstrict(),e.AddApplicationRequest=r.Ik({bundle_id:B(),display_name:r.Yj(),name:r.Yj(),owner_role:r.Yj().optional().nullable()}).nonstrict(),e.AggregationEmailTemplate=r.Ik({application:t().optional().nullable(),application_id:B().optional().nullable(),body_template:j().optional().nullable(),body_template_id:B(),created:I().optional().nullable(),id:B().optional().nullable(),subject_template:j().optional().nullable(),subject_template_id:B(),subscription_type:d(),updated:I().optional().nullable()}).nonstrict(),e.Application=t(),e.Application1=n(),e.ApplicationSettingsValue=i(),e.BasicAuthentication=o(),e.BehaviorGroup=r.Ik({actions:r.YO(a()).optional().nullable(),behaviors:r.YO(T()).optional().nullable(),bundle:s().optional().nullable(),bundle_id:B(),created:I().optional().nullable(),default_behavior:r.zM().optional().nullable(),display_name:r.Yj(),id:B().optional().nullable(),updated:I().optional().nullable()}).nonstrict(),e.BehaviorGroupAction=a(),e.BehaviorGroupActionId=l(),e.Bundle=s(),e.BundleSettingsValue=u(),e.CamelProperties=c(),e.CreateBehaviorGroupRequest=r.Ik({bundle_id:B().optional().nullable(),bundle_name:r.Yj().optional().nullable(),bundle_uuid_or_bundle_name_valid:r.zM().optional().nullable(),display_name:r.Yj(),endpoint_ids:r.YO(r.Yj()).optional().nullable(),event_type_ids:r.YO(r.Yj()).optional().nullable()}).nonstrict(),e.CreateBehaviorGroupResponse=r.Ik({bundle_id:B(),created:I(),display_name:r.Yj(),endpoints:r.YO(r.Yj()),event_types:r.YO(r.Yj()),id:B()}).nonstrict(),e.CurrentStatus=r.Ik({end_time:I().optional().nullable(),start_time:I().optional().nullable(),status:k()}).nonstrict(),e.DuplicateNameMigrationReport=r.Ik({updatedBehaviorGroups:r.ai().int().optional().nullable(),updatedIntegrations:r.ai().int().optional().nullable()}).nonstrict(),e.DrawerSubscriptionProperties=r.Ik({group_id:B().optional().nullable(),only_admins:r.zM()}).nonstrict(),e.EmailSubscriptionProperties=p(),e.EmailSubscriptionType=d(),e.Endpoint=m(),e.EndpointPage=r.Ik({data:r.YO(m()),links:r.g1(r.Yj()),meta:N()}).nonstrict(),e.EndpointProperties=r.L5(),e.EndpointStatus=f(),e.EndpointType=v(),e.Environment=y(),e.EventLogEntry=_(),e.EventLogEntryAction=b(),e.EventLogEntryActionStatus=E(),e.EventType=g(),e.EventTypeBehavior=T(),e.EventTypeBehaviorId=h(),e.Facet=function e(){return r.Ik({children:r.YO(r.RZ((()=>e()))).optional().nullable(),displayName:r.Yj(),id:r.Yj(),name:r.Yj()}).nonstrict()}(),e.HttpType=R(),e.InstantEmailTemplate=r.Ik({body_template:j().optional().nullable(),body_template_id:B(),created:I().optional().nullable(),event_type:g().optional().nullable(),event_type_id:B().optional().nullable(),id:B().optional().nullable(),subject_template:j().optional().nullable(),subject_template_id:B(),updated:I().optional().nullable()}).nonstrict(),e.InternalApplicationUserPermission=r.Ik({application_display_name:r.Yj(),application_id:B(),role:r.Yj()}).nonstrict(),e.InternalRoleAccess=r.Ik({application_id:B(),id:B().optional().nullable(),role:r.Yj()}).nonstrict(),e.InternalUserPermissions=r.Ik({applications:r.YO(n()),is_admin:r.zM(),roles:r.YO(r.Yj())}).nonstrict(),e.LocalDate=r.Yj(),e.LocalDateTime=I(),e.LocalTime=r.Yj(),e.MessageValidationResponse=r.Ik({errors:r.g1(r.YO(r.Yj()))}).nonstrict(),e.Meta=N(),e.NotificationHistory=r.Ik({created:I().optional().nullable(),details:r.g1(r.L5()).optional().nullable(),endpointId:B().optional().nullable(),endpointSubType:r.Yj().optional().nullable(),endpointType:v().optional().nullable(),id:B().optional().nullable(),invocationTime:r.ai().int(),status:Y()}).nonstrict(),e.NotificationStatus=Y(),e.PageEventLogEntry=r.Ik({data:r.YO(_()),links:r.g1(r.Yj()),meta:N()}).nonstrict(),e.PageEventType=r.Ik({data:r.YO(g()),links:r.g1(r.Yj()),meta:N()}).nonstrict(),e.RenderEmailTemplateRequest=r.Ik({payload:r.Yj(),template:r.YO(r.Yj())}).nonstrict(),e.RequestDefaultBehaviorGroupPropertyList=r.Ik({ignore_preferences:r.zM(),only_admins:r.zM()}).nonstrict(),e.RequestEmailSubscriptionProperties=r.Ik({group_id:B().optional().nullable(),only_admins:r.zM()}).nonstrict(),e.ServerInfo=r.Ik({environment:y().optional().nullable()}).nonstrict(),e.SettingsValues=r.Ik({bundles:r.g1(u()).optional().nullable()}).nonstrict(),e.Status=k(),e.Template=j(),e.TriggerDailyDigestRequest=r.Ik({application_name:r.Yj(),bundle_name:r.Yj(),end:I().optional().nullable(),org_id:r.Yj(),start:I().optional().nullable()}).nonstrict(),e.UUID=B(),e.UpdateBehaviorGroupRequest=r.Ik({display_name:r.Yj().optional().nullable(),display_name_not_null_and_blank:r.zM().optional().nullable(),endpoint_ids:r.YO(r.Yj()).optional().nullable(),event_type_ids:r.YO(r.Yj()).optional().nullable()}).nonstrict(),e.UserConfigPreferences=r.Ik({daily_email:r.zM().optional().nullable(),instant_email:r.zM().optional().nullable()}).nonstrict(),e.WebhookProperties=G(),e.__Empty=r.Yj().max(0).optional()}(i||(i={})),function(e){let t,n,o,s,u,c,p,d,m,f,v,y,_,b,E,g,T,h,R,I,N,Y,k;!function(e){const t=r.Yj();e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/notifications/behaviorGroups").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.CreateBehaviorGroupResponse,"CreateBehaviorGroupResponse",200),new a.ValidateRule(t,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(t=e.NotificationResourceCreateBehaviorGroup||(e.NotificationResourceCreateBehaviorGroup={})),function(e){const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}".replace("{endpointId}",e.endpointId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(n=e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint||(e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint={})),function(e){r.YO(r.Yj());const t=r.Yj();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{behaviorGroupId}/actions".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(o=e.NotificationResourceUpdateBehaviorGroupActions||(e.NotificationResourceUpdateBehaviorGroupActions={})),function(e){const t=r.zM(),n=r.Yj(),o=r.Yj();e.actionCreator=e=>{const r="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("PUT",r).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(n,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403),new a.ValidateRule(o,"unknown",404)]}).build()}}(s=e.NotificationResourceUpdateBehaviorGroup||(e.NotificationResourceUpdateBehaviorGroup={})),function(e){const t=r.zM();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("DELETE",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(u=e.NotificationResourceDeleteBehaviorGroup||(e.NotificationResourceDeleteBehaviorGroup={})),function(e){const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/bundles/{bundleId}/behaviorGroups".replace("{bundleId}",e.bundleId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(c=e.NotificationResourceFindBehaviorGroupsByBundleId||(e.NotificationResourceFindBehaviorGroupsByBundleId={})),function(e){r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}".replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Bundle,"Bundle",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(p=e.NotificationResourceGetBundleByName||(e.NotificationResourceGetBundleByName={})),function(e){r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Application,"Application",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(d=e.NotificationResourceGetApplicationByNameAndBundleName||(e.NotificationResourceGetApplicationByNameAndBundleName={})),function(e){r.Yj(),r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}/eventTypes/{eventTypeName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString()).replace("{eventTypeName}",e.eventTypeName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.EventType,"EventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(m=e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName||(e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName={})),function(e){r.YO(r.Yj()),r.Yj(),r.ai().int(),r.ai().int(),r.ai().int(),r.Yj(),e.actionCreator=e=>{const t={};return void 0!==e.applicationIds&&(t.applicationIds=e.applicationIds),void 0!==e.bundleId&&(t.bundleId=e.bundleId),void 0!==e.eventTypeName&&(t.eventTypeName=e.eventTypeName),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/eventTypes").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventType,"PageEventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(f=e.NotificationResourceGetEventTypes||(e.NotificationResourceGetEventTypes={})),function(e){const t=r.YO(i.EventType);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/affectedByRemovalOfBehaviorGroup/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(v=e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup||(e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup={})),function(e){r.ai().int(),r.ai().int(),r.ai().int(),r.Yj();const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString()),o={};return void 0!==e.limit&&(o.limit=e.limit),void 0!==e.offset&&(o.offset=e.offset),void 0!==e.pageNumber&&(o.pageNumber=e.pageNumber),void 0!==e.sortBy&&(o.sort_by=e.sortBy),(0,l.actionBuilder)("GET",n).queryParams(o).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(y=e.NotificationResourceGetLinkedBehaviorGroups||(e.NotificationResourceGetLinkedBehaviorGroups={})),function(e){r.YO(r.Yj());const t=r.Yj();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(_=e.NotificationResourceUpdateEventTypeBehaviors||(e.NotificationResourceUpdateEventTypeBehaviors={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString()).replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("DELETE",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(b=e.NotificationResourceDeleteBehaviorGroupFromEventType||(e.NotificationResourceDeleteBehaviorGroupFromEventType={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeUuid}/behaviorGroups/{behaviorGroupUuid}".replace("{behaviorGroupUuid}",e.behaviorGroupUuid.toString()).replace("{eventTypeUuid}",e.eventTypeUuid.toString());return(0,l.actionBuilder)("PUT",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(E=e.NotificationResourceAppendBehaviorGroupToEventType||(e.NotificationResourceAppendBehaviorGroupToEventType={})),function(e){r.YO(r.Yj()),r.YO(r.Yj()),r.YO(r.Yj()),r.Yj(),r.zM(),r.zM(),r.zM(),r.YO(r.zM()),r.ai().int(),r.ai().int(),r.ai().int(),r.Yj(),r.YO(i.EventLogEntryActionStatus),e.actionCreator=e=>{const t={};return void 0!==e.appIds&&(t.appIds=e.appIds),void 0!==e.bundleIds&&(t.bundleIds=e.bundleIds),void 0!==e.endDate&&(t.endDate=e.endDate),void 0!==e.endpointTypes&&(t.endpointTypes=e.endpointTypes),void 0!==e.eventTypeDisplayName&&(t.eventTypeDisplayName=e.eventTypeDisplayName),void 0!==e.includeActions&&(t.includeActions=e.includeActions),void 0!==e.includeDetails&&(t.includeDetails=e.includeDetails),void 0!==e.includePayload&&(t.includePayload=e.includePayload),void 0!==e.invocationResults&&(t.invocationResults=e.invocationResults),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),void 0!==e.startDate&&(t.startDate=e.startDate),void 0!==e.status&&(t.status=e.status),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/events").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventLogEntry,"PageEventLogEntry",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(g=e.EventResourceGetEvents||(e.EventResourceGetEvents={})),function(e){r.Yj();const t=r.YO(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.bundleName&&(n.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/applications").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(T=e.NotificationResourceGetApplicationsFacets||(e.NotificationResourceGetApplicationsFacets={})),function(e){r.zM();const t=r.YO(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.includeApplications&&(n.includeApplications=e.includeApplications),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/bundles").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(h=e.NotificationResourceGetBundleFacets||(e.NotificationResourceGetBundleFacets={})),function(e){e.actionCreator=()=>(0,l.actionBuilder)("GET","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(R=e.OrgConfigResourceGetDailyDigestTimePreference||(e.OrgConfigResourceGetDailyDigestTimePreference={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("PUT","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(I=e.OrgConfigResourceSaveDailyDigestTimePreference||(e.OrgConfigResourceSaveDailyDigestTimePreference={})),function(e){r.Yj(),e.actionCreator=e=>{const t={};return void 0!==e.bundleName&&(t.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/user-config/notification-preference").queryParams(t).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}}(N=e.UserConfigResourceGetSettingsSchema||(e.UserConfigResourceGetSettingsSchema={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/user-config/notification-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}(Y=e.UserConfigResourceSaveSettings||(e.UserConfigResourceSaveSettings={})),function(e){r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/user-config/notification-preference/{bundleName}/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.UserConfigPreferences,"UserConfigPreferences",200)]}).build()}}(k=e.UserConfigResourceGetPreferences||(e.UserConfigResourceGetPreferences={}))}(o||(o={}))},33408:(e,t,n)=>{"use strict";n.d(t,{D:()=>o,Ij:()=>r,K0:()=>u,_n:()=>a,ij:()=>i,tr:()=>l});const i=e=>e.type===a.EMAIL_SUBSCRIPTION||e.type===a.DRAWER,o=e=>e.type===a.INTEGRATION;var a;function l(e){return e.type===a.EMAIL_SUBSCRIPTION}function r(e){return e.type===a.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(a||(a={}));const s=e=>e.map((e=>void 0===e?[void 0]:e.type===a.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),u=(e,t)=>{if(e.length!==t.length)return!1;const n=s(e),i=s(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},92200:(e,t,n)=>{"use strict";n.d(t,{AJ:()=>l,cx:()=>r,sT:()=>o});class i{constructor(e){this.displayName=e}}class o extends i{constructor(e){super(e.name+(e.isEnabled?"":" - Disabled")),this.integration=e}getKey(){return this.integration.id}equals(e){return e instanceof o&&e.integration.id===this.integration.id}}class a extends i{constructor(e,t,n,i){super(e),this.key=i,this.description=t,this.integrationId=n}getKey(){return this.key}}class l extends a{constructor(e,t,n){let i,o;t?(i="Admins",o="Organization administrators for your account"):(i="All",o="All users in your organization who subscribed to this email in their Notification Preferences"),super(i,o,e,t?"users-admin":"users-all"),this.sendToAdmin=t,this.ignorePreferences=n}equals(e){return e instanceof l&&e.sendToAdmin===this.sendToAdmin&&e.ignorePreferences===this.ignorePreferences}}class r extends a{constructor(e,t,n){let i,o,a;"string"==typeof n?(i=n,o=!1,a=!1):(i="Loading",o=n,a=!n),super(i,void 0,e,`rbac-group-${t}`),this.groupId=t,this.isLoading=o,this.hasError=a}equals(e){return e instanceof r&&e.groupId===this.groupId}}},22259:(e,t,n)=>{"use strict";n.d(t,{B7:()=>c,oU:()=>u,qe:()=>d,vm:()=>l});var i=n(18740),o=n(6568),a=n(34333);const l=e=>{for(const t of Object.values(a.pq))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},r=(e,t)=>null===e?t:e,s=e=>""===e?void 0:r(e),u=e=>{var t,n;const u={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:l(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,a.vZ)(u.type))return((e,t)=>{var n,i,o,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:r(null===(o=null==t?void 0:t.basic_authentication)||void 0===o?void 0:o.username,""),pass:r(null===(a=null==t?void 0:t.basic_authentication)||void 0===a?void 0:a.password,"")},extras:r(null==t?void 0:t.extras)}})(u,e.properties);switch(u.type){case a.pq.WEBHOOK:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.n.HttpType.Enum.GET}})(u,e.properties);case a.pq.ANSIBLE:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.n.HttpType.Enum.POST}})(u,e.properties);case a.pq.EMAIL_SUBSCRIPTION:case a.pq.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(u,e.properties);default:(0,i.xb)(u.type)}},c=e=>e.map(u),p=e=>{const t=e.type;if((0,a.vZ)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case a.pq.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken)}}case a.pq.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),method:t.method}}case a.pq.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case a.pq.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,i.xb)(t)}},d=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:p(e)}}},17368:(e,t,n)=>{"use strict";n.d(t,{h:()=>l});var i=n(58274),o=n(97656),a=n(61225);const l=()=>{const e=(0,a.useDispatch)();return(0,o.useMemo)((()=>{const t=(t,n,o,a)=>e((0,i.addNotification)({variant:t,title:n,description:o,dismissable:a}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}},79826:()=>{},16789:()=>{},95067:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},56905:()=>{},29697:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},26078:()=>{},5637:()=>{},13409:()=>{},97553:()=>{},98469:()=>{},27077:()=>{},2580:()=>{},83696:()=>{},82804:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1157.835f24b46c0693f4e9fb522df5d420cd.js.map
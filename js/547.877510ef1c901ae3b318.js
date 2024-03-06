"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[547,794],{20687:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(85893),o=n(94184),a=n.n(o),l=n(21242),r=n(43551),s=function(){return s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};const u=function(e){var t=e.utcStartTime,n=void 0===t?"10am":t,o=e.utcEndTime,u=void 0===o?"12am":o,c=e.startTime,d=void 0===c?"6am":c,p=e.endTime,m=void 0===p?"8am":p,_=e.timeZone,y=void 0===_?"EST":_,f=e.description,v=e.redirectLink,b=void 0===v?"https://status.redhat.com/incidents":v,E=e.className,g=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}(e,["utcStartTime","utcEndTime","startTime","endTime","timeZone","description","redirectLink","className"]),R=a()(E,"ins-c-empty-state__maintenance");return(0,i.jsxs)(l.EmptyState,s({className:R},g,{children:[(0,i.jsx)(l.EmptyStateIcon,{icon:r.HourglassHalfIcon}),(0,i.jsx)(l.Title,s({headingLevel:"h4",size:"lg"},{children:"Maintenance in progress"})),(0,i.jsx)(l.EmptyStateBody,{children:f||(0,i.jsxs)(l.Stack,{children:[(0,i.jsx)(l.StackItem,{children:"We are currently undergoing scheduled maintenance and will be"}),(0,i.jsxs)(l.StackItem,{children:["unavailable from ",n," to ",u," UTC (",d,"-",m," ",y,")."]}),(0,i.jsxs)(l.StackItem,{children:["For more information please visit ",(0,i.jsx)("a",s({href:b},{children:"status.redhat.com"})),"."]})]})})]}))}},20745:(e,t,n)=>{var i=n(25131);t.s=i.createRoot,i.hydrateRoot},73204:(e,t,n)=>{n.r(t);var i=n(10756),o=n.n(i),a=n(20745),l=n(24478),r=n(55128),s=n(18172),u=n(52890),c=n(94782),d=n(28216),p=n(83130),m=n(21242),_=n(20687),y=n(55140),f=n(21472),v=n(42150),b=n(83050),E=n(58399),g=n(54926),R=n(84456),T=n(96986),h=n(56335),I=n(3121);const N="HH:mm",S="hh:mma",B=()=>{const{updateDocumentTitle:e}=(0,y.Z)();null==e||e("Notifications");const{rbac:t,server:n,isOrgAdmin:o}=(0,I.q)(),a=(0,r.getInsights)(),[l,s]=i.useState(!1),u=i.useCallback((e=>{e?(a.chrome.getEnvironmentOriginal=a.chrome.getEnvironment,a.chrome.getEnvironment=()=>"ci"):a.chrome.getEnvironment=a.chrome.getEnvironmentOriginal,s(e)}),[a]);if(!t||!n)return i.createElement(T.D,null);if(n.status===g.U.MAINTENANCE){const e=(0,f.Z)((0,r.toUtc)(n.from),N),t=(0,f.Z)((0,r.toUtc)(n.to),N),o=(0,f.Z)(n.from,S),a=(0,f.Z)(n.to,S),l=(0,f.Z)(n.to,"O");return i.createElement(_.Z,{utcStartTime:e,utcEndTime:t,startTime:o,endTime:a,timeZone:l})}return i.createElement(R.I.Provider,{value:{rbac:t,server:n,isOrgAdmin:!!o}},i.createElement(h.d,null,i.createElement(v.q,null),i.createElement(r.InsightsEnvDetector,{insights:a,onEnvironment:E.ok},i.createElement(r.RenderIfTrue,null,i.createElement(m.Switch,{className:"pf-v5-u-p-sm",isChecked:l,onChange:u,labelOff:"Enable experimental features",label:"Disable experimental features"}))),i.createElement(b.Z,null)))};var G=n(9241);(0,s.MD)();const w=document.getElementById("root");(0,a.s)(w).render(o().createElement((e=>{const t=o().useMemo((()=>(0,r.createFetchingClient)(r.getInsights,{responseInterceptors:[u.validateSchemaResponseInterceptor]})),[]),n=o().useMemo((()=>(e.logger?(0,G.b)(e.logger):(0,G.b)()).getStore()),[e.logger]);return o().createElement(l.Z,{locale:navigator.language.slice(0,2),messages:p,onError:console.log},o().createElement(d.Provider,{store:n},o().createElement(c.ClientContextProvider,{client:t},o().createElement(B,null))))}),null))},35794:(e,t,n)=>{n.d(t,{TimeConfigComponent:()=>y});var i=n(21242),o=n(78343),a=n(10756),l=n.n(a),r=n(65326),s=n(8813),u=n(94782),c=n(16721);const d=e=>c.B.OrgConfigResourceSaveDailyDigestTimePreference.actionCreator({body:e.body});var p=n(21503);const m=(0,s.style)({width:"280px"}),_=(0,s.style)({marginTop:"12px"}),y=()=>{var e,t;const[n,s]=l().useState(!1),[y,f]=l().useState(),[v,b]=(0,a.useState)(!1),E=(0,u.useQuery)(c.B.OrgConfigResourceGetDailyDigestTimePreference.actionCreator()),g=(0,u.useMutation)(d),{addSuccessNotification:R,addDangerNotification:T}=(0,p.l)(),h=(0,a.useMemo)((()=>{var e;if(200===E.status)return null===(e=E.payload)||void 0===e?void 0:e.value}),[null===(e=E.payload)||void 0===e?void 0:e.value,E.status]);(0,a.useEffect)((()=>{h&&(f({baseCustomTime:h,utcTime:h,timezoneText:void 0}),s("00:00:00"!==h))}),[h]);const I=l().useCallback((()=>{s(!1),f({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[N,S]=l().useState(!1),B=r.map((e=>l().createElement(i.DropdownItem,{key:e.text},e.text))),G=l().useCallback((()=>{s(!0)}),[]),w=l().useCallback((e=>{f({baseCustomTime:e,utcTime:e,timezoneText:void 0})}),[]),C=l().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=r.find((e=>e.text===t));n&&f((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const a=(0,o.Z)(i,-n.offset),l=a.getUTCHours().toString().padStart(2,"0"),r=a.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${l}:${r}`,timezoneText:n.text}}return e}))}S(!1)}),[]),Z=l().useCallback((()=>{y&&(0,g.mutate)({body:y.utcTime}).then((e=>{204===e.status?R("Action settings saved",""):T("Failed to save action settings","")})),b(!1)}),[T,R,g.mutate,y]),A=g.loading||E.loading,P=()=>{b(!v)};return l().createElement(l().Fragment,null,l().createElement(i.Alert,{className:_,isInline:!0,title:`Any daily digest emails you've opted into will be sent at ${h||"00:00"} UTC`,actionLinks:l().createElement(i.AlertActionLink,{onClick:P,ouiaId:"TimeConfigModal"},"Edit time settings")}),l().createElement(i.Modal,{className:"pf-v5-u-pl-xl",variant:i.ModalVariant.small,isOpen:v,onClose:P,actions:[l().createElement(i.Button,{key:"save",variant:"primary",type:"submit",isLoading:A,isDisabled:A,onClick:Z},A?"Loading":"Save"),l().createElement(i.Button,{key:"cancel",variant:"link",onClick:P},"Cancel")],ouiaId:"TimeConfigModal"},l().createElement(i.Stack,{hasGutter:!0},l().createElement(i.StackItem,null,l().createElement(i.Title,{headingLevel:"h2"},"Action settings")),l().createElement(i.StackItem,null,l().createElement(i.Text,{component:i.TextVariants.p},"Daily digest email receipt"),l().createElement(i.HelperText,null,l().createElement(i.HelperTextItem,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),l().createElement("br",null),l().createElement(i.Split,null,l().createElement(i.SplitItem,{isFilled:!0},l().createElement(i.Stack,{hasGutter:!0},l().createElement(i.StackItem,null,E.loading?l().createElement(i.Skeleton,null):l().createElement(i.Radio,{isChecked:!n,onChange:I,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),l().createElement(i.StackItem,null,E.loading?l().createElement(i.Skeleton,null):l().createElement(i.Radio,{isChecked:n,onChange:G,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&l().createElement(l().Fragment,null,l().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},l().createElement(i.Text,{component:i.TextVariants.h6},"Time"),l().createElement(i.TimePicker,{onChange:w,time:null==y?void 0:y.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),l().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},l().createElement(i.Text,{component:i.TextVariants.h6},"Time zone"),l().createElement(i.Dropdown,{className:m,toggle:l().createElement(i.DropdownToggle,{isOpen:N,id:"timezone",onToggle:()=>S(!N)},null!==(t=null==y?void 0:y.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),isOpen:N,onSelect:C,menuAppendTo:()=>document.body,dropdownItems:B}))))))))}},16721:(e,t,n)=>{n.d(t,{B:()=>o,l:()=>i});var i,o,a=n(70070),l=n(52890),r=n(53784);!function(e){function t(){return r.Ry({bundle_id:w(),created:I().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:I().optional().nullable()}).nonstrict()}function n(){return r.Ry({display_name:r.Z_(),id:w()}).nonstrict()}function i(){return r.Ry({hasForcedEmail:r.O7().optional().nullable(),notifications:r.IM(r.O7()).optional().nullable()}).nonstrict()}function o(){return r.Ry({password:r.Z_().optional().nullable(),username:r.Z_().optional().nullable()}).nonstrict()}function a(){return r.Ry({created:I().optional().nullable(),endpoint:m().optional().nullable(),id:l().optional().nullable()}).nonstrict()}function l(){return r.Ry({behaviorGroupId:w(),endpointId:w()}).nonstrict()}function s(){return r.Ry({created:I().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:I().optional().nullable()}).nonstrict()}function u(){return r.Ry({applications:r.IM(i()).optional().nullable()}).nonstrict()}function c(){return r.Ry({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.O7(),extras:r.IM(r.Z_()).optional().nullable(),secret_token:r.Z_().optional().nullable(),url:r.Z_()}).nonstrict()}function d(){return r.Ry({group_id:w().optional().nullable(),ignore_preferences:r.O7(),only_admins:r.O7()}).nonstrict()}function p(){return r.Km(["INSTANT","DAILY"])}function m(){return r.Ry({created:I().optional().nullable(),description:r.Z_(),enabled:r.O7().optional().nullable(),id:w().optional().nullable(),name:r.Z_(),properties:r.G0([C(),d(),c()]).optional().nullable(),server_errors:r.Rx().int().optional().nullable(),status:_().optional().nullable(),sub_type:r.Z_().optional().nullable(),type:y(),updated:I().optional().nullable()}).nonstrict()}function _(){return r.Km(["READY","UNKNOWN","NEW","PROVISIONING","DELETING","FAILED"])}function y(){return r.Km(["webhook","email_subscription","camel","ansible","drawer"])}function f(){return r.Km(["PROD","STAGE","EPHEMERAL","LOCAL_SERVER"])}function v(){return r.Ry({actions:r.IX(b()),application:r.Z_(),bundle:r.Z_(),created:I(),event_type:r.Z_(),id:w(),payload:r.Z_().optional().nullable()}).nonstrict()}function b(){return r.Ry({details:r.IM(r._4()).optional().nullable(),endpoint_id:w().optional().nullable(),endpoint_sub_type:r.Z_().optional().nullable(),endpoint_type:y(),id:w(),status:E()}).nonstrict()}function E(){return r.Km(["SENT","SUCCESS","PROCESSING","FAILED","UNKNOWN"])}function g(){return r.Ry({application:t().optional().nullable(),application_id:w(),description:r.Z_().optional().nullable(),display_name:r.Z_(),fully_qualified_name:r.Z_().optional().nullable(),id:w().optional().nullable(),name:r.Z_()}).nonstrict()}function R(){return r.Ry({created:I().optional().nullable(),event_type:g().optional().nullable(),id:T().optional().nullable()}).nonstrict()}function T(){return r.Ry({behaviorGroupId:w(),eventTypeId:w()}).nonstrict()}function h(){return r.Km(["GET","POST","PUT"])}function I(){return r.Z_()}function N(){return r.Ry({count:r.Rx().int()}).nonstrict()}function S(){return r.Km(["FAILED_INTERNAL","FAILED_EXTERNAL","PROCESSING","SENT","SUCCESS"])}function B(){return r.Km(["UP","MAINTENANCE"])}function G(){return r.Ry({created:I().optional().nullable(),data:r.Z_(),description:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:I().optional().nullable()}).nonstrict()}function w(){return r.Z_()}function C(){return r.Ry({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.O7(),method:h(),secret_token:r.Z_().optional().nullable(),url:r.Z_()}).nonstrict()}e.AddAccessRequest=r.Ry({application_id:w().optional().nullable(),role:r.Z_().optional().nullable()}).nonstrict(),e.AddApplicationRequest=r.Ry({bundle_id:w(),display_name:r.Z_(),name:r.Z_(),owner_role:r.Z_().optional().nullable()}).nonstrict(),e.AggregationEmailTemplate=r.Ry({application:t().optional().nullable(),application_id:w().optional().nullable(),body_template:G().optional().nullable(),body_template_id:w(),created:I().optional().nullable(),id:w().optional().nullable(),subject_template:G().optional().nullable(),subject_template_id:w(),subscription_type:p(),updated:I().optional().nullable()}).nonstrict(),e.Application=t(),e.Application1=n(),e.ApplicationSettingsValue=i(),e.BasicAuthentication=o(),e.BehaviorGroup=r.Ry({actions:r.IX(a()).optional().nullable(),behaviors:r.IX(R()).optional().nullable(),bundle:s().optional().nullable(),bundle_id:w(),created:I().optional().nullable(),default_behavior:r.O7().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),updated:I().optional().nullable()}).nonstrict(),e.BehaviorGroupAction=a(),e.BehaviorGroupActionId=l(),e.Bundle=s(),e.BundleSettingsValue=u(),e.CamelProperties=c(),e.CreateBehaviorGroupRequest=r.Ry({bundle_id:w().optional().nullable(),bundle_name:r.Z_().optional().nullable(),bundle_uuid_or_bundle_name_valid:r.O7().optional().nullable(),display_name:r.Z_(),endpoint_ids:r.IX(r.Z_()).optional().nullable(),event_type_ids:r.IX(r.Z_()).optional().nullable()}).nonstrict(),e.CreateBehaviorGroupResponse=r.Ry({bundle_id:w(),created:I(),display_name:r.Z_(),endpoints:r.IX(r.Z_()),event_types:r.IX(r.Z_()),id:w()}).nonstrict(),e.CurrentStatus=r.Ry({end_time:I().optional().nullable(),start_time:I().optional().nullable(),status:B()}).nonstrict(),e.DuplicateNameMigrationReport=r.Ry({updatedBehaviorGroups:r.Rx().int().optional().nullable(),updatedIntegrations:r.Rx().int().optional().nullable()}).nonstrict(),e.DrawerSubscriptionProperties=r.Ry({group_id:w().optional().nullable(),only_admins:r.O7()}).nonstrict(),e.EmailSubscriptionProperties=d(),e.EmailSubscriptionType=p(),e.Endpoint=m(),e.EndpointPage=r.Ry({data:r.IX(m()),links:r.IM(r.Z_()),meta:N()}).nonstrict(),e.EndpointProperties=r._4(),e.EndpointStatus=_(),e.EndpointType=y(),e.Environment=f(),e.EventLogEntry=v(),e.EventLogEntryAction=b(),e.EventLogEntryActionStatus=E(),e.EventType=g(),e.EventTypeBehavior=R(),e.EventTypeBehaviorId=T(),e.Facet=function e(){return r.Ry({children:r.IX(r.Vo((()=>e()))).optional().nullable(),displayName:r.Z_(),id:r.Z_(),name:r.Z_()}).nonstrict()}(),e.HttpType=h(),e.InstantEmailTemplate=r.Ry({body_template:G().optional().nullable(),body_template_id:w(),created:I().optional().nullable(),event_type:g().optional().nullable(),event_type_id:w().optional().nullable(),id:w().optional().nullable(),subject_template:G().optional().nullable(),subject_template_id:w(),updated:I().optional().nullable()}).nonstrict(),e.InternalApplicationUserPermission=r.Ry({application_display_name:r.Z_(),application_id:w(),role:r.Z_()}).nonstrict(),e.InternalRoleAccess=r.Ry({application_id:w(),id:w().optional().nullable(),role:r.Z_()}).nonstrict(),e.InternalUserPermissions=r.Ry({applications:r.IX(n()),is_admin:r.O7(),roles:r.IX(r.Z_())}).nonstrict(),e.LocalDate=r.Z_(),e.LocalDateTime=I(),e.LocalTime=r.Z_(),e.MessageValidationResponse=r.Ry({errors:r.IM(r.IX(r.Z_()))}).nonstrict(),e.Meta=N(),e.NotificationHistory=r.Ry({created:I().optional().nullable(),details:r.IM(r._4()).optional().nullable(),endpointId:w().optional().nullable(),endpointSubType:r.Z_().optional().nullable(),endpointType:y().optional().nullable(),id:w().optional().nullable(),invocationTime:r.Rx().int(),status:S()}).nonstrict(),e.NotificationStatus=S(),e.PageEventLogEntry=r.Ry({data:r.IX(v()),links:r.IM(r.Z_()),meta:N()}).nonstrict(),e.PageEventType=r.Ry({data:r.IX(g()),links:r.IM(r.Z_()),meta:N()}).nonstrict(),e.RenderEmailTemplateRequest=r.Ry({payload:r.Z_(),template:r.IX(r.Z_())}).nonstrict(),e.RequestDefaultBehaviorGroupPropertyList=r.Ry({ignore_preferences:r.O7(),only_admins:r.O7()}).nonstrict(),e.RequestEmailSubscriptionProperties=r.Ry({group_id:w().optional().nullable(),only_admins:r.O7()}).nonstrict(),e.ServerInfo=r.Ry({environment:f().optional().nullable()}).nonstrict(),e.SettingsValues=r.Ry({bundles:r.IM(u()).optional().nullable()}).nonstrict(),e.Status=B(),e.Template=G(),e.TriggerDailyDigestRequest=r.Ry({application_name:r.Z_(),bundle_name:r.Z_(),end:I().optional().nullable(),org_id:r.Z_(),start:I().optional().nullable()}).nonstrict(),e.UUID=w(),e.UpdateBehaviorGroupRequest=r.Ry({display_name:r.Z_().optional().nullable(),display_name_not_null_and_blank:r.O7().optional().nullable(),endpoint_ids:r.IX(r.Z_()).optional().nullable(),event_type_ids:r.IX(r.Z_()).optional().nullable()}).nonstrict(),e.UserConfigPreferences=r.Ry({daily_email:r.O7().optional().nullable(),instant_email:r.O7().optional().nullable()}).nonstrict(),e.WebhookProperties=C(),e.__Empty=r.Z_().max(0).optional()}(i||(i={})),function(e){let t,n,o,s,u,c,d,p,m,_,y,f,v,b,E,g,R,T,h,I,N,S,B;!function(e){const t=r.Z_();e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/notifications/behaviorGroups").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.CreateBehaviorGroupResponse,"CreateBehaviorGroupResponse",200),new a.ValidateRule(t,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(t=e.NotificationResourceCreateBehaviorGroup||(e.NotificationResourceCreateBehaviorGroup={})),function(e){const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}".replace("{endpointId}",e.endpointId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(n=e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint||(e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint={})),function(e){r.IX(r.Z_());const t=r.Z_();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{behaviorGroupId}/actions".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(o=e.NotificationResourceUpdateBehaviorGroupActions||(e.NotificationResourceUpdateBehaviorGroupActions={})),function(e){const t=r.O7(),n=r.Z_(),o=r.Z_();e.actionCreator=e=>{const r="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("PUT",r).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(n,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403),new a.ValidateRule(o,"unknown",404)]}).build()}}(s=e.NotificationResourceUpdateBehaviorGroup||(e.NotificationResourceUpdateBehaviorGroup={})),function(e){const t=r.O7();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("DELETE",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(u=e.NotificationResourceDeleteBehaviorGroup||(e.NotificationResourceDeleteBehaviorGroup={})),function(e){const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/bundles/{bundleId}/behaviorGroups".replace("{bundleId}",e.bundleId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(c=e.NotificationResourceFindBehaviorGroupsByBundleId||(e.NotificationResourceFindBehaviorGroupsByBundleId={})),function(e){r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}".replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Bundle,"Bundle",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(d=e.NotificationResourceGetBundleByName||(e.NotificationResourceGetBundleByName={})),function(e){r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Application,"Application",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(p=e.NotificationResourceGetApplicationByNameAndBundleName||(e.NotificationResourceGetApplicationByNameAndBundleName={})),function(e){r.Z_(),r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}/eventTypes/{eventTypeName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString()).replace("{eventTypeName}",e.eventTypeName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.EventType,"EventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(m=e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName||(e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName={})),function(e){r.IX(r.Z_()),r.Z_(),r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_(),e.actionCreator=e=>{const t={};return void 0!==e.applicationIds&&(t.applicationIds=e.applicationIds),void 0!==e.bundleId&&(t.bundleId=e.bundleId),void 0!==e.eventTypeName&&(t.eventTypeName=e.eventTypeName),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/eventTypes").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventType,"PageEventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(_=e.NotificationResourceGetEventTypes||(e.NotificationResourceGetEventTypes={})),function(e){const t=r.IX(i.EventType);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/affectedByRemovalOfBehaviorGroup/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(y=e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup||(e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup={})),function(e){r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_();const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString()),o={};return void 0!==e.limit&&(o.limit=e.limit),void 0!==e.offset&&(o.offset=e.offset),void 0!==e.pageNumber&&(o.pageNumber=e.pageNumber),void 0!==e.sortBy&&(o.sort_by=e.sortBy),(0,l.actionBuilder)("GET",n).queryParams(o).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(f=e.NotificationResourceGetLinkedBehaviorGroups||(e.NotificationResourceGetLinkedBehaviorGroups={})),function(e){r.IX(r.Z_());const t=r.Z_();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(v=e.NotificationResourceUpdateEventTypeBehaviors||(e.NotificationResourceUpdateEventTypeBehaviors={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString()).replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("DELETE",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(b=e.NotificationResourceDeleteBehaviorGroupFromEventType||(e.NotificationResourceDeleteBehaviorGroupFromEventType={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeUuid}/behaviorGroups/{behaviorGroupUuid}".replace("{behaviorGroupUuid}",e.behaviorGroupUuid.toString()).replace("{eventTypeUuid}",e.eventTypeUuid.toString());return(0,l.actionBuilder)("PUT",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(E=e.NotificationResourceAppendBehaviorGroupToEventType||(e.NotificationResourceAppendBehaviorGroupToEventType={})),function(e){r.IX(r.Z_()),r.IX(r.Z_()),r.IX(r.Z_()),r.Z_(),r.O7(),r.O7(),r.O7(),r.IX(r.O7()),r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_(),r.IX(i.EventLogEntryActionStatus),e.actionCreator=e=>{const t={};return void 0!==e.appIds&&(t.appIds=e.appIds),void 0!==e.bundleIds&&(t.bundleIds=e.bundleIds),void 0!==e.endDate&&(t.endDate=e.endDate),void 0!==e.endpointTypes&&(t.endpointTypes=e.endpointTypes),void 0!==e.eventTypeDisplayName&&(t.eventTypeDisplayName=e.eventTypeDisplayName),void 0!==e.includeActions&&(t.includeActions=e.includeActions),void 0!==e.includeDetails&&(t.includeDetails=e.includeDetails),void 0!==e.includePayload&&(t.includePayload=e.includePayload),void 0!==e.invocationResults&&(t.invocationResults=e.invocationResults),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),void 0!==e.startDate&&(t.startDate=e.startDate),void 0!==e.status&&(t.status=e.status),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/events").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventLogEntry,"PageEventLogEntry",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(g=e.EventResourceGetEvents||(e.EventResourceGetEvents={})),function(e){r.Z_();const t=r.IX(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.bundleName&&(n.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/applications").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(R=e.NotificationResourceGetApplicationsFacets||(e.NotificationResourceGetApplicationsFacets={})),function(e){r.O7();const t=r.IX(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.includeApplications&&(n.includeApplications=e.includeApplications),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/bundles").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(T=e.NotificationResourceGetBundleFacets||(e.NotificationResourceGetBundleFacets={})),function(e){e.actionCreator=()=>(0,l.actionBuilder)("GET","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(h=e.OrgConfigResourceGetDailyDigestTimePreference||(e.OrgConfigResourceGetDailyDigestTimePreference={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("PUT","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(I=e.OrgConfigResourceSaveDailyDigestTimePreference||(e.OrgConfigResourceSaveDailyDigestTimePreference={})),function(e){r.Z_(),e.actionCreator=e=>{const t={};return void 0!==e.bundleName&&(t.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/user-config/notification-preference").queryParams(t).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}}(N=e.UserConfigResourceGetSettingsSchema||(e.UserConfigResourceGetSettingsSchema={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/user-config/notification-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}(S=e.UserConfigResourceSaveSettings||(e.UserConfigResourceSaveSettings={})),function(e){r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/user-config/notification-preference/{bundleName}/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.UserConfigPreferences,"UserConfigPreferences",200)]}).build()}}(B=e.UserConfigResourceGetPreferences||(e.UserConfigResourceGetPreferences={}))}(o||(o={}))},56437:(e,t,n)=>{n.d(t,{K4:()=>l,L6:()=>r,VL:()=>u,Yh:()=>i,_f:()=>o,k$:()=>a});const i=e=>e.type===a.EMAIL_SUBSCRIPTION||e.type===a.DRAWER,o=e=>e.type===a.INTEGRATION;var a;function l(e){return e.type===a.EMAIL_SUBSCRIPTION}function r(e){return e.type===a.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(a||(a={}));const s=e=>e.map((e=>void 0===e?[void 0]:e.type===a.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),u=(e,t)=>{if(e.length!==t.length)return!1;const n=s(e),i=s(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},69696:(e,t,n)=>{n.d(t,{YO:()=>o,dt:()=>l,nc:()=>r});class i{constructor(e){this.displayName=e}}class o extends i{constructor(e){super(e.name+(e.isEnabled?"":" - Disabled")),this.integration=e}getKey(){return this.integration.id}equals(e){return e instanceof o&&e.integration.id===this.integration.id}}class a extends i{constructor(e,t,n,i){super(e),this.key=i,this.description=t,this.integrationId=n}getKey(){return this.key}}class l extends a{constructor(e,t,n){let i,o;t?(i="Admins",o="Organization administrators for your account"):(i="All",o="All users in your organization who subscribed to this email in their Notification Preferences"),super(i,o,e,t?"users-admin":"users-all"),this.sendToAdmin=t,this.ignorePreferences=n}equals(e){return e instanceof l&&e.sendToAdmin===this.sendToAdmin&&e.ignorePreferences===this.ignorePreferences}}class r extends a{constructor(e,t,n){let i,o,a;"string"==typeof n?(i=n,o=!1,a=!1):(i="Loading",o=n,a=!n),super(i,void 0,e,`rbac-group-${t}`),this.groupId=t,this.isLoading=o,this.hasError=a}equals(e){return e instanceof r&&e.groupId===this.groupId}}},77836:(e,t,n)=>{n.d(t,{LW:()=>l,WX:()=>u,iv:()=>p,u3:()=>c});var i=n(46242),o=n(45295),a=n(73091);const l=e=>{for(const t of Object.values(a.WN))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},r=(e,t)=>null===e?t:e,s=e=>""===e?void 0:r(e),u=e=>{var t,n;const u={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:l(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,a.cd)(u.type))return((e,t)=>{var n,i,o,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:r(null===(o=null==t?void 0:t.basic_authentication)||void 0===o?void 0:o.username,""),pass:r(null===(a=null==t?void 0:t.basic_authentication)||void 0===a?void 0:a.password,"")},extras:r(null==t?void 0:t.extras)}})(u,e.properties);switch(u.type){case a.WN.WEBHOOK:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.l.HttpType.Enum.GET}})(u,e.properties);case a.WN.ANSIBLE:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:s(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.l.HttpType.Enum.POST}})(u,e.properties);case a.WN.EMAIL_SUBSCRIPTION:case a.WN.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(u,e.properties);default:(0,i.vE)(u.type)}},c=e=>e.map(u),d=e=>{const t=e.type;if((0,a.cd)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case a.WN.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken)}}case a.WN.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:s(t.secretToken),method:t.method}}case a.WN.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case a.WN.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,i.vE)(t)}},p=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:d(e)}}},21503:(e,t,n)=>{n.d(t,{l:()=>l});var i=n(53446),o=n(10756),a=n(28216);const l=()=>{const e=(0,a.useDispatch)();return(0,o.useMemo)((()=>{const t=(t,n,o,a)=>e((0,i.addNotification)({variant:t,title:n,description:o,dismissable:a}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),addDefaultNotification:(...e)=>t("default",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}}}]);
//# sourceMappingURL=../sourcemaps/547.d657e7eaa68a2c613cf6d8d8c5b9e75b.js.map
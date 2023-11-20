"use strict";(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[1233,9478],{41463:(e,t,n)=>{n.r(t);var i=n(93264),o=n.n(i),a=n(3644),l=n.n(a),r=n(10090),u=n(55128),s=n(18172),c=n(52890),p=n(94782),d=n(28216),m=n(83130),_=n(45362),y=n(9241);(0,s.MD)();l().render(o().createElement((e=>{const t=o().useMemo((()=>(0,u.createFetchingClient)(u.getInsights,{responseInterceptors:[c.validateSchemaResponseInterceptor]})),[]),n=o().useMemo((()=>(e.logger?(0,y.b)(e.logger):(0,y.b)()).getStore()),[e.logger]);return o().createElement(r.Z,{locale:navigator.language.slice(0,2),messages:m,onError:console.log},o().createElement(d.Provider,{store:n},o().createElement(p.ClientContextProvider,{client:t},o().createElement(_.Z,null))))}),null),document.getElementById("root"))},91654:(e,t,n)=>{n.d(t,{TimeConfigComponent:()=>_});var i=n(21242),o=n(78343),a=n(93264),l=n.n(a),r=n(65326),u=n(8813),s=n(2412),c=n(60207),p=n(21503);const d=(0,u.style)({width:"280px"}),m=(0,u.style)({marginTop:"12px"}),_=()=>{var e,t;const[n,u]=l().useState(!1),[_,y]=l().useState(),[f,v]=(0,a.useState)(!1),b=(0,s.Y)(),E=(0,c.I)(),{addSuccessNotification:R,addDangerNotification:g}=(0,p.l)(),T=(0,a.useMemo)((()=>{var e;if(200===b.status)return null===(e=b.payload)||void 0===e?void 0:e.value}),[null===(e=b.payload)||void 0===e?void 0:e.value,b.status]);(0,a.useEffect)((()=>{T&&(y({baseCustomTime:T,utcTime:T,timezoneText:void 0}),u("00:00:00"!==T))}),[T]);const I=l().useCallback((()=>{u(!1),y({utcTime:"00:00",baseCustomTime:"00:00",timezoneText:void 0})}),[]),[N,h]=l().useState(!1),G=r.map((e=>l().createElement(i.DropdownItem,{key:e.text},e.text))),B=l().useCallback((()=>{u(!0)}),[]),S=l().useCallback((e=>{y({baseCustomTime:e,utcTime:e,timezoneText:void 0})}),[]),w=l().useCallback((e=>{if(null==e?void 0:e.target){const t=e.target.textContent,n=r.find((e=>e.text===t));n&&y((e=>{if(null==e?void 0:e.baseCustomTime){const t=e.baseCustomTime.split(":").map((e=>parseInt(e))),i=new Date;i.setUTCHours(t[0],t[1]);const a=(0,o.Z)(i,-n.offset),l=a.getUTCHours().toString().padStart(2,"0"),r=a.getUTCMinutes().toString().padStart(2,"0");return{...e,utcTime:`${l}:${r}`,timezoneText:n.text}}return e}))}h(!1)}),[]),C=l().useCallback((()=>{_&&(0,E.mutate)({body:_.utcTime}).then((e=>{204===e.status?R("Action settings saved",""):g("Failed to save action settings","")})),v(!1)}),[g,R,E.mutate,_]),Z=E.loading||b.loading,A=()=>{v(!f)};return l().createElement(l().Fragment,null,l().createElement(i.Alert,{className:m,isInline:!0,title:`Any daily digest emails you've opted into will be sent at ${T||"00:00"} UTC`,actionLinks:l().createElement(i.AlertActionLink,{onClick:A,ouiaId:"TimeConfigModal"},"Edit time settings")}),l().createElement(i.Modal,{className:"pf-v5-u-pl-xl",variant:i.ModalVariant.small,isOpen:f,onClose:A,actions:[l().createElement(i.Button,{key:"save",variant:"primary",type:"submit",isLoading:Z,isDisabled:Z,onClick:C},Z?"Loading":"Save"),l().createElement(i.Button,{key:"cancel",variant:"link",onClick:A},"Cancel")],ouiaId:"TimeConfigModal"},l().createElement(i.Stack,{hasGutter:!0},l().createElement(i.StackItem,null,l().createElement(i.Title,{headingLevel:"h2"},"Action settings")),l().createElement(i.StackItem,null,l().createElement(i.Text,{component:i.TextVariants.p},"Daily digest email receipt"),l().createElement(i.HelperText,null,l().createElement(i.HelperTextItem,{variant:"indeterminate"},"Schedule the time at which to send your account's daily digest email. All times will be converted to UTC after saving.")))),l().createElement("br",null),l().createElement(i.Split,null,l().createElement(i.SplitItem,{isFilled:!0},l().createElement(i.Stack,{hasGutter:!0},l().createElement(i.StackItem,null,b.loading?l().createElement(i.Skeleton,null):l().createElement(i.Radio,{isChecked:!n,onChange:I,id:"settings-time-config",label:"Default time",value:"Default",description:"00:00 UTC",name:"radio-select"})),l().createElement(i.StackItem,null,b.loading?l().createElement(i.Skeleton,null):l().createElement(i.Radio,{isChecked:n,onChange:B,id:"settings-time-config-custom",label:"Custom time",name:"radio-select"})),n&&l().createElement(l().Fragment,null,l().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},l().createElement(i.Text,{component:i.TextVariants.h6},"Time"),l().createElement(i.TimePicker,{onChange:S,time:null==_?void 0:_.baseCustomTime,width:"263px",stepMinutes:15,placeholder:"00:00",is24Hour:!0})),l().createElement(i.StackItem,{className:"pf-v5-u-pl-lg"},l().createElement(i.Text,{component:i.TextVariants.h6},"Time zone"),l().createElement(i.Dropdown,{className:d,toggle:l().createElement(i.DropdownToggle,{isOpen:N,id:"timezone",onToggle:()=>h(!N)},null!==(t=null==_?void 0:_.timezoneText)&&void 0!==t?t:"(UTC-00:00) Universal Time"),isOpen:N,onSelect:w,menuAppendTo:()=>document.body,dropdownItems:G}))))))))}},16721:(e,t,n)=>{n.d(t,{B:()=>o,l:()=>i});var i,o,a=n(70070),l=n(52890),r=n(53784);!function(e){function t(){return r.Ry({bundle_id:w(),created:N().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:N().optional().nullable()}).nonstrict()}function n(){return r.Ry({display_name:r.Z_(),id:w()}).nonstrict()}function i(){return r.Ry({hasForcedEmail:r.O7().optional().nullable(),notifications:r.IM(r.O7()).optional().nullable()}).nonstrict()}function o(){return r.Ry({password:r.Z_().optional().nullable(),username:r.Z_().optional().nullable()}).nonstrict()}function a(){return r.Ry({created:N().optional().nullable(),endpoint:m().optional().nullable(),id:l().optional().nullable()}).nonstrict()}function l(){return r.Ry({behaviorGroupId:w(),endpointId:w()}).nonstrict()}function u(){return r.Ry({created:N().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:N().optional().nullable()}).nonstrict()}function s(){return r.Ry({applications:r.IM(i()).optional().nullable()}).nonstrict()}function c(){return r.Ry({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.O7(),extras:r.IM(r.Z_()).optional().nullable(),secret_token:r.Z_().optional().nullable(),url:r.Z_()}).nonstrict()}function p(){return r.Ry({group_id:w().optional().nullable(),ignore_preferences:r.O7(),only_admins:r.O7()}).nonstrict()}function d(){return r.Km(["INSTANT","DAILY"])}function m(){return r.Ry({created:N().optional().nullable(),description:r.Z_(),enabled:r.O7().optional().nullable(),id:w().optional().nullable(),name:r.Z_(),properties:r.G0([C(),p(),c()]).optional().nullable(),server_errors:r.Rx().int().optional().nullable(),status:_().optional().nullable(),sub_type:r.Z_().optional().nullable(),type:y(),updated:N().optional().nullable()}).nonstrict()}function _(){return r.Km(["READY","UNKNOWN","NEW","PROVISIONING","DELETING","FAILED"])}function y(){return r.Km(["webhook","email_subscription","camel","ansible","drawer"])}function f(){return r.Km(["PROD","STAGE","EPHEMERAL","LOCAL_SERVER"])}function v(){return r.Ry({actions:r.IX(b()),application:r.Z_(),bundle:r.Z_(),created:N(),event_type:r.Z_(),id:w(),payload:r.Z_().optional().nullable()}).nonstrict()}function b(){return r.Ry({details:r.IM(r._4()).optional().nullable(),endpoint_id:w().optional().nullable(),endpoint_sub_type:r.Z_().optional().nullable(),endpoint_type:y(),id:w(),status:E()}).nonstrict()}function E(){return r.Km(["SENT","SUCCESS","PROCESSING","FAILED","UNKNOWN"])}function R(){return r.Ry({application:t().optional().nullable(),application_id:w(),description:r.Z_().optional().nullable(),display_name:r.Z_(),fully_qualified_name:r.Z_().optional().nullable(),id:w().optional().nullable(),name:r.Z_()}).nonstrict()}function g(){return r.Ry({created:N().optional().nullable(),event_type:R().optional().nullable(),id:T().optional().nullable()}).nonstrict()}function T(){return r.Ry({behaviorGroupId:w(),eventTypeId:w()}).nonstrict()}function I(){return r.Km(["GET","POST","PUT"])}function N(){return r.Z_()}function h(){return r.Ry({count:r.Rx().int()}).nonstrict()}function G(){return r.Km(["FAILED_INTERNAL","FAILED_EXTERNAL","PROCESSING","SENT","SUCCESS"])}function B(){return r.Km(["UP","MAINTENANCE"])}function S(){return r.Ry({created:N().optional().nullable(),data:r.Z_(),description:r.Z_(),id:w().optional().nullable(),name:r.Z_(),updated:N().optional().nullable()}).nonstrict()}function w(){return r.Z_()}function C(){return r.Ry({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.O7(),method:I(),secret_token:r.Z_().optional().nullable(),url:r.Z_()}).nonstrict()}e.AddAccessRequest=r.Ry({application_id:w().optional().nullable(),role:r.Z_().optional().nullable()}).nonstrict(),e.AddApplicationRequest=r.Ry({bundle_id:w(),display_name:r.Z_(),name:r.Z_(),owner_role:r.Z_().optional().nullable()}).nonstrict(),e.AggregationEmailTemplate=r.Ry({application:t().optional().nullable(),application_id:w().optional().nullable(),body_template:S().optional().nullable(),body_template_id:w(),created:N().optional().nullable(),id:w().optional().nullable(),subject_template:S().optional().nullable(),subject_template_id:w(),subscription_type:d(),updated:N().optional().nullable()}).nonstrict(),e.Application=t(),e.Application1=n(),e.ApplicationSettingsValue=i(),e.BasicAuthentication=o(),e.BehaviorGroup=r.Ry({actions:r.IX(a()).optional().nullable(),behaviors:r.IX(g()).optional().nullable(),bundle:u().optional().nullable(),bundle_id:w(),created:N().optional().nullable(),default_behavior:r.O7().optional().nullable(),display_name:r.Z_(),id:w().optional().nullable(),updated:N().optional().nullable()}).nonstrict(),e.BehaviorGroupAction=a(),e.BehaviorGroupActionId=l(),e.Bundle=u(),e.BundleSettingsValue=s(),e.CamelProperties=c(),e.CreateBehaviorGroupRequest=r.Ry({bundle_id:w().optional().nullable(),bundle_name:r.Z_().optional().nullable(),bundle_uuid_or_bundle_name_valid:r.O7().optional().nullable(),display_name:r.Z_(),endpoint_ids:r.IX(r.Z_()).optional().nullable(),event_type_ids:r.IX(r.Z_()).optional().nullable()}).nonstrict(),e.CreateBehaviorGroupResponse=r.Ry({bundle_id:w(),created:N(),display_name:r.Z_(),endpoints:r.IX(r.Z_()),event_types:r.IX(r.Z_()),id:w()}).nonstrict(),e.CurrentStatus=r.Ry({end_time:N().optional().nullable(),start_time:N().optional().nullable(),status:B()}).nonstrict(),e.DuplicateNameMigrationReport=r.Ry({updatedBehaviorGroups:r.Rx().int().optional().nullable(),updatedIntegrations:r.Rx().int().optional().nullable()}).nonstrict(),e.DrawerSubscriptionProperties=r.Ry({group_id:w().optional().nullable(),only_admins:r.O7()}).nonstrict(),e.EmailSubscriptionProperties=p(),e.EmailSubscriptionType=d(),e.Endpoint=m(),e.EndpointPage=r.Ry({data:r.IX(m()),links:r.IM(r.Z_()),meta:h()}).nonstrict(),e.EndpointProperties=r._4(),e.EndpointStatus=_(),e.EndpointType=y(),e.Environment=f(),e.EventLogEntry=v(),e.EventLogEntryAction=b(),e.EventLogEntryActionStatus=E(),e.EventType=R(),e.EventTypeBehavior=g(),e.EventTypeBehaviorId=T(),e.Facet=function e(){return r.Ry({children:r.IX(r.Vo((()=>e()))).optional().nullable(),displayName:r.Z_(),id:r.Z_(),name:r.Z_()}).nonstrict()}(),e.HttpType=I(),e.InstantEmailTemplate=r.Ry({body_template:S().optional().nullable(),body_template_id:w(),created:N().optional().nullable(),event_type:R().optional().nullable(),event_type_id:w().optional().nullable(),id:w().optional().nullable(),subject_template:S().optional().nullable(),subject_template_id:w(),updated:N().optional().nullable()}).nonstrict(),e.InternalApplicationUserPermission=r.Ry({application_display_name:r.Z_(),application_id:w(),role:r.Z_()}).nonstrict(),e.InternalRoleAccess=r.Ry({application_id:w(),id:w().optional().nullable(),role:r.Z_()}).nonstrict(),e.InternalUserPermissions=r.Ry({applications:r.IX(n()),is_admin:r.O7(),roles:r.IX(r.Z_())}).nonstrict(),e.LocalDate=r.Z_(),e.LocalDateTime=N(),e.LocalTime=r.Z_(),e.MessageValidationResponse=r.Ry({errors:r.IM(r.IX(r.Z_()))}).nonstrict(),e.Meta=h(),e.NotificationHistory=r.Ry({created:N().optional().nullable(),details:r.IM(r._4()).optional().nullable(),endpointId:w().optional().nullable(),endpointSubType:r.Z_().optional().nullable(),endpointType:y().optional().nullable(),id:w().optional().nullable(),invocationTime:r.Rx().int(),status:G()}).nonstrict(),e.NotificationStatus=G(),e.PageEventLogEntry=r.Ry({data:r.IX(v()),links:r.IM(r.Z_()),meta:h()}).nonstrict(),e.PageEventType=r.Ry({data:r.IX(R()),links:r.IM(r.Z_()),meta:h()}).nonstrict(),e.RenderEmailTemplateRequest=r.Ry({payload:r.Z_(),template:r.IX(r.Z_())}).nonstrict(),e.RequestDefaultBehaviorGroupPropertyList=r.Ry({ignore_preferences:r.O7(),only_admins:r.O7()}).nonstrict(),e.RequestEmailSubscriptionProperties=r.Ry({group_id:w().optional().nullable(),only_admins:r.O7()}).nonstrict(),e.ServerInfo=r.Ry({environment:f().optional().nullable()}).nonstrict(),e.SettingsValues=r.Ry({bundles:r.IM(s()).optional().nullable()}).nonstrict(),e.Status=B(),e.Template=S(),e.TriggerDailyDigestRequest=r.Ry({application_name:r.Z_(),bundle_name:r.Z_(),end:N().optional().nullable(),org_id:r.Z_(),start:N().optional().nullable()}).nonstrict(),e.UUID=w(),e.UpdateBehaviorGroupRequest=r.Ry({display_name:r.Z_().optional().nullable(),display_name_not_null_and_blank:r.O7().optional().nullable(),endpoint_ids:r.IX(r.Z_()).optional().nullable(),event_type_ids:r.IX(r.Z_()).optional().nullable()}).nonstrict(),e.UserConfigPreferences=r.Ry({daily_email:r.O7().optional().nullable(),instant_email:r.O7().optional().nullable()}).nonstrict(),e.WebhookProperties=C(),e.__Empty=r.Z_().max(0).optional()}(i||(i={})),function(e){let t,n,o,u,s,c,p,d,m,_,y,f,v,b,E,R,g,T,I,N,h,G,B;!function(e){const t=r.Z_();e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/notifications/behaviorGroups").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.CreateBehaviorGroupResponse,"CreateBehaviorGroupResponse",200),new a.ValidateRule(t,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(t=e.NotificationResourceCreateBehaviorGroup||(e.NotificationResourceCreateBehaviorGroup={})),function(e){const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}".replace("{endpointId}",e.endpointId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(n=e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint||(e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint={})),function(e){r.IX(r.Z_());const t=r.Z_();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{behaviorGroupId}/actions".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(o=e.NotificationResourceUpdateBehaviorGroupActions||(e.NotificationResourceUpdateBehaviorGroupActions={})),function(e){const t=r.O7(),n=r.Z_(),o=r.Z_();e.actionCreator=e=>{const r="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("PUT",r).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(n,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403),new a.ValidateRule(o,"unknown",404)]}).build()}}(u=e.NotificationResourceUpdateBehaviorGroup||(e.NotificationResourceUpdateBehaviorGroup={})),function(e){const t=r.O7();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("DELETE",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(s=e.NotificationResourceDeleteBehaviorGroup||(e.NotificationResourceDeleteBehaviorGroup={})),function(e){const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/bundles/{bundleId}/behaviorGroups".replace("{bundleId}",e.bundleId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(c=e.NotificationResourceFindBehaviorGroupsByBundleId||(e.NotificationResourceFindBehaviorGroupsByBundleId={})),function(e){r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}".replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Bundle,"Bundle",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(p=e.NotificationResourceGetBundleByName||(e.NotificationResourceGetBundleByName={})),function(e){r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Application,"Application",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(d=e.NotificationResourceGetApplicationByNameAndBundleName||(e.NotificationResourceGetApplicationByNameAndBundleName={})),function(e){r.Z_(),r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}/eventTypes/{eventTypeName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString()).replace("{eventTypeName}",e.eventTypeName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.EventType,"EventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(m=e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName||(e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName={})),function(e){r.IX(r.Z_()),r.Z_(),r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_(),e.actionCreator=e=>{const t={};return void 0!==e.applicationIds&&(t.applicationIds=e.applicationIds),void 0!==e.bundleId&&(t.bundleId=e.bundleId),void 0!==e.eventTypeName&&(t.eventTypeName=e.eventTypeName),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/eventTypes").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventType,"PageEventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(_=e.NotificationResourceGetEventTypes||(e.NotificationResourceGetEventTypes={})),function(e){const t=r.IX(i.EventType);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/affectedByRemovalOfBehaviorGroup/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(y=e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup||(e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup={})),function(e){r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_();const t=r.IX(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString()),o={};return void 0!==e.limit&&(o.limit=e.limit),void 0!==e.offset&&(o.offset=e.offset),void 0!==e.pageNumber&&(o.pageNumber=e.pageNumber),void 0!==e.sortBy&&(o.sort_by=e.sortBy),(0,l.actionBuilder)("GET",n).queryParams(o).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(f=e.NotificationResourceGetLinkedBehaviorGroups||(e.NotificationResourceGetLinkedBehaviorGroups={})),function(e){r.IX(r.Z_());const t=r.Z_();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(v=e.NotificationResourceUpdateEventTypeBehaviors||(e.NotificationResourceUpdateEventTypeBehaviors={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString()).replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("DELETE",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(b=e.NotificationResourceDeleteBehaviorGroupFromEventType||(e.NotificationResourceDeleteBehaviorGroupFromEventType={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeUuid}/behaviorGroups/{behaviorGroupUuid}".replace("{behaviorGroupUuid}",e.behaviorGroupUuid.toString()).replace("{eventTypeUuid}",e.eventTypeUuid.toString());return(0,l.actionBuilder)("PUT",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(E=e.NotificationResourceAppendBehaviorGroupToEventType||(e.NotificationResourceAppendBehaviorGroupToEventType={})),function(e){r.IX(r.Z_()),r.IX(r.Z_()),r.IX(r.Z_()),r.Z_(),r.O7(),r.O7(),r.O7(),r.IX(r.O7()),r.Rx().int(),r.Rx().int(),r.Rx().int(),r.Z_(),r.IX(i.EventLogEntryActionStatus),e.actionCreator=e=>{const t={};return void 0!==e.appIds&&(t.appIds=e.appIds),void 0!==e.bundleIds&&(t.bundleIds=e.bundleIds),void 0!==e.endDate&&(t.endDate=e.endDate),void 0!==e.endpointTypes&&(t.endpointTypes=e.endpointTypes),void 0!==e.eventTypeDisplayName&&(t.eventTypeDisplayName=e.eventTypeDisplayName),void 0!==e.includeActions&&(t.includeActions=e.includeActions),void 0!==e.includeDetails&&(t.includeDetails=e.includeDetails),void 0!==e.includePayload&&(t.includePayload=e.includePayload),void 0!==e.invocationResults&&(t.invocationResults=e.invocationResults),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),void 0!==e.startDate&&(t.startDate=e.startDate),void 0!==e.status&&(t.status=e.status),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/events").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventLogEntry,"PageEventLogEntry",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(R=e.EventResourceGetEvents||(e.EventResourceGetEvents={})),function(e){r.Z_();const t=r.IX(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.bundleName&&(n.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/applications").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(g=e.NotificationResourceGetApplicationsFacets||(e.NotificationResourceGetApplicationsFacets={})),function(e){r.O7();const t=r.IX(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.includeApplications&&(n.includeApplications=e.includeApplications),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/bundles").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(T=e.NotificationResourceGetBundleFacets||(e.NotificationResourceGetBundleFacets={})),function(e){e.actionCreator=()=>(0,l.actionBuilder)("GET","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(I=e.OrgConfigResourceGetDailyDigestTimePreference||(e.OrgConfigResourceGetDailyDigestTimePreference={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("PUT","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(N=e.OrgConfigResourceSaveDailyDigestTimePreference||(e.OrgConfigResourceSaveDailyDigestTimePreference={})),function(e){r.Z_(),e.actionCreator=e=>{const t={};return void 0!==e.bundleName&&(t.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/user-config/notification-preference").queryParams(t).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}}(h=e.UserConfigResourceGetSettingsSchema||(e.UserConfigResourceGetSettingsSchema={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/user-config/notification-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}(G=e.UserConfigResourceSaveSettings||(e.UserConfigResourceSaveSettings={})),function(e){r.Z_(),r.Z_(),e.actionCreator=e=>{const t="/api/notifications/v1.0/user-config/notification-preference/{bundleName}/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.UserConfigPreferences,"UserConfigPreferences",200)]}).build()}}(B=e.UserConfigResourceGetPreferences||(e.UserConfigResourceGetPreferences={}))}(o||(o={}))},56437:(e,t,n)=>{n.d(t,{K4:()=>l,L6:()=>r,VL:()=>s,Yh:()=>i,_f:()=>o,k$:()=>a});const i=e=>e.type===a.EMAIL_SUBSCRIPTION||e.type===a.DRAWER,o=e=>e.type===a.INTEGRATION;var a;function l(e){return e.type===a.EMAIL_SUBSCRIPTION}function r(e){return e.type===a.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(a||(a={}));const u=e=>e.map((e=>void 0===e?[void 0]:e.type===a.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),s=(e,t)=>{if(e.length!==t.length)return!1;const n=u(e),i=u(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},77836:(e,t,n)=>{n.d(t,{LW:()=>l,WX:()=>s,iv:()=>d,u3:()=>c});var i=n(46242),o=n(45295),a=n(73091);const l=e=>{for(const t of Object.values(a.WN))if(e.sub_type){if(t===`${e.type}:${e.sub_type}`)return t}else if(t===e.type)return t;throw new Error(`Unexpected type: ${e.type} with subtype: ${e.sub_type}`)},r=(e,t)=>null===e?t:e,u=e=>""===e?void 0:r(e),s=e=>{var t,n;const s={id:e.id||"",name:e.name||"",isEnabled:!!e.enabled,type:l(e),status:null!==(t=e.status)&&void 0!==t?t:"UNKNOWN",serverErrors:null!==(n=e.server_errors)&&void 0!==n?n:0};if((0,a.cd)(s.type))return((e,t)=>{var n,i,o,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:u(null==t?void 0:t.secret_token),basicAuth:null===(null==t?void 0:t.basic_authentication)?void 0:{user:r(null===(o=null==t?void 0:t.basic_authentication)||void 0===o?void 0:o.username,""),pass:r(null===(a=null==t?void 0:t.basic_authentication)||void 0===a?void 0:a.password,"")},extras:r(null==t?void 0:t.extras)}})(s,e.properties);switch(s.type){case a.WN.WEBHOOK:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:u(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.l.HttpType.Enum.GET}})(s,e.properties);case a.WN.ANSIBLE:return((e,t)=>{var n,i,a;return{...e,url:null!==(n=null==t?void 0:t.url)&&void 0!==n?n:"",sslVerificationEnabled:null!==(i=!(null==t?void 0:t.disable_ssl_verification))&&void 0!==i&&i,secretToken:u(null==t?void 0:t.secret_token),method:null!==(a=null==t?void 0:t.method)&&void 0!==a?a:o.l.HttpType.Enum.POST}})(s,e.properties);case a.WN.EMAIL_SUBSCRIPTION:case a.WN.DRAWER:return((e,t)=>({...e,ignorePreferences:t.ignore_preferences,groupId:null===t.group_id?void 0:t.group_id,onlyAdmin:t.only_admins}))(s,e.properties);default:(0,i.vE)(s.type)}},c=e=>e.map(s),p=e=>{const t=e.type;if((0,a.cd)(t)){const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:u(t.secretToken),basic_authentication:t.basicAuth?{username:t.basicAuth.user,password:t.basicAuth.pass}:void 0,extras:t.extras}}switch(t){case a.WN.WEBHOOK:{const t=e;return{url:t.url,method:t.method,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:u(t.secretToken)}}case a.WN.ANSIBLE:{const t=e;return{url:t.url,disable_ssl_verification:!t.sslVerificationEnabled,secret_token:u(t.secretToken),method:t.method}}case a.WN.EMAIL_SUBSCRIPTION:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}case a.WN.DRAWER:{const t=e;return{only_admins:t.onlyAdmin,group_id:t.groupId,ignore_preferences:t.ignorePreferences}}default:(0,i.vE)(t)}},d=e=>{const{type:t,subType:n}=(e=>{const t=e.split(":",2);return{type:t[0],subType:2===t.length?t[1]:void 0}})(e.type);return{id:e.id,name:e.name,enabled:e.isEnabled,type:t,sub_type:n,description:"",properties:p(e)}}},21503:(e,t,n)=>{n.d(t,{l:()=>l});var i=n(53446),o=n(93264),a=n(28216);const l=()=>{const e=(0,a.useDispatch)();return(0,o.useMemo)((()=>{const t=(t,n,o,a)=>e((0,i.addNotification)({variant:t,title:n,description:o,dismissable:a}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),addDefaultNotification:(...e)=>t("default",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}}}]);
//# sourceMappingURL=../sourcemaps/1233.2e08d1cc53a1fa62124c7794b84c11a9.js.map
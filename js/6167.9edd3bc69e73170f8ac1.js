(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[6167],{96787:(e,t,n)=>{"use strict";n.d(t,{P:()=>o,n:()=>i});var i,o,a=n(92164),l=n(80578),r=n(30589);!function(e){function t(){return r.Ik({bundle_id:w(),created:I().optional().nullable(),display_name:r.Yj(),id:w().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function n(){return r.Ik({display_name:r.Yj(),id:w()}).nonstrict()}function i(){return r.Ik({hasForcedEmail:r.zM().optional().nullable(),notifications:r.g1(r.zM()).optional().nullable()}).nonstrict()}function o(){return r.Ik({password:r.Yj().optional().nullable(),username:r.Yj().optional().nullable()}).nonstrict()}function a(){return r.Ik({created:I().optional().nullable(),endpoint:_().optional().nullable(),id:l().optional().nullable()}).nonstrict()}function l(){return r.Ik({behaviorGroupId:w(),endpointId:w()}).nonstrict()}function u(){return r.Ik({created:I().optional().nullable(),display_name:r.Yj(),id:w().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function p(){return r.Ik({applications:r.g1(i()).optional().nullable()}).nonstrict()}function c(){return r.Ik({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.zM(),extras:r.g1(r.Yj()).optional().nullable(),secret_token:r.Yj().optional().nullable(),url:r.Yj()}).nonstrict()}function s(){return r.Ik({group_id:w().optional().nullable(),ignore_preferences:r.zM(),only_admins:r.zM()}).nonstrict()}function d(){return r.k5(["INSTANT","DAILY"])}function _(){return r.Ik({created:I().optional().nullable(),description:r.Yj(),enabled:r.zM().optional().nullable(),id:w().optional().nullable(),name:r.Yj(),properties:r.KC([k(),s(),c()]).optional().nullable(),server_errors:r.ai().int().optional().nullable(),status:m().optional().nullable(),sub_type:r.Yj().optional().nullable(),type:y(),updated:I().optional().nullable()}).nonstrict()}function m(){return r.k5(["READY","UNKNOWN","NEW","PROVISIONING","DELETING","FAILED"])}function y(){return r.k5(["webhook","email_subscription","camel","ansible","drawer"])}function f(){return r.k5(["PROD","STAGE","EPHEMERAL","LOCAL_SERVER"])}function b(){return r.Ik({actions:r.YO(v()),application:r.Yj(),bundle:r.Yj(),created:I(),event_type:r.Yj(),id:w(),payload:r.Yj().optional().nullable()}).nonstrict()}function v(){return r.Ik({details:r.g1(r.L5()).optional().nullable(),endpoint_id:w().optional().nullable(),endpoint_sub_type:r.Yj().optional().nullable(),endpoint_type:y(),id:w(),status:E()}).nonstrict()}function E(){return r.k5(["SENT","SUCCESS","PROCESSING","FAILED","UNKNOWN"])}function R(){return r.Ik({application:t().optional().nullable(),application_id:w(),description:r.Yj().optional().nullable(),display_name:r.Yj(),fully_qualified_name:r.Yj().optional().nullable(),id:w().optional().nullable(),name:r.Yj()}).nonstrict()}function g(){return r.Ik({created:I().optional().nullable(),event_type:R().optional().nullable(),id:N().optional().nullable()}).nonstrict()}function N(){return r.Ik({behaviorGroupId:w(),eventTypeId:w()}).nonstrict()}function Y(){return r.k5(["GET","POST","PUT"])}function I(){return r.Yj()}function T(){return r.Ik({count:r.ai().int()}).nonstrict()}function G(){return r.k5(["FAILED_INTERNAL","FAILED_EXTERNAL","PROCESSING","SENT","SUCCESS"])}function B(){return r.k5(["UP","MAINTENANCE"])}function j(){return r.Ik({created:I().optional().nullable(),data:r.Yj(),description:r.Yj(),id:w().optional().nullable(),name:r.Yj(),updated:I().optional().nullable()}).nonstrict()}function w(){return r.Yj()}function k(){return r.Ik({basic_authentication:o().optional().nullable(),disable_ssl_verification:r.zM(),method:Y(),secret_token:r.Yj().optional().nullable(),url:r.Yj()}).nonstrict()}e.AddAccessRequest=r.Ik({application_id:w().optional().nullable(),role:r.Yj().optional().nullable()}).nonstrict(),e.AddApplicationRequest=r.Ik({bundle_id:w(),display_name:r.Yj(),name:r.Yj(),owner_role:r.Yj().optional().nullable()}).nonstrict(),e.AggregationEmailTemplate=r.Ik({application:t().optional().nullable(),application_id:w().optional().nullable(),body_template:j().optional().nullable(),body_template_id:w(),created:I().optional().nullable(),id:w().optional().nullable(),subject_template:j().optional().nullable(),subject_template_id:w(),subscription_type:d(),updated:I().optional().nullable()}).nonstrict(),e.Application=t(),e.Application1=n(),e.ApplicationSettingsValue=i(),e.BasicAuthentication=o(),e.BehaviorGroup=r.Ik({actions:r.YO(a()).optional().nullable(),behaviors:r.YO(g()).optional().nullable(),bundle:u().optional().nullable(),bundle_id:w(),created:I().optional().nullable(),default_behavior:r.zM().optional().nullable(),display_name:r.Yj(),id:w().optional().nullable(),updated:I().optional().nullable()}).nonstrict(),e.BehaviorGroupAction=a(),e.BehaviorGroupActionId=l(),e.Bundle=u(),e.BundleSettingsValue=p(),e.CamelProperties=c(),e.CreateBehaviorGroupRequest=r.Ik({bundle_id:w().optional().nullable(),bundle_name:r.Yj().optional().nullable(),bundle_uuid_or_bundle_name_valid:r.zM().optional().nullable(),display_name:r.Yj(),endpoint_ids:r.YO(r.Yj()).optional().nullable(),event_type_ids:r.YO(r.Yj()).optional().nullable()}).nonstrict(),e.CreateBehaviorGroupResponse=r.Ik({bundle_id:w(),created:I(),display_name:r.Yj(),endpoints:r.YO(r.Yj()),event_types:r.YO(r.Yj()),id:w()}).nonstrict(),e.CurrentStatus=r.Ik({end_time:I().optional().nullable(),start_time:I().optional().nullable(),status:B()}).nonstrict(),e.DuplicateNameMigrationReport=r.Ik({updatedBehaviorGroups:r.ai().int().optional().nullable(),updatedIntegrations:r.ai().int().optional().nullable()}).nonstrict(),e.DrawerSubscriptionProperties=r.Ik({group_id:w().optional().nullable(),only_admins:r.zM()}).nonstrict(),e.EmailSubscriptionProperties=s(),e.EmailSubscriptionType=d(),e.Endpoint=_(),e.EndpointPage=r.Ik({data:r.YO(_()),links:r.g1(r.Yj()),meta:T()}).nonstrict(),e.EndpointProperties=r.L5(),e.EndpointStatus=m(),e.EndpointType=y(),e.Environment=f(),e.EventLogEntry=b(),e.EventLogEntryAction=v(),e.EventLogEntryActionStatus=E(),e.EventType=R(),e.EventTypeBehavior=g(),e.EventTypeBehaviorId=N(),e.Facet=function e(){return r.Ik({children:r.YO(r.RZ((()=>e()))).optional().nullable(),displayName:r.Yj(),id:r.Yj(),name:r.Yj()}).nonstrict()}(),e.HttpType=Y(),e.InstantEmailTemplate=r.Ik({body_template:j().optional().nullable(),body_template_id:w(),created:I().optional().nullable(),event_type:R().optional().nullable(),event_type_id:w().optional().nullable(),id:w().optional().nullable(),subject_template:j().optional().nullable(),subject_template_id:w(),updated:I().optional().nullable()}).nonstrict(),e.InternalApplicationUserPermission=r.Ik({application_display_name:r.Yj(),application_id:w(),role:r.Yj()}).nonstrict(),e.InternalRoleAccess=r.Ik({application_id:w(),id:w().optional().nullable(),role:r.Yj()}).nonstrict(),e.InternalUserPermissions=r.Ik({applications:r.YO(n()),is_admin:r.zM(),roles:r.YO(r.Yj())}).nonstrict(),e.LocalDate=r.Yj(),e.LocalDateTime=I(),e.LocalTime=r.Yj(),e.MessageValidationResponse=r.Ik({errors:r.g1(r.YO(r.Yj()))}).nonstrict(),e.Meta=T(),e.NotificationHistory=r.Ik({created:I().optional().nullable(),details:r.g1(r.L5()).optional().nullable(),endpointId:w().optional().nullable(),endpointSubType:r.Yj().optional().nullable(),endpointType:y().optional().nullable(),id:w().optional().nullable(),invocationTime:r.ai().int(),status:G()}).nonstrict(),e.NotificationStatus=G(),e.PageEventLogEntry=r.Ik({data:r.YO(b()),links:r.g1(r.Yj()),meta:T()}).nonstrict(),e.PageEventType=r.Ik({data:r.YO(R()),links:r.g1(r.Yj()),meta:T()}).nonstrict(),e.RenderEmailTemplateRequest=r.Ik({payload:r.Yj(),template:r.YO(r.Yj())}).nonstrict(),e.RequestDefaultBehaviorGroupPropertyList=r.Ik({ignore_preferences:r.zM(),only_admins:r.zM()}).nonstrict(),e.RequestEmailSubscriptionProperties=r.Ik({group_id:w().optional().nullable(),only_admins:r.zM()}).nonstrict(),e.ServerInfo=r.Ik({environment:f().optional().nullable()}).nonstrict(),e.SettingsValues=r.Ik({bundles:r.g1(p()).optional().nullable()}).nonstrict(),e.Status=B(),e.Template=j(),e.TriggerDailyDigestRequest=r.Ik({application_name:r.Yj(),bundle_name:r.Yj(),end:I().optional().nullable(),org_id:r.Yj(),start:I().optional().nullable()}).nonstrict(),e.UUID=w(),e.UpdateBehaviorGroupRequest=r.Ik({display_name:r.Yj().optional().nullable(),display_name_not_null_and_blank:r.zM().optional().nullable(),endpoint_ids:r.YO(r.Yj()).optional().nullable(),event_type_ids:r.YO(r.Yj()).optional().nullable()}).nonstrict(),e.UserConfigPreferences=r.Ik({daily_email:r.zM().optional().nullable(),instant_email:r.zM().optional().nullable()}).nonstrict(),e.WebhookProperties=k(),e.__Empty=r.Yj().max(0).optional()}(i||(i={})),function(e){let t,n,o,u,p,c,s,d,_,m,y,f,b,v,E,R,g,N,Y,I,T,G,B;!function(e){const t=r.Yj();e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/notifications/behaviorGroups").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.CreateBehaviorGroupResponse,"CreateBehaviorGroupResponse",200),new a.ValidateRule(t,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(t=e.NotificationResourceCreateBehaviorGroup||(e.NotificationResourceCreateBehaviorGroup={})),function(e){const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}".replace("{endpointId}",e.endpointId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(n=e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint||(e.NotificationResourceGetBehaviorGroupsAffectedByRemovalOfEndpoint={})),function(e){r.YO(r.Yj());const t=r.Yj();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{behaviorGroupId}/actions".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(o=e.NotificationResourceUpdateBehaviorGroupActions||(e.NotificationResourceUpdateBehaviorGroupActions={})),function(e){const t=r.zM(),n=r.Yj(),o=r.Yj();e.actionCreator=e=>{const r="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("PUT",r).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(n,"unknown",400),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403),new a.ValidateRule(o,"unknown",404)]}).build()}}(u=e.NotificationResourceUpdateBehaviorGroup||(e.NotificationResourceUpdateBehaviorGroup={})),function(e){const t=r.zM();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/behaviorGroups/{id}".replace("{id}",e.id.toString());return(0,l.actionBuilder)("DELETE",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(p=e.NotificationResourceDeleteBehaviorGroup||(e.NotificationResourceDeleteBehaviorGroup={})),function(e){const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/bundles/{bundleId}/behaviorGroups".replace("{bundleId}",e.bundleId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(c=e.NotificationResourceFindBehaviorGroupsByBundleId||(e.NotificationResourceFindBehaviorGroupsByBundleId={})),function(e){r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}".replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Bundle,"Bundle",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(s=e.NotificationResourceGetBundleByName||(e.NotificationResourceGetBundleByName={})),function(e){r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.Application,"Application",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(d=e.NotificationResourceGetApplicationByNameAndBundleName||(e.NotificationResourceGetApplicationByNameAndBundleName={})),function(e){r.Yj(),r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/bundles/{bundleName}/applications/{applicationName}/eventTypes/{eventTypeName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString()).replace("{eventTypeName}",e.eventTypeName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.EventType,"EventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(_=e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName||(e.NotificationResourceGetEventTypesByNameAndBundleAndApplicationName={})),function(e){r.YO(r.Yj()),r.Yj(),r.ai().int(),r.ai().int(),r.ai().int(),r.Yj(),e.actionCreator=e=>{const t={};return void 0!==e.applicationIds&&(t.applicationIds=e.applicationIds),void 0!==e.bundleId&&(t.bundleId=e.bundleId),void 0!==e.eventTypeName&&(t.eventTypeName=e.eventTypeName),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/eventTypes").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventType,"PageEventType",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(m=e.NotificationResourceGetEventTypes||(e.NotificationResourceGetEventTypes={})),function(e){const t=r.YO(i.EventType);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/affectedByRemovalOfBehaviorGroup/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString());return(0,l.actionBuilder)("GET",n).queryParams({}).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(y=e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup||(e.NotificationResourceGetEventTypesAffectedByRemovalOfBehaviorGroup={})),function(e){r.ai().int(),r.ai().int(),r.ai().int(),r.Yj();const t=r.YO(i.BehaviorGroup);e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString()),o={};return void 0!==e.limit&&(o.limit=e.limit),void 0!==e.offset&&(o.offset=e.offset),void 0!==e.pageNumber&&(o.pageNumber=e.pageNumber),void 0!==e.sortBy&&(o.sort_by=e.sortBy),(0,l.actionBuilder)("GET",n).queryParams(o).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(f=e.NotificationResourceGetLinkedBehaviorGroups||(e.NotificationResourceGetLinkedBehaviorGroups={})),function(e){r.YO(r.Yj());const t=r.Yj();e.actionCreator=e=>{const n="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups".replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("PUT",n).queryParams({}).data(e.body).config({rules:[new a.ValidateRule(t,"unknown",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(b=e.NotificationResourceUpdateEventTypeBehaviors||(e.NotificationResourceUpdateEventTypeBehaviors={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeId}/behaviorGroups/{behaviorGroupId}".replace("{behaviorGroupId}",e.behaviorGroupId.toString()).replace("{eventTypeId}",e.eventTypeId.toString());return(0,l.actionBuilder)("DELETE",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(v=e.NotificationResourceDeleteBehaviorGroupFromEventType||(e.NotificationResourceDeleteBehaviorGroupFromEventType={})),function(e){e.actionCreator=e=>{const t="/api/notifications/v1.0/notifications/eventTypes/{eventTypeUuid}/behaviorGroups/{behaviorGroupUuid}".replace("{behaviorGroupUuid}",e.behaviorGroupUuid.toString()).replace("{eventTypeUuid}",e.eventTypeUuid.toString());return(0,l.actionBuilder)("PUT",t).queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",204),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(E=e.NotificationResourceAppendBehaviorGroupToEventType||(e.NotificationResourceAppendBehaviorGroupToEventType={})),function(e){r.YO(r.Yj()),r.YO(r.Yj()),r.YO(r.Yj()),r.Yj(),r.zM(),r.zM(),r.zM(),r.YO(r.zM()),r.ai().int(),r.ai().int(),r.ai().int(),r.Yj(),r.YO(i.EventLogEntryActionStatus),e.actionCreator=e=>{const t={};return void 0!==e.appIds&&(t.appIds=e.appIds),void 0!==e.bundleIds&&(t.bundleIds=e.bundleIds),void 0!==e.endDate&&(t.endDate=e.endDate),void 0!==e.endpointTypes&&(t.endpointTypes=e.endpointTypes),void 0!==e.eventTypeDisplayName&&(t.eventTypeDisplayName=e.eventTypeDisplayName),void 0!==e.includeActions&&(t.includeActions=e.includeActions),void 0!==e.includeDetails&&(t.includeDetails=e.includeDetails),void 0!==e.includePayload&&(t.includePayload=e.includePayload),void 0!==e.invocationResults&&(t.invocationResults=e.invocationResults),void 0!==e.limit&&(t.limit=e.limit),void 0!==e.offset&&(t.offset=e.offset),void 0!==e.pageNumber&&(t.pageNumber=e.pageNumber),void 0!==e.sortBy&&(t.sort_by=e.sortBy),void 0!==e.startDate&&(t.startDate=e.startDate),void 0!==e.status&&(t.status=e.status),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/events").queryParams(t).config({rules:[new a.ValidateRule(i.PageEventLogEntry,"PageEventLogEntry",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}}(R=e.EventResourceGetEvents||(e.EventResourceGetEvents={})),function(e){r.Yj();const t=r.YO(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.bundleName&&(n.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/applications").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(g=e.NotificationResourceGetApplicationsFacets||(e.NotificationResourceGetApplicationsFacets={})),function(e){r.zM();const t=r.YO(i.Facet);e.actionCreator=e=>{const n={};return void 0!==e.includeApplications&&(n.includeApplications=e.includeApplications),(0,l.actionBuilder)("GET","/api/notifications/v1.0/notifications/facets/bundles").queryParams(n).config({rules:[new a.ValidateRule(t,"unknown",200)]}).build()}}(N=e.NotificationResourceGetBundleFacets||(e.NotificationResourceGetBundleFacets={})),function(e){e.actionCreator=()=>(0,l.actionBuilder)("GET","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(Y=e.OrgConfigResourceGetDailyDigestTimePreference||(e.OrgConfigResourceGetDailyDigestTimePreference={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("PUT","/api/notifications/v1.0/org-config/daily-digest/time-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200),new a.ValidateRule(i.__Empty,"__Empty",401),new a.ValidateRule(i.__Empty,"__Empty",403)]}).build()}(I=e.OrgConfigResourceSaveDailyDigestTimePreference||(e.OrgConfigResourceSaveDailyDigestTimePreference={})),function(e){r.Yj(),e.actionCreator=e=>{const t={};return void 0!==e.bundleName&&(t.bundleName=e.bundleName),(0,l.actionBuilder)("GET","/api/notifications/v1.0/user-config/notification-preference").queryParams(t).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}}(T=e.UserConfigResourceGetSettingsSchema||(e.UserConfigResourceGetSettingsSchema={})),function(e){e.actionCreator=e=>(0,l.actionBuilder)("POST","/api/notifications/v1.0/user-config/notification-preference").queryParams({}).data(e.body).config({rules:[new a.ValidateRule(i.__Empty,"__Empty",200)]}).build()}(G=e.UserConfigResourceSaveSettings||(e.UserConfigResourceSaveSettings={})),function(e){r.Yj(),r.Yj(),e.actionCreator=e=>{const t="/api/notifications/v1.0/user-config/notification-preference/{bundleName}/{applicationName}".replace("{applicationName}",e.applicationName.toString()).replace("{bundleName}",e.bundleName.toString());return(0,l.actionBuilder)("GET",t).queryParams({}).config({rules:[new a.ValidateRule(i.UserConfigPreferences,"UserConfigPreferences",200)]}).build()}}(B=e.UserConfigResourceGetPreferences||(e.UserConfigResourceGetPreferences={}))}(o||(o={}))},2173:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var i=n(20269),o=n(96787);const a=()=>(0,i.useQuery)(o.P.OrgConfigResourceGetDailyDigestTimePreference.actionCreator())},15640:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var i=n(20269),o=n(96787);const a=e=>o.P.OrgConfigResourceSaveDailyDigestTimePreference.actionCreator({body:e.body}),l=()=>(0,i.useMutation)(a)},17368:(e,t,n)=>{"use strict";n.d(t,{h:()=>l});var i=n(58274),o=n(97656),a=n(61225);const l=()=>{const e=(0,a.useDispatch)();return(0,o.useMemo)((()=>{const t=(t,n,o,a)=>e((0,i.addNotification)({variant:t,title:n,description:o,dismissable:a}));return{addNotification:t,addSuccessNotification:(...e)=>t("success",...e),addDangerNotification:(...e)=>t("danger",...e),addInfoNotification:(...e)=>t("info",...e),addWarningNotification:(...e)=>t("warning",...e),clearNotifications:()=>e((0,i.clearNotifications)())}}),[e])}},79826:()=>{},16789:()=>{},95067:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},56905:()=>{},29697:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},26078:()=>{},5637:()=>{},13409:()=>{},97553:()=>{},98469:()=>{},27077:()=>{},2580:()=>{},83696:()=>{},82804:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6167.aa67c341ab37f5794bd707ff75adc98f.js.map
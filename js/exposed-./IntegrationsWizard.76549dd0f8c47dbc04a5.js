"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[6675],{64428:(e,t,n)=>{n.r(t),n.d(t,{IntegrationWizard:()=>y,default:()=>A});var i=n(49405),s=n(63537),r=n(97744),o=n(47503),a=n(15039),c=n(87677),l=n(1384),u=n(72863),d=n(64118),p=n(91360),h=n(61674),g=n(70910),m=n(74611);const y=({isOpen:e,isEdit:t,template:n,closeModal:y,category:A})=>{const I={[p.nb]:a.A,[p.c5]:c.A,[p.Lh]:l.A,[p.AU]:u.A,[p.pJ]:h.A},f=(0,g.useFlag)("platform.integrations.behavior-groups-move"),[T,E]=o.useState(e),[b,v]=o.useState();return o.useEffect((()=>{E(e)}),[e]),o.createElement(o.Fragment,null,T?o.createElement(r.A,{schema:(0,d.w)(A,t,f),componentMapper:{...i.Ay,...I},onSubmit:({url:e,[p.Iq]:i,name:s,"secret-token":r,"event-types-table":o,"product-family":a})=>{const[c,l]=(null==i?void 0:i.split(":"))||["webhook"];f?(v({isEdit:t,url:e,type:c,sub_type:l,name:s,secret_token:r,event_type_id:o,bundle_name:a,template:n}),E(!1)):(fetch("/api/integrations/v1.0/endpoints"+(t?`/${null==n?void 0:n.id}`:""),{method:t?"PUT":"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:s,enabled:!0,type:c,...l&&{sub_type:l},description:"",properties:{method:"POST",url:e,disable_ssl_verification:!1,secret_token:r}})}),y())},initialValues:t?{...n,"secret-token":null==n?void 0:n.secretToken}:{},onCancel:y},(e=>o.createElement(s.Ay,{...e,showFormControls:!1}))):null,void 0!==b&&o.createElement(m.c,{data:b,onClose:()=>{v(void 0),y()}}))},A=y},33408:(e,t,n)=>{n.d(t,{D:()=>s,Ij:()=>a,K0:()=>l,_n:()=>r,ij:()=>i,tr:()=>o});const i=e=>e.type===r.EMAIL_SUBSCRIPTION||e.type===r.DRAWER,s=e=>e.type===r.INTEGRATION;var r;function o(e){return e.type===r.EMAIL_SUBSCRIPTION}function a(e){return e.type===r.DRAWER}!function(e){e.EMAIL_SUBSCRIPTION="EMAIL_SUBSCRIPTION",e.DRAWER="DRAWER",e.INTEGRATION="INTEGRATION"}(r||(r={}));const c=e=>e.map((e=>void 0===e?[void 0]:e.type===r.INTEGRATION?[e.integration.id]:e.recipient.map((e=>e.integrationId)))).flat(),l=(e,t)=>{if(e.length!==t.length)return!1;const n=c(e),i=c(t);return n.length===i.length&&n.every(((e,t)=>e===i[t]))}},92200:(e,t,n)=>{n.d(t,{AJ:()=>o,cx:()=>a,sT:()=>s});class i{constructor(e){this.displayName=e}}class s extends i{constructor(e){super(e.name+(e.isEnabled?"":" - Disabled")),this.integration=e}getKey(){return this.integration.id}equals(e){return e instanceof s&&e.integration.id===this.integration.id}}class r extends i{constructor(e,t,n,i){super(e),this.key=i,this.description=t,this.integrationId=n}getKey(){return this.key}}class o extends r{constructor(e,t,n){let i,s;t?(i="Admins",s="Organization administrators for your account"):(i="All",s="All users in your organization who subscribed to this email in their Notification Preferences"),super(i,s,e,t?"users-admin":"users-all"),this.sendToAdmin=t,this.ignorePreferences=n}equals(e){return e instanceof o&&e.sendToAdmin===this.sendToAdmin&&e.ignorePreferences===this.ignorePreferences}}class a extends r{constructor(e,t,n){let i,s,r;"string"==typeof n?(i=n,s=!1,r=!1):(i="Loading",s=n,r=!n),super(i,void 0,e,`rbac-group-${t}`),this.groupId=t,this.isLoading=s,this.hasError=r}equals(e){return e instanceof a&&e.groupId===this.groupId}}}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./IntegrationsWizard.f12e2663891479b1f33f03ffa913709b.js.map
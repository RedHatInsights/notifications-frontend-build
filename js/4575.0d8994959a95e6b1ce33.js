(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[4575],{25211:(e,a,t)=>{"use strict";t.d(a,{d:()=>p});var s=t(8674),i=t(97656);t(67879);const l="pf-m-reverse",c="pf-m-off",n="pf-m-on",r="pf-v5-c-switch__label",d="pf-v5-c-switch__toggle",h="pf-v5-c-switch__toggle-icon";var o=t(33774),f=t(59779),u=t(47931),m=t(31398);class p extends i.Component{constructor(e){super(e),e.label||e["aria-label"]||console.error("Switch: Switch requires either a label or an aria-label to be specified"),this.id=e.id||(0,u.LP)(),this.state={ouiaStateId:(0,m.X)(p.displayName)}}render(){const e=this.props,{id:a,className:t,label:u,labelOff:v,isChecked:b,defaultChecked:g,hasCheckIcon:C,isDisabled:k,onChange:w,isReversed:N,ouiaId:E,ouiaSafe:_}=e,y=(0,s.__rest)(e,["id","className","label","labelOff","isChecked","defaultChecked","hasCheckIcon","isDisabled","onChange","isReversed","ouiaId","ouiaSafe"]),I=""===y["aria-label"];return i.createElement("label",Object.assign({className:(0,o.A)("pf-v5-c-switch",N&&l,t),htmlFor:this.id},(0,m.Bs)(p.displayName,void 0!==E?E:this.state.ouiaStateId,_)),i.createElement("input",Object.assign({id:this.id,className:(0,o.A)("pf-v5-c-switch__input"),type:"checkbox",onChange:e=>w(e,e.target.checked)},void 0!==g?{defaultChecked:g}:{checked:b},{disabled:k,"aria-labelledby":I?`${this.id}-${!0!==b?"off":"on"}`:null},y)),void 0!==u?i.createElement(i.Fragment,null,i.createElement("span",{className:(0,o.A)(d)},C&&i.createElement("span",{className:(0,o.A)(h),"aria-hidden":"true"},i.createElement(f.default,null))),i.createElement("span",{className:(0,o.A)(r,n),id:I?`${this.id}-on`:null,"aria-hidden":"true"},u),i.createElement("span",{className:(0,o.A)(r,c),id:I?`${this.id}-off`:null,"aria-hidden":"true"},void 0!==v?v:u)):i.createElement("span",{className:(0,o.A)(d)},i.createElement("div",{className:(0,o.A)(h),"aria-hidden":"true"},i.createElement(f.default,null))))}}p.displayName="Switch",p.defaultProps={isChecked:!0,isDisabled:!1,isReversed:!1,"aria-label":"",onChange:()=>{}}},44575:(e,a,t)=>{"use strict";t.r(a),t.d(a,{Switch:()=>s.d});var s=t(25211)},68419:(e,a,t)=>{"use strict";t.d(a,{w:()=>c});var s=t(8674),i=t(97656);let l=0;function c({name:e,xOffset:a=0,yOffset:t=0,width:c,height:n,svgPath:r}){var d;return d=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{title:l,className:d}=e,h=(0,s.__rest)(e,["title","className"]),o=d?`pf-v5-svg ${d}`:"pf-v5-svg",f=Boolean(l),u=[a,t,c,n].join(" ");return i.createElement("svg",Object.assign({className:o,viewBox:u,fill:"currentColor","aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img",width:"1em",height:"1em"},h),f&&i.createElement("title",{id:this.id},l),i.createElement("path",{d:r}))}},d.displayName=e,d}},59779:(e,a,t)=>{"use strict";t.r(a),t.d(a,{CheckIcon:()=>l,CheckIconConfig:()=>i,default:()=>c});var s=t(68419);const i={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},l=(0,s.w)(i),c=l},67879:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4575.990521e53cd122b103424249d80e7cda.js.map
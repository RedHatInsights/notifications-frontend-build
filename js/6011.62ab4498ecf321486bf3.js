"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[6011],{18392:(e,a,s)=>{s.r(a),s.d(a,{MenuToggle:()=>i.S,MenuToggleAction:()=>c,MenuToggleCheckbox:()=>r});var i=s(17661),t=s(8674),n=s(97656),l=s(87229),d=s(33774);class c extends n.Component{render(){const e=this.props,{id:a,className:s,onClick:i,isDisabled:c,children:o}=e,h=(0,t.__rest)(e,["id","className","onClick","isDisabled","children"]);return n.createElement("button",Object.assign({id:a,className:(0,d.A)(l.A.menuToggleButton,s),onClick:i,type:"button",disabled:c},h),o)}}c.displayName="MenuToggleAction",c.defaultProps={className:"",isDisabled:!1,onClick:()=>{}};var o=s(48280),h=s(31398);class r extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.target.checked,e)},this.calculateChecked=()=>{const{isChecked:e,defaultChecked:a}=this.props;return null!==e&&(void 0!==e?e:a)},this.state={ouiaStateId:(0,h.X)(r.displayName)}}render(){const e=this.props,{className:a,isValid:s,isDisabled:i,isChecked:l,children:c,ouiaId:u,ouiaSafe:C,onChange:k,defaultChecked:p,id:m}=e,g=(0,t.__rest)(e,["className","isValid","isDisabled","isChecked","children","ouiaId","ouiaSafe","onChange","defaultChecked","id"]),b=c&&n.createElement("span",{className:(0,d.A)(o.A.checkLabel,a),"aria-hidden":"true",id:m},c);return n.createElement("label",{className:(0,d.A)(o.A.check,!c&&o.A.modifiers.standalone,a),htmlFor:m},n.createElement("input",Object.assign({className:(0,d.A)(o.A.checkInput)},void 0!==this.calculateChecked()&&{onChange:this.handleChange},{name:m,type:"checkbox",ref:e=>e&&(e.indeterminate=null===l),"aria-invalid":!s,disabled:i},void 0!==p?{defaultChecked:p}:{checked:l},(0,h.Bs)(r.displayName,void 0!==u?u:this.state.ouiaStateId,C),g)),b)}}r.displayName="MenuToggleCheckbox",r.defaultProps={isValid:!0,isDisabled:!1,onChange:()=>{}}}}]);
//# sourceMappingURL=../sourcemaps/6011.abb882a3144a456611b3f45813101df1.js.map
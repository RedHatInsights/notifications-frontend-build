(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[9191],{44461:(e,t,o)=>{"use strict";o.d(t,{A:()=>z,$:()=>R});var a=o(8674),n=o(47503),r=o(52860);o(5937);const i="pf-m-no-padding",l="pf-m-width-auto",s="pf-m-top",c="pf-m-top-left",p="pf-m-top-right",d="pf-m-bottom",m="pf-m-bottom-left",v="pf-m-bottom-right",u="pf-m-left",h="pf-m-left-top",f="pf-m-left-bottom",g="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",N="pf-m-danger",E="pf-m-warning",_="pf-m-success",C="pf-m-custom",S="pf-m-info";var w=o(33774);const O=n.createContext({}),P=e=>{var{className:t=null,children:o}=e,r=(0,a.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,w.A)("pf-v5-c-popover__content",t)},r),o)};P.displayName="PopoverContent";const A=e=>{var{children:t,id:o,className:r}=e,i=(0,a.__rest)(e,["children","id","className"]);return n.createElement("div",Object.assign({className:(0,w.A)("pf-v5-c-popover__body",r),id:o},i),t)};A.displayName="PopoverBody";const x=e=>{var{children:t,className:o}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("span",Object.assign({className:(0,w.A)("pf-v5-c-popover__title-icon",o)},r),t)};x.displayName="PopoverHeaderIcon";const k=e=>{var{children:t,className:o,headingLevel:r}=e,i=(0,a.__rest)(e,["children","className","headingLevel"]);const l=r;return n.createElement(l,Object.assign({className:(0,w.A)("pf-v5-c-popover__title-text",o)},i),t)};k.displayName="PopoverHeaderText";const T=e=>{var{children:t,icon:o,className:r,titleHeadingLevel:i="h6",alertSeverityVariant:l,id:s,alertSeverityScreenReaderText:c}=e,p=(0,a.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return n.createElement("header",Object.assign({className:(0,w.A)("pf-v5-c-popover__header",r)},p),n.createElement("div",{className:(0,w.A)("pf-v5-c-popover__title"),id:s},o&&n.createElement(x,null,o),n.createElement(k,{headingLevel:i},l&&c&&n.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};T.displayName="PopoverHeader";const F=e=>{var{children:t,className:o=""}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("footer",Object.assign({className:(0,w.A)("pf-v5-c-popover__footer",o)},r),t)};F.displayName="PopoverFooter";var W=o(72583),H=o(44397);const M=e=>{var{onClose:t=(()=>{})}=e,o=(0,a.__rest)(e,["onClose"]);return n.createElement("div",{className:(0,w.A)("pf-v5-c-popover__close")},n.createElement(W.$n,Object.assign({onClick:t,variant:"plain","aria-label":!0},o,{style:{pointerEvents:"auto"}}),n.createElement(H.Ay,null)))};M.displayName="PopoverCloseButton";const j=e=>{var{className:t=""}=e,o=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,w.A)("pf-v5-c-popover__arrow",t)},o))};j.displayName="PopoverArrow";const B={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},L={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var R,D=o(32257),$=o(17694),I=o(47931);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(R||(R={}));const V={custom:C,info:S,success:_,warning:E,danger:N},z=e=>{var{children:t,position:o="top",enableFlip:N=!0,className:E="",isVisible:_=null,shouldClose:C=(()=>null),shouldOpen:S=(()=>null),"aria-label":x="",bodyContent:k,headerContent:W=null,headerComponent:H="h6",headerIcon:R=null,alertSeverityVariant:z,alertSeverityScreenReaderText:K,footerContent:U=null,appendTo:q=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:Q=(()=>null),onShow:X=(()=>null),onShown:Y=(()=>null),onMount:Z=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:oe=L&&L.value,maxWidth:ae=B&&B.value,closeBtnAriaLabel:ne="Close",showClose:re=!0,distance:ie=25,flipBehavior:le=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:se=300,id:ce,withFocusTrap:pe,triggerRef:de,hasNoPadding:me=!1,hasAutoWidth:ve=!1,elementToFocus:ue}=e,he=(0,a.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const fe=ce||(0,I.LP)(),ge=null!==_,[be,ye]=n.useState(!1),[Ne,Ee]=n.useState(Boolean(pe)),_e=n.useRef(null);n.useEffect((()=>{Z()}),[]),n.useEffect((()=>{ge&&(_?Ce(void 0,!0):Se())}),[_,ge]);const Ce=(e,t)=>{e&&X(e),ye(!0),!1!==pe&&t&&Ee(!0)},Se=e=>{e&&J(e),ye(!1)},we={top:s,bottom:d,left:u,right:g,"top-start":c,"top-end":p,"bottom-start":m,"bottom-end":v,"left-start":h,"left-end":f,"right-start":b,"right-end":y},Oe=oe!==L.value,Pe=ae!==B.value,Ae=e=>{ge?S(e,Ce):Ce(e,!1)},xe=e=>{ge?C(e,Se):Se(e)},ke=n.createElement(D.s,Object.assign({ref:_e,active:Ne,focusTrapOptions:{returnFocusOnDeactivate:!1!==pe,clickOutsideDeactivates:!0,initialFocus:ue||void 0,checkCanFocusTrap:e=>new Promise((t=>{const o=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(o))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,w.A)("pf-v5-c-popover",z&&V[z],me&&i,ve&&l,E),role:"dialog","aria-modal":"true","aria-label":W?void 0:x,"aria-labelledby":W?`popover-${fe}-header`:void 0,"aria-describedby":`popover-${fe}-body`,onMouseDown:()=>{Ne&&Ee(!1)},style:{minWidth:Oe?oe:null,maxWidth:Pe?ae:null}},he),n.createElement(j,null),n.createElement(P,null,re&&"click"===te&&n.createElement(M,{onClose:e=>{e.stopPropagation(),ge?C(e,Se):Se(e)},"aria-label":ne}),W&&n.createElement(T,{id:`popover-${fe}-header`,icon:R,alertSeverityVariant:z,alertSeverityScreenReaderText:K||`${z} alert:`,titleHeadingLevel:H},"function"==typeof W?W(Se):W),n.createElement(A,{id:`popover-${fe}-body`},"function"==typeof k?k(Se):k),U&&n.createElement(F,{id:`popover-${fe}-footer`},"function"==typeof U?U(Se):U)));return n.createElement(O.Provider,{value:{headerComponent:H}},n.createElement($.Popper,{trigger:t,triggerRef:de,popper:ke,popperRef:_e,minWidth:oe,appendTo:q,isVisible:be,onMouseEnter:"hover"===te&&Ae,onMouseLeave:"hover"===te&&xe,onPopperMouseEnter:"hover"===te&&Ae,onPopperMouseLeave:"hover"===te&&xe,onFocus:"hover"===te&&(e=>{ge?S(e,Ce):Ce(e,!1)}),onBlur:"hover"===te&&(e=>{ge?C(e,Se):Se(e)}),positionModifiers:we,distance:ie,placement:o,onTriggerClick:"click"===te&&(e=>{ge?be?C(e,Se):S(e,Ce):be?Se(e):Ce(e,!0)}),onDocumentClick:(e,t,o)=>{if(G&&be){const a=o&&o.contains(e.target),n=t&&t.contains(e.target);if(a||n)return;ge?C(e,Se):Se(e)}},onDocumentKeyDown:e=>{e.key===r.RU.Escape&&be&&(ge?C(e,Se):Se(e))},enableFlip:N,zIndex:ee,flipBehavior:le,animationDuration:se,onHidden:Q,onShown:Y,onHide:()=>Ee(!1)}))};z.displayName="Popover"},40580:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Popover:()=>a.A,PopoverPosition:()=>a.$});var a=o(44461)},68419:(e,t,o)=>{"use strict";o.d(t,{w:()=>i});var a=o(8674),n=o(47503);let r=0;function i({name:e,xOffset:t=0,yOffset:o=0,width:i,height:l,svgPath:s}){var c;return c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:c}=e,p=(0,a.__rest)(e,["title","className"]),d=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(r),v=[t,o,i,l].join(" ");return n.createElement("svg",Object.assign({className:d,viewBox:v,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},p),m&&n.createElement("title",{id:this.id},r),n.createElement("path",{d:s}))}},c.displayName=e,c}},79826:()=>{},21741:()=>{},30935:()=>{},5937:()=>{},97553:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9191.ad7fe4c43370f56c57dcd0949d17c29c.js.map
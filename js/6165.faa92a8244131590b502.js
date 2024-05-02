"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[6165],{37623:(e,a,t)=>{t.d(a,{z:()=>n});var l=t(8674),i=t(97656),o=t(33774),s=t(61354);const n=e=>{var{children:a=null,className:t=""}=e,n=(0,l.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({},n,{className:(0,o.A)(s.A.backdrop,t)}),a)};n.displayName="Backdrop"},16165:(e,a,t)=>{t.d(a,{a:()=>b,d:()=>l});var l,i=t(8674),o=t(97656),s=t(25686),n=t(52860),r=t(47931),d=t(33774),c=t(61354),m=t(96004),p=t(31398);!function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(l||(l={}));class b extends o.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,t;const{onEscapePress:l}=this.props;e.key===n.RU.Escape&&this.props.isOpen&&(l?l(e):null===(t=(a=this.props).onClose)||void 0===t||t.call(a,e))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=b.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:(0,p.X)(b.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:i,header:o}=this.props,s=this.getElement(e),n=document.createElement("div");this.setState({container:n}),s.appendChild(n),s.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?s.classList.add((0,d.A)(c.A.backdropOpen)):s.classList.remove((0,d.A)(c.A.backdropOpen)),this.isEmpty(a)&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(i||o)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add((0,d.A)(c.A.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove((0,d.A)(c.A.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove((0,d.A)(c.A.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1)}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":l,"aria-label":n,"aria-describedby":d,bodyAriaLabel:c,bodyAriaRole:p,title:b,titleIconVariant:u,titleLabel:h,ouiaId:f,ouiaSafe:y,position:v,elementToFocus:A}=e,g=(0,i.__rest)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe","position","elementToFocus"]),{container:x}=this.state;return r.Sw&&x?s.createPortal(o.createElement(m.$,Object.assign({},g,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:b,titleIconVariant:u,titleLabel:h,"aria-label":n,"aria-describedby":d,"aria-labelledby":l,bodyAriaLabel:c,bodyAriaRole:p,ouiaId:void 0!==f?f:this.state.ouiaStateId,ouiaSafe:y,position:v,elementToFocus:A})),x):null}}b.displayName="Modal",b.currentId=0,b.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0,position:"default"}},45956:(e,a,t)=>{t.d(a,{n:()=>r});var l=t(8674),i=t(97656),o=t(33774),s=t(81539);const n="--pf-v5-c-modal-box--m-align-top--spacer",r=e=>{var{children:a,className:t="",variant:r="default",position:d,positionOffset:c,"aria-labelledby":m,"aria-label":p="","aria-describedby":b,style:u}=e,h=(0,l.__rest)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return c&&((u=u||{})[n]=c),i.createElement("div",Object.assign({},h,{role:"dialog","aria-label":p||null,"aria-labelledby":m||null,"aria-describedby":b,"aria-modal":"true",className:(0,o.A)(s.A.modalBox,t,"top"===d&&s.A.modifiers.alignTop,"large"===r&&s.A.modifiers.lg,"small"===r&&s.A.modifiers.sm,"medium"===r&&s.A.modifiers.md),style:u}),a)};r.displayName="ModalBox"},69620:(e,a,t)=>{t.d(a,{H:()=>n});var l=t(8674),i=t(97656),o=t(33774),s=t(81539);const n=e=>{var{children:a=null,className:t=""}=e,n=(0,l.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({},n,{className:(0,o.A)(s.A.modalBoxBody,t)}),a)};n.displayName="ModalBoxBody"},74610:(e,a,t)=>{t.d(a,{f:()=>d});var l=t(8674),i=t(97656),o=t(33774),s=t(81539),n=t(72583),r=t(44397);const d=e=>{var{className:a,onClose:t=(()=>{}),"aria-label":c="Close",ouiaId:m}=e,p=(0,l.__rest)(e,["className","onClose","aria-label","ouiaId"]);return i.createElement("div",{className:(0,o.A)(s.A.modalBoxClose,a)},i.createElement(n.$n,Object.assign({variant:"plain",onClick:e=>t(e),"aria-label":c},m&&{ouiaId:`${m}-${d.displayName}`},p),i.createElement(r.Ay,null)))};d.displayName="ModalBoxCloseButton"},8795:(e,a,t)=>{t.d(a,{i:()=>n});var l=t(8674),i=t(97656),o=t(33774),s=t(81539);const n=e=>{var{children:a=null,className:t=""}=e,n=(0,l.__rest)(e,["children","className"]);return i.createElement("footer",Object.assign({},n,{className:(0,o.A)(s.A.modalBoxFooter,t)}),a)};n.displayName="ModalBoxFooter"},46233:(e,a,t)=>{t.d(a,{u:()=>n});var l=t(8674),i=t(97656),o=t(33774),s=t(81539);const n=e=>{var{children:a=null,className:t="",help:n=null}=e,r=(0,l.__rest)(e,["children","className","help"]);return i.createElement("header",Object.assign({className:(0,o.A)(s.A.modalBoxHeader,n&&s.A.modifiers.help,t)},r),n&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,o.A)(s.A.modalBoxHeaderMain)},a),i.createElement("div",{className:`${s.A.modalBoxHeader}-help`},n)),!n&&a)};n.displayName="ModalBoxHeader"},96004:(e,a,t)=>{t.d(a,{$:()=>_});var l=t(8674),i=t(97656),o=t(32257),s=t(81539),n=t(32069),r=t(33774),d=t(31398),c=t(37623),m=t(69620),p=t(74610),b=t(45956),u=t(8795);const h=e=>{var{children:a=null,className:t="",id:o=""}=e,n=(0,l.__rest)(e,["children","className","id"]);return i.createElement("div",Object.assign({},n,{id:o,className:(0,r.A)(s.A.modalBoxDescription,t)}),a)};h.displayName="ModalBoxDescription";var f=t(46233),y=t(47931),v=t(45523),A=t(19202),g=t(31003),x=t(99851),E=t(29962),N=t(79284),C=t(55251);const I=e=>["success","danger","warning","info","custom"].includes(e),B=e=>{var{className:a="",id:t,title:o,titleIconVariant:n,titleLabel:d=""}=e,c=(0,l.__rest)(e,["className","id","title","titleIconVariant","titleLabel"]);const[m,p]=i.useState(!1),b=i.useRef(null),u=d||(I(n)?`${(0,y.ZH)(n)} alert:`:d),h={success:i.createElement(A.Ay,null),danger:i.createElement(g.Ay,null),warning:i.createElement(x.Ay,null),info:i.createElement(E.Ay,null),custom:i.createElement(N.Ay,null)},f=!I(n)&&n;(0,C.E)((()=>{p(b.current&&b.current.offsetWidth<b.current.scrollWidth)}),[]);const B=i.createElement("h1",Object.assign({id:t,ref:b,className:(0,r.A)(s.A.modalBoxTitle,n&&s.A.modifiers.icon,a)},c),n&&i.createElement("span",{className:(0,r.A)(s.A.modalBoxTitleIcon)},I(n)?h[n]:i.createElement(f,null)),u&&i.createElement("span",{className:"pf-v5-screen-reader"},u),i.createElement("span",{className:(0,r.A)(s.A.modalBoxTitleText)},o));return m?i.createElement(v.m,{content:o},B):B};B.displayName="ModalBoxTitle";const _=e=>{var{children:a,className:t="",isOpen:y=!1,header:v=null,help:A=null,description:g=null,title:x="",titleIconVariant:E=null,titleLabel:N="","aria-label":C="","aria-describedby":O,"aria-labelledby":L,bodyAriaLabel:k,bodyAriaRole:T,showClose:S=!0,footer:w=null,actions:M=[],onClose:F=(()=>{}),variant:j="default",position:W,positionOffset:$,width:R,maxWidth:H,boxId:V,labelId:D,descriptorId:P,disableFocusTrap:z=!1,hasNoBodyWrapper:K=!1,ouiaId:U,ouiaSafe:Z=!0,elementToFocus:X}=e,q=(0,l.__rest)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","maxWidth","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe","elementToFocus"]);if(!y)return null;const G=v?i.createElement(f.u,{help:A},v):x&&i.createElement(f.u,{help:A},i.createElement(B,{title:x,titleIconVariant:E,titleLabel:N,id:D}),g&&i.createElement(h,{id:P},g)),J=w?i.createElement(u.i,null,w):M.length>0&&i.createElement(u.i,null,M),Q=k?"region":void 0,Y=g||O?void 0:P,ee=K?a:i.createElement(m.H,Object.assign({"aria-label":k,role:T||Q},q,{id:Y}),a),ae=i.createElement(b.n,Object.assign({id:V,className:(0,r.A)(t,I(E)&&s.A.modifiers[E]),variant:j,position:W,positionOffset:$,"aria-label":C,"aria-labelledby":(()=>{if(null===L)return null;const e=[];return""!==(C&&V)&&e.push(C&&V),L&&e.push(L),x&&e.push(D),e.join(" ")})(),"aria-describedby":O||(K?null:P)},(0,d.Bs)(_.displayName,U,Z),{style:Object.assign(Object.assign({},R&&{"--pf-v5-c-modal-box--Width":"number"!=typeof R?R:`${R}px`}),H&&{"--pf-v5-c-modal-box--MaxWidth":"number"!=typeof H?H:`${H}px`})}),S&&i.createElement(p.f,{onClose:e=>F(e),ouiaId:U}),G,ee,J);return i.createElement(c.z,null,i.createElement(o.s,{active:!z,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},initialFocus:X||void 0},className:(0,r.A)(n.A.bullseye)},ae))};_.displayName="ModalContent"},79284:(e,a,t)=>{t.d(a,{Ay:()=>i,XF:()=>l});const l=(0,t(68419).w)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0}),i=l},29962:(e,a,t)=>{t.d(a,{Ay:()=>l});const l=(0,t(68419).w)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},61354:(e,a,t)=>{t.d(a,{A:()=>l}),t(95067);const l={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,a,t)=>{t.d(a,{A:()=>l}),t(26078);const l={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},32069:(e,a,t)=>{t.d(a,{A:()=>l}),t(2580);const l={bullseye:"pf-v5-l-bullseye"}}}]);
//# sourceMappingURL=../sourcemaps/6165.21275254fa0a4fea0d0885d949b5170f.js.map
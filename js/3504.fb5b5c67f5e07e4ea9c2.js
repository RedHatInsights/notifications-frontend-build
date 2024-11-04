"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[3504],{709:(e,a,t)=>{t.d(a,{s:()=>b});var i=t(8674),n=t(47503),s=t.n(n),r=t(33774),d=t(15904),l=t(77937),o=t(7851);const c=e=>{var{children:a,steps:t}=e;return(0,i.__rest)(e,["children","steps"])},u=(e,a)=>{if(!(0,l.ec)(a)&&!a.isHidden&&!a.isDisabled){if(!(0,l.o)(a))return!0;{const t=e.find((e=>e.id===a.parentId));if(!t.isHidden&&!t.isDisabled)return!0}}return!1};var p=t(94698),m=t(91097),v=t(68572),g=t(53838);const f=({nav:e,navAriaLabel:a,isVisitRequired:t,isProgressive:i,isNavExpanded:n})=>{const{activeStep:r,steps:d,goToStepByIndex:o}=(0,p.CV)(),c=Object.assign({isExpanded:n,"aria-label":a||(null==e?void 0:e["aria-label"])||"Wizard steps"},(null==e?void 0:e["aria-labelledby"])&&{"aria-labelledby":e["aria-labelledby"]});return s().createElement(v.l,Object.assign({},c),d.map(((e,a)=>{var n;const u=d.some((e=>e.index>a+1&&e.isVisited)),p=e.isDisabled||t&&!e.isVisited&&!u,m=(0,l.h4)(e.navItem)&&s().createElement(s().Fragment,{key:e.id},"function"==typeof e.navItem?e.navItem(e,r,d,o):e.navItem);if((0,l.ec)(e)&&!e.isHidden){let a,u=!1;const f=null===(n=e.subStepIds)||void 0===n?void 0:n.map(((e,n)=>{const c=d.find((a=>a.id===e)),m=d.some((e=>e.index>c.index&&e.isVisited)),v=c.isDisabled||t&&!c.isVisited&&!m,f=(0,l.h4)(c.navItem)&&s().createElement(s().Fragment,{key:c.id},"function"==typeof c.navItem?c.navItem(c,r,d,o):c.navItem);if(!c.isHidden)return 0===n&&(a=c.index),(null==r?void 0:r.id)===c.id&&(u=!0),!i||i&&c.index<=r.index?f||s().createElement(g.M,Object.assign({key:c.id,id:c.id,content:c.name,isCurrent:(null==r?void 0:r.id)===c.id,isDisabled:v||p,isVisited:c.isVisited,stepIndex:c.index,onClick:()=>o(c.index),status:c.status},c.navItem)):void 0})),b=s().Children.toArray(f).some((e=>s().isValidElement(e)&&!e.props.isDisabled));if(!i||i&&e.index<=r.index)return m||s().createElement(g.M,Object.assign({key:e.id,id:e.id,content:e.name,isExpandable:e.isExpandable,isCurrent:u,isDisabled:!b||p,isVisited:e.isVisited,stepIndex:a,onClick:()=>o(a),status:e.status},e.navItem),s().createElement(v.l,Object.assign({},c,{isInnerList:!0}),f))}if((0,l.cg)(e)&&!e.isHidden&&(!i||i&&e.index<=r.index))return m||s().createElement(g.M,Object.assign({key:e.id,id:e.id,content:e.name,isCurrent:(null==r?void 0:r.id)===e.id,isDisabled:p,isVisited:e.isVisited,stepIndex:e.index,onClick:()=>o(e.index),status:e.status},e.navItem))})))},b=e=>{var{children:a,footer:t,height:n,width:m,className:v,header:g,nav:f,navAriaLabel:b,startIndex:E=1,isVisitRequired:N=!1,isProgressive:z=!1,onStepChange:w,onSave:h,onClose:A,shouldFocusContent:y=!1}=e,_=(0,i.__rest)(e,["children","footer","height","width","className","header","nav","navAriaLabel","startIndex","isVisitRequired","isProgressive","onStepChange","onSave","onClose","shouldFocusContent"]);const[k,C]=s().useState(E),I=(e=>s().Children.toArray(e).reduce(((e,a,t)=>{if(!function(e){return s().isValidElement(e)&&e.type===o.W}(a))throw new Error("Wizard only accepts children of type WizardStep.");{const{props:i}=a,{steps:n,id:s}=i,r=e.length+1,d=[];e.push(Object.assign(Object.assign(Object.assign({index:r,component:a},0===t&&!(null==n?void 0:n.length)&&{isVisited:!0}),n&&{subStepIds:null==n?void 0:n.map(((e,a)=>(d.push(Object.assign(Object.assign({index:r+a+1,component:e,parentId:s},0===t&&0===a&&{isVisited:!0}),c(e.props))),e.props.id)))}),c(i)),...d)}return e}),[]))(a),S=s().useRef(I[E-1]),T=s().useRef(null);s().useEffect((()=>{(0,l.ec)(S.current)&&C(E+1)}),[E]),s().useEffect((()=>{k>I.length&&C(E)}),[I,k,E]);const O=()=>setTimeout((()=>{var e;(null===(e=null==T?void 0:T.current)||void 0===e?void 0:e.focus)&&T.current.focus()}),0);return s().createElement(p.Wg,{steps:I,activeStepIndex:k,footer:t,onNext:(e,a=I)=>{const t=a.find((e=>e.index>k&&u(a,e)));if(k>=a.length||!(null==t?void 0:t.index))return h?h(e):null==A?void 0:A(e);C(null==t?void 0:t.index),null==w||w(e,t,a[k-1],l.ET.Next),y&&O()},onBack:(e,a=I)=>{const t=[...a].reverse().find((e=>e.index<k&&u(a,e)));C(null==t?void 0:t.index),null==w||w(e,t,a[k-1],l.ET.Back),y&&O()},onClose:A,goToStepById:(e=I,a)=>{const t=e.find((e=>e.id===a)),i=null==t?void 0:t.index,n=e.length+1;i>0&&i<n&&!t.isDisabled&&!t.isHidden&&C(i)},goToStepByName:(e=I,a)=>{const t=e.find((e=>e.name===a)),i=null==t?void 0:t.index,n=e.length+1;i>0&&i<n&&!t.isDisabled&&!t.isHidden&&C(i)},goToStepByIndex:(e,a=I,t)=>{const i=a.length+1;t<1?t=1:t>i&&(t=i);const n=a[t-1],s=a[k-1];C(t),null==w||w(e,n,s,l.ET.Nav)},shouldFocusContent:y,mainWrapperRef:T},s().createElement("div",Object.assign({className:(0,r.A)(d.A.wizard,v),style:Object.assign(Object.assign({},n?{height:n}:{}),m?{width:m}:{})},_),g,s().createElement(x,{nav:f,navAriaLabel:b,isVisitRequired:N,isProgressive:z})))},x=({nav:e,navAriaLabel:a,isVisitRequired:t,isProgressive:i})=>{const{activeStep:n,steps:r,footer:d,goToStepByIndex:o}=(0,p.CV)(),[c,u]=s().useState(!1),v=s().useMemo((()=>(0,l.ub)(e)?"function"==typeof e?e(c,r,n,o):e:s().createElement(f,{nav:e,navAriaLabel:a,isNavExpanded:c,isVisitRequired:t,isProgressive:i})),[n,t,i,o,c,e,a,r]);return s().createElement(m.K,{nav:v,footer:d,steps:r,activeStep:n,isNavExpanded:c,toggleNavExpanded:()=>u((e=>!e))})};b.displayName="Wizard"},57965:(e,a,t)=>{t.d(a,{E:()=>u});var i=t(8674),n=t(47503),s=t.n(n),r=t(15904),d=t(33774),l=t(94698),o=t(47931),c=t(49045);const u=e=>{var{children:a,className:t,hasNoPadding:n=!1,"aria-label":u,"aria-labelledby":p,component:m="div"}=e,v=(0,i.__rest)(e,["children","className","hasNoPadding","aria-label","aria-labelledby","component"]);const[g,f]=s().useState(!1),[b,x]=s().useState(void 0),E=m,{activeStep:N,shouldFocusContent:z,mainWrapperRef:w}=s().useContext(l.Lh),h=u||`${null==N?void 0:N.name} content`;return s().useEffect((()=>{const e=(0,o.sg)((()=>{if(null==w?void 0:w.current){const{offsetWidth:e,offsetHeight:a,scrollHeight:t}=w.current;b!==e&&(x(e),f(a<t))}}),250);let a=()=>{};if(null==w?void 0:w.current){a=(0,c.N)(w.current,e);const{offsetHeight:t,scrollHeight:i}=w.current;f(t<i),x(w.current.offsetWidth)}return()=>{a()}}),[b]),s().createElement(E,Object.assign({ref:w},z&&{tabIndex:-1},"div"===m&&g&&{role:"region"},g&&{"aria-label":h,"aria-labelledby":p,tabIndex:0},{className:(0,d.A)(r.A.wizardMain,t)},v),s().createElement("div",{className:(0,d.A)(r.A.wizardMainBody,n&&r.A.modifiers.noPadding)},a))};u.displayName="WizardBody"},94698:(e,a,t)=>{t.d(a,{CV:()=>o,Lh:()=>d,Wg:()=>l});var i=t(47503),n=t.n(i),s=t(77937),r=t(76882);const d=n().createContext({}),l=({steps:e,footer:a,activeStepIndex:t,children:i,onNext:l,onBack:o,onClose:c,goToStepById:u,goToStepByName:p,goToStepByIndex:m,shouldFocusContent:v,mainWrapperRef:g})=>{const[f,b]=n().useState(e),[x,E]=n().useState();n().useEffect((()=>{if(f.length!==e.length){const a=e.map((e=>{const a=f.find((a=>a.id===e.id));return a?Object.assign(Object.assign({},a),e):e}));b(a)}}),[f,e]);const N=n().useMemo((()=>f.map(((a,t)=>Object.assign(Object.assign({},a),e[t])))),[e,f]),z=n().useMemo((()=>N.find((e=>e.index===t))),[t,N]),w=n().useCallback((()=>null==c?void 0:c(null)),[c]),h=n().useCallback((()=>l(null,N)),[l,N]),A=n().useCallback((()=>o(null,N)),[o,N]),y=n().useMemo((()=>{const e=(null==z?void 0:z.footer)||x||a;if((0,s.aV)(e)){const a=e;return"function"==typeof a?a(z,h,A,w):a}return n().createElement(r.D,Object.assign({activeStep:z,onNext:h,onBack:A,onClose:w,isBackDisabled:1===(null==z?void 0:z.index)||(0,s.o)(z)&&2===(null==z?void 0:z.index)},e))}),[x,a,z,h,A,w]),_=n().useCallback((e=>N.find((a=>a.id===e))),[N]),k=n().useCallback((e=>b((a=>a.map((a=>a.id===e.id?Object.assign(Object.assign({},a),e):a))))),[]);return n().createElement(d.Provider,{value:{steps:N,activeStep:z,footer:y,close:w,getStep:_,setStep:k,goToNextStep:h,goToPrevStep:A,setFooter:E,goToStepById:n().useCallback((e=>u(N,e)),[u,N]),goToStepByName:n().useCallback((e=>p(N,e)),[p,N]),goToStepByIndex:n().useCallback((e=>m(null,N,e)),[m,N]),shouldFocusContent:v,mainWrapperRef:g}},i)};l.displayName="WizardContextProvider";const o=()=>n().useContext(d)},76882:(e,a,t)=>{t.d(a,{D:()=>u,W:()=>c});var i=t(8674),n=t(47503),s=t.n(n),r=t(33774),d=t(15904),l=t(72583),o=t(77937);const c=e=>{var{children:a,className:t}=e,n=(0,i.__rest)(e,["children","className"]);return s().createElement("footer",Object.assign({className:(0,r.A)(d.A.wizardFooter,t)},n),a)},u=e=>{var{activeStep:a}=e,t=(0,i.__rest)(e,["activeStep"]);const n=!(0,o.aV)(null==a?void 0:a.footer)&&(null==a?void 0:a.footer);return s().createElement(p,Object.assign({},t,n))},p=e=>{var{onNext:a,onBack:t,onClose:n,isNextDisabled:r,isBackDisabled:o,isBackHidden:u,isCancelHidden:p,nextButtonText:m="Next",backButtonText:v="Back",cancelButtonText:g="Cancel",nextButtonProps:f,backButtonProps:b,cancelButtonProps:x,className:E}=e,N=(0,i.__rest)(e,["onNext","onBack","onClose","isNextDisabled","isBackDisabled","isBackHidden","isCancelHidden","nextButtonText","backButtonText","cancelButtonText","nextButtonProps","backButtonProps","cancelButtonProps","className"]);return s().createElement(c,Object.assign({className:E},N),!u&&s().createElement(l.$n,Object.assign({variant:l.Ak.secondary,onClick:t,isDisabled:o},b),v),s().createElement(l.$n,Object.assign({variant:l.Ak.primary,type:"submit",onClick:a,isDisabled:r},f),m),!p&&s().createElement("div",{className:d.A.wizardFooterCancel},s().createElement(l.$n,Object.assign({variant:l.Ak.link,onClick:n},x),g)))};c.displayName="WizardFooterWrapper",u.displayName="WizardFooter"},34188:(e,a,t)=>{t.d(a,{l:()=>o});var i=t(8674),n=t(47503),s=t(15904),r=t(33774),d=t(72583),l=t(44397);const o=e=>{var{onClose:a=(()=>{}),title:t,description:o,isCloseHidden:c,closeButtonAriaLabel:u,titleId:p,descriptionComponent:m="div",descriptionId:v,className:g}=e,f=(0,i.__rest)(e,["onClose","title","description","isCloseHidden","closeButtonAriaLabel","titleId","descriptionComponent","descriptionId","className"]);return n.createElement("div",Object.assign({className:(0,r.A)(s.A.wizardHeader,g)},f),!c&&n.createElement("div",{className:(0,r.A)(s.A.wizardClose)},n.createElement(d.$n,{variant:"plain","aria-label":u,onClick:a},n.createElement(l.Ay,{"aria-hidden":"true"}))),n.createElement("div",{className:(0,r.A)(s.A.wizardTitle)},n.createElement("h2",{className:(0,r.A)(s.A.wizardTitleText),id:p},t||n.createElement(n.Fragment,null," "))),o&&n.createElement(m,{className:(0,r.A)(s.A.wizardDescription),id:v},o))};o.displayName="WizardHeader"},68572:(e,a,t)=>{t.d(a,{l:()=>d});var i=t(8674),n=t(47503),s=t(15904),r=t(33774);const d=e=>{var{children:a,"aria-label":t,"aria-labelledby":d,isExpanded:l=!1,isInnerList:o=!1,className:c}=e,u=(0,i.__rest)(e,["children","aria-label","aria-labelledby","isExpanded","isInnerList","className"]);return o?n.createElement("ol",Object.assign({className:(0,r.A)(s.A.wizardNavList,c),role:"list"},u),a):n.createElement("nav",Object.assign({className:(0,r.A)(s.A.wizardNav,l&&s.A.modifiers.expanded,c),"aria-label":t,"aria-labelledby":d},u),n.createElement("ol",{className:(0,r.A)(s.A.wizardNavList),role:"list"},a))};d.displayName="WizardNav"},53838:(e,a,t)=>{t.d(a,{M:()=>m});var i=t(8674),n=t(47503),s=t(33774),r=t(15904),d=t(89015),l=t(31003),o=t(31398),c=t(77937);const u="var(--pf-v5-global--spacer--sm)",p="var(--pf-v5-global--danger-color--100)",m=e=>{var{children:a=null,content:t="",isCurrent:v=!1,isDisabled:g=!1,isVisited:f=!1,stepIndex:b,onClick:x,component:E="button",href:N,isExpandable:z=!1,id:w,status:h="default",target:A,ouiaId:y,ouiaSafe:_=!0,className:k}=e,C=(0,i.__rest)(e,["children","content","isCurrent","isDisabled","isVisited","stepIndex","onClick","component","href","isExpandable","id","status","target","ouiaId","ouiaSafe","className"]);const[I,S]=n.useState(!1),T=(0,o.iK)(m.displayName,y,_);return n.useEffect((()=>{S(v)}),[v]),n.createElement("li",Object.assign({className:(0,s.A)(r.A.wizardNavItem,z&&r.A.modifiers.expandable,z&&I&&r.A.modifiers.expanded,k)},C),n.createElement(E,Object.assign({},"a"===E?{tabIndex:g?-1:void 0,href:N,target:A}:{disabled:g},w&&{id:w.toString()},{onClick:e=>{e.stopPropagation(),z?S(!I||v):null==x||x(e,b)},className:(0,s.A)(r.A.wizardNavLink,v&&r.A.modifiers.current,g&&r.A.modifiers.disabled),"aria-disabled":!!g||null,"aria-current":!(!v||a)&&"step"},z&&{"aria-expanded":I},T),z?n.createElement(n.Fragment,null,n.createElement("span",{className:(0,s.A)(r.A.wizardNavLinkText)},t),n.createElement("span",{className:(0,s.A)(r.A.wizardNavLinkToggle)},n.createElement("span",{className:(0,s.A)(r.A.wizardNavLinkToggleIcon)},n.createElement(d.default,{"aria-label":(v?"Collapse":"Expand")+" step icon"})))):n.createElement(n.Fragment,null,t,h===c.M2.Error&&n.createElement(n.Fragment,null,n.createElement("span",{className:"pf-v5-screen-reader"},", ",h),n.createElement("span",{style:{marginLeft:u}},n.createElement(l.Ay,{color:p}))))),a)};m.displayName="WizardNavItem"},7851:(e,a,t)=>{t.d(a,{W:()=>l});var i=t(8674),n=t(47503),s=t.n(n),r=t(77937),d=t(94698);const l=e=>{var{children:a,steps:t}=e,n=(0,i.__rest)(e,["children","steps"]);const{activeStep:l,setStep:o}=(0,d.CV)(),{id:c,name:u,body:p,isDisabled:m,isHidden:v,navItem:g,footer:f,status:b}=n,x=(0,r.ec)(l);return s().useEffect((()=>{o(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({id:c,name:u},p&&{body:p}),m&&{isDisabled:m}),v&&{isHidden:v}),g&&{navItem:g}),f&&{footer:f}),b&&{status:b}),!x&&c===(null==l?void 0:l.id)&&!(null==l?void 0:l.isVisited)&&{isVisited:!0}))}),[p,f,c,m,v,u,g,b,x,o,null==l?void 0:l.id,null==l?void 0:l.isVisited]),s().createElement(s().Fragment,null,a)};l.displayName="WizardStep"},91097:(e,a,t)=>{t.d(a,{K:()=>v});var i=t(8674),n=t(47503),s=t.n(n),r=t(33774),d=t(15904),l=t(89015),o=t(20689),c=t(52860),u=t(77937),p=t(7851),m=t(57965);const v=({steps:e,activeStep:a,footer:t,nav:n,isNavExpanded:v,toggleNavExpanded:g,"aria-label":f="Wizard toggle"})=>{const b=(0,u.o)(a),x=b&&e.find((e=>e.id===a.parentId)),E=e.filter((e=>!(0,u.o)(e))).indexOf(x||a)+1,N=s().useCallback((e=>{v&&e.key===c.RU.Escape&&(null==g||g(e))}),[v,g]);s().useEffect((()=>{const e="undefined"!=typeof document?document.body:null;return null==e||e.addEventListener("keydown",N,!1),()=>{null==e||e.removeEventListener("keydown",N,!1)}}),[N]);const z=e.map((e=>{var t;const n=(null===(t=e.component)||void 0===t?void 0:t.props)||{},{children:r,body:d}=n,l=(0,i.__rest)(n,["children","body"]);return s().createElement(s().Fragment,{key:e.id},(null==a?void 0:a.id)===e.id&&(d||void 0===d?s().createElement(m.E,Object.assign({},d),r):r),s().createElement("div",{key:e.id,style:{display:"none"}},s().createElement(p.W,Object.assign({},l))))}));return s().createElement(s().Fragment,null,s().createElement("button",{onClick:g,className:(0,r.A)(d.A.wizardToggle,v&&"pf-m-expanded"),"aria-label":f,"aria-expanded":v},s().createElement("span",{className:(0,r.A)(d.A.wizardToggleList)},s().createElement("span",{className:(0,r.A)(d.A.wizardToggleListItem)},s().createElement("span",{className:(0,r.A)(d.A.wizardToggleNum)},E)," ",(null==x?void 0:x.name)||(null==a?void 0:a.name),b&&s().createElement(l.default,{className:(0,r.A)(d.A.wizardToggleSeparator),"aria-hidden":"true"})),b&&s().createElement("span",{className:(0,r.A)(d.A.wizardToggleListItem)},null==a?void 0:a.name)),s().createElement("span",{className:(0,r.A)(d.A.wizardToggleIcon)},s().createElement(o.default,{"aria-hidden":"true"}))),s().createElement("div",{className:(0,r.A)(d.A.wizardOuterWrap)},s().createElement("div",{className:(0,r.A)(d.A.wizardInnerWrap)},n,z),t))};v.displayName="WizardToggle"},77937:(e,a,t)=>{t.d(a,{ET:()=>n,M2:()=>i,aV:()=>o,cg:()=>c,ec:()=>p,h4:()=>l,o:()=>u,ub:()=>d});var i,n,s=t(47503),r=t.n(s);function d(e){return"function"==typeof e||r().isValidElement(e)}function l(e){return"function"==typeof e||r().isValidElement(e)}function o(e){return"function"==typeof e||r().isValidElement(e)}function c(e){return void 0===(null==e?void 0:e.subStepIds)&&!u(e)}function u(e){return void 0!==(null==e?void 0:e.parentId)}function p(e){return void 0!==(null==e?void 0:e.subStepIds)}!function(e){e.Default="default",e.Error="error"}(i||(i={})),function(e){e.Next="next",e.Back="back",e.Nav="nav"}(n||(n={}))},15904:(e,a,t)=>{t.d(a,{A:()=>i}),t(21289);const i={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",modalBox:"pf-v5-c-modal-box",modifiers:{finished:"pf-m-finished",expanded:"pf-m-expanded",current:"pf-m-current",expandable:"pf-m-expandable",disabled:"pf-m-disabled",noPadding:"pf-m-no-padding"},pageMainWizard:"pf-v5-c-page__main-wizard",themeDark:"pf-v5-theme-dark",wizard:"pf-v5-c-wizard",wizardClose:"pf-v5-c-wizard__close",wizardDescription:"pf-v5-c-wizard__description",wizardFooter:"pf-v5-c-wizard__footer",wizardFooterCancel:"pf-v5-c-wizard__footer-cancel",wizardHeader:"pf-v5-c-wizard__header",wizardInnerWrap:"pf-v5-c-wizard__inner-wrap",wizardMain:"pf-v5-c-wizard__main",wizardMainBody:"pf-v5-c-wizard__main-body",wizardNav:"pf-v5-c-wizard__nav",wizardNavItem:"pf-v5-c-wizard__nav-item",wizardNavLink:"pf-v5-c-wizard__nav-link",wizardNavLinkText:"pf-v5-c-wizard__nav-link-text",wizardNavLinkToggle:"pf-v5-c-wizard__nav-link-toggle",wizardNavLinkToggleIcon:"pf-v5-c-wizard__nav-link-toggle-icon",wizardNavList:"pf-v5-c-wizard__nav-list",wizardOuterWrap:"pf-v5-c-wizard__outer-wrap",wizardTitle:"pf-v5-c-wizard__title",wizardTitleText:"pf-v5-c-wizard__title-text",wizardToggle:"pf-v5-c-wizard__toggle",wizardToggleIcon:"pf-v5-c-wizard__toggle-icon",wizardToggleList:"pf-v5-c-wizard__toggle-list",wizardToggleListItem:"pf-v5-c-wizard__toggle-list-item",wizardToggleNum:"pf-v5-c-wizard__toggle-num",wizardToggleSeparator:"pf-v5-c-wizard__toggle-separator"}}}]);
//# sourceMappingURL=../sourcemaps/3504.ffa0215ee098c0935de257c0fe433e5e.js.map
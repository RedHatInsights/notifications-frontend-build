"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[3901],{29668:(e,t,n)=>{n.d(t,{o:()=>f});var a=n(8674),l=n(97656),i=n(64250),o=n(31398);const s=e=>{var{children:t,tabContentRef:n,ouiaId:i,parentInnerRef:r,ouiaSafe:c}=e,d=(0,a.__rest)(e,["children","tabContentRef","ouiaId","parentInnerRef","ouiaSafe"]);const m=d.href?"a":"button";return l.createElement(m,Object.assign({},!d.href&&{type:"button"},{ref:r},(0,o.Bs)(s.displayName,i,c),d),t)};s.displayName="TabButton";var r=n(8416),c=n(33774),d=n(45523),m=n(44397),b=n(11874);const p=e=>{var{title:t,eventKey:n,tabContentRef:o,id:p,tabContentId:f,className:u="",ouiaId:h,isDisabled:v,isAriaDisabled:g,inoperableEvents:x=["onClick","onKeyPress"],href:A,innerRef:S,tooltip:y,closeButtonAriaLabel:E,isCloseDisabled:O=!1,actions:T}=e,B=(0,a.__rest)(e,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isDisabled","isAriaDisabled","inoperableEvents","href","innerRef","tooltip","closeButtonAriaLabel","isCloseDisabled","actions"]);const L=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{}),{mountOnEnter:C,localActiveKey:w,unmountOnExit:_,uniqueId:I,handleTabClick:N,handleTabClose:k}=l.useContext(r.wP);let K=f?`${f}`:`pf-tab-section-${n}-${p||I}`;(C||_)&&n!==w&&(K=void 0);const R=Boolean(!A),X=l.createElement(s,Object.assign({parentInnerRef:S,className:(0,c.A)(i.A.tabsLink,v&&A&&i.A.modifiers.disabled,g&&i.A.modifiers.ariaDisabled),disabled:R?v:null,"aria-disabled":v||g,tabIndex:v?R?null:-1:g?null:void 0,onClick:e=>N(e,n,o)},g?L:null,{id:`pf-tab-${n}-${p||I}`,"aria-controls":K,tabContentRef:o,ouiaId:h,href:A,role:"tab","aria-selected":n===w},B),t);return l.createElement("li",{className:(0,c.A)(i.A.tabsItem,n===w&&i.A.modifiers.current,(k||T)&&i.A.modifiers.action,(v||g)&&i.A.modifiers.disabled,u),role:"presentation"},y?l.createElement(d.m,Object.assign({},y.props),X):X,T&&T,void 0!==k&&l.createElement(b.o,{"aria-label":E||"Close tab",onClick:e=>k(e,n,o),isDisabled:O},l.createElement(m.Ay,null)))},f=l.forwardRef(((e,t)=>l.createElement(p,Object.assign({innerRef:t},e))));f.displayName="Tab"},11874:(e,t,n)=>{n.d(t,{o:()=>d});var a=n(8674),l=n(97656),i=n(33774),o=n(64250),s=n(72583),r=n(31398);const c=e=>{var{children:t,className:n,onClick:c,isDisabled:m,"aria-label":b="Tab action",innerRef:p,ouiaId:f,ouiaSafe:u}=e,h=(0,a.__rest)(e,["children","className","onClick","isDisabled","aria-label","innerRef","ouiaId","ouiaSafe"]);return l.createElement("span",{className:(0,i.A)(o.A.tabsItemAction,n)},l.createElement(s.$n,Object.assign({ref:p,type:"button",variant:"plain","aria-label":b,onClick:c,isDisabled:m},(0,r.Bs)(d.displayName,f,u),h),l.createElement("span",{className:(0,i.A)(o.A.tabsItemActionIcon)},t)))},d=l.forwardRef(((e,t)=>l.createElement(c,Object.assign({},e,{innerRef:t}))));d.displayName="TabAction"},29619:(e,t,n)=>{n.d(t,{J:()=>m});var a=n(8674),l=n(97656),i=n(9355),o=n(33774),s=n(31398),r=n(8416);const c={default:"",light300:i.A.modifiers.light_300},d=e=>{var{id:t,activeKey:n,"aria-label":d,child:m,children:b,className:p,eventKey:f,innerRef:u,ouiaId:h,ouiaSafe:v}=e,g=(0,a.__rest)(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(b||m){let e;return e=d?null:b?`${t}`:`pf-tab-${m.props.eventKey}-${t}`,l.createElement(r.kT,null,(({variant:a})=>l.createElement("section",Object.assign({ref:u,hidden:b?null:m.props.eventKey!==n,className:b?(0,o.A)(i.A.tabContent,p,c[a]):(0,o.A)(i.A.tabContent,m.props.className,c[a]),id:b?t:`pf-tab-section-${m.props.eventKey}-${t}`,"aria-label":d,"aria-labelledby":e,role:"tabpanel",tabIndex:0},(0,s.Bs)("TabContent",h,v),g),b||m.props.children)))}return null},m=l.forwardRef(((e,t)=>l.createElement(d,Object.assign({},e,{innerRef:t}))))},39931:(e,t,n)=>{n.d(t,{V:()=>s});var a=n(8674),l=n(97656),i=n(33774),o=n(64250);const s=e=>{var{children:t,className:n=""}=e,s=(0,a.__rest)(e,["children","className"]);return l.createElement("span",Object.assign({className:(0,i.A)(o.A.tabsItemText,n)},s),t)};s.displayName="TabTitleText"},5738:(e,t,n)=>{n.d(t,{t:()=>L,O:()=>y});var a=n(8674),l=n(97656),i=n.n(l),o=n(64250),s=n(73530),r=n(33774),c=n(91918),d=n(89015),m=n(60911),b=n(47931),p=n(29619),f=n(8416),u=n(17694),h=n(64361),v=n(74225),g=n(94494),x=n(75797),A=n(39931);const S=e=>{var{className:t,overflowingTabs:n=[],showTabCount:l,defaultTitleText:s="More",toggleAriaLabel:c,zIndex:m=9999}=e,b=(0,a.__rest)(e,["className","overflowingTabs","showTabCount","defaultTitleText","toggleAriaLabel","zIndex"]);const p=i().useRef(),S=i().useRef(),y=i().useRef(),[E,O]=i().useState(!1),{localActiveKey:T,handleTabClick:B}=i().useContext(f.wP),L=()=>{O(!1),S.current.focus()},C=e=>{var t;const n=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.contains(e.target);E&&n&&"Escape"===e.key&&L()},w=e=>{var t,n;const a=!(null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.contains(e.target)),l=!(null===(n=null==S?void 0:S.current)||void 0===n?void 0:n.contains(e.target));E&&a&&l&&L()};i().useEffect((()=>(window.addEventListener("click",w),window.addEventListener("keydown",C),()=>{window.removeEventListener("click",w),window.removeEventListener("keydown",C)})),[E,p,S]);const _=n.find((e=>e.eventKey===T)),I=(null==_?void 0:_.title)?_.title:s,N=i().createElement("li",Object.assign({className:(0,r.A)(o.A.tabsItem,o.A.modifiers.overflow,_&&o.A.modifiers.current,t),role:"presentation",ref:y},b),i().createElement("button",{type:"button",className:(0,r.A)(o.A.tabsLink,E&&o.A.modifiers.expanded),onClick:()=>(O((e=>!e)),void setTimeout((()=>{if(null==p?void 0:p.current){const e=p.current.querySelector("li > button,input:not(:disabled)");e&&e.focus()}}),0)),"aria-label":c,"aria-haspopup":"menu","aria-expanded":E,role:"tab",ref:S},i().createElement(A.V,null,I,l&&I===s&&` (${n.length})`),i().createElement("span",{className:o.A.tabsLinkToggleIcon},i().createElement(d.default,null)))),k=n.map((e=>i().createElement(h.D,{key:e.eventKey,itemId:e.eventKey,isSelected:T===e.eventKey},e.title))),K=i().createElement(v.W,{ref:p,onSelect:(e,t)=>((e,t)=>{L();const a=n.find((e=>e.eventKey===t)).tabContentRef;B(e,t,a)})(e,t)},i().createElement(g.r,null,i().createElement(x.c,null,k)));return i().createElement(i().Fragment,null,N,i().createElement(u.Popper,{triggerRef:S,popper:K,popperRef:p,isVisible:E,minWidth:"revert",appendTo:y.current,zIndex:m}))};S.displayName="OverflowTab";var y,E=n(72583),O=n(31398),T=n(65518);!function(e){e.div="div",e.nav="nav"}(y||(y={}));const B={default:"",light300:o.A.modifiers.colorSchemeLight_300};class L extends l.Component{constructor(e){super(e),this.tabList=l.createRef(),this.leftScrollButtonRef=l.createRef(),this.direction="ltr",this.scrollTimeout=null,this.countOverflowingElements=e=>Array.from(e.children).filter((t=>!(0,b.Xv)(e,t,!1))).length,this.handleScrollButtons=()=>{const{isOverflowHorizontal:e}=this.props;clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const t=this.tabList.current;let n=!0,a=!0,l=!1,i=0;if(t&&!this.props.isVertical&&!e){const e=!(0,b.Xv)(t,t.firstChild,!1),i=!(0,b.Xv)(t,t.lastChild,!1);l=e||i,n=!e,a=!i}e&&(i=this.countOverflowingElements(t)),this.setState({enableScrollButtons:l,disableBackScrollButton:n,disableForwardScrollButton:a,overflowingTabCount:i})}),100)},this.scrollBack=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a,l;for(l=0;l<t.length&&!n;l++)(0,b.Xv)(e,t[l],!1)&&(n=t[l],a=t[l-1]);a&&("ltr"===this.direction?e.scrollLeft-=a.scrollWidth:e.scrollLeft+=a.scrollWidth)}},this.scrollForward=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a;for(let l=t.length-1;l>=0&&!n;l--)(0,b.Xv)(e,t[l],!1)&&(n=t[l],a=t[l+1]);a&&("ltr"===this.direction?e.scrollLeft+=a.scrollWidth:e.scrollLeft-=a.scrollWidth)}},this.hideScrollButtons=()=>{const{enableScrollButtons:e,renderScrollButtons:t,showScrollButtons:n}=this.state;e||n||!t||this.setState({renderScrollButtons:!1})},this.state={enableScrollButtons:!1,showScrollButtons:!1,renderScrollButtons:!1,disableBackScrollButton:!0,disableForwardScrollButton:!0,shownKeys:void 0!==this.props.defaultActiveKey?[this.props.defaultActiveKey]:[this.props.activeKey],uncontrolledActiveKey:this.props.defaultActiveKey,uncontrolledIsExpandedLocal:this.props.defaultIsExpanded,ouiaStateId:(0,O.X)(L.displayName),overflowingTabCount:0},this.props.isVertical&&void 0!==this.props.expandable&&(this.props.toggleAriaLabel||this.props.toggleText||console.error("Tabs:","toggleAriaLabel or the toggleText prop is required to make the toggle button accessible"))}handleTabClick(e,t,n){const{shownKeys:a}=this.state,{onSelect:i,defaultActiveKey:o}=this.props;void 0!==o?this.setState({uncontrolledActiveKey:t}):i(e,t),n&&(l.Children.toArray(this.props.children).filter((e=>l.isValidElement(e))).filter((({props:e})=>e.tabContentRef&&e.tabContentRef.current)).forEach((e=>e.props.tabContentRef.current.hidden=!0)),n.current&&(n.current.hidden=!1)),this.props.mountOnEnter&&this.setState({shownKeys:a.concat(t)})}componentDidMount(){this.props.isVertical||(b.Sw&&window.addEventListener("resize",this.handleScrollButtons,!1),this.direction=(0,b.iJ)(this.tabList.current),this.handleScrollButtons())}componentWillUnmount(){var e;this.props.isVertical||b.Sw&&window.removeEventListener("resize",this.handleScrollButtons,!1),clearTimeout(this.scrollTimeout),null===(e=this.leftScrollButtonRef.current)||void 0===e||e.removeEventListener("transitionend",this.hideScrollButtons)}componentDidUpdate(e,t){const{activeKey:n,mountOnEnter:a,isOverflowHorizontal:i,children:o}=this.props,{shownKeys:s,overflowingTabCount:r,enableScrollButtons:c}=this.state;e.activeKey!==n&&a&&s.indexOf(n)<0&&this.setState({shownKeys:s.concat(n)}),e.children&&o&&l.Children.toArray(e.children).length!==l.Children.toArray(o).length&&this.handleScrollButtons();const d=this.countOverflowingElements(this.tabList.current);i&&d&&this.setState({overflowingTabCount:d+r}),!t.enableScrollButtons&&c?(this.setState({renderScrollButtons:!0}),setTimeout((()=>{var e;null===(e=this.leftScrollButtonRef.current)||void 0===e||e.addEventListener("transitionend",this.hideScrollButtons),this.setState({showScrollButtons:!0})}),100)):t.enableScrollButtons&&!c&&this.setState({showScrollButtons:!1}),this.direction=(0,b.iJ)(this.tabList.current)}render(){const e=this.props,{className:t,children:n,activeKey:i,defaultActiveKey:u,id:h,isFilled:v,isSecondary:g,isVertical:x,isBox:A,hasNoBorderBottom:C,leftScrollAriaLabel:w,rightScrollAriaLabel:_,backScrollAriaLabel:I,forwardScrollAriaLabel:N,"aria-label":k,component:K,ouiaId:R,ouiaSafe:X,mountOnEnter:j,unmountOnExit:$,usePageInsets:D,inset:M,variant:P,expandable:V,isExpanded:z,defaultIsExpanded:F,toggleText:H,toggleAriaLabel:W,addButtonAriaLabel:q,onToggle:J,onClose:Y,onAdd:U,isOverflowHorizontal:G}=e,Q=(0,a.__rest)(e,["className","children","activeKey","defaultActiveKey","id","isFilled","isSecondary","isVertical","isBox","hasNoBorderBottom","leftScrollAriaLabel","rightScrollAriaLabel","backScrollAriaLabel","forwardScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","usePageInsets","inset","variant","expandable","isExpanded","defaultIsExpanded","toggleText","toggleAriaLabel","addButtonAriaLabel","onToggle","onClose","onAdd","isOverflowHorizontal"]),{showScrollButtons:Z,renderScrollButtons:ee,disableBackScrollButton:te,disableForwardScrollButton:ne,shownKeys:ae,uncontrolledActiveKey:le,uncontrolledIsExpandedLocal:ie,overflowingTabCount:oe}=this.state,se=l.Children.toArray(n).filter((e=>l.isValidElement(e))).filter((({props:e})=>!e.isHidden)),re=se.slice(0,se.length-oe),ce=se.slice(se.length-oe).map((e=>e.props)),de=h||(0,b.LP)(),me=K===y.nav?"nav":"div",be=void 0!==u?le:i,pe=void 0!==F?ie:z,fe=(e,t)=>{void 0===z?this.setState({uncontrolledIsExpandedLocal:t}):J(e,t)},ue=G&&oe>0,he="object"==typeof G?Object.assign({},G):{};return l.createElement(f.hY,{value:{variant:P,mountOnEnter:j,unmountOnExit:$,localActiveKey:be,uniqueId:de,handleTabClick:(...e)=>this.handleTabClick(...e),handleTabClose:Y}},l.createElement(me,Object.assign({"aria-label":k,className:(0,r.A)(o.A.tabs,v&&o.A.modifiers.fill,g&&o.A.modifiers.secondary,x&&o.A.modifiers.vertical,x&&V&&(0,b.ay)(V,o.A),x&&V&&pe&&o.A.modifiers.expanded,A&&o.A.modifiers.box,Z&&o.A.modifiers.scrollable,D&&o.A.modifiers.pageInsets,C&&o.A.modifiers.noBorderBottom,(0,b.ay)(M,o.A),B[P],ue&&o.A.modifiers.overflow,t)},(0,O.Bs)(L.displayName,void 0!==R?R:this.state.ouiaStateId,X),{id:h&&h},Q),V&&x&&l.createElement(T.N,null,(e=>l.createElement("div",{className:(0,r.A)(o.A.tabsToggle)},l.createElement("div",{className:(0,r.A)(o.A.tabsToggleButton)},l.createElement(E.$n,{onClick:e=>fe(e,!pe),variant:"plain","aria-label":W,"aria-expanded":pe,id:`${e}-button`,"aria-labelledby":`${e}-text ${e}-button`},l.createElement("span",{className:(0,r.A)(o.A.tabsToggleIcon)},l.createElement(d.default,{"arian-hidden":"true"})),H&&l.createElement("span",{className:(0,r.A)(o.A.tabsToggleText),id:`${e}-text`},H)))))),ee&&l.createElement("button",{type:"button",className:(0,r.A)(o.A.tabsScrollButton,g&&s.A.modifiers.secondary),"aria-label":I||w,onClick:this.scrollBack,disabled:te,"aria-hidden":te,ref:this.leftScrollButtonRef},l.createElement(c.Ay,null)),l.createElement("ul",{className:(0,r.A)(o.A.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons,role:"tablist"},G?re:se,ue&&l.createElement(S,Object.assign({overflowingTabs:ce},he))),ee&&l.createElement("button",{type:"button",className:(0,r.A)(o.A.tabsScrollButton,g&&s.A.modifiers.secondary),"aria-label":N||_,onClick:this.scrollForward,disabled:ne,"aria-hidden":ne},l.createElement(d.default,null)),void 0!==U&&l.createElement("span",{className:(0,r.A)(o.A.tabsAdd)},l.createElement(E.$n,{variant:"plain","aria-label":q||"Add tab",onClick:U},l.createElement(m.Ay,null)))),se.filter((e=>e.props.children&&!($&&e.props.eventKey!==be)&&!(j&&-1===ae.indexOf(e.props.eventKey)))).map((e=>l.createElement(p.J,{key:e.props.eventKey,activeKey:be,child:e,id:e.props.id||de,ouiaId:e.props.ouiaId}))))}}L.displayName="Tabs",L.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,hasNoBorderBottom:!1,leftScrollAriaLabel:"Scroll left",backScrollAriaLabel:"Scroll back",rightScrollAriaLabel:"Scroll right",forwardScrollAriaLabel:"Scroll forward",component:y.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default",onToggle:(e,t)=>{}}},8416:(e,t,n)=>{n.d(t,{hY:()=>l,kT:()=>i,wP:()=>a});const a=n(97656).createContext({variant:"default",mountOnEnter:!1,unmountOnExit:!1,localActiveKey:"",uniqueId:"",handleTabClick:()=>null,handleTabClose:void 0}),l=a.Provider,i=a.Consumer},23901:(e,t,n)=>{n.r(t),n.d(t,{Tab:()=>a.o,TabAction:()=>l.o,TabContent:()=>o.J,TabContentBody:()=>m,TabTitleIcon:()=>u,TabTitleText:()=>p.V,Tabs:()=>i.t,TabsComponent:()=>i.O,TabsContext:()=>b.wP,TabsContextConsumer:()=>b.kT,TabsContextProvider:()=>b.hY});var a=n(29668),l=n(11874),i=n(5738),o=n(29619),s=n(8674),r=n(97656),c=n(33774),d=n(9355);const m=e=>{var{children:t,className:n,hasPadding:a}=e,l=(0,s.__rest)(e,["children","className","hasPadding"]);return r.createElement("div",Object.assign({className:(0,c.A)(d.A.tabContentBody,a&&d.A.modifiers.padding,n)},l),t)};m.displayName="TabContentBody";var b=n(8416),p=n(39931),f=n(64250);const u=e=>{var{children:t,className:n=""}=e,a=(0,s.__rest)(e,["children","className"]);return r.createElement("span",Object.assign({className:(0,c.A)(f.A.tabsItemIcon,n)},a),t)};u.displayName="TabTitleIcon"},60911:(e,t,n)=>{n.d(t,{Ay:()=>a});const a=(0,n(68419).w)({name:"PlusIcon",height:512,width:448,svgPath:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0})},9355:(e,t,n)=>{n.d(t,{A:()=>a}),n(87034);const a={modifiers:{light_300:"pf-m-light-300",padding:"pf-m-padding"},tabContent:"pf-v5-c-tab-content",tabContentBody:"pf-v5-c-tab-content__body"}},64250:(e,t,n)=>{n.d(t,{A:()=>a}),n(70043);const a={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{fill:"pf-m-fill",scrollable:"pf-m-scrollable",noBorderBottom:"pf-m-no-border-bottom",box:"pf-m-box",vertical:"pf-m-vertical",current:"pf-m-current",colorSchemeLight_300:"pf-m-color-scheme--light-300",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",secondary:"pf-m-secondary",pageInsets:"pf-m-page-insets",overflow:"pf-m-overflow",action:"pf-m-action",active:"pf-m-active",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},tabs:"pf-v5-c-tabs",tabsAdd:"pf-v5-c-tabs__add",tabsItem:"pf-v5-c-tabs__item",tabsItemAction:"pf-v5-c-tabs__item-action",tabsItemActionIcon:"pf-v5-c-tabs__item-action-icon",tabsItemIcon:"pf-v5-c-tabs__item-icon",tabsItemText:"pf-v5-c-tabs__item-text",tabsLink:"pf-v5-c-tabs__link",tabsLinkToggleIcon:"pf-v5-c-tabs__link-toggle-icon",tabsList:"pf-v5-c-tabs__list",tabsScrollButton:"pf-v5-c-tabs__scroll-button",tabsToggle:"pf-v5-c-tabs__toggle",tabsToggleButton:"pf-v5-c-tabs__toggle-button",tabsToggleIcon:"pf-v5-c-tabs__toggle-icon",tabsToggleText:"pf-v5-c-tabs__toggle-text",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/3901.2d68d3a821040016b6647c602b687671.js.map
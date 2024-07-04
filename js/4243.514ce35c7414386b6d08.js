"use strict";(self.webpackChunknotifications=self.webpackChunknotifications||[]).push([[4243],{35253:(e,t,i)=>{i.d(t,{M:()=>l,z:()=>a});var s=i(8674),n=i(97656),o=i(37621),r=i(33774);const a=e=>{var{className:t,children:i,innerRef:a}=e,l=(0,s.__rest)(e,["className","children","innerRef"]);const p=n.useRef(null),c=a||p;return n.createElement("div",Object.assign({ref:c,className:(0,r.A)(o.A.inputGroup,t)},l),i)};a.displayName="InputGroupBase";const l=n.forwardRef(((e,t)=>n.createElement(a,Object.assign({innerRef:t},e))));l.displayName="InputGroup"},53642:(e,t,i)=>{i.d(t,{b:()=>a});var s=i(8674),n=i(97656),o=i(37621),r=i(33774);const a=e=>{var{className:t,children:i,isFill:a=!1,isBox:l=!1,isPlain:p,isDisabled:c}=e,d=(0,s.__rest)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return n.createElement("div",Object.assign({className:(0,r.A)(o.A.inputGroupItem,a&&o.A.modifiers.fill,l&&o.A.modifiers.box,p&&o.A.modifiers.plain,c&&o.A.modifiers.disabled,t)},d),i)};a.displayName="InputGroupItem"},14243:(e,t,i)=>{i.d(t,{A:()=>M});var s=i(8674),n=i(97656),o=i(33774),r=i(98727),a=i(88144),l=i(47931),p=i(17694),c=i(74225),d=i(94494),m=i(75797),u=i(64361),h=i(35253),g=i(53642),f=i(23285),v=i(52860);const x=" AM",T=" PM",I=(e,t,i,s,n)=>{const o=new Date(e);if(!isNaN(o.getDate())&&(e instanceof Date||e.includes("T"))){const e=s?`${o.getHours()>12?o.getHours()-12:o.getHours()}`:`${o.getHours()}`.padStart(2,"0"),t=`${o.getMinutes()}`.padStart(2,"0"),r=n?`${o.getSeconds()}`.padStart(2,"0"):"",a=r?`${i}${r}`:"";let l="";return s&&o.getHours()>11?l=T:s&&(l=x),`${e}${i}${t}${a}${l}`}if("string"==typeof e&&""!==(e=e.trim())&&$(e,t,i,s)){const[,o,r,a,l=""]=t.exec(e),p=n?`${i}${null!=a?a:"00"}`:"";let c="";if(s){const e=l.toUpperCase();c=e===x.toUpperCase().trim()?x:e===T.toUpperCase().trim()||(new Date).getHours()>11?T:x}return`${o}${i}${r}${p}${c}`}return e.toString()},$=(e,t,i,s)=>{const n=new Date(e);if(!isNaN(n.getDate())&&e.includes("T"))return!0;const o=parseInt(e.split(i)[0]),r=o>=(s?1:0)&&o<=(s?12:23);return""===e||t.test(e)&&r},S=(e,t)=>{const i=e.match(t);return i&&i.length?/pm/i.test(i[4])?12===parseInt(i[1])?parseInt(i[1]):parseInt(i[1])+12:/am/i.test(i[4])&&12===parseInt(i[1])?0:parseInt(i[1]):null},R=(e,t)=>{const i=e.match(t);return i&&i.length?parseInt(i[2]):null},k=(e,t)=>{var i;const s=null===(i=e.match(t))||void 0===i?void 0:i[3];return s?parseInt(s):null},C=(e,t,i,s,n)=>{if(""===i.trim())return!0;const o=E(e,s,n),r=E(i,s,n),a=E(t,s,n);return o<=r&&r<=a},E=(e,t,i)=>{const s=new RegExp(`^\\s*(\\d\\d?)${t}([0-5]\\d)${t}?([0-5]\\d)?\\s*([AaPp][Mm])?\\s*$`).exec(e);if(!s||!s.length)return;let n=s[1].padStart(2,"0");const o=s[2];let r=s[3]?`${t}${s[3]}`:"";!r&&i&&(r=`${t}00`);const a=s[4]||"";return"PM"===a.toUpperCase()&&"12"!==n?n=`${parseInt(n)+12}`:"AM"===a.toUpperCase()&&"12"===n&&(n="00"),`${n}${t}${o}${r}`};var O=i(59257),b=i(49318);const A=(0,i(68419).w)({name:"OutlinedClockIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",yOffset:0,xOffset:0}),D="--pf-v5-c-date-picker__input--c-form-control--Width";class M extends n.Component{constructor(e){super(e),this.baseComponentRef=n.createRef(),this.toggleRef=n.createRef(),this.inputRef=n.createRef(),this.menuRef=n.createRef(),this.onDocClick=e=>{var t,i,s,n;const o=null===(i=null===(t=this.toggleRef)||void 0===t?void 0:t.current)||void 0===i?void 0:i.contains(e.target),r=null===(n=null===(s=this.menuRef)||void 0===s?void 0:s.current)||void 0===n?void 0:n.contains(e.target);!this.state.isTimeOptionsOpen||o||r||this.onToggle(!1)},this.handleGlobalKeys=e=>{var t,i,s,n;const{isTimeOptionsOpen:o,focusedIndex:r,scrollIndex:a}=this.state;(null===(i=null===(t=this.inputRef)||void 0===t?void 0:t.current)||void 0===i?void 0:i.contains(e.target))?o||e.key===v.RU.Tab||e.key===v.RU.Escape?o&&(e.key===v.RU.Escape||e.key===v.RU.Tab?this.onToggle(!1):e.key===v.RU.Enter?null!==r?(this.focusSelection(r),e.stopPropagation()):this.onToggle(!1):e.key!==v.RU.ArrowDown&&e.key!==v.RU.ArrowUp||(this.focusSelection(a),this.updateFocusedIndex(0),e.preventDefault())):this.onToggle(!0):(null===(n=null===(s=this.menuRef)||void 0===s?void 0:s.current)||void 0===n?void 0:n.contains(e.target))&&(e.key===v.RU.ArrowDown?(this.updateFocusedIndex(1),e.preventDefault()):e.key===v.RU.ArrowUp?(this.updateFocusedIndex(-1),e.preventDefault()):e.key!==v.RU.Escape&&e.key!==v.RU.Tab||(this.inputRef.current.focus(),this.onToggle(!1)))},this.updateFocusedIndex=e=>{this.setState((t=>{const i=this.getOptions().length-1;let s=null!==t.focusedIndex?t.focusedIndex+e:t.scrollIndex+e;return s<0?s=i:s>i&&(s=0),this.scrollToIndex(s),{focusedIndex:s}}))},this.getIndexToScroll=e=>"inline"===this.props.menuAppendTo?e>0?e-1:0:e,this.scrollToIndex=e=>{this.getOptions()[e].closest(`.${a.A.menuContent}`).scrollTop=this.getOptions()[this.getIndexToScroll(e)].offsetTop},this.focusSelection=e=>{var t;const i=-1!==e?e:0;(null===(t=this.menuRef)||void 0===t?void 0:t.current)&&this.getOptions()[i].querySelector(`.${a.A.menuItem}`).focus()},this.scrollToSelection=e=>{const{delimiter:t,is24Hour:i}=this.props;let s=e.split(this.props.delimiter),n=null;if(s.length<2?s=(e=`${e}${t}00`).split(t):s.length>2&&(s=(e=I(e,this.state.timeRegex,t,!i,!1)).split(t)),!i&&s.length>1&&s[1].length<2){const i=0===s[1].length?"00":s[1]+"0";e=`${s[0]}${t}${i}${(new Date).getHours()>11?T:x}`}else!i&&s.length>1&&2===s[1].length&&!e.toUpperCase().includes(x.toUpperCase().trim())&&!e.toUpperCase().includes(T.toUpperCase().trim())&&(e=`${e}${(new Date).getHours()>11?T:x}`);let o=this.getOptions().findIndex((t=>t.textContent===e));if(-1!==o)this.scrollToIndex(o),n=o;else if(2===s.length){let n="";i||(s[1].toUpperCase().includes("P")?n=T:s[1].toUpperCase().includes("A")&&(n=x)),e=`${s[0]}${t}00${n}`,o=this.getOptions().findIndex((t=>t.textContent===e)),-1!==o&&this.scrollToIndex(o)}this.setState({focusedIndex:n,scrollIndex:o})},this.getRegExp=(e=!0)=>{const{is24Hour:t,delimiter:i}=this.props;let s=`\\s*(\\d\\d?)${i}([0-5]\\d)`;return e&&(s+=`${i}?([0-5]\\d)?`),new RegExp(`^${s}${t?"":"\\s*([AaPp][Mm])?"}\\s*$`)},this.getOptions=()=>{var e;return(null===(e=this.menuRef)||void 0===e?void 0:e.current)?Array.from(this.menuRef.current.querySelectorAll(`.${a.A.menuListItem}`)):[]},this.isValidFormat=e=>{if(this.props.validateTime)return this.props.validateTime(e);const{delimiter:t,is24Hour:i,includeSeconds:s}=this.props;return $(e,this.getRegExp(s),t,!i)},this.isValidTime=e=>{const{delimiter:t,includeSeconds:i}=this.props,{minTimeState:s,maxTimeState:n}=this.state;return C(s,n,e,t,i)},this.isValid=e=>this.isValidFormat(e)&&this.isValidTime(e),this.onToggle=e=>{this.setState((t=>{const{timeRegex:i,isInvalid:s,timeState:n}=t,{delimiter:o,is24Hour:r,includeSeconds:a,onChange:l}=this.props,p=I(n,i,o,!r,a);return l&&!e&&p!==n&&l(null,p,S(p,i),R(p,i),k(p,i),this.isValid(p)),{isTimeOptionsOpen:e,timeState:p,isInvalid:e?s:!this.isValid(p)}})),this.props.setIsOpen(e),e||this.inputRef.current.focus()},this.onSelect=e=>{const{timeRegex:t,timeState:i}=this.state,{delimiter:s,is24Hour:n,includeSeconds:o,setIsOpen:r}=this.props,a=I(e.target.textContent,t,s,!n,o);a!==i&&this.onInputChange(e,a),this.inputRef.current.focus(),this.setState({isTimeOptionsOpen:!1,isInvalid:!1}),r(!1)},this.onInputClick=e=>{this.state.isTimeOptionsOpen||this.onToggle(!0),e.stopPropagation()},this.onInputChange=(e,t)=>{const{onChange:i}=this.props,{timeRegex:s}=this.state;i&&i(e,t,S(t,s),R(t,s),k(t,s),this.isValid(t)),this.scrollToSelection(t),this.setState({timeState:t})};const{is24Hour:t,delimiter:i,time:s,includeSeconds:o,isOpen:r}=this.props;let{minTime:l,maxTime:p}=this.props;if(""===l){const e=o?`${i}00`:"";l=t?`00${i}00${e}`:`12${i}00${e} AM`}if(""===p){const e=o?`${i}59`:"";p=t?`23${i}59${e}`:`11${i}59${e} PM`}const c=this.getRegExp();this.state={isInvalid:!1,isTimeOptionsOpen:r,timeState:I(s,c,i,!t,o),focusedIndex:null,scrollIndex:0,timeRegex:c,minTimeState:I(l,c,i,!t,o),maxTimeState:I(p,c,i,!t,o)}}componentDidMount(){document.addEventListener("mousedown",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.handleGlobalKeys),this.setState({isInvalid:!this.isValid(this.state.timeState)})}componentWillUnmount(){document.removeEventListener("mousedown",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.handleGlobalKeys)}componentDidUpdate(e,t){const{timeState:i,isTimeOptionsOpen:s,isInvalid:n,timeRegex:o}=this.state,{time:r,is24Hour:a,delimiter:l,includeSeconds:p,isOpen:c,minTime:d,maxTime:m}=this.props;if(e.isOpen!==c&&this.onToggle(c),s&&!t.isTimeOptionsOpen&&i&&!n&&this.scrollToSelection(i),l!==e.delimiter&&this.setState({timeRegex:this.getRegExp()}),""!==r&&r!==e.time){const e=I(r,o,l,!a,p);this.setState({timeState:e,isInvalid:!this.isValid(e)})}""!==d&&d!==e.minTime&&this.setState({minTimeState:I(d,o,l,!a,p)}),""!==m&&m!==e.maxTime&&this.setState({maxTimeState:I(m,o,l,!a,p)})}render(){const e=this.props,{"aria-label":t,isDisabled:i,className:a,placeholder:v,id:I,menuAppendTo:$,is24Hour:S,invalidFormatErrorMessage:R,invalidMinMaxErrorMessage:k,stepMinutes:E,width:M,delimiter:y,inputProps:w,onChange:U,setIsOpen:P,isOpen:H,time:N,validateTime:_,minTime:V,maxTime:F,includeSeconds:G,zIndex:L}=e,z=(0,s.__rest)(e,["aria-label","isDisabled","className","placeholder","id","menuAppendTo","is24Hour","invalidFormatErrorMessage","invalidMinMaxErrorMessage","stepMinutes","width","delimiter","inputProps","onChange","setIsOpen","isOpen","time","validateTime","minTime","maxTime","includeSeconds","zIndex"]),{timeState:j,isTimeOptionsOpen:B,isInvalid:K,minTimeState:W,maxTimeState:q}=this.state,J={[D]:M},Q=((e,t,i,s,n,o)=>{const r=[],a=new Date((new Date).setHours(0,0,0,0)),l=a.getDay();for(;a.getDay()===l;){let l=a.getHours(),p=x;t&&(0===l?l=12:l>=12&&(p=T),l>12&&(l%=12)),l=t?l.toString():l.toString().padStart(2,"0");const c=`${l}${i}${a.getMinutes().toString().padStart(2,"0")}${t?p:""}`;C(s,n,c,i,o)&&r.push(c),a.setMinutes(a.getMinutes()+e)}return r})(E,!S,y,W,q,G),X=this.isValidFormat(j),Y=I||(0,l.LP)("time-picker"),Z=()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null,ee=n.createElement(c.W,{ref:this.menuRef,isScrollable:!0},n.createElement(d.r,{maxMenuHeight:"200px"},n.createElement(m.c,{"aria-label":t},Q.map(((e,t)=>n.createElement(u.D,{onClick:this.onSelect,key:e,id:`${Y}-option-${t}`},e)))))),te=n.createElement(f.ks,Object.assign({"aria-haspopup":"menu",id:`${Y}-input`,"aria-label":t,validated:K?"error":"default",placeholder:v,value:j||"",type:"text",customIcon:n.createElement(A,null),onClick:this.onInputClick,onChange:this.onInputChange,autoComplete:"off",isDisabled:i,isExpanded:B,ref:this.inputRef},w));let ie;switch($){case"inline":ie=()=>this.toggleRef.current;break;case"parent":ie=Z;break;default:ie=$}return n.createElement("div",{ref:this.baseComponentRef,className:(0,o.A)(r.A.datePicker,a)},n.createElement("div",Object.assign({className:(0,o.A)(r.A.datePickerInput),style:J},z),n.createElement(h.M,null,n.createElement(g.b,null,n.createElement("div",{id:Y},n.createElement("div",{ref:this.toggleRef,style:{paddingLeft:"0"}},n.createElement(p.Popper,{appendTo:ie,trigger:te,triggerRef:this.toggleRef,popper:ee,popperRef:this.menuRef,isVisible:B,zIndex:L}))))),K&&n.createElement("div",{className:(0,o.A)(r.A.datePickerHelperText)},n.createElement(O.E,null,n.createElement(b.j,{variant:"error"},X?k:R)))))}}M.displayName="TimePicker",M.defaultProps={className:"",isDisabled:!1,time:"",is24Hour:!1,invalidFormatErrorMessage:"Invalid time format",invalidMinMaxErrorMessage:"Invalid time entered",placeholder:"hh:mm",delimiter:":","aria-label":"Time picker",width:"150px",menuAppendTo:"inline",stepMinutes:30,inputProps:{},minTime:"",maxTime:"",isOpen:!1,setIsOpen:()=>{},zIndex:9999}},98727:(e,t,i)=>{i.d(t,{A:()=>s}),i(61858);const s={datePicker:"pf-v5-c-date-picker",datePickerCalendar:"pf-v5-c-date-picker__calendar",datePickerHelperText:"pf-v5-c-date-picker__helper-text",datePickerInput:"pf-v5-c-date-picker__input",formControl:"pf-v5-c-form-control",modifiers:{alignRight:"pf-m-align-right",top:"pf-m-top",static:"pf-m-static"},themeDark:"pf-v5-theme-dark"}},37621:(e,t,i)=>{i.d(t,{A:()=>s}),i(71036);const s={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/4243.bc1c075b3aafbf0b06192448d718627f.js.map
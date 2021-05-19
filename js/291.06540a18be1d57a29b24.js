/*! For license information please see 291.06540a18be1d57a29b24.js.LICENSE.txt */
(self.webpackChunknotifications_frontend=self.webpackChunknotifications_frontend||[]).push([[291],{44291:(e,t,n)=>{"use strict";n.d(t,{v:()=>w});var r,a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=a.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},s=function(e){return"INPUT"===e.tagName},l=function(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},f=function(e){return!(!l(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!a||a===e}(e)}(e)||c(e)<0)},d=a.concat("iframe").join(","),p=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,d)&&l(e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m,y=(m=[],{activateTrap:function(e){if(m.length>0){var t=m[m.length-1];t!==e&&t.pause()}var n=m.indexOf(e);-1===n||m.splice(n,1),m.push(e)},deactivateTrap:function(e){var t=m.indexOf(e);-1!==t&&m.splice(t,1),m.length>0&&m[m.length-1].unpause()}}),h=function(e){return setTimeout(e,0)},w=function(e,t){var n,a=document,s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),l={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d=function(e){return l.containers.some((function(t){return t.contains(e)}))},m=function(e){var t=s[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=a.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},w=function(){var e;if(null!==m("initialFocus"))e=m("initialFocus");else if(d(a.activeElement))e=a.activeElement;else{var t=l.tabbableGroups[0];e=t&&t.firstTabbableNode||m("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},g=function(){if(l.tabbableGroups=l.containers.map((function(e){var t,n,r,a,s,l,d,p=(n=[],r=[],(a=e,s=(t=t||{}).includeContainer,l=f,d=Array.prototype.slice.apply(a.querySelectorAll(o)),s&&i.call(a,o)&&d.unshift(a),d.filter(l)).forEach((function(e,t){var a=c(e);0===a?n.push(e):r.push({documentOrder:t,tabIndex:a,node:e})})),r.sort(u).map((function(e){return e.node})).concat(n));if(p.length>0)return{firstTabbableNode:p[0],lastTabbableNode:p[p.length-1]}})).filter((function(e){return!!e})),l.tabbableGroups.length<=0&&!m("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},O=function e(t){t!==a.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!s.preventScroll}),l.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},E=function(e){d(e.target)||(s.clickOutsideDeactivates?n.deactivate({returnFocus:s.returnFocusOnDeactivate&&!p(e.target)}):s.allowOutsideClick&&("boolean"==typeof s.allowOutsideClick?s.allowOutsideClick:s.allowOutsideClick(e))||e.preventDefault())},k=function(e){var t=d(e.target);t||e.target instanceof Document?t&&(l.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),O(l.mostRecentlyFocusedNode||w()))},S=function(e){if(!1!==s.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){g();var t=null;if(l.tabbableGroups.length>0)if(e.shiftKey){var n=l.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?l.tabbableGroups.length-1:n-1;t=l.tabbableGroups[r].lastTabbableNode}}else{var a=l.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(a>=0){var o=a===l.tabbableGroups.length-1?0:a+1;t=l.tabbableGroups[o].firstTabbableNode}}else t=m("fallbackFocus");t&&(e.preventDefault(),O(t))}(e)},D=function(e){s.clickOutsideDeactivates||d(e.target)||s.allowOutsideClick&&("boolean"==typeof s.allowOutsideClick?s.allowOutsideClick:s.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},C=function(){if(l.active)return y.activateTrap(n),r=s.delayInitialFocus?h((function(){O(w())})):O(w()),a.addEventListener("focusin",k,!0),a.addEventListener("mousedown",E,{capture:!0,passive:!1}),a.addEventListener("touchstart",E,{capture:!0,passive:!1}),a.addEventListener("click",D,{capture:!0,passive:!1}),a.addEventListener("keydown",S,{capture:!0,passive:!1}),n},N=function(){if(l.active)return a.removeEventListener("focusin",k,!0),a.removeEventListener("mousedown",E,!0),a.removeEventListener("touchstart",E,!0),a.removeEventListener("click",D,!0),a.removeEventListener("keydown",S,!0),n};return(n={activate:function(e){if(l.active)return this;g(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=a.activeElement;var t=e&&e.onActivate?e.onActivate:s.onActivate;return t&&t(),C(),this},deactivate:function(e){if(!l.active)return this;clearTimeout(r),N(),l.active=!1,l.paused=!1,y.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:s.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:s.returnFocusOnDeactivate)&&h((function(){var e;O((e=l.nodeFocusedBeforeActivation,m("setReturnFocus")||e))})),this},pause:function(){return l.paused||!l.active||(l.paused=!0,N()),this},unpause:function(){return l.paused&&l.active?(l.paused=!1,g(),C(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return l.containers=t.map((function(e){return"string"==typeof e?a.querySelector(e):e})),l.active&&g(),this}}).updateContainerElements(e),n}}}]);
//# sourceMappingURL=../sourcemaps/291.8130796e7ccdac89f9b4.js.map
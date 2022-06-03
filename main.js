/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={659:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(645),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,".grid-item {\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: #444;\r\n    transition: all .1s ease-in;\r\n    border-radius: 16px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    max-width: 600px;\r\n  }\r\n.coverImage{\r\n  border-radius: 16px;\r\n  max-width: 800px;\r\n  max-height: 600px;\r\n\r\n}\r\n  .projectContainer:hover .grid-item{\r\n    box-shadow: rgba(181, 98, 253, 0.5) 0px 0px 0px 3px inset;\r\n    transition: 0.5s;\r\n    color:rgb(161, 58, 251);\r\n    overflow: hidden;\r\n    opacity: 95%;\r\n    cursor: pointer;\r\n    outline: #444;\r\n    transform: scale(1.05);\r\n    \r\n  }\r\n\r\n  @supports(-webkit-backdrop-filter: none) or (backdrop-filter: none){\r\n    .projectContainer:hover{\r\n      -webkit-backdrop-filter: blur(20px);\r\n      backdrop-filter: blur(20px);\r\n    }\r\n  }\r\n  \r\n \r\n\r\n",""]);const a=o},426:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(645),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,"nav{\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: rgba(4, 4, 4, 0.8);\r\n  backdrop-filter: blur(20px);\r\n  z-index: 1;\r\n}\r\n.Content {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  font-family: monospace;\r\n  background-color: #333;\r\n\r\n  \r\n\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0.5rem;\r\n  overflow: hidden;\r\n  \r\n  \r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\nli a:hover {\r\n  background-color: rgba(116, 105, 218, 0.335);\r\n}\r\n\r\n.modeDL {\r\n  float: right;\r\n  border-style: none;\r\n  border-radius: 5px;\r\n  margin: 15px;\r\n  font-size: 1.2rem;\r\n  transition: .7s;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  color: whitesmoke\r\n}\r\n\r\n.mainBody {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  align-items: center;\r\n\r\n}\r\n\r\n#homepageImage {\r\n  background-color: purple;\r\n  max-width: 100%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  align-items: center;\r\n}\r\n\r\n.homePageImageBack {\r\n  background-color: rgba(22, 22, 22, 255);\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  align-items: center;\r\n\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.textItem {\r\n  margin: 0px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  max-width: 1920px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.grid {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  display: grid;\r\n\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: auto;\r\n  grid-gap: 20px;\r\n  padding: 10px;\r\n  max-width: 2000px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 1680px) {\r\n  .grid {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .grid img {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .searchBar{\r\n    visibility: visible;\r\n  }\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n\r\n  .searchBar{\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n \r\n}\r\n\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .grid img {\r\n    max-width: 100%;\r\n  }\r\n  .searchBar{\r\n    visibility: hidden;\r\n  }\r\n \r\n}\r\n\r\n.about {\r\n  margin: 0px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  align-items: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nform.searchBar {\r\n  margin-top: 0px;  \r\n}\r\n\r\n/* Style the search field */\r\nform.searchBar input[type=text] {\r\n  padding: 13px;\r\n  font-size: 17px;\r\n  border-style: none;\r\n  float: left;\r\n  width: 40%;\r\n  background: #f1f1f1;\r\n  outline: none;\r\n  border-radius: 10px 0px 0px 10px;\r\n}\r\n\r\n/* Style the submit button */\r\nform.searchBar button {\r\n  float: left;\r\n  width: 10%;\r\n  padding: 13px;\r\n  font-size: 17px;\r\n  border-style: none;\r\n  border-left: none;\r\n  /* Prevent double borders */\r\n  cursor: pointer;\r\n  border-radius: 0px 10px 10px 0px;\r\n  opacity: 70%;\r\n}\r\n\r\nform.searchBar button:hover {\r\n  background: #7d0bda;\r\n}\r\n\r\n/* Clear floats */\r\nform.searchBar::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.testDiv {\r\n  font-size: 199px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.switch {\r\n  float: right;\r\n  position: relative;\r\n  margin-top: 0.45rem;\r\n  margin-right: 0.5rem;\r\n  width: 60px;\r\n  height: 34px;\r\n  border-style: solid;\r\n  border: #7d0bda;\r\n}\r\n\r\n.switch input { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: rgba(22,22,22,255);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px rgba(22,22,22,255);\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n.projectsHeader{\r\n  text-align: center;\r\n  padding: 30px;\r\n  margin-top: -10px;\r\n  margin-bottom: -10px;\r\n  font-size: 2.4rem;\r\n}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},418:e=>{"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))t.call(i,u)&&(s[u]=i[u]);if(r){c=r(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},408:(e,r,t)=>{"use strict";var n=t(418),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,c=60110,s=60112;r.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),r.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}function b(){}function y(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=y.prototype=new b;v.constructor=y,n(v,g.prototype),v.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)w.call(r,n)&&!E.hasOwnProperty(n)&&(a[n]=r[n]);var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function j(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+S(s,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),j(i,r,t,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),r.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+S(c=e[l],l);s+=j(c,r,t,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(c=e.next()).done;)s+=j(c=c.value,r,t,u=n+S(c,l++),i);else if("object"===c)throw r=""+e,Error(f(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function _(e,r,t){if(null==e)return e;var n=[],o=0;return j(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function N(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var O={current:null};function I(){var e=O.current;if(null===e)throw Error(f(321));return e}var P={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:_,forEach:function(e,r,t){_(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return _(e,(function(){r++})),r},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(f(143));return e}},r.Component=g,r.PureComponent=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,r.cloneElement=function(e,r,t){if(null==e)throw Error(f(267,e));var a=n({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=x.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)w.call(r,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==l?l[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:N}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return I().useCallback(e,r)},r.useContext=function(e,r){return I().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return I().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return I().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return I().useLayoutEffect(e,r)},r.useMemo=function(e,r){return I().useMemo(e,r)},r.useReducer=function(e,r,t){return I().useReducer(e,r,t)},r.useRef=function(e){return I().useRef(e)},r.useState=function(e){return I().useState(e)},r.version="17.0.2"},294:(e,r,t)=>{"use strict";e.exports=t(408)},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=n.base?s[0]+n.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(f)):r.push({identifier:p,updater:o(f,n),references:1}),i.push(p)}return i}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var s=n(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},553:e=>{"use strict";e.exports=JSON.parse('{"Projects":[{"Name":"Calculator","ID":0,"CoverImg":"CalcCover","CoverALT":"Picture of a calculator","TechUsed":["React","CSS","HTML"],"Preview":"https://cheerful-toffee-54031c.netlify.app/","DateCreated":"05-06-2021"},{"Name":"Quote Generator","ID":1,"CoverImg":"QuoteCover","CoverALT":"","TechUsed":["React","CSS","HTML"],"Preview":"","DateCreated":"14-05-2021"},{"Name":"Pomodore Clock","ID":2,"CoverImg":"PomoCover","CoverALT":"","TechUsed":["React","CSS","HTML"],"Preview":"","DateCreated":"20-6-2021"}]}')},373:(e,r,t)=>{"use strict";e.exports=t.p+"3ae7ac89a36dfdaf2aee.jpg"},622:(e,r,t)=>{"use strict";e.exports=t.p+"31d22849bd91efcb85c2.jpg"},797:(e,r,t)=>{var n={"./CalcCover.jpg":373,"./QuoteCover.jpg":622};function o(e){var r=a(e);return t(r)}function a(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=797}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{"use strict";var e=t(379),r=t.n(e),n=t(795),o=t.n(n),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),p=t(589),d=t.n(p),f=t(426),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(294),g=t(659),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),r()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const y=e=>h.createElement("div",{className:"projectContainer"},h.createElement("div",{className:"grid-item"},h.createElement("p",null,e.project.title),h.createElement("img",{className:"coverImage",alt:e.project.alt,src:e.project.cover})));class v extends React.Component{constructor(e){super(e),this.state={}}render(){return React.createElement("div",null,React.createElement(E,null))}}const x={color:"black",backgroundColor:"rgb(240, 244, 245)",transition:".7s"},w={color:"white",backgroundColor:"rgba(22,22,22,255)",transition:".7s"};function E(e){const[r,t]=React.useState(!0),[n,o]=React.useState("Light Mode"),[a,i]=React.useState(x);return React.createElement("div",{className:"Content"},React.createElement("nav",null,React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{href:"#homeImg"},"Home")),React.createElement("li",null,React.createElement("a",{href:"#projects"},"Projects")),React.createElement("li",null,React.createElement("a",{href:"#about"},"About")),React.createElement("li",null,React.createElement("a",null,"Contact")),React.createElement("label",{className:"switch"},React.createElement("input",{onClick:function(){t(!r),o(r?"Dark Mode":"Light Mode"),i(r?w:x)},type:"checkbox"}),React.createElement("span",{className:"slider round"})),React.createElement("div",{className:"modeText",style:{float:"right",marginRight:"0.5rem"}},React.createElement("p",{style:{color:"white"}},React.createElement("b",null,n))),React.createElement("form",{className:"searchBar"},React.createElement("input",{placeholder:"Search",id:"searchB",style:a,type:"text"}),React.createElement("button",{name:"submit",style:a,type:"submit"},React.createElement("i",{className:"fa fa-search"}))))),React.createElement(R,null),React.createElement("div",{id:"homeImg",className:"mainBody"},"   "),React.createElement(k,{modeStyle:a}),React.createElement(j,{modeStyle:a}),React.createElement(_,{modeStyle:a}),React.createElement(N,null))}function k(e){return React.createElement("div",{style:e.modeStyle},React.createElement("p",{className:"textItem"},"New According to YouTuber Coreteks and Moore’s Law is Dead who is quoting a leaker “Kepler” AMD is set to launch its Radeon RX 6600 XT graphics card at 399 USD. This is allegedly the current pricing plan for this Navi 23 based model. While neither of the sources is sure that this is the final price, it seems quite interesting that both have shared the exact same rumor in a span of a few hours. It clearly shows that AMD’s internal pricing information is leaking. Judging from how accurate previous reporting by those YouTubers was, the information shouldn’t just be ignored, although the 399 USD price tag is a lot more than was expected. In fact, this is just 80 USD less than RX 6700XT’s MSRP."))}function R(){return React.createElement("div",{className:"homePageImageBack"},React.createElement("img",{alt:"saturn with black background",id:"homepageImage",src:"https://img5.goodfon.com/wallpaper/nbig/5/c7/planet-satellites-orbit-space-simple-background-black-backgr.jpg"}))}const C=t(553),S=[0,1,2];function j(e){return React.createElement("div",null,"  ",React.createElement("h1",{style:e.modeStyle,className:"projectsHeader"},"Projects"),React.createElement("div",{id:"projects",style:e.modeStyle},React.createElement("div",{className:"grid"},(e=>{const r=[];for(let n=0;n<e.length;n++){const o=C.Projects[e[n]];let a;try{a=t(797)("./"+o.CoverImg+".jpg")}catch(e){a=""}r.push(React.createElement(y,{key:o.ID,project:{title:o.Name,cover:a,alt:o.CoverALT}}))}return console.log(r),r})(S))))}function _(e){return React.createElement("div",{id:"about",className:"about",style:e.modeStyle},React.createElement("p",{className:"textItem"},"about preposition UK  /əˈbaʊt/ US  /əˈbaʊt/ about preposition (CONNECTED WITH) A1 on the subject of, or connected with: What's that book about? a film about the Spanish Civil War We were talking/laughing about Sophie"))}const N=e=>React.createElement("div",null,React.createElement("footer",null,React.createElement("p",null,"By Vincent S")));ReactDOM.render(React.createElement(v,null),document.getElementById("root"))})()})();
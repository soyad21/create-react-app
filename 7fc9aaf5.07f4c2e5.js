/*! For license information please see 7fc9aaf5.07f4c2e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(i,".").concat(b)]||l[b]||f[b]||a;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,u=60112;t.Suspense=60113;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),s=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),c=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var j=g.prototype=new y;j.constructor=g,n(j,h.prototype),j.isPureReactComponent=!0;var O={current:null},w=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!v.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+_(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+_(s=e[c],c);u+=C(s,t,r,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),c=0;!(s=e.next()).done;)u+=C(s=s.value,t,r,p=n+_(s,c++),i);else if("object"===s)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(b(321));return e}var $={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(b(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var a=n({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)w.call(t,p)&&!v.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){c=Array(p);for(var l=0;l<p;l++)c[l]=arguments[l+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,s,u=i(e),c=1;c<arguments.length;c++){for(var p in r=Object(arguments[c]))o.call(r,p)&&(u[p]=r[p]);if(n){s=n(r);for(var l=0;l<s.length;l++)a.call(r,s[l])&&(u[s[l]]=r[s[l]])}}return u}},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(114),r(113)),i={id:"supported-browsers-features",title:"Supported Browsers and Features",sidebar_label:"Supported Browsers and Features"},s={unversionedId:"supported-browsers-features",id:"supported-browsers-features",isDocsHomePage:!1,title:"Supported Browsers and Features",description:"Supported Browsers",source:"@site/../docs/supported-browsers-features.md",slug:"/supported-browsers-features",permalink:"/docs/supported-browsers-features",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/supported-browsers-features.md",version:"current",lastUpdatedBy:"Evan Grim",lastUpdatedAt:1579202728,sidebar_label:"Supported Browsers and Features",sidebar:"docs",previous:{title:"Available Scripts",permalink:"/docs/available-scripts"},next:{title:"Updating to New Releases",permalink:"/docs/updating-to-new-releases"}},u=[{value:"Supported Browsers",id:"supported-browsers",children:[]},{value:"Supported Language Features",id:"supported-language-features",children:[]},{value:"Configuring Supported Browsers",id:"configuring-supported-browsers",children:[]}],c={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"supported-browsers"},"Supported Browsers"),Object(a.b)("p",null,"By default, the generated project supports all modern browsers. Support for Internet Explorer 9, 10, and 11 requires polyfills. For a set of polyfills to support older browsers, use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md"}),"react-app-polyfill"),"."),Object(a.b)("h2",{id:"supported-language-features"},"Supported Language Features"),Object(a.b)("p",null,"This project supports a superset of the latest JavaScript standard. In addition to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lukehoban/es6features"}),"ES6")," syntax features, it also supports:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rwaldron/exponentiation-operator"}),"Exponentiation Operator")," (ES2016)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tc39/ecmascript-asyncawait"}),"Async/await")," (ES2017)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-object-rest-spread"}),"Object Rest/Spread Properties")," (ES2018)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-dynamic-import"}),"Dynamic import()")," (stage 4 proposal)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-class-public-fields"}),"Class Fields and Static Properties")," (part of stage 3 proposal)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react/docs/introducing-jsx.html"}),"JSX"),", ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./adding-flow"}),"Flow")," and ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./adding-typescript"}),"TypeScript"),".")),Object(a.b)("p",null,"Learn more about ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://tc39.github.io/process-document/"}),"different proposal stages"),"."),Object(a.b)("p",null,"While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb"}),"codemods")," if any of these proposals change in the future."),Object(a.b)("p",null,"Note that ",Object(a.b)("strong",{parentName:"p"},"this project includes no ",Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md"}),"polyfills"))," by default."),Object(a.b)("p",null,"If you use any other ES6+ features that need ",Object(a.b)("strong",{parentName:"p"},"runtime support")," (such as ",Object(a.b)("inlineCode",{parentName:"p"},"Array.from()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Symbol"),"), make sure you are ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md"}),"including the appropriate polyfills manually"),", or that the browsers you are targeting already support them."),Object(a.b)("h2",{id:"configuring-supported-browsers"},"Configuring Supported Browsers"),Object(a.b)("p",null,"By default, the generated project includes a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),Object(a.b)("inlineCode",{parentName:"a"},"browserslist"))," configuration in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file to target a broad range of browsers based on global usage (",Object(a.b)("inlineCode",{parentName:"p"},"> 0.2%"),") for production builds, and modern browsers for development. This gives a good development experience, especially when using language features such as async/await, but still provides high compatibility with many browsers in production."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"browserslist")," configuration controls the outputted JavaScript so that the emitted code will be compatible with the browsers specified. The ",Object(a.b)("inlineCode",{parentName:"p"},"production")," list will be used when creating a production build by running the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," script, and the ",Object(a.b)("inlineCode",{parentName:"p"},"development")," list will be used when running the ",Object(a.b)("inlineCode",{parentName:"p"},"start")," script. You can use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all"}),"https://browserl.ist")," to see the browsers supported by your configured ",Object(a.b)("inlineCode",{parentName:"p"},"browserslist"),"."),Object(a.b)("p",null,"Here is an example ",Object(a.b)("inlineCode",{parentName:"p"},"browserslist")," that is specified in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"browserslist": {\n  "production": [\n    ">0.2%",\n    "not dead",\n    "not op_mini all"\n  ],\n  "development": [\n    "last 1 chrome version",\n    "last 1 firefox version",\n    "last 1 safari version"\n  ]\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that this does not include polyfills automatically for you. You will still need to polyfill language features (see above) as needed based on the browsers you are supporting.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When editing the ",Object(a.b)("inlineCode",{parentName:"p"},"browserslist")," config, you may notice that your changes don't get picked up right away. This is due to an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/babel/babel-loader/issues/690"}),"issue in babel-loader")," not detecting the change in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". A quick solution is to delete the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.cache")," folder and try again.")))}p.isMDXComponent=!0}}]);
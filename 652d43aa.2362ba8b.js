/*! For license information please see 652d43aa.2362ba8b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,u=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),c=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var j=v.prototype=new h;j.constructor=v,n(j,m.prototype),j.isPureReactComponent=!0;var O={current:null},w=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!g.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===n?"."+C(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),E(a,t,r,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+C(c=e[l],l);u+=E(c,t,r,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(c=e.next()).done;)u+=E(c=c.value,t,r,s=n+C(c,l++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function P(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var x={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=n({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)w.call(t,s)&&!g.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=a(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){c=n(r);for(var p=0;p<c.length;p++)i.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(114),r(113)),a={id:"available-scripts",title:"Available Scripts",sidebar_label:"Available Scripts"},c={unversionedId:"available-scripts",id:"available-scripts",isDocsHomePage:!1,title:"Available Scripts",description:"In the project directory, you can run:",source:"@site/../docs/available-scripts.md",slug:"/available-scripts",permalink:"/docs/available-scripts",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/available-scripts.md",version:"current",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,sidebar_label:"Available Scripts",sidebar:"docs",previous:{title:"Folder Structure",permalink:"/docs/folder-structure"},next:{title:"Supported Browsers and Features",permalink:"/docs/supported-browsers-features"}},u=[{value:"<code>npm start</code>",id:"npm-start",children:[]},{value:"<code>npm test</code>",id:"npm-test",children:[]},{value:"<code>npm run build</code>",id:"npm-run-build",children:[]},{value:"<code>npm run eject</code>",id:"npm-run-eject",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the project directory, you can run:"),Object(i.b)("h2",{id:"npm-start"},Object(i.b)("inlineCode",{parentName:"h2"},"npm start")),Object(i.b)("p",null,"Runs the app in the development mode. Open ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(i.b)("p",null,"The page will reload if you make edits. You will also see any lint errors in the console."),Object(i.b)("h2",{id:"npm-test"},Object(i.b)("inlineCode",{parentName:"h2"},"npm test")),Object(i.b)("p",null,"Launches the test runner in the interactive watch mode. See the section about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/running-tests"}),"running tests")," for more information."),Object(i.b)("h2",{id:"npm-run-build"},Object(i.b)("inlineCode",{parentName:"h2"},"npm run build")),Object(i.b)("p",null,"Builds the app for production to the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," folder. It correctly bundles React in production mode and optimizes the build for the best performance."),Object(i.b)("p",null,"The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/production-build"}),"production build")," section for more information."),Object(i.b)("p",null,"Your app is ready to be deployed! See the section about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment"}),"deployment")," for more information about deploying your application to popular hosting providers."),Object(i.b)("h2",{id:"npm-run-eject"},Object(i.b)("inlineCode",{parentName:"h2"},"npm run eject")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: this is a one-way operation. Once you ",Object(i.b)("inlineCode",{parentName:"strong"},"eject"),", you can\u2019t go back!")),Object(i.b)("p",null,"If you aren\u2019t satisfied with the build tool and configuration choices, you can ",Object(i.b)("inlineCode",{parentName:"p"},"eject")," at any time. This command will remove the single build dependency from your project."),Object(i.b)("p",null,"Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Technically, the distinction between dependencies and development dependencies is pretty arbitrary for front-end apps that produce static bundles."),Object(i.b)("p",null,"In addition, it used to cause problems with some hosting platforms that didn't install development dependencies (and thus weren't able to build the project on the server or test it right before deployment). You are free to rearrange your dependencies in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," as you see fit."),Object(i.b)("p",null,"All of the commands except ",Object(i.b)("inlineCode",{parentName:"p"},"eject")," will still work, but they will point to the copied scripts so you can tweak them. At this point you\u2019re on your own."),Object(i.b)("p",null,"You don\u2019t have to ever use ",Object(i.b)("inlineCode",{parentName:"p"},"eject"),". The curated feature set is suitable for small and middle deployments, and you shouldn\u2019t feel obligated to use this feature. However we understand that this tool wouldn\u2019t be useful if you couldn\u2019t customize it when you are ready for it."))}s.isMDXComponent=!0}}]);
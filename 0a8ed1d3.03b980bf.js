/*! For license information please see 0a8ed1d3.03b980bf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,b=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),c=d("react.provider"),i=d("react.context"),b=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),s=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function O(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function j(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var g=h.prototype=new j;g.constructor=h,n(g,O.prototype),g.isPureReactComponent=!0;var y={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var b=arguments.length-2;if(1===b)o.children=r;else if(1<b){for(var l=Array(b),s=0;s<b;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in b=e.defaultProps)void 0===o[n]&&(o[n]=b[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:y.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var b=!1;if(null===e)b=!0;else switch(i){case"string":case"number":b=!0;break;case"object":switch(e.$$typeof){case a:case o:b=!0}}if(b)return c=c(b=e),e=""===n?"."+_(b,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||b&&b.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(b=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+_(i=e[l],l);b+=R(i,t,r,s,c)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(i=e.next()).done;)b+=R(i=i.value,t,r,s=n+_(i,l++),c);else if("object"===i)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return b}function k(e,t,r){if(null==e)return e;var n=[],a=0;return R(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function A(){var e=I.current;if(null===e)throw Error(u(321));return e}var P={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:k,forEach:function(e,t,r){k(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(u(143));return e}},t.Component=O,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(u(267,e));var o=n({},e.props),c=e.key,i=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,b=y.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)v.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.1"},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,b=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))a.call(r,s)&&(b[s]=r[s]);if(n){i=n(r);for(var d=0;d<i.length;d++)o.call(r,i[d])&&(b[i[d]]=r[i[d]])}}return b}},54:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(114),r(113)),c={id:"advanced-configuration",title:"Advanced Configuration"},i={unversionedId:"advanced-configuration",id:"advanced-configuration",isDocsHomePage:!1,title:"Advanced Configuration",description:"You can adjust various development and production settings by setting environment variables in your shell or with .env.",source:"@site/../docs/advanced-configuration.md",slug:"/advanced-configuration",permalink:"/docs/advanced-configuration",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/advanced-configuration.md",version:"current",lastUpdatedBy:"Brody McKee",lastUpdatedAt:1612377901,sidebar:"docs",previous:{title:"Pre-Rendering into Static HTML Files",permalink:"/docs/pre-rendering-into-static-html-files"},next:{title:"Alternatives to Ejecting",permalink:"/docs/alternatives-to-ejecting"}},b=[],l={rightToc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can adjust various development and production settings by setting environment variables in your shell or with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env"}),".env"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: You do not need to declare ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_")," before the below variables as you would with custom environment variables.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Development"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Production"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Usage"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BROWSER"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/sindresorhus/open#app"}),"browser")," to override this behavior, or set it to ",Object(o.b)("inlineCode",{parentName:"td"},"none")," to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to ",Object(o.b)("inlineCode",{parentName:"td"},"npm start")," will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the ",Object(o.b)("inlineCode",{parentName:"td"},".js")," extension.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BROWSER_ARGS"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When the ",Object(o.b)("inlineCode",{parentName:"td"},"BROWSER")," environment variable is specified, any arguments that you set to this environment variable will be passed to the browser instance. Multiple arguments are supported as a space separated list. By default, no arguments are passed through to browsers.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HOST"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, the development web server binds to all hostnames on the device (",Object(o.b)("inlineCode",{parentName:"td"},"localhost"),", LAN network address, etc.). You may use this variable to specify a different host.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PORT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HTTPS"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", Create React App will run the development server in ",Object(o.b)("inlineCode",{parentName:"td"},"https")," mode.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WDS_SOCKET_HOST"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set, Create React App will run the development server with a custom websocket hostname for hot module reloading. Normally, ",Object(o.b)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",Object(o.b)("inlineCode",{parentName:"td"},"window.location.hostname")," for the SockJS hostname. You may use this variable to start local development on more than one Create React App project at a time. See ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://webpack.js.org/configuration/dev-server/#devserversockhost"}),"webpack-dev-server documentation")," for more details.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WDS_SOCKET_PATH"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set, Create React App will run the development server with a custom websocket path for hot module reloading. Normally, ",Object(o.b)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",Object(o.b)("inlineCode",{parentName:"td"},"/sockjs-node")," for the SockJS pathname. You may use this variable to start local development on more than one Create React App project at a time. See ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://webpack.js.org/configuration/dev-server/#devserversockpath"}),"webpack-dev-server documentation")," for more details.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WDS_SOCKET_PORT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set, Create React App will run the development server with a custom websocket port for hot module reloading. Normally, ",Object(o.b)("inlineCode",{parentName:"td"},"webpack-dev-server")," defaults to ",Object(o.b)("inlineCode",{parentName:"td"},"window.location.port")," for the SockJS port. You may use this variable to start local development on more than one Create React App project at a time. See ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://webpack.js.org/configuration/dev-server/#devserversockport"}),"webpack-dev-server documentation")," for more details.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PUBLIC_URL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"deployment#building-for-relative-paths"}),Object(o.b)("inlineCode",{parentName:"a"},"package.json")," (",Object(o.b)("inlineCode",{parentName:"a"},"homepage"),")"),". Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BUILD_PATH"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, Create React App will output compiled assets to a ",Object(o.b)("inlineCode",{parentName:"td"},"/build")," directory adjacent to your ",Object(o.b)("inlineCode",{parentName:"td"},"/src"),". You may use this variable to specify a new path for Create React App to output assets. BUILD_PATH should be specified as a path relative to the root of your project.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CI"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"REACT_EDITOR"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/facebook/create-react-app/issues/2636"}),"send a pull request to detect your editor of choice"),". Setting this environment variable overrides the automatic detection. If you do it, make sure your systems ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/PATH_(variable)"}),"PATH")," environment variable points to your editor\u2019s bin folder. You can also set it to ",Object(o.b)("inlineCode",{parentName:"td"},"none")," to disable it completely.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CHOKIDAR_USEPOLLING"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", the watcher runs in polling mode, as necessary inside a VM. Use this option if ",Object(o.b)("inlineCode",{parentName:"td"},"npm start")," isn't detecting changes.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GENERATE_SOURCEMAP"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"false"),", source maps are not generated for a production build. This solves out of memory (OOM) issues on some smaller machines.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"INLINE_RUNTIME_CHUNK"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, Create React App will embed the runtime script into ",Object(o.b)("inlineCode",{parentName:"td"},"index.html")," during the production build. When set to ",Object(o.b)("inlineCode",{parentName:"td"},"false"),", the script will not be embedded and will be imported as usual. This is normally required when dealing with CSP.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IMAGE_INLINE_SIZE_LIMIT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, images smaller than 10,000 bytes are encoded as a data URI in base64 and inlined in the CSS or JS build artifact. Set this to control the size limit in bytes. Setting it to 0 will disable the inlining of images.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FAST_REFRESH"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"false"),", disables experimental support for Fast Refresh to allow you to tweak your components in real time without reloading the page.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TSC_COMPILE_ON_ERROR"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", you can run and properly build TypeScript projects even if there are TypeScript type check errors. These errors are printed as warnings in the terminal and/or browser console.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ESLINT_NO_DEV_ERRORS"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab Ignored"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", ESLint errors are converted to warnings during development. As a result, ESLint output will no longer appear in the error overlay.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DISABLE_ESLINT_PLUGIN"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/webpack-contrib/eslint-webpack-plugin"}),"eslint-webpack-plugin")," will be completely disabled.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DISABLE_NEW_JSX_TRANSFORM"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705 Used"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When set to ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", disables the ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"}),"new JSX transform")," introduced in React 17 and backported to React 16.14.0, 15.7.0, and 0.14.10. New projects will use a version of React that supports this by default but you may need to disable it in existing projects if you can't upgrade React.")))))}s.isMDXComponent=!0}}]);
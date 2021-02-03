/*! For license information please see 8d0344ba.901e61c0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,p=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),c=s("react.provider"),i=s("react.context"),p=s("react.forward_ref"),t.Suspense=s("react.suspense"),l=s("react.memo"),u=s("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function h(){}function j(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var O=j.prototype=new h;O.constructor=j,r(O,y.prototype),O.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){for(var l=Array(p),u=0;u<p;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===o[r]&&(o[r]=p[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case o:p=!0}}if(p)return c=c(p=e),e=""===r?"."+S(p,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(c,t,n,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||p&&p.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),t.push(c)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+S(i=e[l],l);p+=_(i,t,n,u,c)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(i=e.next()).done;)p+=_(i=i.value,t,n,u=r+S(i,l++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function x(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var o=r({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)v.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,p=c(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))a.call(n,u)&&(p[u]=n[u]);if(r){i=r(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(p[i[s]]=n[i[s]])}}return p}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(114),n(113)),c={id:"getting-started",title:"Getting Started"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Create React App is an officially supported way to create single-page React",source:"@site/../docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/getting-started.md",version:"current",lastUpdatedBy:"Nick McCurdy",lastUpdatedAt:1593701690,sidebar:"docs",previous:{title:"About the Documentation",permalink:"/docs/documentation-intro"},next:{title:"Folder Structure",permalink:"/docs/folder-structure"}},p=[{value:"Quick Start",id:"quick-start",children:[{value:"Get Started Immediately",id:"get-started-immediately",children:[]}]},{value:"Creating an App",id:"creating-an-app",children:[{value:"npx",id:"npx",children:[]},{value:"npm",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"Selecting a template",id:"selecting-a-template",children:[]},{value:"Selecting a package manager",id:"selecting-a-package-manager",children:[]}]},{value:"Output",id:"output",children:[]},{value:"Scripts",id:"scripts",children:[{value:"<code>npm start</code> or <code>yarn start</code>",id:"npm-start-or-yarn-start",children:[]},{value:"<code>npm test</code> or <code>yarn test</code>",id:"npm-test-or-yarn-test",children:[]},{value:"<code>npm run build</code> or <code>yarn build</code>",id:"npm-run-build-or-yarn-build",children:[]}]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create React App is an officially supported way to create single-page React\napplications. It offers a modern build setup with no configuration."),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\ncd my-app\nnpm start\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(o.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(o.b)("p",null,"Then open ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," to see your app."),Object(o.b)("p",null,"When you\u2019re ready to deploy to production, create a minified bundle with ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg",width:"600",alt:"npm start"})),Object(o.b)("h3",{id:"get-started-immediately"},"Get Started Immediately"),Object(o.b)("p",null,"You ",Object(o.b)("strong",{parentName:"p"},"don\u2019t")," need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code."),Object(o.b)("p",null,"Create a project, and you\u2019re good to go."),Object(o.b)("h2",{id:"creating-an-app"},"Creating an App"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You\u2019ll need to have Node >= 10 on your local development machine")," (but it\u2019s not required on the server). You can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/creationix/nvm#installation"}),"nvm")," (macOS/Linux) or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"}),"nvm-windows")," to switch Node versions between different projects."),Object(o.b)("p",null,"To create a new app, you may choose one of the following methods:"),Object(o.b)("h3",{id:"npx"},"npx"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")," comes with npm 5.2+ and higher, see ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),")")),Object(o.b)("h3",{id:"npm"},"npm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm init react-app my-app\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"em"},"npm init <initializer>")," is available in npm 6+")),Object(o.b)("h3",{id:"yarn"},"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn create react-app my-app\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"em"},"yarn create")," is available in Yarn 0.25+")),Object(o.b)("h3",{id:"selecting-a-template"},"Selecting a template"),Object(o.b)("p",null,"You can now optionally start a new app from a template by appending ",Object(o.b)("inlineCode",{parentName:"p"},"--template [template-name]")," to the creation command."),Object(o.b)("p",null,"If you don't select a template, we'll create your project with our base template."),Object(o.b)("p",null,"Templates are always named in the format ",Object(o.b)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),", however you only need to provide the ",Object(o.b)("inlineCode",{parentName:"p"},"[template-name]")," to the creation command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template [template-name]\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can find a list of available templates by searching for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=cra-template-*"}),'"cra-template-',"*",'"')," on npm.")),Object(o.b)("p",null,"Our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/custom-templates"}),"Custom Templates")," documentation describes how you can build your own template."),Object(o.b)("h4",{id:"creating-a-typescript-app"},"Creating a TypeScript app"),Object(o.b)("p",null,"You can start a new TypeScript app using templates. To use our provided TypeScript template, append ",Object(o.b)("inlineCode",{parentName:"p"},"--template typescript")," to the creation command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template typescript\n")),Object(o.b)("p",null,"If you already have a project and would like to add TypeScript, see our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-typescript"}),"Adding TypeScript")," documentation."),Object(o.b)("h3",{id:"selecting-a-package-manager"},"Selecting a package manager"),Object(o.b)("p",null,"When you create a new app, the CLI will use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn")," to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append ",Object(o.b)("inlineCode",{parentName:"p"},"--use-npm")," to the creation command. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --use-npm\n")),Object(o.b)("h2",{id:"output"},"Output"),Object(o.b)("p",null,"Running any of these commands will create a directory called ",Object(o.b)("inlineCode",{parentName:"p"},"my-app")," inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"my-app\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u251c\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n")),Object(o.b)("p",null,"No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"cd my-app\n")),Object(o.b)("h2",{id:"scripts"},"Scripts"),Object(o.b)("p",null,"Inside the newly created project, you can run some built-in commands:"),Object(o.b)("h3",{id:"npm-start-or-yarn-start"},Object(o.b)("inlineCode",{parentName:"h3"},"npm start")," or ",Object(o.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(o.b)("p",null,"Runs the app in development mode. Open ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(o.b)("p",null,"The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg",width:"600",alt:"Build errors"})),Object(o.b)("h3",{id:"npm-test-or-yarn-test"},Object(o.b)("inlineCode",{parentName:"h3"},"npm test")," or ",Object(o.b)("inlineCode",{parentName:"h3"},"yarn test")),Object(o.b)("p",null,"Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/running-tests"}),"Read more about testing"),"."),Object(o.b)("h3",{id:"npm-run-build-or-yarn-build"},Object(o.b)("inlineCode",{parentName:"h3"},"npm run build")," or ",Object(o.b)("inlineCode",{parentName:"h3"},"yarn build")),Object(o.b)("p",null,"Builds the app for production to the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," folder. It correctly bundles React in production mode and optimizes the build for the best performance."),Object(o.b)("p",null,"The build is minified and the filenames include the hashes."),Object(o.b)("p",null,"Your app is ready to be deployed."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},32849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Data connectors",sidebar_position:3,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},c=void 0,l={unversionedId:"excel/data-connectors",id:"excel/data-connectors",title:"Data connectors",description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",source:"@site/content/excel/data-connectors.md",sourceDirName:"excel",slug:"/excel/data-connectors",permalink:"/excel/data-connectors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/data-connectors.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:3,frontMatter:{title:"Data connectors",sidebar_position:3,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},sidebar:"tutorialSidebar",previous:{title:"Data slicer",permalink:"/excel/data-slicer"},next:{title:"Templates",permalink:"/excel/templates"}},s={},p=[{value:"Single widget",id:"single-widget",level:2},{value:"Own backend",id:"own-backend",level:2},{value:"Native integrations",id:"native-integrations",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Data connectors | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"OpenBB Add-In for Excel allows you to access your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/pro/data-connectors"},"data connectors")," from OpenBB Terminal Pro inside Microsoft Excel. This can be done using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/excel/reference/byod"},"OBB.BYOD")," function."),(0,r.kt)("h2",{id:"single-widget"},(0,r.kt)("a",{parentName:"h2",href:"https://docs.openbb.co/pro/data-connectors/single-widget"},"Single widget")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name")\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure your widget is setup in the OpenBB Terminal Pro."))),(0,r.kt)("h2",{id:"own-backend"},(0,r.kt)("a",{parentName:"h2",href:"https://docs.openbb.co/pro/data-connectors/integrate-your-own-backend"},"Own backend")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name","backend_name")\n')),(0,r.kt)("p",null,"If your backend supports it is possible to pass a symbol, a date or other optional parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name","backend_name","my_symbol","YYYY-MM-DD",{"param1":"value1","param2":"value2", ...})\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The easiest way to pass optional parameters is to write them into cells and reference them in the function. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"=OBB.BYOD(...,A1:B2)"),' where A1 contains "param1", B1 "value1", A2 "param2", B2 "value2" and so on.')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure your backend's CORS settings allow requests coming from ",(0,r.kt)("a",{parentName:"li",href:"https://excel.openbb.co"},"https://excel.openbb.co"),"."),(0,r.kt)("li",{parentName:"ul"},"Requests via HTTP will be blocked by Excel. So if you are using the Add-in for Excel on Mac or Office on the web with Safari browser you need to run your backend via HTTPS."))),(0,r.kt)("h2",{id:"native-integrations"},(0,r.kt)("a",{parentName:"h2",href:"https://docs.openbb.co/pro/data-connectors#native-integrations"},"Native integrations")),(0,r.kt)("p",null,"Supported native integrations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"database"),(0,r.kt)("li",{parentName:"ul"},"snowflake")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name","native_integration")\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure your OpenBB Data Connector is properly configured and the widget is setup in the OpenBB Terminal Pro."),(0,r.kt)("li",{parentName:"ul"},"Native integrations are available only for Excel on the web or Windows."))))}m.isMDXComponent=!0}}]);
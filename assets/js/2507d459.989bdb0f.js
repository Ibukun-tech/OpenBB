"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=d(r),p=o,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||c;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<c;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),o=r(86010),c=r(67294),s=r(16550),a=r(48334);function i(e){let{title:t,url:r,description:i,command:d}=e;const{pathname:l}=(0,s.TH)(),m=l.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/");return c.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&c.createElement(a.Z,{className:"ml-auto mr-4"})),i?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},45973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),c=r(26515);const s={},a="gov",i={unversionedId:"sdk/reference/stocks/gov/index",id:"sdk/reference/stocks/gov/index",title:"gov",description:"Commands",source:"@site/content/sdk/reference/stocks/gov/index.mdx",sourceDirName:"sdk/reference/stocks/gov",slug:"/sdk/reference/stocks/gov/",permalink:"/sdk/reference/stocks/gov/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/gov/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/sdk/reference/stocks/ta/summary"},next:{title:"contracts",permalink:"/sdk/reference/stocks/gov/contracts"}},d={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gov"},"gov"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(c.Z,{title:"Contracts",description:"Get government contracts for ticker [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/contracts",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Government Trading",description:"Returns the most recent transactions by members of government",url:"/sdk/reference/stocks/gov/government_trading",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Gtrades",description:"Government trading for specific ticker [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/gtrades",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Histcont",description:"Get historical quarterly government contracts [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/histcont",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Lastcontracts",description:"Get last government contracts [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/lastcontracts",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Lasttrades",description:"Get last government trading [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/lasttrades",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Lobbying",description:"Corporate lobbying details",url:"/sdk/reference/stocks/gov/lobbying",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Qtrcontracts",description:"Analyzes quarterly contracts by ticker",url:"/sdk/reference/stocks/gov/qtrcontracts",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Topbuys",description:"Get top buy government trading [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/topbuys",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Toplobbying",description:"Corporate lobbying details",url:"/sdk/reference/stocks/gov/toplobbying",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Topsells",description:"Get top sell government trading [Source: quiverquant.com]",url:"/sdk/reference/stocks/gov/topsells",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
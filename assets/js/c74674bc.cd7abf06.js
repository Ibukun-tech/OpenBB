"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,d[1]=o;for(var c=2;c<a;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),i=r(35742);function a(e){let{title:t}=e;return n.createElement(i.Z,null,n.createElement("title",null,t))}},56439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905)),a=r(88828);const d={title:"divinfo",description:"This page provides information about using the 'divinfo' command to retrieve dividend data, including rate, yield, and ex-div date for a specified stock ticker.",keywords:["divinfo","dividend information","stock","dividend rate","yield","ex-div date","parameters","stock ticker","AAPL"]},o=void 0,l={unversionedId:"bot/reference/discord/duedilligence/divinfo",id:"bot/reference/discord/duedilligence/divinfo",title:"divinfo",description:"This page provides information about using the 'divinfo' command to retrieve dividend data, including rate, yield, and ex-div date for a specified stock ticker.",source:"@site/content/bot/reference/discord/duedilligence/divinfo.md",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/divinfo",permalink:"/bot/reference/discord/duedilligence/divinfo",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/divinfo.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"divinfo",description:"This page provides information about using the 'divinfo' command to retrieve dividend data, including rate, yield, and ex-div date for a specified stock ticker.",keywords:["divinfo","dividend information","stock","dividend rate","yield","ex-div date","parameters","stock ticker","AAPL"]},sidebar:"tutorialSidebar",previous:{title:"customer",permalink:"/bot/reference/discord/duedilligence/customer"},next:{title:"earnings",permalink:"/bot/reference/discord/duedilligence/earnings"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"duedilligence: divinfo - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command retrieves dividend information for a given stock. The data includes dividend rate, yield, and ex-div date."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dd divinfo ticker\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/dd divinfo ticker:AAPL\n")),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);
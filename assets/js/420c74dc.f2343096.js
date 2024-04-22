"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},38141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const l={title:"quote",description:"This page provides a guide on how to get stocks quotes using ticker symbols. It details usage, parameters like ticker and describes how to select multiple stocks to track at the same time.",keywords:["stock quote","stock ticker","stock market","quotes"]},i=void 0,s={unversionedId:"terminal/reference/portfolio/brokers/ally/quote",id:"terminal/reference/portfolio/brokers/ally/quote",title:"quote",description:"This page provides a guide on how to get stocks quotes using ticker symbols. It details usage, parameters like ticker and describes how to select multiple stocks to track at the same time.",source:"@site/content/terminal/reference/portfolio/brokers/ally/quote.md",sourceDirName:"terminal/reference/portfolio/brokers/ally",slug:"/terminal/reference/portfolio/brokers/ally/quote",permalink:"/terminal/reference/portfolio/brokers/ally/quote",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/brokers/ally/quote.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"quote",description:"This page provides a guide on how to get stocks quotes using ticker symbols. It details usage, parameters like ticker and describes how to select multiple stocks to track at the same time.",keywords:["stock quote","stock ticker","stock market","quotes"]},sidebar:"tutorialSidebar",previous:{title:"movers",permalink:"/terminal/reference/portfolio/brokers/ally/movers"},next:{title:"account",permalink:"/terminal/reference/portfolio/brokers/coinbase/account"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"portfolio/ally/quote /brokers - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Get stock quote"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"quote [-t TICKER]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"Ticker to get quote for. Can be in form of 'tick1,tick2...'"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);
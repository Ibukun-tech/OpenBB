"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(35742);function s(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},43438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),s=r(88828);const o={title:"interest",description:"This page serves as a user guide for the 'interest' feature which plots keywords or phrases over time versus stock price. It provides details on its usage, parameters, and provides illustrative execution results. Notable keywords that you could use to influence the plotted interest include topical phrases like 'COVID', 'WW3', and 'NFT'. The source for this functionality is based on Google.",keywords:["Interest","Stock price","Words","Sentences","Date","Parameters","Default","Optional","Start","Words","Choices","Google","COVID","WW3","NFT"]},i=void 0,l={unversionedId:"terminal/reference/stocks/ba/interest",id:"terminal/reference/stocks/ba/interest",title:"interest",description:"This page serves as a user guide for the 'interest' feature which plots keywords or phrases over time versus stock price. It provides details on its usage, parameters, and provides illustrative execution results. Notable keywords that you could use to influence the plotted interest include topical phrases like 'COVID', 'WW3', and 'NFT'. The source for this functionality is based on Google.",source:"@site/content/terminal/reference/stocks/ba/interest.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/interest",permalink:"/terminal/reference/stocks/ba/interest",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/interest.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"interest",description:"This page serves as a user guide for the 'interest' feature which plots keywords or phrases over time versus stock price. It provides details on its usage, parameters, and provides illustrative execution results. Notable keywords that you could use to influence the plotted interest include topical phrases like 'COVID', 'WW3', and 'NFT'. The source for this functionality is based on Google.",keywords:["Interest","Stock price","Words","Sentences","Date","Parameters","Default","Optional","Start","Words","Choices","Google","COVID","WW3","NFT"]},sidebar:"tutorialSidebar",previous:{title:"infer",permalink:"/terminal/reference/stocks/ba/infer"},next:{title:"jcdr",permalink:"/terminal/reference/stocks/ba/jcdr"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"stocks/ba/interest - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Plot interest over time of words/sentences versus stock price. ","[Source: Google]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"interest [-s START] [-w WORDS]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"starting date (format YYYY-MM-DD) of interest"),(0,a.kt)("td",{parentName:"tr",align:null},"2020-11-23"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"words"),(0,a.kt)("td",{parentName:"tr",align:null},"Select multiple sentences/words separated by commas. E.g. COVID,WW3,NFT"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/157575723-23c55e4e-9e87-4647-b8fa-8ed9643f471f.png",alt:"interest"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
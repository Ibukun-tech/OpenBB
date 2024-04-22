"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},87056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const l={title:"cpis",description:"This documentation pages describes the cpis command which allows users to visualize companies per industry based on sector and market cap",keywords:["sector","industry","market cap"]},s=void 0,o={unversionedId:"terminal/reference/stocks/sia/cpis",id:"terminal/reference/stocks/sia/cpis",title:"cpis",description:"This documentation pages describes the cpis command which allows users to visualize companies per industry based on sector and market cap",source:"@site/content/terminal/reference/stocks/sia/cpis.md",sourceDirName:"terminal/reference/stocks/sia",slug:"/terminal/reference/stocks/sia/cpis",permalink:"/terminal/reference/stocks/sia/cpis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/sia/cpis.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"cpis",description:"This documentation pages describes the cpis command which allows users to visualize companies per industry based on sector and market cap",keywords:["sector","industry","market cap"]},sidebar:"tutorialSidebar",previous:{title:"cpic",permalink:"/terminal/reference/stocks/sia/cpic"},next:{title:"cps",permalink:"/terminal/reference/stocks/sia/cps"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"stocks/sia/cpis - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Companies per Industry based on Sector and Market Cap"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cpis [-M MAX_INDUSTRIES_TO_DISPLAY] [-m MIN_PCT_TO_DISPLAY_INDUSTRY] [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_industries_to_display"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of industries to display"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min_pct_to_display_industry"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum percentage to display industry"),(0,a.kt)("td",{parentName:"tr",align:null},"0.015"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Output all raw data"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153896896-9e102f13-28ee-4abf-9277-a7c2ecfd08ab.png",alt:"CPIS"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
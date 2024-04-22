"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26803],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=s(a),m=n,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return a?r.createElement(k,o(o({ref:e},u),{},{components:a})):r.createElement(k,o({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},67938:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const o={title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",keywords:["Load stock ticker","Stock analysis","Data source","Indian ticker","Market analysis","Intraday stock minutes","Pre/After market hours","Load custom file","Monthly data","Weekly data"]},i=void 0,d={unversionedId:"terminal/reference/forex/ta/load",id:"terminal/reference/forex/ta/load",title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",source:"@site/content/terminal/reference/forex/ta/load.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/load",permalink:"/terminal/reference/forex/ta/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",keywords:["Load stock ticker","Stock analysis","Data source","Indian ticker","Market analysis","Intraday stock minutes","Pre/After market hours","Load custom file","Monthly data","Weekly data"]},sidebar:"tutorialSidebar",previous:{title:"fisher",permalink:"/terminal/reference/forex/ta/fisher"},next:{title:"macd",permalink:"/terminal/reference/forex/ta/macd"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},c="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"forex/ta/load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,n.kt)("a",{parentName:"p",href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"},"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"),"."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the stock"),(0,n.kt)("td",{parentName:"tr",align:null},"2019-11-21"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the stock"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Intraday stock minutes"),(0,n.kt)("td",{parentName:"tr",align:null},"1440"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"1, 5, 15, 30, 60")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prepost"),(0,n.kt)("td",{parentName:"tr",align:null},"Pre/After market hours. Only works for 'yf' source, and intraday data"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filepath"),(0,n.kt)("td",{parentName:"tr",align:null},"Path to load custom file."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monthly"),(0,n.kt)("td",{parentName:"tr",align:null},"Load monthly data"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weekly"),(0,n.kt)("td",{parentName:"tr",align:null},"Load weekly data"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);
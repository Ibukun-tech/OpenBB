"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24604],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(h,i(i({ref:e},d),{},{components:r})):n.createElement(h,i({ref:e},d))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},46191:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",keywords:["rsi","stock market strategy","short sell","rsi calculation","buy and hold comparison","spy hold comparison","rsi level","periods for calculation","threshold for buying and shorting stock"]},s=void 0,o={unversionedId:"terminal/reference/stocks/backtesting/rsi",id:"terminal/reference/stocks/backtesting/rsi",title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",source:"@site/content/terminal/reference/stocks/backtesting/rsi.md",sourceDirName:"terminal/reference/stocks/backtesting",slug:"/terminal/reference/stocks/backtesting/rsi",permalink:"/terminal/reference/stocks/backtesting/rsi",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/backtesting/rsi.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",keywords:["rsi","stock market strategy","short sell","rsi calculation","buy and hold comparison","spy hold comparison","rsi level","periods for calculation","threshold for buying and shorting stock"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/stocks/backtesting/load"},next:{title:"whatif",permalink:"/terminal/reference/stocks/backtesting/whatif"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:d},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /backtesting/rsi - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Strategy that buys when the stock is less than a threshold and shorts when it exceeds a threshold."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"rsi [-p PERIODS] [-u HIGH] [-l LOW] [--spy] [--no_bench] [--no_short]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"periods"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --periods"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of periods for RSI calculation"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"high"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --high"),(0,a.kt)("td",{parentName:"tr",align:null},"High (upper) RSI Level"),(0,a.kt)("td",{parentName:"tr",align:null},"70"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"low"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --low"),(0,a.kt)("td",{parentName:"tr",align:null},"Low RSI Level"),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spy"),(0,a.kt)("td",{parentName:"tr",align:null},"--spy"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to add spy hold comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no_bench"),(0,a.kt)("td",{parentName:"tr",align:null},"--no_bench"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to not show buy and hold comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shortable"),(0,a.kt)("td",{parentName:"tr",align:null},"--no_short"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag that disables the short sell"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
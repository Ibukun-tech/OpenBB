"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,g=c["".concat(d,".").concat(s)]||c[s]||p[s]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},42742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"candles",description:"This page is a comprehensive guide on how to display candle data for different technical analysis indicators like Bollinger Bands, Accumulation/Distribution Indicator, Commodity Channel Index, Exponential Moving Average, On Balance Volume, Relative Strength Index, Simple Moving Average, and Volume Weighted Average Price.",keywords:["candle data","technical analysis","data visualization","Bollinger Bands","Accumulation/Distribution Indicator","Commodity Channel Index","Exponential Moving Average","On Balance Volume","Relative Strength Index","Simple Moving Average","Volume Weighted Average Price"]},o=void 0,d={unversionedId:"terminal/reference/forex/oanda/candles",id:"terminal/reference/forex/oanda/candles",title:"candles",description:"This page is a comprehensive guide on how to display candle data for different technical analysis indicators like Bollinger Bands, Accumulation/Distribution Indicator, Commodity Channel Index, Exponential Moving Average, On Balance Volume, Relative Strength Index, Simple Moving Average, and Volume Weighted Average Price.",source:"@site/content/terminal/reference/forex/oanda/candles.md",sourceDirName:"terminal/reference/forex/oanda",slug:"/terminal/reference/forex/oanda/candles",permalink:"/terminal/reference/forex/oanda/candles",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/oanda/candles.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"candles",description:"This page is a comprehensive guide on how to display candle data for different technical analysis indicators like Bollinger Bands, Accumulation/Distribution Indicator, Commodity Channel Index, Exponential Moving Average, On Balance Volume, Relative Strength Index, Simple Moving Average, and Volume Weighted Average Price.",keywords:["candle data","technical analysis","data visualization","Bollinger Bands","Accumulation/Distribution Indicator","Commodity Channel Index","Exponential Moving Average","On Balance Volume","Relative Strength Index","Simple Moving Average","Volume Weighted Average Price"]},sidebar:"tutorialSidebar",previous:{title:"cancel",permalink:"/terminal/reference/forex/oanda/cancel"},next:{title:"closetrade",permalink:"/terminal/reference/forex/oanda/closetrade"}},m={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"forex /oanda/candles - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Display Candle Data"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"candles [-g GRANULARITY] [-l CANDLECOUNT] [-a] [-b] [-c] [-e] [-o] [-r] [-s] [-v]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"granularity"),(0,r.kt)("td",{parentName:"tr",align:null},"-g  --granularity"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeframe to get for the candle chart (Seconds: S5, S10, S15, S30 Minutes: M1, M2, M4, M5, M10, M15, M30 Hours: H1, H2, H3, H4, H6, H8, H12 Day (default): D, Week: W Month: M"),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"candlecount"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of candles to retrieve. Default:180"),(0,r.kt)("td",{parentName:"tr",align:null},"180"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ad"),(0,r.kt)("td",{parentName:"tr",align:null},"-a  --ad"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds ad (Accumulation/Distribution Indicator) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bbands"),(0,r.kt)("td",{parentName:"tr",align:null},"-b  --bbands"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds Bollinger Bands to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cci"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --cci"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds cci (Commodity Channel Index) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ema"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --ema"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds ema (Exponential Moving Average) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"obv"),(0,r.kt)("td",{parentName:"tr",align:null},"-o  --obv"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds obv (On Balance Volume) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rsi"),(0,r.kt)("td",{parentName:"tr",align:null},"-r  --rsi"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds rsi (Relative Strength Index) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sma"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --sma"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds sma (Simple Moving Average) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vwap"),(0,r.kt)("td",{parentName:"tr",align:null},"-v  --vwap"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds vwap (Volume Weighted Average Price) to the chart"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43617],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,p=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return t?n.createElement(p,o(o({ref:r},d),{},{components:t})):n.createElement(p,o({ref:r},d))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(86010),i=t(67294),o=t(16550),l=t(48334);function c(e){let{title:r,url:t,description:c,command:s}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&i.createElement(l.Z,{className:"ml-auto mr-4"})),c?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},35004:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const o={},l="Quantitative Analysis",c={unversionedId:"terminal/reference/forex/qa/index",id:"terminal/reference/forex/qa/index",title:"Quantitative Analysis",description:"Commands",source:"@site/content/terminal/reference/forex/qa/index.mdx",sourceDirName:"terminal/reference/forex/qa",slug:"/terminal/reference/forex/qa/",permalink:"/terminal/reference/forex/qa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/qa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/terminal/reference/forex/"},next:{title:"acf",permalink:"/terminal/reference/forex/qa/acf"}},s={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantitative-analysis"},"Quantitative Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Acf",description:"Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff forex data",url:"/terminal/reference/forex/qa/acf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Bw",description:"Box and Whisker plot",url:"/terminal/reference/forex/qa/bw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cdf",description:"Cumulative distribution function",url:"/terminal/reference/forex/qa/cdf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cusum",description:"Cumulative sum algorithm (CUSUM) to detect abrupt changes in data",url:"/terminal/reference/forex/qa/cusum",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Decompose",description:"Decompose time series as: - Additive Time Series = Level + CyclicTrend + Residual + Seasonality - Multiplicative...",url:"/terminal/reference/forex/qa/decompose",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Hist",description:"Histogram with density and rug",url:"/terminal/reference/forex/qa/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Kurtosis",description:"Kurtosis is a measure of the 'tailedness' of the probability distribution of a real-valued random variable. Like...",url:"/terminal/reference/forex/qa/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Line",description:"Show line plot of selected data or highlight specific datetimes.",url:"/terminal/reference/forex/qa/line",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Load",description:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used...",url:"/terminal/reference/forex/qa/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Normality",description:"Normality tests",url:"/terminal/reference/forex/qa/normality",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Pick",description:"Change target variable",url:"/terminal/reference/forex/qa/pick",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Qqplot",description:"Display QQ plot vs normal quantiles",url:"/terminal/reference/forex/qa/qqplot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Quantile",description:"The quantiles are values which divide the distribution such that there is a given proportion of observations...",url:"/terminal/reference/forex/qa/quantile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Raw",description:"Print raw data to console",url:"/terminal/reference/forex/qa/raw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rolling",description:"Rolling mean and std deviation",url:"/terminal/reference/forex/qa/rolling",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Skew",description:"Skewness is a measure of asymmetry or distortion of symmetric distribution. It measures the deviation of the...",url:"/terminal/reference/forex/qa/skew",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Spread",description:"Shows rolling spread measurement",url:"/terminal/reference/forex/qa/spread",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Summary",description:"Summary statistics",url:"/terminal/reference/forex/qa/summary",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Unitroot",description:"Unit root test / stationarity (ADF, KPSS)",url:"/terminal/reference/forex/qa/unitroot",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
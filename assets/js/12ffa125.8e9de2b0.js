"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=m(r),p=a,f=s["".concat(l,".").concat(p)]||s[p]||u[p]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),c=r(48334);function l(e){let{title:t,url:r,description:l,command:m}=e;const{pathname:d}=(0,i.TH)(),s=d.replace(/\/v\d+/,""),u=!s.includes("/reference")&&!s.includes("/widgets-library/");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},78999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},c="Quantitative Analysis",l={unversionedId:"terminal/reference/economy/qa/index",id:"terminal/reference/economy/qa/index",title:"Quantitative Analysis",description:"Commands",source:"@site/content/terminal/reference/economy/qa/index.mdx",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/",permalink:"/terminal/reference/economy/qa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/terminal/reference/economy/"},next:{title:"acf",permalink:"/terminal/reference/economy/qa/acf"}},m={},d=[{value:"Commands",id:"commands",level:3}],s={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantitative-analysis"},"Quantitative Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Acf",description:"Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff stock data",url:"/terminal/reference/economy/qa/acf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Bw",description:"Box and Whisker plot",url:"/terminal/reference/economy/qa/bw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cdf",description:"Cumulative distribution function",url:"/terminal/reference/economy/qa/cdf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cusum",description:"Cumulative sum algorithm (CUSUM) to detect abrupt changes in data",url:"/terminal/reference/economy/qa/cusum",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Decompose",description:"Decompose time series as: - Additive Time Series = Level + CyclicTrend + Residual + Seasonality - Multiplicative...",url:"/terminal/reference/economy/qa/decompose",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hist",description:"Histogram with density and rug",url:"/terminal/reference/economy/qa/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Kurtosis",description:"Kurtosis is a measure of the 'tailedness' of the probability distribution of a real-valued random variable. Like...",url:"/terminal/reference/economy/qa/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Line",description:"Show line plot of selected data or highlight specific datetimes.",url:"/terminal/reference/economy/qa/line",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/economy/qa/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Normality",description:"Normality tests",url:"/terminal/reference/economy/qa/normality",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Pick",description:"Load a FRED series to current selection",url:"/terminal/reference/economy/qa/pick",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Qqplot",description:"Display QQ plot vs normal quantiles",url:"/terminal/reference/economy/qa/qqplot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quantile",description:"The quantiles are values which divide the distribution such that there is a given proportion of observations...",url:"/terminal/reference/economy/qa/quantile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Raw",description:"Print raw data to console",url:"/terminal/reference/economy/qa/raw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rolling",description:"Rolling mean and std deviation",url:"/terminal/reference/economy/qa/rolling",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Skew",description:"Skewness is a measure of asymmetry or distortion of symmetric distribution. It measures the deviation of the...",url:"/terminal/reference/economy/qa/skew",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Spread",description:"Shows rolling spread measurement",url:"/terminal/reference/economy/qa/spread",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Summary",description:"Summary statistics",url:"/terminal/reference/economy/qa/summary",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Unitroot",description:"Unit root test / stationarity (ADF, KPSS)",url:"/terminal/reference/economy/qa/unitroot",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
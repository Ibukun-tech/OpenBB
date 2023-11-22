"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40960],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=d(t),p=a,u=f["".concat(i,".").concat(p)]||f[p]||l[p]||o;return t?n.createElement(u,c(c({ref:r},m),{},{components:t})):n.createElement(u,c({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[f]="string"==typeof e?e:a,c[1]=s;for(var d=2;d<o;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),a=t(86010),o=t(67294),c=t(16550),s=t(48334);function i(e){let{title:r,url:t,description:i,command:d}=e;const{pathname:m}=(0,c.TH)(),f=m.replace(/\/v\d+/,""),l=!f.includes("/reference")&&!f.includes("/widgets-library/");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":f.startsWith("/terminal")||f.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":f.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":f.startsWith("/sdk")||f.startsWith("/platform"),header_docs:!(f.startsWith("/terminal")||f.startsWith("/pro")||f.startsWith("/sdk")||f.startsWith("/platform")||f.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),l&&o.createElement(s.Z,{className:"ml-auto mr-4"})),i?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},45555:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const c={},s="forecast",i={unversionedId:"sdk/reference/forecast/index",id:"sdk/reference/forecast/index",title:"forecast",description:"Commands",source:"@site/content/sdk/reference/forecast/index.mdx",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/",permalink:"/sdk/reference/forecast/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"zlma",permalink:"/sdk/reference/ta/zlma"},next:{title:"anom",permalink:"/sdk/reference/forecast/anom"}},d={},m=[{value:"Commands",id:"commands",level:3}],f={toc:m},l="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forecast"},"forecast"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Anom",description:"Get Quantile Anomaly Detection Data",url:"/sdk/reference/forecast/anom",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Atr",description:"Calculate the Average True Range of a variable based on a a specific stock ticker.",url:"/sdk/reference/forecast/atr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Autoarima",description:"Performs Automatic ARIMA forecasting",url:"/sdk/reference/forecast/autoarima",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Autoces",description:"Performs Automatic Complex Exponential Smoothing forecasting",url:"/sdk/reference/forecast/autoces",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Autoets",description:"Performs Automatic ETS forecasting",url:"/sdk/reference/forecast/autoets",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Autoselect",description:"Performs Automatic Statistical forecasting",url:"/sdk/reference/forecast/autoselect",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Brnn",description:"Performs Block RNN forecasting",url:"/sdk/reference/forecast/brnn",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Clean",description:"Clean up NaNs from the dataset",url:"/sdk/reference/forecast/clean",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Combine",description:"Adds the given column of df2 to df1",url:"/sdk/reference/forecast/combine",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Corr",description:"Returns correlation for a given df",url:"/sdk/reference/forecast/corr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Delete",description:"Delete a column from a dataframe",url:"/sdk/reference/forecast/delete",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Delta",description:"Calculate the %change of a variable based on a specific column",url:"/sdk/reference/forecast/delta",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Desc",description:"Returns statistics for a given df",url:"/sdk/reference/forecast/desc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ema",description:"A moving average provides an indication of the trend of the price movement",url:"/sdk/reference/forecast/ema",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Expo",description:"Performs Probabilistic Exponential Smoothing forecasting",url:"/sdk/reference/forecast/expo",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Export",description:"Export a dataframe to a file",url:"/sdk/reference/forecast/export",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Linregr",description:"Perform Linear Regression Forecasting",url:"/sdk/reference/forecast/linregr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load custom file into dataframe.",url:"/sdk/reference/forecast/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Mom",description:"A momentum oscillator, which measures the percentage change between the current",url:"/sdk/reference/forecast/mom",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Mstl",description:"Performs MSTL forecasting",url:"/sdk/reference/forecast/mstl",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Nbeats",description:"Perform NBEATS Forecasting",url:"/sdk/reference/forecast/nbeats",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Nhits",description:"Performs Nhits forecasting",url:"/sdk/reference/forecast/nhits",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Plot",description:"Plot data from a dataset",url:"/sdk/reference/forecast/plot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Regr",description:"Perform Regression Forecasting",url:"/sdk/reference/forecast/regr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rename",description:"Rename a column in a dataframe",url:"/sdk/reference/forecast/rename",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rnn",description:"Perform RNN forecasting",url:"/sdk/reference/forecast/rnn",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Roc",description:"A momentum oscillator, which measures the percentage change between the current",url:"/sdk/reference/forecast/roc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rsi",description:"A momentum indicator that measures the magnitude of recent price changes to evaluate",url:"/sdk/reference/forecast/rsi",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rwd",description:"Performs Random Walk with Drift forecasting",url:"/sdk/reference/forecast/rwd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Season",description:"",url:"/sdk/reference/forecast/season",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Seasonalnaive",description:"Performs Seasonal Naive forecasting",url:"/sdk/reference/forecast/seasonalnaive",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Show",description:"Show a dataframe in a table",url:"/sdk/reference/forecast/show",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Signal",description:"A price signal based on short/long term price.",url:"/sdk/reference/forecast/signal",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sto",description:"Stochastic Oscillator %K and %D : A stochastic oscillator is a momentum indicator comparing a particular closing",url:"/sdk/reference/forecast/sto",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tcn",description:"Perform TCN forecasting",url:"/sdk/reference/forecast/tcn",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tft",description:"Performs Temporal Fusion Transformer forecasting",url:"/sdk/reference/forecast/tft",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Theta",description:"Performs Theta forecasting",url:"/sdk/reference/forecast/theta",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Trans",description:"Performs Transformer forecasting",url:"/sdk/reference/forecast/trans",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Whisper",description:"",url:"/sdk/reference/forecast/whisper",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
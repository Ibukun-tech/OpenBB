"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,k=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},15444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"ugs",description:"This page details the UGS function, which identifies stocks with excellent earnings growth rates and relatively low PE and PEG ratios, thus helping to discover undervalued stocks. Source code is also provided.",keywords:["ugs function","stock discovery","earnings growth rate","PE ratio","PEG ratio","undervalued stocks","yahoofinance model"]},i=void 0,c={unversionedId:"sdk/reference/stocks/disc/ugs",id:"sdk/reference/stocks/disc/ugs",title:"ugs",description:"This page details the UGS function, which identifies stocks with excellent earnings growth rates and relatively low PE and PEG ratios, thus helping to discover undervalued stocks. Source code is also provided.",source:"@site/content/sdk/reference/stocks/disc/ugs.md",sourceDirName:"sdk/reference/stocks/disc",slug:"/sdk/reference/stocks/disc/ugs",permalink:"/sdk/reference/stocks/disc/ugs",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/disc/ugs.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"ugs",description:"This page details the UGS function, which identifies stocks with excellent earnings growth rates and relatively low PE and PEG ratios, thus helping to discover undervalued stocks. Source code is also provided.",keywords:["ugs function","stock discovery","earnings growth rate","PE ratio","PEG ratio","undervalued stocks","yahoofinance model"]},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/sdk/reference/stocks/disc/trending"},next:{title:"ulc",permalink:"/sdk/reference/stocks/disc/ulc"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks.disc.ugs - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get stocks with earnings growth rates better than 25% and relatively low PE and PEG ratios."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/yahoofinance_model.py#L54"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.disc.ugs()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Undervalued stocks")))),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);
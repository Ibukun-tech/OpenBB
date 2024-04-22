"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(r),c=n,f=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},10421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},s=void 0,o={unversionedId:"terminal/reference/crypto/dd/mt",id:"terminal/reference/crypto/dd/mt",title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",source:"@site/content/terminal/reference/crypto/dd/mt.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/mt",permalink:"/terminal/reference/crypto/dd/mt",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/mt.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},sidebar:"tutorialSidebar",previous:{title:"mkt",permalink:"/terminal/reference/crypto/dd/mkt"},next:{title:"news",permalink:"/terminal/reference/crypto/dd/news"}},d={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto/dd/mt - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display messari timeseries ","[Source: https://messari.io]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"mt [--list] [-t TIMESERIES] [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END] [--include-paid] [-q QUERY [QUERY ...]]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show available timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"Messari timeseries id"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"mcap.realized, fees, iss.rate, reddit.active.users, nvt.adj.90d.ma, txn.tfr.val.med.ntv, daily.vol, exch.flow.in.ntv, mcap.dom, blk.cnt, txn.vol, sply.total.iss, txn.tfr.avg.ntv, txn.tsfr.val.adj, exch.flow.out.usd, nvt.adj, txn.tsfr.val.avg, txn.fee.med.ntv, fees.ntv, blk.size.byte, txn.tfr.val.ntv, txn.tfr.val.med, mcap.circ, sply.liquid, exch.flow.in.usd, sply.out, exch.flow.out.ntv.incl, exch.flow.in.ntv.incl, exch.sply.usd, exch.flow.out.usd.incl, txn.cnt, exch.flow.in.usd.incl, daily.shp, txn.tfr.val.adj.ntv, price, hashrate, exch.flow.out.ntv, real.vol, exch.sply.ntv, txn.fee.avg, txn.tfr.erc721.cnt, twitter.followers, telegram.users, reddit.subscribers, cg.sply.circ, blk.size.bytes.avg, txn.fee.avg.ntv, txn.fee.med, txn.tsfr.cnt, sply.circ, mcap.out, diff.avg, act.addr.cnt, min.rev.ntv, new.iss.ntv, min.rev.usd, new.iss.usd, sply.total.iss.ntv, txn.tfr.erc20.cnt")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency interval"),(0,n.kt)("td",{parentName:"tr",align:null},"1d"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"5m, 15m, 30m, 1h, 1d, 1w")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial date. Default: A year ago"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-11-25"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"End date. Default: Today"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-11-25"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"include_paid"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show both paid and free sources"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Query to search across all messari timeseries"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);
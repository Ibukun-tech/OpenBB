"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},9462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"altindex",description:"The altindex documentation page provides information on how to display altcoin index over time, compare altcoins performance to Bitcoin, and interpret if it's an Altcoin Season.",keywords:["altindex","altcoin index","Bitcoin","Altcoin Season","stablecoins","asset backed tokens","cryptocurrency","blockchain","crypto tools","crypto comparison"]},l=void 0,c={unversionedId:"terminal/reference/crypto/ov/altindex",id:"terminal/reference/crypto/ov/altindex",title:"altindex",description:"The altindex documentation page provides information on how to display altcoin index over time, compare altcoins performance to Bitcoin, and interpret if it's an Altcoin Season.",source:"@site/content/terminal/reference/crypto/ov/altindex.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/altindex",permalink:"/terminal/reference/crypto/ov/altindex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/altindex.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"altindex",description:"The altindex documentation page provides information on how to display altcoin index over time, compare altcoins performance to Bitcoin, and interpret if it's an Altcoin Season.",keywords:["altindex","altcoin index","Bitcoin","Altcoin Season","stablecoins","asset backed tokens","cryptocurrency","blockchain","crypto tools","crypto comparison"]},sidebar:"tutorialSidebar",previous:{title:"whales",permalink:"/terminal/reference/crypto/onchain/whales"},next:{title:"btcrb",permalink:"/terminal/reference/crypto/ov/btcrb"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto/ov/altindex - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display altcoin index overtime. If 75% of the Top 50 coins performed better than Bitcoin over periods of time (30, 90 or 365 days) it is Altcoin Season. Excluded from the Top 50 are Stablecoins (Tether, DAI\u2026) and asset backed tokens (WBTC, stETH, cLINK,\u2026) ","[Source: https://blockchaincenter.net]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"altindex [-p {30,90,365}] [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of time to check if how altcoins have performed against btc (30, 90, 365)"),(0,a.kt)("td",{parentName:"tr",align:null},"365"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"30, 90, 365")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date (default: 1 year before, e.g., 2021-01-01)"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-11-25"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default is current date"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-11-25"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154068454-43dbc146-31df-4b25-bf14-0b12284afc6d.png",alt:"altindex"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},63292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const l={title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",keywords:["ttcp","traded crypto pairs","decentralized exchange","crypto trading","trading","blockchain","1inch","Uniswap","trade parameters","tradeAmount"]},o=void 0,p={unversionedId:"terminal/reference/crypto/onchain/ttcp",id:"terminal/reference/crypto/onchain/ttcp",title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",source:"@site/content/terminal/reference/crypto/onchain/ttcp.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/ttcp",permalink:"/terminal/reference/crypto/onchain/ttcp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/ttcp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",keywords:["ttcp","traded crypto pairs","decentralized exchange","crypto trading","trading","blockchain","1inch","Uniswap","trade parameters","tradeAmount"]},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/terminal/reference/crypto/onchain/top"},next:{title:"tv",permalink:"/terminal/reference/crypto/onchain/tv"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"crypto/onchain/ttcp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display most traded crypto pairs on given decentralized exchange in chosen time period. ","[Source: https://graphql.bitquery.io/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ttcp [-l LIMIT] [-e {1inch,AfroDex,AirSwap,Amplbitcratic,Balancer,BestSwap,Bitox,CellSwap,Cellswap,Cofix,Coinchangex,Curve,DDEX,DUBIex,DecentrEx,DeversiFi,Dodo,ETHERCExchange,EtherBlockchain,EtherDelta,Ethernext,Ethfinex,FEGex,FFFSwap,Fordex,GUDecks,GUDeks,HiSwap,IDEX,LedgerDex,Matcha,Miniswap,Mooniswap,Oasis,OpenRelay,S.Finance,SakeSwap,SeedDex,SingularX,StarBitEx,SushiSwap,SwapX,SwitchDex,TacoSwap,TokenJar,TokenStore,TokenTrove,Tokenlon,TradexOne,Uniswap,ZeusSwap,dYdX,dex.blue}] [-d DAYS] [-s {base,quoted,trades,tradeAmount}] [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"display N number records"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"Decentralized exchange name."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"1inch, AfroDex, AirSwap, Amplbitcratic, Balancer, BestSwap, Bitox, CellSwap, Cellswap, Cofix, Coinchangex, Curve, DDEX, DUBIex, DecentrEx, DeversiFi, Dodo, ETHERCExchange, EtherBlockchain, EtherDelta, Ethernext, Ethfinex, FEGex, FFFSwap, Fordex, GUDecks, GUDeks, HiSwap, IDEX, LedgerDex, Matcha, Miniswap, Mooniswap, Oasis, OpenRelay, S.Finance, SakeSwap, SeedDex, SingularX, StarBitEx, SushiSwap, SwapX, SwitchDex, TacoSwap, TokenJar, TokenStore, TokenTrove, Tokenlon, TradexOne, Uniswap, ZeusSwap, dYdX, dex.blue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of days to display data for."),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column."),(0,a.kt)("td",{parentName:"tr",align:null},"tradeAmount"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"base, quoted, trades, tradeAmount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),o=r(35742);function i(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},41218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),i=r(88828);const a={title:"ermove",description:"The documentation page provides a detailed explanation of the ermove command that allows users to fetch the implied stock move based on current option prices. It also guides on using the stock ticker to retrieve this information.",keywords:["ermove command","retrieve implied move","stock","option prices","stock movement measure","option's expiration","stock ticker","stock market"]},l=void 0,c={unversionedId:"bot/reference/discord/duedilligence/ermove",id:"bot/reference/discord/duedilligence/ermove",title:"ermove",description:"The documentation page provides a detailed explanation of the ermove command that allows users to fetch the implied stock move based on current option prices. It also guides on using the stock ticker to retrieve this information.",source:"@site/content/bot/reference/discord/duedilligence/ermove.md",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/ermove",permalink:"/bot/reference/discord/duedilligence/ermove",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/ermove.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"ermove",description:"The documentation page provides a detailed explanation of the ermove command that allows users to fetch the implied stock move based on current option prices. It also guides on using the stock ticker to retrieve this information.",keywords:["ermove command","retrieve implied move","stock","option prices","stock movement measure","option's expiration","stock ticker","stock market"]},sidebar:"tutorialSidebar",previous:{title:"earnings",permalink:"/bot/reference/discord/duedilligence/earnings"},next:{title:"est",permalink:"/bot/reference/discord/duedilligence/est"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"duedilligence: ermove - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the implied move for a stock based on the current option prices. The implied move is a measure of how far the stock is expected to move during the option's expiration."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dd ermove ticker\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/dd ermove ticker:AMD\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);
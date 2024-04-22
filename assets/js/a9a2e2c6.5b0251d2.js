"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(35742);function n(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},34402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const l={title:"tvl",description:"On this page, users can learn how to retrieve historical TVL (Total Value Locked) data for any given protocol, providing a snapshot of capital currently locked in the protocol for comparison and tracking of growth over time.",keywords:["TVL","historical data","total value locked","protocol","capital","comparison","tracking growth","tvl command"]},c=void 0,i={unversionedId:"bot/reference/telegram/crypto/tvl",id:"bot/reference/telegram/crypto/tvl",title:"tvl",description:"On this page, users can learn how to retrieve historical TVL (Total Value Locked) data for any given protocol, providing a snapshot of capital currently locked in the protocol for comparison and tracking of growth over time.",source:"@site/content/bot/reference/telegram/crypto/tvl.md",sourceDirName:"bot/reference/telegram/crypto",slug:"/bot/reference/telegram/crypto/tvl",permalink:"/bot/reference/telegram/crypto/tvl",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/crypto/tvl.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"tvl",description:"On this page, users can learn how to retrieve historical TVL (Total Value Locked) data for any given protocol, providing a snapshot of capital currently locked in the protocol for comparison and tracking of growth over time.",keywords:["TVL","historical data","total value locked","protocol","capital","comparison","tracking growth","tvl command"]},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/bot/reference/telegram/crypto/top"},next:{title:"darkpool",permalink:"/bot/reference/telegram/darkpool/"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"crypto: tvl - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows users to retrieve historical TVL (Total Value Locked) data for any given protocol. It provides a snapshot of the total amount of capital that is currently locked in the protocol, allowing users to easily compare the metrics between different protocols and track their growth over time."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/tvl [protocols]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"protocols"),(0,o.kt)("td",{parentName:"tr",align:null},"comma separated list of protocols (e.g., curve,makerdao)"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/tvl\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/tvl curve\n")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);
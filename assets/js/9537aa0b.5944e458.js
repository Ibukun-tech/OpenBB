"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(35742);function a(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},58339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),a=n(88828);const i={title:"topoichange",description:"The topoichange command allows the user to view the top 15 stocks with the highest OI Change. It displays the stock name, the OI Change by put and call, and previous levels to provide an overview of the most significant changes in the stock market.",keywords:["topoichange command","stock market","highest OI Change","OI Change by put and call","stock name","open interest"]},s=void 0,l={unversionedId:"bot/reference/telegram/options/topoichange",id:"bot/reference/telegram/options/topoichange",title:"topoichange",description:"The topoichange command allows the user to view the top 15 stocks with the highest OI Change. It displays the stock name, the OI Change by put and call, and previous levels to provide an overview of the most significant changes in the stock market.",source:"@site/content/bot/reference/telegram/options/topoichange.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/topoichange",permalink:"/bot/reference/telegram/options/topoichange",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/topoichange.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701304467,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"topoichange",description:"The topoichange command allows the user to view the top 15 stocks with the highest OI Change. It displays the stock name, the OI Change by put and call, and previous levels to provide an overview of the most significant changes in the stock market.",keywords:["topoichange command","stock market","highest OI Change","OI Change by put and call","stock name","open interest"]},sidebar:"tutorialSidebar",previous:{title:"topoi",permalink:"/bot/reference/telegram/options/topoi"},next:{title:"topstrikevol",permalink:"/bot/reference/telegram/options/topstrikevol"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],h={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{title:"options: topoichange - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"This command allows the user to view the top 15 stocks with the highest OI Change. It will display the stock name, the OI Change by put and call, and previous levels. This gives users a helpful overview of the stocks that have seen the most significant change in open interest."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/topoichange\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This command has no parameters"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/topoichange\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);
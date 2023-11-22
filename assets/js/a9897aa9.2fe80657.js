"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43827],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=l(t),p=a,u=s["".concat(c,".").concat(p)]||s[p]||f[p]||o;return t?n.createElement(u,i(i({ref:r},m),{},{components:t})):n.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d[s]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),d=t(48334);function c(e){let{title:r,url:t,description:c,command:l}=e;const{pathname:m}=(0,i.TH)(),s=m.replace(/\/v\d+/,""),f=!s.includes("/reference")&&!s.includes("/widgets-library/");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&o.createElement(d.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},3001:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},d="Oanda",c={unversionedId:"terminal/reference/forex/oanda/index",id:"terminal/reference/forex/oanda/index",title:"Oanda",description:"Commands",source:"@site/content/terminal/reference/forex/oanda/index.mdx",sourceDirName:"terminal/reference/forex/oanda",slug:"/terminal/reference/forex/oanda/",permalink:"/terminal/reference/forex/oanda/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/oanda/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unitroot",permalink:"/terminal/reference/forex/qa/unitroot"},next:{title:"calendar",permalink:"/terminal/reference/forex/oanda/calendar"}},l={},m=[{value:"Commands",id:"commands",level:3}],s={toc:m},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oanda"},"Oanda"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Calendar",description:"Show Calendar Data",url:"/terminal/reference/forex/oanda/calendar",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cancel",description:"Cancel a Pending Order.",url:"/terminal/reference/forex/oanda/cancel",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Candles",description:"Display Candle Data",url:"/terminal/reference/forex/oanda/candles",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Closetrade",description:"Close a trade by id.",url:"/terminal/reference/forex/oanda/closetrade",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"From",description:"Select the 'from' currency symbol in a forex pair",url:"/terminal/reference/forex/oanda/from",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"List",description:"List order history",url:"/terminal/reference/forex/oanda/list",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Order",description:"Create order",url:"/terminal/reference/forex/oanda/order",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Orderbook",description:"Plot an orderbook for an instrument if Oanda provides one.",url:"/terminal/reference/forex/oanda/orderbook",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Pending",description:"Get information about pending orders.",url:"/terminal/reference/forex/oanda/pending",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Positionbook",description:"Plot a position book for an instrument if Oanda provides one.",url:"/terminal/reference/forex/oanda/positionbook",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Positions",description:"Get information about open positions.",url:"/terminal/reference/forex/oanda/positions",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Price",description:"Get price for selected instrument.",url:"/terminal/reference/forex/oanda/price",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Summary",description:"Print some information about your account.",url:"/terminal/reference/forex/oanda/summary",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"To",description:"Select the 'to' currency symbol in a forex pair",url:"/terminal/reference/forex/oanda/to",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Trades",description:"Get information about open trades.",url:"/terminal/reference/forex/oanda/trades",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
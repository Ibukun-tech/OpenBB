"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43648],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,d(d({ref:t},s),{},{components:a})):r.createElement(f,d({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,d=new Array(i);d[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,d[1]=o;for(var c=2;c<i;c++)d[c]=a[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},26515:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(39960),n=a(86010),i=a(67294),d=a(16550),o=a(48334);function l(e){let{title:t,url:a,description:l,command:c}=e;const{pathname:s}=(0,d.TH)(),p=s.replace(/\/v\d+/,""),u=!p.includes("/reference")&&!p.includes("/widgets-library/");return i.createElement(r.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:a},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&i.createElement(o.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},26298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(26515),d=a(88828);const o={title:"Data Available"},l=void 0,c={unversionedId:"sdk/data-available/index",id:"sdk/data-available/index",title:"Data Available",description:"<NewReferenceCard",source:"@site/content/sdk/data-available/index.mdx",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/",permalink:"/sdk/data-available/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/index.mdx",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"Data Available"},sidebar:"tutorialSidebar",previous:{title:"Setting API Keys",permalink:"/sdk/usage/api-keys"},next:{title:"Stocks",permalink:"/sdk/data-available/stocks/"}},s={},p=[],u={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d.Z,{title:"Data Available | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Stocks",description:"Understand what Stocks data you can find in the OpenBB SDK",url:"data-available/stocks",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Crypto",description:"Understand what Crypto data you can find in the OpenBB SDK",url:"data-available/crypto",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Portfolio",description:"Understand what Portfolio data you can find in the OpenBB SDK",url:"data-available/portfolio",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Alternative",description:"Understand what Alternative data you can find in the OpenBB SDK",url:"data-available/alternative",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Econometrics",description:"Understand what Econometrics data you can find in the OpenBB SDK",url:"data-available/econometrics",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Economy",description:"Understand what Economy data you can find in the OpenBB SDK",url:"data-available/economy",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"ETF",description:"Understand what ETF data you can find in the OpenBB SDK",url:"data-available/etf",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Fixed Income",description:"Understand what Fixed Income data you can find in the OpenBB SDK",url:"data-available/fixedincome",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Forecast",description:"Understand what Forecast data you can find in the OpenBB SDK",url:"data-available/forecast",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Forex",description:"Understand what Forex data you can find in the OpenBB SDK",url:"data-available/forex",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Futures",description:"Understand what Futures data you can find in the OpenBB SDK",url:"data-available/futures",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Quantitative Analysis",description:"Understand what Quantitative Analysis data you can find in the OpenBB SDK",url:"data-available/quantitative-analysis",mdxType:"NewReferenceCard"}),(0,n.kt)(i.Z,{title:"Technical Analysis",description:"Understand what Technical Analysis data you can find in the OpenBB SDK",url:"data-available/ta",mdxType:"NewReferenceCard"})))}f.isMDXComponent=!0}}]);
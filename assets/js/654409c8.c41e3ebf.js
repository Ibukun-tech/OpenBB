"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),i=r(86010),a=r(67294),o=r(16550),s=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:d}=(0,o.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&a.createElement(s.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},10151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905)),a=r(26515);const o={},s="Equity",l={unversionedId:"pro/widgets-library/equity/index",id:"pro/widgets-library/equity/index",title:"Equity",description:"<NewReferenceCard",source:"@site/content/pro/widgets-library/equity/index.mdx",sourceDirName:"pro/widgets-library/equity",slug:"/pro/widgets-library/equity/",permalink:"/pro/widgets-library/equity/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets-library/equity/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economic Calendar",permalink:"/pro/widgets-library/economy/economic_calendar"},next:{title:"Analyst Estimates",permalink:"/pro/widgets-library/equity/analyst-estimates/"}},c={},d=[],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"equity"},"Equity"),(0,i.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,i.kt)(a.Z,{title:"Ticker Information",description:"Ticker Information",url:"/pro/widgets-library/equity/equity_select",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Company profile",description:"Show company profile for a certain ticker",url:"/pro/widgets-library/equity/company_profile",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Management Team",description:"Management Team for a certain ticker",url:"/pro/widgets-library/equity/management_team",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Price",description:"Price performance",url:"/pro/widgets-library/equity/price",mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Ownership",description:"Share Statistics, Insider Trading, Stock Ownership, Institutional Ownership",url:"/pro/widgets-library/equity/ownership",mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Fundamental Analysis",description:"Financial Ratios, Key Metrics, Revenue Per Geography, Revenue Per Business Line, Valuation Multiples, Company Filings, Earnings History, Earnings Transcripts, Stock Splits, Dividend Payment, Financial Statements",url:"/pro/widgets-library/equity/fundamental-analysis",mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Analyst Estimates",description:"Price Target, Price Target By Analyst, Analyst Estimates, Analyst Consensus",url:"/pro/widgets-library/equity/analyst-estimates",mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Comparison Analysis",description:"Comparison Analysis",url:"/pro/widgets-library/equity/comparison-analysis",mdxType:"NewReferenceCard"})))}u.isMDXComponent=!0}}]);
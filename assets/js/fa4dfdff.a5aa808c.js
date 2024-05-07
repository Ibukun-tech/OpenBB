"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},79270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",keywords:["quote","company information","market cap","open price","close price","price-to-equity ratio","Financial Modeling Prep","Shares outstanding","Day high","Day low","Earnings announcement","Eps","Exchange","Name","Open","Pe","Previous close","Price","Price avg200","Price avg50","Symbol","Timestamp","Volume","Year high","Year low"]},c=void 0,l={unversionedId:"terminal/reference/stocks/fa/quote",id:"terminal/reference/stocks/fa/quote",title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",source:"@site/content/terminal/reference/stocks/fa/quote.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/quote",permalink:"/terminal/reference/stocks/fa/quote",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/quote.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1715079455,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"quote",description:"This page provides a detailed explanation on the 'quote' function, a tool that delivers comprehensive financial data of a company including volume, price-to-equity ratio, market cap, and more. Source of this information typically comes from Financial Modeling Prep.",keywords:["quote","company information","market cap","open price","close price","price-to-equity ratio","Financial Modeling Prep","Shares outstanding","Day high","Day low","Earnings announcement","Eps","Exchange","Name","Open","Pe","Previous close","Price","Price avg200","Price avg50","Symbol","Timestamp","Volume","Year high","Year low"]},sidebar:"tutorialSidebar",previous:{title:"profile",permalink:"/terminal/reference/stocks/fa/profile"},next:{title:"ratios",permalink:"/terminal/reference/stocks/fa/ratios"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks/fa/quote - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints actual information about the company which is, among other things, the day high, market cap, open and close price and price-to-equity ratio. The following fields are expected: Avg volume, Change, Changes percentage, Day high, Day low, Earnings announcement, Eps, Exchange, Market cap, Name, Open, Pe, Previous close, Price, Price avg200, Price avg50, Shares outstanding, Symbol, Timestamp, Volume, Year high, and Year low. ","[Source: Financial Modeling Prep]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"quote\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);
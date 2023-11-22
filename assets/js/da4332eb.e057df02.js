"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97364],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var o=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,u=s["".concat(c,".").concat(f)]||s[f]||m[f]||n;return t?o.createElement(u,a(a({ref:r},d),{},{components:t})):o.createElement(u,a({ref:r},d))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,a=new Array(n);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var o=t(39960),i=t(86010),n=t(67294),a=t(16550),l=t(48334);function c(e){let{title:r,url:t,description:c,command:p}=e;const{pathname:d}=(0,a.TH)(),s=d.replace(/\/v\d+/,""),m=!s.includes("/reference")&&!s.includes("/widgets-library/");return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),n.createElement("div",{className:"flex items-center"},n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&n.createElement(l.Z,{className:"ml-auto mr-4"})),c?n.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},28593:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(87462),i=(t(67294),t(3905)),n=t(26515);const a={},l="Portfolio Optimization",c={unversionedId:"terminal/reference/portfolio/po/index",id:"terminal/reference/portfolio/po/index",title:"Portfolio Optimization",description:"Menus",source:"@site/content/terminal/reference/portfolio/po/index.mdx",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/",permalink:"/terminal/reference/portfolio/po/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"holdings",permalink:"/terminal/reference/portfolio/brokers/robinhood/holdings"},next:{title:"Parameters",permalink:"/terminal/reference/portfolio/po/parameters/"}},p={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],s={toc:d},m="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(m,(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"portfolio-optimization"},"Portfolio Optimization"),(0,i.kt)("h3",{id:"menus"},"Menus"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"Parameters",description:"save, set, load, arg",url:"/terminal/reference/portfolio/po/parameters",mdxType:"ReferenceCard"})),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"Blacklitterman",description:"Optimize portfolio using Black Litterman estimates",url:"/terminal/reference/portfolio/po/blacklitterman",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Ef",description:"This function plots random portfolios based on their risk and returns and shows the efficient frontier.",url:"/terminal/reference/portfolio/po/ef",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Equal",description:"Returns an equally weighted portfolio",url:"/terminal/reference/portfolio/po/equal",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"File",description:"Select parameter file to use. The OpenBB Parameters Template can be found inside the Portfolio Optimization...",url:"/terminal/reference/portfolio/po/file",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Herc",description:"Builds a hierarchical equal risk contribution portfolio",url:"/terminal/reference/portfolio/po/herc",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Hrp",description:"Builds a hierarchical risk parity portfolio",url:"/terminal/reference/portfolio/po/hrp",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Load",description:"Load file of stocks tickers with optional categories",url:"/terminal/reference/portfolio/po/load",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Maxdecorr",description:"Maximizes the portfolio's decorrelation",url:"/terminal/reference/portfolio/po/maxdecorr",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Maxdiv",description:"Maximizes the portfolio's diversification ratio",url:"/terminal/reference/portfolio/po/maxdiv",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Maxret",description:"Maximizes the portfolio's return",url:"/terminal/reference/portfolio/po/maxret",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Maxsharpe",description:"Maximizes the portfolio's return/risk ratio",url:"/terminal/reference/portfolio/po/maxsharpe",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Maxutil",description:"Maximizes a risk averse utility function",url:"/terminal/reference/portfolio/po/maxutil",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Minrisk",description:"Minimizes portfolio's risk",url:"/terminal/reference/portfolio/po/minrisk",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Mktcap",description:"Returns a portfolio that is weighted based on Market Cap.",url:"/terminal/reference/portfolio/po/mktcap",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Nco",description:"Builds a nested clustered optimization portfolio",url:"/terminal/reference/portfolio/po/nco",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Plot",description:"Plot selected charts for portfolios",url:"/terminal/reference/portfolio/po/plot",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Relriskparity",description:"Build a relaxed risk parity portfolio based on least squares approach",url:"/terminal/reference/portfolio/po/relriskparity",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Riskparity",description:"Build a risk parity portfolio based on risk budgeting approach",url:"/terminal/reference/portfolio/po/riskparity",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Rpf",description:"Remove one of the portfolios",url:"/terminal/reference/portfolio/po/rpf",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"Show",description:"Show selected saved portfolios",url:"/terminal/reference/portfolio/po/show",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);
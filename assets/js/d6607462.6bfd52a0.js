"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79414],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,f=l["".concat(i,".").concat(u)]||l[u]||p[u]||c;return t?n.createElement(f,d(d({ref:r},m),{},{components:t})):n.createElement(f,d({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,d=new Array(c);d[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[l]="string"==typeof e?e:o,d[1]=a;for(var s=2;s<c;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),o=t(86010),c=t(67294),d=t(16550),a=t(48334);function i(e){let{title:r,url:t,description:i,command:s}=e;const{pathname:m}=(0,d.TH)(),l=m.replace(/\/v\d+/,""),p=!l.includes("/reference")&&!l.includes("/widgets-library/");return c.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:t},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&c.createElement(a.Z,{className:"ml-auto mr-4"})),i?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},23030:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),c=t(26515);const d={},a="economy",i={unversionedId:"sdk/reference/economy/index",id:"sdk/reference/economy/index",title:"economy",description:"Commands",source:"@site/content/sdk/reference/economy/index.mdx",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/",permalink:"/sdk/reference/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"price",permalink:"/sdk/reference/crypto/price"},next:{title:"available_indices",permalink:"/sdk/reference/economy/available_indices"}},s={},m=[{value:"Commands",id:"commands",level:3}],l={toc:m},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy"},"economy"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(c.Z,{title:"Available Indices",description:"Get available indices",url:"/sdk/reference/economy/available_indices",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Balance",description:"General government deficit is defined as the balance of income and expenditure of government,",url:"/sdk/reference/economy/balance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Bigmac",description:"Display Big Mac Index for given countries",url:"/sdk/reference/economy/bigmac",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Ccpi",description:"Inflation measured by consumer price index (CPI) is defined as the change in the prices",url:"/sdk/reference/economy/ccpi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Country Codes",description:"Get available country codes for Bigmac index",url:"/sdk/reference/economy/country_codes",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Cpi",description:"Obtain CPI data from FRED. [Source: FRED]",url:"/sdk/reference/economy/cpi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Currencies",description:"Scrape data for global currencies",url:"/sdk/reference/economy/currencies",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Debt",description:"General government debt-to-GDP ratio measures the gross debt of the general",url:"/sdk/reference/economy/debt",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Events",description:"Get economic calendar for countries between specified dates",url:"/sdk/reference/economy/events",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Fgdp",description:"Real gross domestic product (GDP) is GDP given in constant prices and",url:"/sdk/reference/economy/fgdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Fred",description:"Get Series data. [Source: FRED]",url:"/sdk/reference/economy/fred",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Fred Notes",description:"Get series notes. [Source: FRED]",url:"/sdk/reference/economy/fred_notes",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Future",description:"Get futures data. [Source: Finviz]",url:"/sdk/reference/economy/future",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Futures",description:"Get futures data.",url:"/sdk/reference/economy/futures",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Gdp",description:"Gross domestic product (GDP) is the standard measure of the value added created",url:"/sdk/reference/economy/gdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Get Groups",description:"Get group available",url:"/sdk/reference/economy/get_groups",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Glbonds",description:"Scrape data for global bonds",url:"/sdk/reference/economy/glbonds",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Index Cmd",description:"Get data on selected indices over time [Source: Yahoo Finance]",url:"/sdk/reference/economy/index_cmd",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Indices",description:"Get the top US indices",url:"/sdk/reference/economy/indices",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Macro",description:"This functions groups the data queried from the EconDB database [Source: EconDB]",url:"/sdk/reference/economy/macro",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Macro Countries",description:"This function returns the available countries and respective currencies.",url:"/sdk/reference/economy/macro_countries",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Macro Parameters",description:"This function returns the available macro parameters with detail.",url:"/sdk/reference/economy/macro_parameters",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Overview",description:"Scrape data for market overview",url:"/sdk/reference/economy/overview",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Perfmap",description:"Opens Finviz map website in a browser. [Source: Finviz]",url:"/sdk/reference/economy/perfmap",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Performance",description:"Get group (sectors, industry or country) performance data. [Source: Finviz]",url:"/sdk/reference/economy/performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Revenue",description:"Governments collect revenues mainly for two purposes: to finance the goods",url:"/sdk/reference/economy/revenue",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Rgdp",description:"Gross domestic product (GDP) is the standard measure of the value added",url:"/sdk/reference/economy/rgdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Search Index",description:"Search indices by keyword. [Source: FinanceDatabase]",url:"/sdk/reference/economy/search_index",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Spending",description:"General government spending provides an indication of the size",url:"/sdk/reference/economy/spending",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Treasury",description:"Get treasury rates from Federal Reserve",url:"/sdk/reference/economy/treasury",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Trust",description:"Trust in government refers to the share of people who report having confidence in",url:"/sdk/reference/economy/trust",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Usbonds",description:"Scrape data for us bonds",url:"/sdk/reference/economy/usbonds",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Usdli",description:"The USD Liquidity Index is defined as: [WALCL - WLRRAL - WDTGAL]. It is expressed in billions of USD.",url:"/sdk/reference/economy/usdli",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"Valuation",description:"Get group (sectors, industry or country) valuation data. [Source: Finviz]",url:"/sdk/reference/economy/valuation",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
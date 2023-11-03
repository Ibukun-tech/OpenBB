"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32954],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),m=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=m(e.components);return n.createElement(d.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=m(t),p=o,f=l["".concat(d,".").concat(p)]||l[p]||u[p]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(67294),a=t(86010),i=t(16550);function c(e){let{title:r,url:t,description:c,command:d}=e;const{pathname:m}=(0,i.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:m.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":m.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":m.startsWith("/bot"),header_docs:!m.startsWith("/terminal")&&!m.startsWith("/sdk")&&!m.startsWith("/bot")}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},19466:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(87462),o=(t(67294),t(3905)),a=t(62872);const i={},c="Economy",d={unversionedId:"terminal/reference/economy/index",id:"terminal/reference/economy/index",title:"Economy",description:"<ReferenceCard",source:"@site/content/terminal/reference/economy/index.mdx",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/",permalink:"/terminal/reference/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/terminal/reference/econometrics/type"},next:{title:"askobb",permalink:"/terminal/reference/economy/askobb"}},m={},s=[],l={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy"},"Economy"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"qa",description:"normality, kurtosis, summary, line, qqplot, cusum, spread, skew, decompose, hist, acf, bw, cdf, pick, raw, hold,...",url:"/terminal/reference/economy/qa",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"askobb",description:"Accept input as a string and return the most appropriate Terminal command",url:"/terminal/reference/economy/askobb",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"balance",description:"General government balance is defined as the balance of income and expenditure of government, including capital...",url:"/terminal/reference/economy/balance",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"bigmac",description:"Get historical Big Mac Index [Nasdaq Data Link]",url:"/terminal/reference/economy/bigmac",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"ccpi",description:"Inflation is measured in terms of the annual growth rate and in index, 2015 base year with a breakdown for food,...",url:"/terminal/reference/economy/ccpi",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"cpi",description:"Plot (harmonized) consumer price indices for a variety of countries and regions.",url:"/terminal/reference/economy/cpi",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"debt",description:"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP. It...",url:"/terminal/reference/economy/debt",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"edebt",description:"National debt statistics for various countries. [Source: Wikipedia]",url:"/terminal/reference/economy/edebt",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"eval",description:"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval()...",url:"/terminal/reference/economy/eval",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"events",description:"Economic calendar. If no start or end dates,default is the current day high importance events.",url:"/terminal/reference/economy/events",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fgdp",description:"Forecast is based on an assessment of the economic climate in individual countries and the world economy, using a...",url:"/terminal/reference/economy/fgdp",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fred",description:"Query the FRED database and plot data based on the Series ID. [Source: FRED]",url:"/terminal/reference/economy/fred",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"futures",description:"Futures/Commodities from Wall St. Journal and FinViz.",url:"/terminal/reference/economy/futures",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"gdp",description:"This indicator is based on nominal GDP (also called GDP at current prices or GDP in value) and is available in...",url:"/terminal/reference/economy/gdp",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"hold",description:"Turn on figure holding. This will stop showing images until hold off is run.",url:"/terminal/reference/economy/hold",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"index_cmd",description:"Obtain any set of indices and plot them together. With the -si argument the major indices are shown. By using the...",url:"/terminal/reference/economy/index_cmd",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"macro",description:"Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP &...",url:"/terminal/reference/economy/macro",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"map",description:"Performance index stocks map categorized by sectors and industries. Size represents market cap. Opens web-...",url:"/terminal/reference/economy/map",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"overview",description:"Provide a market overview of a variety of options. This can be a general overview, indices, bonds and currencies....",url:"/terminal/reference/economy/overview",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"performance",description:"View group (sectors, industry or country) performance data. [Source: Finviz]",url:"/terminal/reference/economy/performance",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"plot",description:"This command can plot any data on two y-axes obtained from the macro, fred, index and treasury commands. To be...",url:"/terminal/reference/economy/plot",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"revenue",description:"Governments collect revenues mainly for two purposes: to finance the goods and services they provide to citizens...",url:"/terminal/reference/economy/revenue",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"rgdp",description:"This indicator is based on real GDP (also called GDP at constant prices or GDP in volume), i.e. the developments...",url:"/terminal/reference/economy/rgdp",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"spending",description:"General government spending provides an indication of the size of government across countries. The large...",url:"/terminal/reference/economy/spending",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"treasury",description:"Obtain US treasury rates. Note: 3-month and 10-year treasury yields for other countries are available via the...",url:"/terminal/reference/economy/treasury",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"trust",description:"Trust in government refers to the share of people who report having confidence in the national government.",url:"/terminal/reference/economy/trust",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"usdli",description:"The USD Liquidity Index is defined as: [WALCL - WLRRAL - WDTGAL]. It is expressed in billions of USD.",url:"/terminal/reference/economy/usdli",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"valuation",description:"View group (sectors, industry or country) valuation data. [Source: Finviz]",url:"/terminal/reference/economy/valuation",command:"true",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
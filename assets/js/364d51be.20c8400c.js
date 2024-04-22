"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),f=n,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(35742);function o(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},60749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const s={title:"Data and Sources",sidebar_position:4,description:"OpenBB is a data aggregator that provides access to data from various sources. It is important to understand how to load ticker symbols, end-of-day daily data, and handle certain limitations like accessing the Binance API. Feature request options are available for specific data source endpoints.",keywords:["data aggregators","data providers","ticker symbols","end-of-day daily data","Binance API","feature request","live feeds","load function"]},i=void 0,l={unversionedId:"sdk/faqs/data_sources",id:"sdk/faqs/data_sources",title:"Data and Sources",description:"OpenBB is a data aggregator that provides access to data from various sources. It is important to understand how to load ticker symbols, end-of-day daily data, and handle certain limitations like accessing the Binance API. Feature request options are available for specific data source endpoints.",source:"@site/content/sdk/faqs/data_sources.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/data_sources",permalink:"/sdk/faqs/data_sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/data_sources.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",sidebarPosition:4,frontMatter:{title:"Data and Sources",sidebar_position:4,description:"OpenBB is a data aggregator that provides access to data from various sources. It is important to understand how to load ticker symbols, end-of-day daily data, and handle certain limitations like accessing the Binance API. Feature request options are available for specific data source endpoints.",keywords:["data aggregators","data providers","ticker symbols","end-of-day daily data","Binance API","feature request","live feeds","load function"]},sidebar:"tutorialSidebar",previous:{title:"General Operation",permalink:"/sdk/faqs/general_operation"},next:{title:"Bugs, Support, and Feedback",permalink:"/sdk/faqs/bugs_support_feedback"}},d={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Data and Sources - Faqs | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Please note that OpenBB does not provide any data, it is an aggregator which provides users access to data from a variety of sources. OpenBB does not maintain or have any control over the raw data supplied. If there is a specific problem with the output from a data provider, please consider contacting them first."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Is there a list of all data providers?"),(0,n.kt)("p",null,"The complete list is found ",(0,n.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"here"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I load a ticker symbol from India?"),(0,n.kt)("p",null,"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'df = openbb.stocks.load("ricoauto.ns")\n')),(0,n.kt)("p",null,"The precise naming convention will differ by source, reference each source's own documentation for specific details.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Data from today is missing."),(0,n.kt)("p",null,"By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,n.kt)("inlineCode",{parentName:"p"},"interval")," argument is present."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"df = openbb.stocks.load(SPY, interval = 60)\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can I stream live prices and news feeds?"),(0,n.kt)("p",null,"It is not currently possible to stream live feeds with the OpenBB SDK.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,'"Pair BTC/USDT not found in binance"'),(0,n.kt)("p",null,"US-based users are currently unable to access the Binance API. Please try loading the pair from a different source, for example:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"load btc --source CCXT --exchange kraken"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How can I request adding endpoints from a specific data source?"),(0,n.kt)("p",null,"Please ",(0,n.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"request a feature")," by submitting a new request.")))}f.isMDXComponent=!0}}]);
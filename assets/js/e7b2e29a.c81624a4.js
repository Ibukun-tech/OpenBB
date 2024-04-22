"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(39960),o=r(86010),n=r(67294),i=r(16550);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:s}=(0,i.TH)(),d=s.replace(/\/v\d+/,"");return n.createElement(a.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),l?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},l):null)}},86322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(87462),o=(r(67294),r(3905)),n=r(62872);const i={},l="overview",c={unversionedId:"bot/reference/telegram/overview/index",id:"bot/reference/telegram/overview/index",title:"overview",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/overview/index.mdx",sourceDirName:"bot/reference/telegram/overview",slug:"/bot/reference/telegram/overview/",permalink:"/bot/reference/telegram/overview/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/overview/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1713783034,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vsurf",permalink:"/bot/reference/telegram/options/vsurf"},next:{title:"heatchart",permalink:"/bot/reference/telegram/overview/heatchart"}},s={},d=[],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"overview"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(n.Z,{title:"heatchart",description:"This command allows the user to retrieve a Daily Market Heat Chart (15 minute delayed). The heat chart shows a...",url:"/bot/reference/telegram/overview/heatchart",mdxType:"ReferenceCard"}),(0,o.kt)(n.Z,{title:"heatmap",description:"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the...",url:"/bot/reference/telegram/overview/heatmap",mdxType:"ReferenceCard"}),(0,o.kt)(n.Z,{title:"markets",description:"This command allows the user to retrieve a markets overview which provides a quick summary of current market...",url:"/bot/reference/telegram/overview/markets",mdxType:"ReferenceCard"}),(0,o.kt)(n.Z,{title:"watchlist",description:"This command allows the user to retrieve an overview of their watchlist, which includes the current price,...",url:"/bot/reference/telegram/overview/watchlist",mdxType:"ReferenceCard"}),(0,o.kt)(n.Z,{title:"watchlist_add",description:"This command allows the user to add a stock or stocks to their watchlist.",url:"/bot/reference/telegram/overview/watchlist_add",mdxType:"ReferenceCard"}),(0,o.kt)(n.Z,{title:"watchlist_remove",description:"This command allows the user to remove a stock from their watchlist.",url:"/bot/reference/telegram/overview/watchlist_remove",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
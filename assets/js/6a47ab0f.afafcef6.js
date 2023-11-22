"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),o=r(67294),l=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:d}=e;const{pathname:s}=(0,l.TH)(),m=s.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(i.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},25792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(26515),l=r(88828);const i={title:"Changelog"},c=void 0,d={unversionedId:"terminal/changelog/index",id:"terminal/changelog/index",title:"Changelog",description:"<NewReferenceCard",source:"@site/content/terminal/changelog/index.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/",permalink:"/terminal/changelog/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/index.mdx",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"Changelog"},sidebar:"tutorialSidebar",previous:{title:"hold",permalink:"/terminal/reference/hold"},next:{title:"Current - v3.2.4",permalink:"/terminal/changelog/version3_2_4"}},s={},m=[],p={toc:m},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"Changelog | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Current - v3.2.4",url:"changelog/version3_2_4",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.2.3",url:"changelog/version3_2_3",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.2.2",url:"changelog/version3_2_2",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.2.1",url:"changelog/version3_2_1",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.2.0",url:"changelog/version3_2_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.1.0",url:"changelog/version3_1_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.0.1",url:"changelog/version3_0_1",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v3.0.0",url:"changelog/version3_0_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.5.1",url:"changelog/version2_5_1",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.5.0",url:"changelog/version2_5_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.4.1",url:"changelog/version2_4_1",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.4.0",url:"changelog/version2_4_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.3.1",url:"changelog/version2_3_1",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.3.0",url:"changelog/version2_3_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.2.0",url:"changelog/version2_2_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.1.0",url:"changelog/version2_1_0",mdxType:"NewReferenceCard"}),(0,a.kt)(o.Z,{title:"v2.0.0",url:"changelog/version2_0_0",mdxType:"NewReferenceCard"})))}g.isMDXComponent=!0}}]);
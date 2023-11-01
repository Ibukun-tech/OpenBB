"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,u=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(u,i(i({ref:t},f),{},{components:r})):n.createElement(u,i({ref:t},f))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),o=r(67294),a=r(86010),i=r(16550);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:s}=(0,i.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),l?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},l):null)}},79563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},l="nft",c={unversionedId:"bot/reference/telegram/nft/index",id:"bot/reference/telegram/nft/index",title:"nft",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/nft/index.mdx",sourceDirName:"bot/reference/telegram/nft",slug:"/bot/reference/telegram/nft/",permalink:"/bot/reference/telegram/nft/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/nft/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"help",permalink:"/bot/reference/telegram/info/start"},next:{title:"nftcollection",permalink:"/bot/reference/telegram/nft/nftcollection"}},s={},f=[],m={toc:f},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nft"},"nft"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"nftcollection",description:"This command retrieves a collection of Non-Fungible Token (NFT) data associated with the specified slug. It...",url:"/bot/reference/telegram/nft/nftcollection",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"nfttop",description:"This command allows users to retrieve the top NFT collections from Ethereum. It provides a list of the most...",url:"/bot/reference/telegram/nft/nfttop",mdxType:"ReferenceCard"})))}d.isMDXComponent=!0}}]);
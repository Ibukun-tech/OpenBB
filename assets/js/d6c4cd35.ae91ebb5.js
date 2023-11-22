"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},51271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"Single widget",sidebar_position:1,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},d=void 0,s={unversionedId:"pro/main-menu/data-connectors/single-widget",id:"pro/main-menu/data-connectors/single-widget",title:"Single widget",description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",source:"@site/content/pro/main-menu/data-connectors/single-widget.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/single-widget",permalink:"/pro/main-menu/data-connectors/single-widget",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/single-widget.md",tags:[],version:"current",lastUpdatedBy:"Luqman",lastUpdatedAt:1700659065,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Single widget",sidebar_position:1,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pro/main-menu/data-connectors/"},next:{title:"Integrate your own backend",permalink:"/pro/main-menu/data-connectors/integrate-your-own-backend"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Single Widget | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The single widget is the most straightforward method to integrate your custom data into OpenBB Terminal Pro. Simply paste your API endpoint into the data connectors tab, and voila! Your data is fetched and displayed in a user-friendly table format."),(0,a.kt)("p",null,"To use this feature, input your API endpoint and any necessary connection information. The widget will then dynamically load and present your data within the Terminal Pro interface."),(0,a.kt)("p",null,"If your endpoint requires additional headers, don't worry. You can easily add them using the '+ Add Additional Headers' button."),(0,a.kt)("p",null,'In addition, if your API endpoint doesn\'t return a a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.'),(0,a.kt)("p",null,"If you want to do something more custom, you should look into creating ",(0,a.kt)("a",{parentName:"p",href:"/pro/main-menu/data-connectors/integrate-your-own-backend"},"your own backend"),", or reach out to OpenBB for support."))}m.isMDXComponent=!0}}]);